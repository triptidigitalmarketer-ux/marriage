import { useState } from "react";
import { CheckCircle2, Loader2, PhoneCall, AlertCircle } from "lucide-react";
import { CITY_OPTIONS } from "@/lib/site";
import { submitEnquiry } from "@/lib/api";
import { trackEvent, EVENTS } from "@/lib/analytics";

const empty = { name: "", phone: "", city: "", service: "Not sure — need guidance", message: "", company: "" };

export default function CallbackForm({ source = "callback", dark = false, testidPrefix = "callback" }) {
    const [form, setForm] = useState(empty);
    const [errors, setErrors] = useState({});
    const [state, setState] = useState("idle");
    const [serverError, setServerError] = useState("");

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        const er = {};
        if (form.name.trim().length < 2) er.name = "Please enter your name";
        const digits = form.phone.replace(/\D/g, "").replace(/^(91|0)/, "");
        if (!/^([6-9]\d{9})$/.test(digits)) er.phone = "Enter a valid 10-digit mobile number";
        if (!form.city) er.city = "Select your city";
        setErrors(er);
        if (Object.keys(er).length) return;
        setState("sending");
        try {
            await submitEnquiry({ ...form, source });
            setState("done");
            trackEvent(EVENTS.CALLBACK, { source });
        } catch (err) {
            setState("error");
            setServerError("Could not send your request. Please call or WhatsApp us instead.");
        }
    };

    if (state === "done") {
        return (
            <div className="rounded-md border border-wa-deep/40 bg-wa-deep/5 p-4" role="status" data-testid={`${testidPrefix}-success-panel`}>
                <p className="flex items-start gap-2 text-sm font-semibold text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--green-deep)]" />
                    Callback requested — we will call {form.phone} as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate data-testid={`${testidPrefix}-form`}>
            <div className="grid gap-3">
                <div>
                    <label htmlFor={`${testidPrefix}-name`} className={`block text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-[var(--muted)]"}`}>Name *</label>
                    <input id={`${testidPrefix}-name`} className="field-input" value={form.name} onChange={set("name")} placeholder="Your name" autoComplete="name" data-testid={`${testidPrefix}-name-input`} />
                    {errors.name && <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-phone`} className={`block text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-[var(--muted)]"}`}>Phone *</label>
                    <input id={`${testidPrefix}-phone`} className="field-input" value={form.phone} onChange={set("phone")} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" data-testid={`${testidPrefix}-phone-input`} />
                    {errors.phone && <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
                </div>
                <div>
                    <label htmlFor={`${testidPrefix}-city`} className={`block text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-[var(--muted)]"}`}>City *</label>
                    <select id={`${testidPrefix}-city`} className="field-input" value={form.city} onChange={set("city")} data-testid={`${testidPrefix}-city-select`}>
                        <option value="">Select city</option>
                        {CITY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.city && <p className="mt-1 text-xs font-medium text-red-600">{errors.city}</p>}
                </div>
            </div>

            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor={`${testidPrefix}-company`}>Company</label>
                <input id={`${testidPrefix}-company`} tabIndex={-1} autoComplete="off" value={form.company} onChange={set("company")} />
            </div>

            {state === "error" && (
                <p className="mt-3 flex items-start gap-2 rounded-md bg-red-50 px-3 py-2 text-xs font-medium text-red-700" role="alert" data-testid={`${testidPrefix}-error-message`}>
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {serverError}
                </p>
            )}

            <button type="submit" disabled={state === "sending"} className="btn btn-ink mt-4 w-full disabled:opacity-60" data-testid={`${testidPrefix}-submit-button`}>
                {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <PhoneCall className="h-4 w-4" />}
                Get a Call Back
            </button>
        </form>
    );
}
