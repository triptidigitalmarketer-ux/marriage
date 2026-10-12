import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
    Phone, MessageCircle, ArrowRight, Scale, FileCheck, Globe2,
    ClipboardCheck, ShieldCheck, Clock, Check, X, Zap, MapPin, PhoneCall, Receipt,
} from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import FaqAccordion from "@/components/FaqAccordion";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE, NAV } from "@/lib/site";
import { FAQS_HOME } from "@/data/faq";
import { POSTS } from "@/data/posts";
import { trackEvent, EVENTS } from "@/lib/analytics";

const HERO_IMG = "/images/hero-wedding.webp";

const serviceCards = [
    { icon: Scale, title: "Court Marriage under the Special Marriage Act", desc: "A civil marriage for couples of any religion — notice, objection window and solemnization handled properly.", to: "/special-marriage-act" },
    { icon: FileCheck, title: "Registration of an Existing Marriage", desc: "Married already — at a temple, nikah, church or Arya Samaj? Get the government certificate, correctly filed.", to: "/marriage-registration-delhi" },
    { icon: Globe2, title: "Interfaith Court Marriage", desc: "Different religions? The Special Marriage Act needs no conversion. We guide the whole route.", to: "/interfaith-court-marriage" },
    { icon: ClipboardCheck, title: "Documents & Affidavits", desc: "The right checklist for your route — age, address, marriage proofs, witnesses — prepared to your office's format.", to: "/court-marriage-documents" },
    { icon: ShieldCheck, title: "Online Application Assistance", desc: "e-District Delhi, IGRS UP and e-Services Haryana filings — you stay the applicant, always.", to: "/online-court-marriage-application-delhi" },
    { icon: Clock, title: "Urgent & Priority Guidance", desc: "Realistic timelines for registration of existing marriages — and honest answers about the 30-day notice.", to: "/court-marriage-fees-delhi" },
];

const steps = [
    { n: "01", h: "Free consultation", d: "Call or WhatsApp us. We identify your route — solemnization under the SMA, or registration of an existing marriage — and quote a fixed professional fee." },
    { n: "02", h: "Documents & affidavits", d: "We prepare every affidavit, annexure and photocopy in your office's current format, and tell you exactly what to keep ready." },
    { n: "03", h: "Notice or application", d: "SMA: the notice goes to the Marriage Officer of your district after 30 days' residence. Registration: the application is filed on the official portal." },
    { n: "04", h: "Certificate", d: "Solemnization before the Marriage Officer with three witnesses — or verification of your existing marriage — and the certificate is issued and recorded." },
];

const religions = [
    { h: "Hindu couples", d: "A Hindu, Buddhist, Sikh or Jain marriage is solemnized under personal law or custom, and the certificate is obtained by registering the existing marriage under the applicable state rules — in Delhi, through e-District.", to: "/marriage-registration-delhi", cta: "Registration route" },
    { h: "Muslim couples", d: "A nikah under Muslim personal law is a valid marriage. Registration runs under the applicable state rules — with the nikah nama and marriage evidence — and the certificate follows verification.", to: "/marriage-registration-delhi", cta: "Registration route" },
    { h: "Christian couples", d: "Christian marriages are performed under the Indian Christian Marriage Act, 1872, and registered under the applicable state rules with the officiant's certificate and marriage proofs.", to: "/marriage-registration-delhi", cta: "Registration route" },
    { h: "Interfaith couples", d: "For couples of different religions, the civil route is the Special Marriage Act, 1954 — a 30-day notice, eligibility conditions, three witnesses, and no conversion required.", to: "/interfaith-court-marriage", cta: "Interfaith route" },
];

function Stamp() {
    return (
        <div className="stamp-spin absolute -bottom-8 -left-8 z-10 hidden h-32 w-32 sm:block" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-lg">
                <defs>
                    <path id="stamp-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" fill="none" />
                </defs>
                <circle cx="60" cy="60" r="56" fill="#0B192C" opacity="0.92" />
                <circle cx="60" cy="60" r="34" fill="none" stroke="#D97706" strokeWidth="1.2" />
                <text fontSize="10" letterSpacing="2.4" fill="#D97706" fontWeight="700" fontFamily="Roboto, sans-serif">
                    <textPath href="#stamp-circle">COURT MARRIAGE • DELHI NCR • 1954 ACT •</textPath>
                </text>
                <path d="M60 40v22M50 54h20M55 62l-4 8h8l-4-8zM65 62l-4 8h8l-4-8z" stroke="#F7F3EA" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
        </div>
    );
}

function Hero() {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

    const lines = ["Court Marriage", "in Delhi NCR,", "handled properly."];
    return (
        <section ref={ref} className="bg-ink text-white grain">
            <div className="container-x relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-20 pt-12 lg:grid-cols-12 lg:pb-24">
                <div className="lg:col-span-7">
                    <p className="eyebrow text-[var(--amber)]" data-testid="hero-eyebrow">
                        Special Marriage Act 1954 · Delhi · Noida · Ghaziabad · Gurugram · Faridabad · Greater Noida
                    </p>
                    <h1 className="mt-6 text-[13vw] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]" data-testid="hero-heading">
                        {lines.map((line, i) => (
                            <span key={i} className="block overflow-hidden pb-1">
                                <motion.span
                                    className="block"
                                    initial={{ y: reduce ? 0 : "112%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.12 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    {i === 2 ? (
                                        <>
                                            {line.split(" ")[0]}{" "}
                                            <span className="relative inline-block">
                                                <span className="relative z-10">properly.</span>
                                                <motion.span
                                                    className="absolute -bottom-1 left-0 z-0 h-[0.14em] w-full bg-[var(--amber)]"
                                                    initial={{ scaleX: 0, originX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                                                />
                                            </span>
                                        </>
                                    ) : (
                                        line
                                    )}
                                </motion.span>
                            </span>
                        ))}
                    </h1>
                    <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-lg" data-testid="hero-subline">
                        Documentation assistance, consultation and appointment support for court
                        marriage under the Special Marriage Act and registration of marriages
                        already performed — handled honestly, with the notice periods the law
                        actually requires.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3" data-testid="hero-cta-group">
                        <a href={SITE.phoneHref} onClick={() => trackEvent(EVENTS.CALL, { location: "hero" })} className="btn btn-amber !px-7 !py-3.5 text-base" data-testid="hero-call-now-button">
                            <Phone className="h-5 w-5" /> Call Now — {SITE.phoneDisplay}
                        </a>
                        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(EVENTS.WHATSAPP, { location: "hero" })} className="btn btn-ghost-light !px-7 !py-3.5 text-base" data-testid="hero-whatsapp-button">
                            <MessageCircle className="h-5 w-5" /> WhatsApp Enquiry
                        </a>
                        <Link to="/court-marriage-process-delhi" className="link-ink text-sm" data-testid="hero-process-link">
                            See the full process <ArrowRight className="inline h-4 w-4" />
                        </Link>
                    </div>

                    <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 sm:grid-cols-4" data-testid="hero-facts">
                        {[
                            ["30 days", "statutory notice under the SMA"],
                            ["3 witnesses", "required at solemnization"],
                            ["2 routes", "solemnization vs registration"],
                            ["Both partners", "present at every stage"],
                        ].map(([v, k]) => (
                            <div key={k} className="bg-ink p-4">
                                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">{k}</dt>
                                <dd className="mt-1 text-xl font-black text-[var(--amber)]">{v}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="relative lg:col-span-5">
                    <motion.div
                        className="relative mx-auto max-w-md"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="absolute -inset-3 rounded-lg border border-white/15" aria-hidden="true" />
                        <div className="overflow-hidden rounded-lg shadow-2xl">
                            <motion.img
                                src={HERO_IMG}
                                alt="Indian bride and groom's henna-adorned hands held together, with red and white flower garlands"
                                className="aspect-[4/5] w-full object-cover"
                                style={{ y: imgY }}
                                data-testid="hero-image"
                            />
                        </div>
                        <Stamp />
                        <div className="absolute -right-4 top-8 hidden rounded-md border border-gold/50 bg-ink/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--amber)]">Statutory fact</p>
                            <p className="mt-1 max-w-[190px] text-xs leading-relaxed text-white/85">
                                The 30-day notice under the Special Marriage Act applies everywhere
                                in India — beware anyone promising to skip it.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Seo
                title="Court Marriage in Delhi NCR | Process, Documents & Fees"
                description="Court marriage and marriage registration across Delhi, Noida, Ghaziabad & NCR — the Special Marriage Act process, documents, notice periods, honest fees, and free consultation by call or WhatsApp."
                path="/"
            />

            <Hero />

            <Marquee items={[...SITE.cities, "Delhi NCR", "Free First Consultation"]} />

            {/* USP */}
            <section className="container-x py-20 sm:py-24" data-testid="home-usp-section">
                <Reveal>
                    <p className="eyebrow text-[var(--amber-deep)]">Why couples choose us</p>
                    <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
                        Court Marriage Guidance Made Simple Across Delhi NCR
                    </h2>
                </Reveal>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: Zap, h: "Urgent Guidance, Lawful Timelines", d: "Fast, honest direction based on your eligibility and the applicable law — including what urgency can and cannot do." },
                        { icon: MapPin, h: "Location-wise Assistance", d: "Support across Delhi, Noida, Ghaziabad, Greater Noida, Gurugram and Faridabad — the right office and portal for your address." },
                        { icon: ClipboardCheck, h: "Documents Checked Early", d: "A preliminary document checklist and verification guidance before filing — so your file is right the first time." },
                        { icon: PhoneCall, h: "Consultation Made Easy", d: "Reach us by phone, WhatsApp or the online form — whichever suits you. The first consultation is free." },
                        { icon: Receipt, h: "Transparent Process & Fees", d: "Clear explanation of the applicable procedure, estimated timelines and service fees — statutory charges shown on official portals." },
                    ].map((u, i) => (
                        <Reveal key={u.h} delay={i * 0.06}>
                            <div className="card-file card-tab flex h-full flex-col p-6" data-testid={`home-usp-card-${i + 1}`}>
                                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--amber-soft)] text-[var(--amber-deep)]">
                                    <u.icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-4 text-base font-bold text-ink">{u.h}</h3>
                                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--muted)]">{u.d}</p>
                            </div>
                        </Reveal>
                    ))}
                    <Reveal delay={0.3}>
                        <div className="flex h-full flex-col justify-between rounded-md bg-ink p-6 text-white" data-testid="home-usp-cta-card">
                            <div>
                                <h3 className="text-lg font-black leading-snug">Ready to start the right way?</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                                    Tell us your situation — we will map the route, documents and
                                    honest timeline with you.
                                </p>
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <Link to="/contact-us" className="btn btn-amber w-full" data-testid="home-usp-cta-button">
                                    Book a Consultation
                                </Link>
                                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline-wa w-full" data-testid="home-usp-whatsapp-button">
                                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Services bento */}
            <section className="container-x py-20 sm:py-24" data-testid="home-services">
                <Reveal>
                    <p className="eyebrow text-[var(--amber-deep)]">What we handle</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
                        Two legal routes. One correct file.
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        Most confusion comes from mixing up solemnization (creating a marriage
                        under the Special Marriage Act) with registration (certifying one already
                        performed). We work both routes, across the NCR.
                    </p>
                </Reveal>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceCards.map((c, i) => (
                        <Reveal key={c.to} delay={i * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
                            <Link
                                to={c.to}
                                className="card-file card-tab group flex h-full flex-col p-6"
                                data-testid={`home-service-card-${c.to.replace(/\//g, "")}`}
                            >
                                <c.icon className="h-6 w-6 text-[var(--amber)]" />
                                <h3 className="mt-4 text-lg font-bold leading-snug text-ink">{c.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{c.desc}</p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--amber-deep)]">
                                    Read the guide
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="bg-[var(--paper-2)] py-20 sm:py-24" data-testid="home-process">
                <div className="container-x">
                    <Reveal>
                        <p className="eyebrow text-[var(--amber-deep)]">The process</p>
                        <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
                            Four steps — and one statutory notice you should know about
                        </h2>
                    </Reveal>
                    <div className="mt-10 grid gap-4 md:grid-cols-4">
                        {steps.map((s, i) => (
                            <Reveal key={s.n} delay={i * 0.08}>
                                <div className="card-file h-full border-t-2 border-t-[var(--amber)] p-6" data-testid={`home-process-step-${s.n}`}>
                                    <p className="text-3xl font-black text-gold/40">{s.n}</p>
                                    <h3 className="mt-3 text-base font-bold text-ink">{s.h}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.d}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal delay={0.2}>
                        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-md border border-[var(--line)] bg-[var(--card)] p-6 sm:flex-row sm:items-center" data-testid="home-process-note">
                            <p className="max-w-2xl text-sm leading-relaxed text-ink/85">
                                <strong>Important:</strong> under the Special Marriage Act the
                                30-day notice is statutory — it applies to every new civil
                                marriage, in every office. Registration of a marriage already
                                performed has no 30-day notice; its speed follows verification.
                            </p>
                            <Link to="/court-marriage-process-delhi" className="btn btn-ink shrink-0" data-testid="home-process-detail-link">
                                Full process <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Religion-wise */}
            <section className="container-x py-20 sm:py-24" data-testid="home-religions">
                <Reveal>
                    <p className="eyebrow text-[var(--amber-deep)]">Religion-wise guidance</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
                        The right procedure depends on your law, not a template
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        Different religions follow different marriage laws — and registration is
                        separate from solemnization. Here is the honest position for each
                        situation.
                    </p>
                </Reveal>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {religions.map((r, i) => (
                        <Reveal key={r.h} delay={i * 0.06}>
                            <div className="card-file flex h-full flex-col p-6" data-testid={`home-religion-card-${i}`}>
                                <h3 className="text-base font-bold text-ink">{r.h}</h3>
                                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--muted)]">{r.d}</p>
                                <Link to={r.to} className="link-ink mt-4 text-[13px]" data-testid={`home-religion-link-${i}`}>
                                    {r.cta} <ArrowRight className="inline h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.15}>
                    <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">
                        This is general legal information, not legal advice — the applicable
                        process depends on the relevant law, eligibility and your circumstances.
                        For case-specific advice, consult a qualified legal professional.
                    </p>
                </Reveal>
            </section>

            {/* Trust — what we do / don't */}
            <section className="bg-ink py-20 text-white grain sm:py-24" data-testid="home-trust">
                <div className="container-x relative z-10 grid gap-10 md:grid-cols-2">
                    <Reveal>
                        <p className="eyebrow text-[var(--amber)]">Straight answers</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                            What we do — and what we won't
                        </h2>
                    </Reveal>
                    <div className="md:col-span-1" />
                    <Reveal>
                        <ul className="space-y-3" data-testid="home-trust-do">
                            {[
                                "Consultation, route assessment and fixed written quotes",
                                "Documents, affidavits and applications prepared to your office's format",
                                "Filing on official portals — e-District, IGRS UP, e-Services Haryana — in your own name",
                                "Appointment scheduling and support on the day",
                            ].map((x) => (
                                <li key={x} className="flex gap-3 text-sm leading-relaxed text-white/85">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--amber)]" /> {x}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <ul className="space-y-3" data-testid="home-trust-dont">
                            {[
                                "No guaranteed same-day marriages or certificates — the 30-day notice is law",
                                "No fake reviews, ratings or invented offices",
                                "No taking over your portal logins, OTPs or Aadhaar credentials",
                                "No pretending to be a government body — we are a private consultancy",
                            ].map((x) => (
                                <li key={x} className="flex gap-3 text-sm leading-relaxed text-white/85">
                                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" /> {x}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </section>

            {/* Coverage */}
            <section className="container-x py-20 sm:py-24" data-testid="home-coverage">
                <Reveal>
                    <p className="eyebrow text-[var(--amber-deep)]">Coverage</p>
                    <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-ink sm:text-4xl">
                        Where we work across Delhi NCR
                    </h2>
                </Reveal>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {NAV.locations.map((l, i) => (
                        <Reveal key={l.to} delay={i * 0.05}>
                            <Link to={l.to} className="card-file group flex items-center justify-between p-5" data-testid={`home-coverage-${l.to.replace(/\//g, "")}`}>
                                <span className="text-[15px] font-bold text-ink">{l.label}</span>
                                <ArrowRight className="h-4 w-4 text-[var(--amber)] transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={0.15}>
                    <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
                        We serve these locations through consultation, document preparation and
                        appointment support — we do not claim offices in cities where we do not
                        operate.
                    </p>
                </Reveal>
            </section>

            {/* FAQ */}
            <section className="bg-[var(--paper-2)] py-20 sm:py-24" data-testid="home-faq">
                <div className="container-x grid gap-10 lg:grid-cols-12">
                    <Reveal className="lg:col-span-5">
                        <p className="eyebrow text-[var(--amber-deep)]">Common questions</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                            Asked by almost every couple
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">
                            Can't find your question? Call us — the first consultation is free.
                        </p>
                        <Link to="/faq" className="btn btn-ghost-ink mt-6" data-testid="home-faq-all-link">
                            All FAQs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <Reveal className="lg:col-span-7" delay={0.1}>
                        <div className="rounded-md border border-[var(--line)] bg-[var(--card)] px-5 py-1">
                            <FaqAccordion items={FAQS_HOME} testidPrefix="home-faq" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Blog teaser */}
            <section className="container-x pb-4 pt-20" data-testid="home-blog">
                <Reveal>
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <p className="eyebrow text-[var(--amber-deep)]">From the blog</p>
                            <h2 className="mt-4 max-w-xl text-2xl font-black tracking-tight text-ink sm:text-3xl">
                                Read before you pay anyone
                            </h2>
                        </div>
                        <Link to="/blog" className="btn btn-ghost-ink shrink-0" data-testid="home-blog-all-link">
                            All articles <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {POSTS.slice(0, 3).map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.06}>
                            <Link to={`/blog/${p.slug}`} className="card-file group flex h-full flex-col p-5" data-testid={`home-blog-card-${p.slug}`}>
                                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--amber-deep)]">{p.tag}</span>
                                <h3 className="mt-2 flex-1 text-[15px] font-bold leading-snug text-ink">{p.h1}</h3>
                                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--amber-deep)]">
                                    {p.readMins} min read <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-ink py-20 text-white grain sm:py-24" data-testid="home-cta">
                <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-6">
                        <p className="eyebrow text-[var(--amber)]">Start here</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                            Tell us your situation.
                            <br />
                            We'll tell you the route — free.
                        </h2>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
                            Every case is different: religions, existing ceremonies, residences,
                            documents. A ten-minute consultation settles the route, the
                            documents and the honest timeline.
                        </p>
                        <p className="mt-4 text-sm text-white/60">
                            अपने प्रश्नों के लिए सीधे हमें कॉल या WhatsApp करें — पहली सलाह निःशुल्क है।
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href={SITE.phoneHref} onClick={() => trackEvent(EVENTS.CALL, { location: "cta-band" })} className="btn btn-amber !px-7 !py-3.5" data-testid="home-cta-call-button">
                                <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
                            </a>
                            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent(EVENTS.WHATSAPP, { location: "cta-band" })} className="btn btn-wa !px-7 !py-3.5" data-testid="home-cta-whatsapp-button">
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </Reveal>
                    <Reveal className="lg:col-span-6" delay={0.1}>
                        <div className="card-file p-6 sm:p-8" data-testid="home-cta-form-card">
                            <h3 className="text-lg font-bold text-ink">Request a callback</h3>
                            <p className="mt-1 text-[13px] text-[var(--muted)]">We reply on the number you give — no spam, no sharing.</p>
                            <div className="mt-5">
                                <EnquiryForm testidPrefix="home-cta" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
