import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackEvent, EVENTS } from "@/lib/analytics";

export default function StickyCTA() {
    return (
        <>
            {/* Mobile sticky bottom bar */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink p-2 shadow-2xl md:hidden"
                data-testid="mobile-sticky-cta-bar"
            >
                <a
                    href={SITE.phoneHref}
                    onClick={() => trackEvent(EVENTS.CALL, { location: "sticky-bar" })}
                    className="btn btn-amber"
                    data-testid="sticky-call-now-button"
                >
                    <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent(EVENTS.WHATSAPP, { location: "sticky-bar" })}
                    className="btn btn-wa"
                    data-testid="sticky-whatsapp-button"
                >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
            </div>

            {/* Desktop floating WhatsApp */}
            <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(EVENTS.WHATSAPP, { location: "floating" })}
                className="group fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 md:flex"
                aria-label="Chat with us on WhatsApp"
                data-testid="floating-whatsapp-button"
            >
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-ink opacity-0 transition-all duration-300 group-hover:max-w-[240px] group-hover:opacity-100">
                    Need urgent legal guidance? Chat on WhatsApp
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green-deep)] text-white shadow-xl">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[var(--green-deep)] opacity-25" />
                    <MessageCircle className="relative h-6 w-6" />
                </span>
            </a>
        </>
    );
}
