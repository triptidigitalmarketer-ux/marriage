import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { Seo } from "@/lib/seo";
import { SITE } from "@/lib/site";

export default function NotFound() {
    return (
        <>
            <Seo
                title="Page Not Found | Court Marriage Help"
                description="The page you are looking for does not exist. Browse our court marriage guides for Delhi NCR or contact us directly."
                path="/404"
            />
            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 flex min-h-[60vh] flex-col items-start justify-center py-24" data-testid="not-found-page">
                    <p className="eyebrow text-[var(--amber)]">404 — page not found</p>
                    <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                        That page doesn't exist — your marriage route still does
                    </h1>
                    <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/75">
                        Try one of our guides below, or just call — the first consultation is
                        free.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link to="/" className="btn btn-amber" data-testid="not-found-home-link">
                            Go Home
                        </Link>
                        <a href={SITE.phoneHref} className="btn btn-ghost-light" data-testid="not-found-call-button">
                            <Phone className="h-4 w-4" /> Call Now
                        </a>
                        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-testid="not-found-whatsapp-button">
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                        </a>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-white/70">
                        {[
                            { l: "Court Marriage Process in Delhi", t: "/court-marriage-process-delhi" },
                            { l: "Documents Required", t: "/court-marriage-documents" },
                            { l: "Fees & Charges", t: "/court-marriage-fees-delhi" },
                            { l: "Our Services", t: "/our-services" },
                            { l: "FAQ", t: "/faq" },
                        ].map((x) => (
                            <Link key={x.t} to={x.t} className="link-ink" data-testid={`not-found-link-${x.t.replace(/\//g, "")}`}>
                                {x.l}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
