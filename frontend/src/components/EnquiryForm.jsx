import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { CITY_OPTIONS, SERVICE_OPTIONS } from "@/lib/site";
import { submitEnquiry } from "@/lib/api";
import { trackEvent, EVENTS } from "@/lib/analytics";

const empty = { name: "", phone: "", city: "", service: "", message: "", company: "" };

export default function EnquiryForm({ source = "enquiry", dark = false, testidPrefix = "enquiry" }) {
    const [form, setForm] = useState(empty);
    const [errors, setErrors] = useState({});
    const [state, setState] = useState("idle"); // idle | sending | done | error
    const [reference, setReference] = useState("");
    const [serverError, setServerError] = useState("");

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const validate = () => {
        const er = {};
        if (form.name.trim().length < 2) er.name = "Please enter your name";
        const digits = form.phone.replace(/\D/g, "").replace(/^(91|0)/, "");
        if (!/^([6-9]\d{9})$/.test(digits)) er.phone = "Enter a valid 10-digit mobile number";
        if (!form.city) er.city = "Please select your city";
        if (!form.service) er.service = "Please select a service";
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
            const data = await submitEnquiry({ ...form, source });
            setReference(data.reference || "");
            setState("done");
            trackEvent(EVENTS.FORM, { source });
        } catch (err) {
            setState("error");
            setServerError(
                err?.response?.status === 429
                    ? "You have sent several enquiries in a short time. Please try again in a few minutes."
                    : "Something went wrong while sending your enquiry. Please call or WhatsApp us instead."
            );
        }
    };

    if (state === "done") {
        return (
            <div
                className={`rounded-lg border p-6 ${dark ? "border-white/20 bg-white/10 text-white" : "border-wa-deep/40 bg-wa-deep/5 text-ink"}`}
                data-testid={`${testidPrefix}-success-panel`}
                role="status"
            >
                <CheckCircle2 className="h-8 w-8 text-[var(--green-deep)]" />
                <h3 className="mt-3 text-lg font-bold">Thank you — your enquiry has been received.</h3>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/80" : "text-[var(--muted)]"}`}>
                    Our reference for your request is <strong>{reference}</strong>. A consultant
                    will call you back on the number provided. For urgent matters, call or
                    WhatsApp us directly.
                    <br />
                    <span className="opacity-80">अपने प्रश्नों के लिए हमें कॉल या WhatsApp करें।</span>
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate data-testid={`${testidPrefix}-form`}>
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${testidPrefix}-name`} className="field-label">Name *</label>
                    <input
                        id={`${testidPrefix}-name`}
                        className="field-input"
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Your full name"
                        autoComplete="name"
                        data-testid={`${testidPrefix}-name-input`}
                    />
                    {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-phone`} className="field-label">Phone number *</label>
                    <input
                        id={`${testidPrefix}-phone`}
                        className="field-input"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="10-digit mobile number"
                        inputMode="tel"
                        autoComplete="tel"
                        data-testid={`${testidPrefix}-phone-input`}
                    />
                    {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-city`} className="field-label">City *</label>
                    <select
                        id={`${testidPrefix}-city`}
                        className="field-input"
                        value={form.city}
                        onChange={set("city")}
                        data-testid={`${testidPrefix}-city-select`}
                    >
                        <option value="">Select your city</option>
                        {CITY_OPTIONS.map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                    {errors.city && <p className="mt-1 text-xs font-medium text-red-600">{errors.city}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-service`} className="field-label">Service required *</label>
                    <select
                        id={`${testidPrefix}-service`}
                        className="field-input"
                        value={form.service}
                        onChange={set("service")}
                        data-testid={`${testidPrefix}-service-select`}
                    >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs font-medium text-red-600">{errors.service}</p>}
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor={`${testidPrefix}-message`} className="field-label">Message (optional)</label>
                    <textarea
                        id={`${testidPrefix}-message`}
                        className="field-input min-h-[88px] resize-y"
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Briefly describe your situation — religion of both partners, marriage already performed or planned, preferred timeline…"
                        data-testid={`${testidPrefix}-message-input`}
                    />
                </div>
            </div>

            {/* Honeypot — hidden from humans */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor={`${testidPrefix}-company`}>Company</label>
                <input id={`${testidPrefix}-company`} tabIndex={-1} autoComplete="off" value={form.company} onChange={set("company")} />
            </div>

            {state === "error" && (
                <p className="mt-4 flex items-start gap-2 rounded-md bg-red-50 px-3 py-2.5 text-sm font-medium text-red-700" role="alert" data-testid={`${testidPrefix}-error-message`}>
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {serverError}
                </p>
            )}

            <button
                type="submit"
                disabled={state === "sending"}
                className="btn btn-amber mt-5 w-full disabled:opacity-60 sm:w-auto"
                data-testid={`${testidPrefix}-submit-button`}
            >
                {state === "sending" ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                ) : (
                    <>
                        <Send className="h-4 w-4" /> Request a Callback
                    </>
                )}
            </button>
            <p className={`mt-3 text-xs leading-relaxed ${dark ? "text-white/50" : "text-[var(--muted)]"}`}>
                We use your details only to respond to this enquiry. See our Privacy Policy.
            </p>
        </form>
    );
}
