import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Check, X } from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const CONSULT_IMG =
    "https://images.unsplash.com/photo-1731955418581-5ba6827ca5ff?crop=entropy&cs=srgb&fm=jpg&q=80&w=1400";

const principles = [
    { n: "01", h: "Tell you the route, not a sales line", d: "Solemnization under the Special Marriage Act and registration of an existing marriage are different procedures. We identify yours in the first call — before any payment." },
    { n: "02", h: "Quote once, in writing", d: "A single fixed professional fee, quoted before work begins. Government fees are shown to you on the official portal and paid by you, in your own name." },
    { n: "03", h: "Keep you as the applicant", d: "Applications are filed on government portals in your name. We never take over your logins, OTPs or Aadhaar credentials." },
    { n: "04", h: "Respect the law's timelines", d: "The 30-day notice under the Special Marriage Act is statutory. We plan around it honestly instead of promising what no one can deliver." },
    { n: "05", h: "Keep your information private", d: "Enquiry details are used only to respond to you. Marriage files involve sensitive personal information — we treat it that way." },
];

export default function About() {
    return (
        <>
            <Seo
                title="About Us | Court Marriage Help — Delhi NCR"
                description="Court Marriage Help is an independent legal consultancy for court marriage and marriage registration across Delhi NCR — honest routes, fixed quotes and correct paperwork."
                path="/about-us"
            />

            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 pb-16 pt-14 sm:pb-20 sm:pt-20">
                    <p className="eyebrow text-[var(--amber)]">About us</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        Honest paperwork for one of the biggest days of your life
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                        Court Marriage Help is an independent legal consultancy serving couples
                        across Delhi, Noida, Ghaziabad, Greater Noida, Gurugram and Faridabad. We
                        handle the documentation, filings and appointments that turn a lawful
                        marriage into a recognised one — clearly quoted, correctly prepared.
                    </p>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <img
                                src={CONSULT_IMG}
                                alt="Legal consultant's desk with documents during a consultation"
                                className="aspect-[4/3] w-full object-cover"
                                loading="lazy"
                                data-testid="about-image"
                            />
                        </div>
                    </Reveal>
                    <Reveal className="lg:col-span-7" delay={0.1}>
                        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Why we exist</h2>
                        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
                            <p>
                                Marriage law in India is not one procedure — it is the Hindu
                                Marriage Act, the Special Marriage Act, personal laws and state
                                registration rules, each with its own offices, formats and
                                timelines. Couples are rarely told which route applies to them,
                                and the market is full of people promising the impossible.
                            </p>
                            <p>
                                We built Court Marriage Help around a simple idea: identify the
                                correct legal route first, prepare the file properly, quote
                                honestly, and never promise what the law does not allow — no
                                fake same-day guarantees, no invented offices, no pretending to
                                be a government portal.
                            </p>
                            <p>
                                Our consultants work with qualified advocates practising in
                                Delhi NCR, and every application is filed on the official
                                government portal or office — with you as the applicant,
                                always.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[var(--paper-2)] py-16 sm:py-20" data-testid="about-principles">
                <div className="container-x">
                    <Reveal>
                        <p className="eyebrow text-[var(--amber-deep)]">How we work</p>
                        <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Five principles</h2>
                    </Reveal>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {principles.map((p, i) => (
                            <Reveal key={p.n} delay={i * 0.06}>
                                <div className="card-file card-tab h-full p-5">
                                    <p className="text-2xl font-black text-gold/40">{p.n}</p>
                                    <h3 className="mt-3 text-[15px] font-bold leading-snug text-ink">{p.h}</h3>
                                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">{p.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20" data-testid="about-scope">
                <div className="grid gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="card-file h-full p-7" data-testid="about-scope-do">
                            <h2 className="text-xl font-bold text-ink">What we provide</h2>
                            <ul className="mt-4 space-y-2.5">
                                {[
                                    "Consultation and route assessment (first call free)",
                                    "Documentation assistance — affidavits, annexures, checklists",
                                    "Application guidance and drafting for official portals",
                                    "Appointment support with SDM / Marriage Officer offices",
                                    "Guidance on notice periods, witnesses and jurisdiction",
                                ].map((x) => (
                                    <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--green-deep)]" /> {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="card-file h-full p-7" data-testid="about-scope-dont">
                            <h2 className="text-xl font-bold text-ink">What we are not</h2>
                            <ul className="mt-4 space-y-2.5">
                                {[
                                    "Not a government portal or affiliated with any government body",
                                    "Not a source of guaranteed outcomes, certificates or timelines",
                                    "Not a substitute for case-specific advice from a qualified advocate",
                                    "Not a document broker — you stay the applicant, in your name",
                                ].map((x) => (
                                    <li key={x} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" /> {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-md bg-ink p-8 text-white sm:flex-row sm:items-center">
                        <p className="max-w-xl text-[15px] leading-relaxed text-white/85">
                            Talk to us about your marriage — religions, ceremonies, residences,
                            documents. The first consultation is free and the route becomes
                            clear fast.
                        </p>
                        <div className="flex shrink-0 gap-3">
                            <a href={SITE.phoneHref} className="btn btn-amber" data-testid="about-call-button">
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-testid="about-whatsapp-button">
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
