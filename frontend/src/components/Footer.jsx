import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { SITE, NAV } from "@/lib/site";
import { trackEvent, EVENTS } from "@/lib/analytics";

export default function Footer() {
    return (
        <footer className="bg-ink text-white/70 grain">
            <div className="container-x relative z-10 grid gap-10 py-14 md:grid-cols-12">
                <div className="md:col-span-4">
                    <Logo light />
                    <p className="mt-4 max-w-xs text-sm leading-relaxed">
                        Documentation assistance, consultation and appointment support for court
                        marriage and marriage registration across Delhi NCR.
                    </p>
                    <div className="mt-5 flex gap-2.5">
                        <a
                            href={SITE.phoneHref}
                            onClick={() => trackEvent(EVENTS.CALL, { location: "footer" })}
                            className="btn btn-amber !px-4 !py-2.5"
                            data-testid="footer-call-now-button"
                        >
                            <Phone className="h-4 w-4" /> Call Now
                        </a>
                        <a
                            href={SITE.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent(EVENTS.WHATSAPP, { location: "footer" })}
                            className="btn btn-wa !px-4 !py-2.5"
                            data-testid="footer-whatsapp-button"
                        >
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                        </a>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--amber)]">Company</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {[
                            { l: "Home", t: "/" },
                            { l: "About Us", t: "/about-us" },
                            { l: "Our Services", t: "/our-services" },
                            { l: "Contact Us", t: "/contact-us" },
                            { l: "FAQ", t: "/faq" },
                        ].map((x) => (
                            <li key={x.t}>
                                <Link to={x.t} data-testid={`footer-link-${x.t.replace(/\//g, "") || "home"}`} className="transition-colors duration-200 hover:text-white">
                                    {x.l}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--amber)]">Services</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {NAV.services.map((x) => (
                            <li key={x.to}>
                                <Link to={x.to} data-testid={`footer-link-${x.to.replace(/\//g, "")}`} className="transition-colors duration-200 hover:text-white">
                                    {x.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--amber)]">Locations</h3>
                    <ul className="mt-4 space-y-2.5 text-sm">
                        {NAV.locations.map((x) => (
                            <li key={x.to}>
                                <Link to={x.to} data-testid={`footer-link-${x.to.replace(/\//g, "")}`} className="transition-colors duration-200 hover:text-white">
                                    {x.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-x flex flex-col gap-3 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Court Marriage Help. All rights reserved.</p>
                    <p className="max-w-xl">
                        Court Marriage Help is an independent legal consultancy. It is not a
                        government portal and is not affiliated with any government body.
                    </p>
                    <p className="flex gap-4">
                        <Link to="/privacy-policy" data-testid="footer-link-privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" data-testid="footer-link-terms" className="hover:text-white">Terms</Link>
                        <Link to="/legal-disclaimer" data-testid="footer-link-disclaimer" className="hover:text-white">Disclaimer</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
