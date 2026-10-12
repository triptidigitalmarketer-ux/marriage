import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle, ShieldCheck } from "lucide-react";
import { submitEnquiry } from "@/lib/api";
import { trackEvent, EVENTS } from "@/lib/analytics";

const LOCATIONS = ["Delhi", "Noida", "Ghaziabad", "Greater Noida", "Faridabad", "Gurugram", "Other"];
const SERVICES = [
    "Urgent Court Marriage Guidance",
    "Special Marriage Act",
    "Existing Marriage Registration",
    "Interfaith Marriage Guidance",
    "Document Verification",
    "Other",
];
const METHODS = ["Phone", "WhatsApp", "Online Consultation"];
const TIMES = ["Anytime", "Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"];

const empty = {
    name: "", phone: "", email: "", city: "", service: "",
    contact_method: "Phone", contact_time: "Anytime", message: "", consent: false, company: "",
};

export default function ConsultationForm({ compact = false, defaultCity = "", testidPrefix = "consultation" }) {
    const [form, setForm] = useState({ ...empty, city: defaultCity });
    const [errors, setErrors] = useState({});
    const [state, setState] = useState("idle");
    const [reference, setReference] = useState("");
    const [serverError, setServerError] = useState("");

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const validate = () => {
        const er = {};
        if (form.name.trim().length < 2) er.name = "Please enter your full name";
        const digits = form.phone.replace(/\D/g, "").replace(/^(91|0)/, "");
        if (!/^([6-9]\d{9})$/.test(digits)) er.phone = "Enter a valid 10-digit mobile number";
        if (form.email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim()))
            er.email = "Enter a valid email address (or leave it blank)";
        if (!form.city) er.city = "Please select your preferred location";
        if (!form.service) er.service = "Please select the service you need";
        if (!form.consent) er.consent = "Your consent is required so we can contact you";
        return er;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const er = validate();
        setErrors(er);
        if (Object.keys(er).length) return;
        setState("sending");
        setServerError("");
        try {
            const data = await submitEnquiry({ ...form, source: "consultation" });
            setReference(data.reference || "");
            setState("done");
            trackEvent(EVENTS.FORM, { source: "consultation" });
        } catch (err) {
            setState("error");
            setServerError(
                err?.response?.status === 429
                    ? "You have sent several requests in a short time. Please try again in a few minutes."
                    : "Something went wrong while sending your request. Please call or WhatsApp us instead."
            );
        }
    };

    if (state === "done") {
        return (
            <div className="rounded-md border border-wa-deep/40 bg-wa-deep/5 p-5" role="status" data-testid={`${testidPrefix}-success-panel`}>
                <CheckCircle2 className="h-7 w-7 text-[var(--green-deep)]" />
                <h3 className="mt-2 text-base font-bold text-ink">Your consultation request has been received.</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                    Reference <strong>{reference}</strong> — we will contact you by{" "}
                    {form.contact_method.toLowerCase()} ({form.contact_time.toLowerCase()}) on the
                    details you provided. For anything urgent, call or WhatsApp us right away.
                </p>
            </div>
        );
    }

    const labelCls = compact
        ? "mb-1 block text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]"
        : "field-label";
    const inputCls = "field-input";

    return (
        <form onSubmit={onSubmit} noValidate data-testid={`${testidPrefix}-form`}>
            <div className={`grid gap-3.5 ${compact ? "" : "sm:grid-cols-2"}`}>
                <div>
                    <label htmlFor={`${testidPrefix}-name`} className={labelCls}>Full Name *</label>
                    <input id={`${testidPrefix}-name`} className={inputCls} value={form.name} onChange={set("name")} placeholder="Your full name" autoComplete="name" data-testid={`${testidPrefix}-name-input`} />
                    {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-phone`} className={labelCls}>Mobile Number *</label>
                    <input id={`${testidPrefix}-phone`} className={inputCls} value={form.phone} onChange={set("phone")} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" data-testid={`${testidPrefix}-phone-input`} />
                    {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
                </div>
                <div className={compact ? "" : "sm:col-span-2"}>
                    <label htmlFor={`${testidPrefix}-email`} className={labelCls}>Email (optional)</label>
                    <input id={`${testidPrefix}-email`} className={inputCls} value={form.email} onChange={set("email")} placeholder="you@example.com" inputMode="email" autoComplete="email" data-testid={`${testidPrefix}-email-input`} />
                    {errors.email && <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-location`} className={labelCls}>Preferred Location *</label>
                    <select id={`${testidPrefix}-location`} className={inputCls} value={form.city} onChange={set("city")} data-testid={`${testidPrefix}-location-select`}>
                        <option value="">Select location</option>
                        {LOCATIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.city && <p className="mt-1 text-xs font-medium text-red-600">{errors.city}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-service`} className={labelCls}>Service Required *</label>
                    <select id={`${testidPrefix}-service`} className={inputCls} value={form.service} onChange={set("service")} data-testid={`${testidPrefix}-service-select`}>
                        <option value="">Select service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1 text-xs font-medium text-red-600">{errors.service}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-method`} className={labelCls}>Preferred Contact Method *</label>
                    <select id={`${testidPrefix}-method`} className={inputCls} value={form.contact_method} onChange={set("contact_method")} data-testid={`${testidPrefix}-method-select`}>
                        {METHODS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-time`} className={labelCls}>Preferred Contact Time</label>
                    <select id={`${testidPrefix}-time`} className={inputCls} value={form.contact_time} onChange={set("contact_time")} data-testid={`${testidPrefix}-time-select`}>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                <div className={compact ? "" : "sm:col-span-2"}>
                    <label htmlFor={`${testidPrefix}-message`} className={labelCls}>Brief Requirement</label>
                    <textarea id={`${testidPrefix}-message`} className={`${inputCls} min-h-[80px] resize-y`} value={form.message} onChange={set("message")} placeholder="Religions of both partners, marriage already performed or planned, your timeline…" data-testid={`${testidPrefix}-message-input`} />
                </div>
            </div>

            {/* Honeypot — hidden from humans */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor={`${testidPrefix}-company`}>Company</label>
                <input id={`${testidPrefix}-company`} tabIndex={-1} autoComplete="off" value={form.company} onChange={set("company")} />
            </div>

            <div className="mt-4">
                <label className="flex cursor-pointer items-start gap-2.5" data-testid={`${testidPrefix}-consent-label`}>
                    <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="mt-0.5 h-4 w-4 accent-[var(--amber)]"
                        data-testid={`${testidPrefix}-consent-checkbox`}
                    />
                    <span className="text-[13px] leading-relaxed text-ink/80">
                        I agree to be contacted by {`Court Marriage Help`} about this consultation
                        request, by my preferred contact method. See our{" "}
                        <a href="/privacy-policy" className="link-ink text-[13px]">Privacy Policy</a>.
                    </span>
                </label>
                {errors.consent && <p className="mt-1 text-xs font-medium text-red-600">{errors.consent}</p>}
            </div>

            {state === "error" && (
                <p className="mt-4 flex items-start gap-2 rounded-md bg-red-50 px-3 py-2.5 text-sm font-medium text-red-700" role="alert" data-testid={`${testidPrefix}-error-message`}>
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {serverError}
                </p>
            )}

            <button type="submit" disabled={state === "sending"} className="btn btn-amber mt-5 w-full disabled:opacity-60" data-testid={`${testidPrefix}-submit-button`}>
                {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                Request a Consultation
            </button>
            <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
                <ShieldCheck className="h-3.5 w-3.5" /> Your details are used only to respond to this request.
            </p>
        </form>
    );
}
