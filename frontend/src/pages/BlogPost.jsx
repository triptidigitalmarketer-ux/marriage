import { Link, useParams } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3, Phone, MessageCircle } from "lucide-react";
import { Seo } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import CallbackForm from "@/components/CallbackForm";
import { Blocks } from "@/components/InfoPage";
import { POSTS } from "@/data/posts";
import { SITE } from "@/lib/site";
import NotFound from "@/pages/NotFound";

export default function BlogPost() {
    const { slug } = useParams();
    const post = POSTS.find((p) => p.slug === slug);
    if (!post) return <NotFound />;

    const path = `/blog/${post.slug}`;
    const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.h1,
        description: post.metaDesc,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: SITE.name },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://courtmarriagehelp.in" + path },
    };

    return (
        <>
            <Seo title={post.metaTitle} description={post.metaDesc} path={path} jsonLd={jsonLd} />

            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 pb-14 pt-10 sm:pt-14">
                    <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.tag }]} />
                    <div className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--amber)]">
                        <span>{post.tag}</span>
                        <span className="h-1 w-1 rounded-full bg-[var(--amber)]" />
                        <span className="inline-flex items-center gap-1.5 text-white/60 normal-case">
                            <CalendarDays className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-white/60 normal-case">
                            <Clock3 className="h-3.5 w-3.5" /> {post.readMins} min read
                        </span>
                    </div>
                    <h1 className="mt-4 max-w-3xl text-2xl font-black leading-[1.15] tracking-tight sm:text-4xl">
                        {post.h1}
                    </h1>
                </div>
            </section>

            <section className="container-x pb-16 pt-12">
                <div className="grid gap-12 lg:grid-cols-12">
                    <Reveal className="lg:col-span-8">
                        <article data-testid={`blog-article-${post.slug}`}>
                            <Blocks blocks={post.blocks} />

                            <div className="mt-10">
                                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">Keep reading</h2>
                                <ul className="mt-3 space-y-2">
                                    {post.links.map((l) => (
                                        <li key={l.to}>
                                            <Link to={l.to} className="link-ink text-sm" data-testid={`blog-link-${l.to.replace(/\//g, "")}`}>
                                                {l.label} <ArrowRight className="inline h-3.5 w-3.5" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </Reveal>

                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <Reveal delay={0.1}>
                                <div className="card-file card-tab p-6" data-testid={`blog-side-card-${post.slug}`}>
                                    <h2 className="text-lg font-bold text-ink">Questions about your case?</h2>
                                    <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">
                                        Free first consultation — route, documents and an honest
                                        timeline.
                                    </p>
                                    <div className="mt-4">
                                        <CallbackForm testidPrefix={`blog-${post.slug}-callback`} />
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 gap-2">
                                        <a href={SITE.phoneHref} className="btn btn-amber !px-3 !py-2.5 text-xs" data-testid={`blog-side-call-${post.slug}`}>
                                            <Phone className="h-3.5 w-3.5" /> Call
                                        </a>
                                        <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-wa !px-3 !py-2.5 text-xs" data-testid={`blog-side-whatsapp-${post.slug}`}>
                                            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">More from the blog</h2>
                                    <ul className="mt-3 space-y-2">
                                        {others.map((o) => (
                                            <li key={o.slug}>
                                                <Link to={`/blog/${o.slug}`} className="group flex items-center justify-between rounded-md border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[13px] font-semibold text-ink transition-colors duration-200 hover:border-gold/60" data-testid={`blog-more-${o.slug}`}>
                                                    {o.h1.length > 48 ? o.h1.slice(0, 48).trim() + "…" : o.h1}
                                                    <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[var(--amber)]" />
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
