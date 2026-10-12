import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { NAV, SITE } from "@/lib/site";

const cards = [
    { to: "/special-marriage-act", h: "Court Marriage — Special Marriage Act, 1954", d: "A civil marriage for couples of any religion: eligibility, 30-day notice, objection window, solemnization with three witnesses and the certificate." },
    { to: "/marriage-registration-delhi", h: "Registration of an Existing Marriage", d: "Your ceremony is done — temple, nikah, church, Arya Samaj or court. We file for the government certificate under the applicable rules." },
    { to: "/interfaith-court-marriage", h: "Interfaith Court Marriage", d: "Different religions, no conversion required by the SMA route. Documents, notice and practical realities handled with care." },
    { to: "/court-marriage-process-delhi", h: "Process Guidance — Delhi", d: "Step-by-step: residence, notice, appointment, solemnization or verification — who signs, who attends, what happens on the day." },
    { to: "/court-marriage-documents", h: "Documents & Affidavits", d: "Route-specific checklists for age, address, marriage evidence, photographs, affidavits and witnesses — prepared to your office's format." },
    { to: "/court-marriage-fees-delhi", h: "Fees & Charges", d: "Statutory government fees (shown on official portals) and our professional charges (fixed, quoted upfront) — kept clearly separate." },
    { to: "/online-court-marriage-application-delhi", h: "Online Application Assistance", d: "e-District Delhi, IGRS UP and e-Services Haryana applications — you remain the applicant; we prepare and guide every field." },
];

const religionWise = [
    { h: "Hindu couples", p: "Marriage solemnized under the Hindu Marriage Act, 1955 by customary or Vedic rites. The certificate comes from registering the existing marriage under the applicable state rules — in Delhi, through e-District with age, address and marriage proofs." },
    { h: "Muslim couples", p: "A nikah under Muslim personal law is a valid marriage in itself, recorded in the nikah nama. Registration then runs under the applicable state registration rules with the nikah nama, identity proofs and witnesses." },
    { h: "Christian couples", p: "Marriages are performed under the Indian Christian Marriage Act, 1872 by a licensed minister or Marriage Registrar. The certificate from registration documents the marriage for all legal purposes." },
    { h: "Couples of different religions", p: "The standard route is the Special Marriage Act, 1954 — a civil marriage with a 30-day statutory notice, three witnesses and no conversion requirement. Religious ceremonies, if wanted, can follow the civil solemnization." },
];

export default function Services() {
    return (
        <>
            <Seo
                title="Our Services — Court Marriage & Registration Delhi NCR"
                description="Court marriage under the Special Marriage Act, registration of existing marriages, interfaith guidance, documents, fees and online application assistance across Delhi NCR."
                path="/our-services"
            />

            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 pb-16 pt-14 sm:pb-20 sm:pt-20">
                    <p className="eyebrow text-[var(--amber)]">Our services</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        Everything from notice to certificate — correctly routed
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                        Documentation assistance, consultation, application guidance and
                        appointment support. Official filings always happen on government
                        portals, in your own name.
                    </p>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <div className="grid gap-4 sm:grid-cols-2">
                    {cards.map((c, i) => (
                        <Reveal key={c.to} delay={i * 0.05}>
                            <Link to={c.to} className="card-file card-tab group flex h-full flex-col p-6" data-testid={`services-card-${c.to.replace(/\//g, "")}`}>
                                <h2 className="text-lg font-bold leading-snug text-ink">{c.h}</h2>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{c.d}</p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--amber-deep)]">
                                    Read more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="bg-[var(--paper-2)] py-16 sm:py-20" data-testid="services-religion-wise">
                <div className="container-x">
                    <Reveal>
                        <p className="eyebrow text-[var(--amber-deep)]">Religion-wise marriage information</p>
                        <h2 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                            The applicable process depends on the relevant law and your circumstances
                        </h2>
                        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">
                            Marriage and its registration follow different laws for different
                            communities — and solemnization is distinct from registration of a
                            marriage already performed. Below is the general position for each
                            situation; it is general information, not legal advice.
                        </p>
                    </Reveal>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {religionWise.map((r, i) => (
                            <Reveal key={r.h} delay={i * 0.06}>
                                <div className="card-file h-full p-6" data-testid={`services-religion-${i}`}>
                                    <h3 className="text-base font-bold text-ink">{r.h}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{r.p}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.2}>
                        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[var(--muted)]">
                            Eligibility, documentation, jurisdiction, timelines and fees vary by
                            law and office. Where a case involves conversion, prior marriages or
                            foreign nationals, consult a qualified legal professional for
                            case-specific advice.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <Reveal>
                    <div className="flex flex-col items-start justify-between gap-5 rounded-md bg-ink p-8 text-white sm:flex-row sm:items-center">
                        <p className="max-w-xl text-[15px] leading-relaxed text-white/85">
                            Not sure which route applies to you? That is exactly what the free
                            first consultation settles.
                        </p>
                        <div className="flex shrink-0 flex-wrap gap-3">
                            <a href={SITE.phoneHref} className="btn btn-amber" data-testid="services-call-button">
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-testid="services-whatsapp-button">
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
