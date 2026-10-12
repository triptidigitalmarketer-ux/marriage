import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import { initAnalytics } from "@/lib/analytics";

const KEY = "cmh-consent";

export default function CookieConsent() {
    const [choice, setChoice] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem(KEY);
        if (saved === "accepted") initAnalytics();
        else setChoice(saved); // null | declined
    }, []);

    if (choice) return null;

    return (
        <div
            className="fixed bottom-20 left-4 right-4 z-[70] rounded-lg border border-[var(--line)] bg-[var(--card)] p-4 shadow-2xl md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
            role="dialog"
            aria-label="Analytics consent"
            data-testid="cookie-consent-banner"
        >
            <p className="text-[13px] leading-relaxed text-ink">
                We use cookies for anonymous traffic analytics to improve this site. Do you
                consent? Details in our <a href="/privacy-policy" className="link-ink">Privacy Policy</a>.
            </p>
            <div className="mt-3 flex gap-2">
                <button
                    className="btn btn-ink !px-4 !py-2 text-xs"
                    onClick={() => {
                        localStorage.setItem(KEY, "accepted");
                        initAnalytics();
                        setChoice("accepted");
                    }}
                    data-testid="consent-accept-button"
                >
                    <Check className="h-3.5 w-3.5" /> Accept
                </button>
                <button
                    className="btn btn-ghost-ink !px-4 !py-2 text-xs"
                    onClick={() => {
                        localStorage.setItem(KEY, "declined");
                        setChoice("declined");
                    }}
                    data-testid="consent-decline-button"
                >
                    <X className="h-3.5 w-3.5" /> Decline
                </button>
            </div>
        </div>
    );
}
