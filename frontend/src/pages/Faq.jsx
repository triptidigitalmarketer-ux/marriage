import { Link } from "react-router-dom";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS_PAGE } from "@/data/faq";
import { SITE } from "@/lib/site";

export default function Faq() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS_PAGE.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <>
            <Seo
                title="Court Marriage FAQs — Delhi NCR | Court Marriage Help"
                description="Answers to common court marriage questions in Delhi NCR — notice periods, witnesses, documents, interfaith marriages, registration timelines and honest fee expectations."
                path="/faq"
                jsonLd={jsonLd}
            />

            <section className="bg-[var(--paper)] text-ink grain">
                <div className="container-x relative z-10 pb-16 pt-14 sm:pb-20 sm:pt-20">
                    <p className="eyebrow text-[var(--amber-deep)]">Frequently asked questions</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        Court marriage questions, answered honestly
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        General legal information for Delhi NCR — for case-specific advice,
                        consult a qualified legal professional.
                    </p>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <Reveal>
                            <div className="rounded-md border border-[var(--line)] bg-[var(--card)] px-5 py-1" data-testid="faq-page-accordion">
                                <FaqAccordion items={FAQS_PAGE} testidPrefix="faq-page" />
                            </div>
                        </Reveal>
                    </div>
                    <aside className="lg:col-span-4">
                        <Reveal delay={0.1}>
                            <div className="card-file card-tab p-6" data-testid="faq-side-card">
                                <h2 className="text-lg font-bold text-ink">Still unsure?</h2>
                                <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                                    A ten-minute call settles your route, documents and honest
                                    timeline. The first consultation is free.
                                </p>
                                <a href={SITE.phoneHref} className="btn btn-amber mt-4 w-full" data-testid="faq-call-button">
                                    Call {SITE.phoneDisplay}
                                </a>
                                <h3 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--label)]">Popular guides</h3>
                                <ul className="mt-3 space-y-2 text-[13px] font-semibold">
                                    {[
                                        { l: "Court Marriage Process in Delhi", t: "/court-marriage-process-delhi" },
                                        { l: "Documents Required", t: "/court-marriage-documents" },
                                        { l: "Fees & Charges in Delhi", t: "/court-marriage-fees-delhi" },
                                        { l: "Special Marriage Act, 1954", t: "/special-marriage-act" },
                                    ].map((x) => (
                                        <li key={x.t}>
                                            <Link to={x.t} className="link-ink" data-testid={`faq-guide-${x.t.replace(/\//g, "")}`}>{x.l}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </aside>
                </div>
            </section>
        </>
    );
}
