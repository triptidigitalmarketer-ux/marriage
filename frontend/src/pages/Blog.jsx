import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, CalendarDays, Clock3 } from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/data/posts";
import { SITE } from "@/lib/site";

export default function Blog() {
    return (
        <>
            <Seo
                title="Court Marriage Blog — Guides & Honest Answers | Delhi NCR"
                description="Plain-language guides on court marriage and marriage registration in Delhi NCR — notice periods, documents, certificates, NRI cases and how to spot false same-day promises."
                path="/blog"
            />

            <section className="bg-[var(--paper)] text-ink grain">
                <div className="container-x relative z-10 pb-16 pt-14 sm:pb-20 sm:pt-20">
                    <p className="eyebrow text-[var(--amber-deep)]">The blog</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        Court marriage, explained without the folklore
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        Short, honest guides on the questions couples actually ask — notice
                        periods, documents, certificates and the promises you should walk away
                        from.
                    </p>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {POSTS.map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.05}>
                            <Link
                                to={`/blog/${p.slug}`}
                                className="card-file card-tab group flex h-full flex-col p-6"
                                data-testid={`blog-card-${p.slug}`}
                            >
                                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--amber-deep)]">
                                    <span>{p.tag}</span>
                                    <span className="h-1 w-1 rounded-full bg-[var(--amber)]" />
                                    <span className="text-[var(--muted)]">{p.readMins} min read</span>
                                </div>
                                <h2 className="mt-3 text-base font-bold leading-snug text-ink">{p.h1}</h2>
                                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--muted)]">{p.excerpt}</p>
                                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[var(--amber-deep)]">
                                    Read the guide
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-md bg-[var(--ink-2)] p-8 text-[#F6F0E4] sm:flex-row sm:items-center">
                        <p className="max-w-xl text-[15px] leading-relaxed text-[#D5DBE8]">
                            Reading is a good start — a ten-minute call settles your specific
                            route, documents and timeline. The first consultation is free.
                        </p>
                        <div className="flex shrink-0 flex-wrap gap-3">
                            <a href={SITE.phoneHref} className="btn btn-amber" data-testid="blog-call-button">
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-testid="blog-whatsapp-button">
                                <MessageCircle className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
