import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, AlertCircle } from "lucide-react";
import { Seo, SITE_URL_CONFIGURED } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import CallbackForm from "@/components/CallbackForm";
import ConsultationForm from "@/components/ConsultationForm";
import { SITE } from "@/lib/site";

export function Blocks({ blocks }) {
    return blocks.map((b, i) => {
        switch (b.t) {
            case "h2":
                return (
                    <h2 key={i} className="mt-12 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                        {b.text}
                    </h2>
                );
            case "p":
                return (
                    <p key={i} className="mt-4 text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        {b.text}
                    </p>
                );
            case "list":
                return (
                    <ul key={i} className="mt-4 space-y-2.5">
                        {b.items.map((it, j) => (
                            <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--amber)]" />
                                {it}
                            </li>
                        ))}
                    </ul>
                );
            case "links":
                return (
                    <ul key={i} className="mt-4 space-y-2">
                        {b.items.map((l) => (
                            <li key={l.to}>
                                <Link to={l.to} className="link-ink text-sm" data-testid={`info-link-${l.to.replace(/\//g, "")}`}>
                                    {l.label} <ArrowRight className="inline h-3.5 w-3.5" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                );
            case "steps":
                return (
                    <ol key={i} className="mt-6 space-y-0 border-l border-dashed border-[var(--line-strong)]">
                        {b.items.map((s, j) => (
                            <li key={j} className="relative pb-6 pl-6 last:pb-0">
                                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--amber)] bg-[var(--paper)]" />
                                <p className="text-[15px] font-bold text-ink">{s.h}</p>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{s.d}</p>
                            </li>
                        ))}
                    </ol>
                );
            case "table":
                return (
                    <div key={i} className="mt-6 overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--card)]">
                        <table className="w-full min-w-[560px] text-left text-sm">
                            <thead>
                                <tr className="border-b border-[var(--line)] bg-ink text-white">
                                    {b.head.map((h, j) => (
                                        <th key={j} className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {b.rows.map((row, j) => (
                                    <tr key={j} className="border-b border-[var(--line)] last:border-0">
                                        {row.map((cell, k) => (
                                            <td key={k} className={`px-4 py-3 ${k === 0 ? "font-semibold text-ink" : "text-[var(--muted)]"}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "note":
                return (
                    <div key={i} className="mt-6 flex gap-3 rounded-md border border-gold/40 bg-gold-soft/60 p-4" data-testid="info-note">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--amber-deep)]" />
                        <p className="text-sm leading-relaxed text-ink/85">{b.text}</p>
                    </div>
                );
            default:
                return null;
        }
    });
}

/**
 * Shared template for location + service SEO pages, driven by data files.
 * formVariant: "callback" (default) or "consultation" (full consultation form in sidebar).
 * data.consultationSection: renders a full consultation form section in the article column.
 */
export default function InfoPage({ data, kind, formVariant = "callback" }) {
    const path = "/" + data.slug;
    const absUrl = SITE_URL_CONFIGURED ? `${SITE_URL_CONFIGURED}${path}` : undefined;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": kind === "location" ? "Service" : "WebPage",
                name: data.h1,
                description: data.metaDesc,
                url: absUrl,
            },
            {
                "@type": "FAQPage",
                mainEntity: data.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_CONFIGURED ? `${SITE_URL_CONFIGURED}/` : undefined },
                    { "@type": "ListItem", position: 2, name: data.city || data.h1, item: absUrl },
                ],
            },
        ],
    };

    return (
        <>
            <Seo title={data.metaTitle} description={data.metaDesc} path={path} jsonLd={jsonLd} />

            {/* Hero */}
            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 pb-16 pt-10 sm:pb-20 sm:pt-14">
                    <Breadcrumbs
                        items={[
                            { label: "Home", to: "/" },
                            { label: kind === "location" ? "Locations" : "Services", to: kind === "location" ? "/court-marriage-delhi" : "/our-services" },
                            { label: data.city || data.h1 },
                        ]}
                    />
                    <p className="eyebrow mt-8 text-[var(--amber)]">{data.kicker}</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        {data.h1}
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                        {data.intro}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                        <a href={SITE.phoneHref} className="btn btn-amber" data-testid={`${data.slug}-call-now-button`}>
                            <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                        </a>
                        <a
                            href={SITE.whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost-light"
                            data-testid={`${data.slug}-whatsapp-button`}
                        >
                            <MessageCircle className="h-4 w-4" /> WhatsApp Us
                        </a>
                        <Link to="/contact-us" className="btn btn-ghost-light" data-testid={`${data.slug}-book-consultation-button`}>
                            Book a Consultation
                        </Link>
                    </div>

                    {data.glance && data.glance.length > 0 && (
                        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4" data-testid={`${data.slug}-glance-grid`}>
                            {data.glance.map((g, i) => (
                                <div key={i} className="bg-ink p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--amber)]">{g.k}</p>
                                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/85">{g.v}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Body */}
            <section className="container-x pb-4 pt-14">
                <div className="grid gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-8">
                        <article data-testid={`${data.slug}-content`}>
                            <Blocks blocks={data.blocks} />

                            {data.consultationSection && (
                                <div className="mt-12 rounded-md border border-[var(--line)] bg-[var(--card)] p-6 sm:p-8" data-testid={`${data.slug}-consultation-section`}>
                                    <h2 className="text-xl font-black tracking-tight text-ink sm:text-2xl">Book your free consultation</h2>
                                    <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted)]">
                                        Tell us your situation and preferred time — we will reach out
                                        by phone, WhatsApp or online consultation, as you choose.
                                    </p>
                                    <div className="mt-5">
                                        <ConsultationForm testidPrefix={`${data.slug}-consultation`} />
                                    </div>
                                </div>
                            )}

                            <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                {kind === "location" ? `Questions people in ${data.city} ask` : "Frequently asked questions"}
                            </h2>
                            <div className="mt-4 rounded-md border border-[var(--line)] bg-[var(--card)] px-5 py-1">
                                <FaqAccordion items={data.faqs} testidPrefix={`${data.slug}-faq`} />
                            </div>
                        </article>
                    </Reveal>

                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <Reveal delay={0.1}>
                                <div className="card-file card-tab p-6" data-testid={`${data.slug}-callback-card`}>
                                    <h3 className="text-lg font-bold text-ink">
                                        {formVariant === "consultation" ? "Book a consultation" : "Request a callback"}
                                    </h3>
                                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">
                                        Free first consultation — route, documents and realistic timeline for {data.city || "your case"}.
                                    </p>
                                    <div className="mt-4">
                                        {formVariant === "consultation" ? (
                                            <ConsultationForm compact testidPrefix={`${data.slug}-side-consultation`} />
                                        ) : (
                                            <CallbackForm testidPrefix={`${data.slug}-callback`} />
                                        )}
                                    </div>
                                    <p className="mt-4 border-t border-[var(--line)] pt-3 text-[11px] leading-relaxed text-[var(--muted)]">
                                        Prefer to talk now? Call or WhatsApp — same number.
                                    </p>
                                    <div className="mt-3 grid grid-cols-2 gap-2">
                                        <a href={SITE.phoneHref} className="btn btn-amber !px-3 !py-2.5 text-xs" data-testid={`${data.slug}-side-call-button`}>
                                            <Phone className="h-3.5 w-3.5" /> Call
                                        </a>
                                        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa !px-3 !py-2.5 text-xs" data-testid={`${data.slug}-side-whatsapp-button`}>
                                            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Related pages</h3>
                                    <ul className="mt-3 space-y-2">
                                        {data.related.map((r) => (
                                            <li key={r.to}>
                                                <Link to={r.to} className="group flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[13px] font-semibold text-ink transition-colors duration-200 hover:border-gold/60" data-testid={`${data.slug}-related-${r.to.replace(/\//g, "")}`}>
                                                    {r.label}
                                                    <ArrowRight className="h-3.5 w-3.5 text-[var(--amber)] transition-transform duration-200 group-hover:translate-x-0.5" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}
