import os
import re
import time
import uuid
import logging
from datetime import datetime, timezone
from typing import Optional, List
from pathlib import Path
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
import ipaddress

from dotenv import load_dotenv
import httpx
from bson import ObjectId
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator, field_validator
from typing_extensions import Annotated
from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

MONGO_URL = os.environ['MONGO_URL']
DB_NAME = os.environ['DB_NAME']
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO") or None
ENQUIRY_EMAIL = os.environ.get("ENQUIRY_EMAIL") or None
ADMIN_KEY = os.environ.get("ADMIN_KEY") or None

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger("court-marriage-help")

api_router = APIRouter(prefix="/api")

# ---------- Mongo document helpers (ObjectId -> str) ----------

def _coerce_objectid(v):
    return str(v) if isinstance(v, ObjectId) else v

PyObjectId = Annotated[str, BeforeValidator(_coerce_objectid)]

class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="ignore")
    id: PyObjectId = Field(default_factory=lambda: str(ObjectId()), alias="_id")

    def to_mongo(self) -> dict:
        return self.model_dump(by_alias=True)

    @classmethod
    def from_mongo(cls, doc):
        if not doc:
            return None
        return cls(**doc)

# ---------- Models ----------

CITIES = ["Delhi", "Noida", "Ghaziabad", "Greater Noida", "Gurugram", "Faridabad", "Other"]
SERVICES = [
    "Court marriage (Special Marriage Act)",
    "Marriage registration of an existing marriage",
    "Interfaith court marriage guidance",
    "Online application assistance",
    "Document preparation",
    "Urgent / priority appointment help",
    "Not sure — need guidance",
]

class Enquiry(BaseDocument):
    name: str
    phone: str
    city: str
    service: str
    message: Optional[str] = ""
    source: str = "enquiry"
    status: str = "new"
    reference: str = Field(default_factory=lambda: "CMH-" + uuid.uuid4().hex[:8].upper())
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class EnquiryIn(BaseModel):
    name: str
    phone: str
    city: str
    service: str
    message: Optional[str] = ""
    source: str = "enquiry"
    company: Optional[str] = ""  # honeypot

    @field_validator("name")
    @classmethod
    def v_name(cls, v):
        v = (v or "").strip()
        if len(v) < 2 or len(v) > 80:
            raise ValueError("Please enter your full name")
        return v

    @field_validator("phone")
    @classmethod
    def v_phone(cls, v):
        d = re.sub(r"\D", "", v or "")
        if d.startswith("91") and len(d) == 12:
            d = d[2:]
        if d.startswith("0") and len(d) == 11:
            d = d[1:]
        if len(d) != 10 or d[0] not in "6789":
            raise ValueError("Please enter a valid 10-digit Indian mobile number")
        return "+91 " + d

    @field_validator("city")
    @classmethod
    def v_city(cls, v):
        v = (v or "").strip()
        if v not in CITIES:
            raise ValueError("Please select a city")
        return v

    @field_validator("service")
    @classmethod
    def v_service(cls, v):
        v = (v or "").strip()
        if v not in SERVICES:
            raise ValueError("Please select a service")
        return v

    @field_validator("message")
    @classmethod
    def v_message(cls, v):
        v = (v or "").strip()
        if len(v) > 2000:
            raise ValueError("Message is too long")
        return v

    @field_validator("source")
    @classmethod
    def v_source(cls, v):
        return v if v in ("enquiry", "callback") else "enquiry"

# ---------- Spam protection ----------

_RATE: dict = {}

def _rate_ok(ip: str) -> bool:
    now = time.time()
    window = [t for t in _RATE.get(ip, []) if now - t < 600]
    ok = len(window) < 6
    if ok:
        window.append(now)
    _RATE[ip] = window
    return ok

def _client_ip(request: Request) -> str:
    fwd = request.headers.get("x-forwarded-for")
    if fwd:
        return fwd.split(",")[0].strip()
    return request.client.host if request.client else "unknown"

# ---------- Email (Emergent managed Resend proxy) ----------

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)

def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)

def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)

class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []

def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")

async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as http_client:
            resp = await http_client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        try:
            code = e.response.json().get("code", "")
        except ValueError:
            code = ""
        if code in ("insufficient_credits", "integration_disabled", "daily_limit_reached"):
            logger.warning(f"Email paused: {code} ({e.response.status_code})")
            return None
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        return None
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        return None

def _enquiry_email_html(e: Enquiry) -> str:
    created = e.created_at[:16].replace("T", " ") + " UTC"
    rows = "".join(
        f"<tr>"
        f"<td style='padding:6px 16px 6px 0;color:#5B6B7E;font-family:Arial,sans-serif;font-size:13px'>{escape(k)}</td>"
        f"<td style='padding:6px 0;color:#0B192C;font-family:Arial,sans-serif;font-size:14px'><strong>{escape(v)}</strong></td>"
        f"</tr>"
        for k, v in [
            ("Reference", e.reference),
            ("Name", e.name),
            ("Phone", e.phone),
            ("City", e.city),
            ("Service", e.service),
            ("Message", e.message or "—"),
            ("Source", e.source),
        ]
    )
    return (
        "<table role='presentation' width='100%' cellpadding='0' cellspacing='0'>"
        f"<tr><td style='padding:24px;background:#F7F3EA'>"
        "<h2 style='margin:0 0 4px;font-family:Arial,sans-serif;color:#0B192C'>New website enquiry</h2>"
        f"<p style='margin:0 0 16px;color:#5B6B7E;font-family:Arial,sans-serif;font-size:13px'>Received {escape(created)}</p>"
        f"<table cellpadding='0' cellspacing='0' style='background:#FFFDF7;border:1px solid #E2E8F0'>{rows}</table>"
        f"<p style='font-size:12px;color:#8A94A6;margin-top:18px;font-family:Arial,sans-serif'>Sent by {escape(EMAIL_FROM_NAME)} via its own website enquiry form. We never ask for your password or card details by email.</p>"
        "</td></tr></table>"
    )

# ---------- Routes ----------

@api_router.get("/")
async def root():
    return {"service": "Court Marriage Help API", "status": "ok"}

@api_router.get("/health")
async def health():
    return {"status": "ok"}

@api_router.post("/enquiries")
async def create_enquiry(input: EnquiryIn, request: Request):
    ip = _client_ip(request)
    if not _rate_ok(ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please try again in a few minutes.")

    # Honeypot: bots filling hidden fields get a fake success and are not stored.
    if (input.company or "").strip():
        return {"success": True, "reference": "CMH-OK", "notified": False}

    enquiry = Enquiry(
        name=input.name,
        phone=input.phone,
        city=input.city,
        service=input.service,
        message=input.message,
        source=input.source,
    )
    await db.enquiries.insert_one(enquiry.to_mongo())

    notified = False
    if ENQUIRY_EMAIL:
        subject = f"New {enquiry.source} enquiry — {enquiry.city} — {enquiry.reference}"
        notified = bool(await send_email(to=ENQUIRY_EMAIL, subject=subject, html=_enquiry_email_html(enquiry)))
    else:
        logger.warning("ENQUIRY_EMAIL is not configured; enquiry stored in database only")

    return {"success": True, "reference": enquiry.reference, "notified": notified}

@api_router.get("/enquiries")
async def list_enquiries(request: Request, limit: int = 100):
    if not ADMIN_KEY or request.headers.get("x-admin-key") != ADMIN_KEY:
        raise HTTPException(status_code=401, detail="Unauthorized")
    limit = max(1, min(limit, 500))
    docs = await db.enquiries.find({}, {"_id": 0}).sort("$natural", -1).to_list(limit)
    out = []
    for d in docs:
        e = Enquiry.from_mongo(d)
        if e:
            out.append({
                "id": e.id, "reference": e.reference, "name": e.name, "phone": e.phone,
                "city": e.city, "service": e.service, "message": e.message,
                "source": e.source, "status": e.status, "created_at": e.created_at,
            })
    return {"count": len(out), "enquiries": out}

app = FastAPI(title="Court Marriage Help API")
app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
