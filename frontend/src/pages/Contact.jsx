import { Phone, MessageCircle, MapPin, Clock3, ShieldCheck } from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE } from "@/lib/site";

export default function Contact() {
    return (
        <>
            <Seo
                title="Contact Us — Court Marriage Help Delhi NCR"
                description="Contact Court Marriage Help for court marriage and marriage registration enquiries across Delhi, Noida, Ghaziabad, Greater Noida, Gurugram and Faridabad — call, WhatsApp or request a callback."
                path="/contact-us"
            />

            <section className="bg-[var(--paper)] text-ink grain">
                <div className="container-x relative z-10 pb-16 pt-14 sm:pb-20 sm:pt-20">
                    <p className="eyebrow text-[var(--amber-deep)]">Contact us</p>
                    <h1 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                        Talk to a consultant today
                    </h1>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                        Call or WhatsApp for the fastest response, or send the form below —
                        we reply on the number you give us. पहली सलाह निःशुल्क।
                    </p>
                </div>
            </section>

            <section className="container-x py-16 sm:py-20">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <Reveal>
                            <h2 className="text-2xl font-bold tracking-tight text-ink">Send an enquiry</h2>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                                Fields marked * are required. We use your details only to respond
                                to this enquiry.
                            </p>
                            <div className="card-file card-tab mt-6 p-6 sm:p-8" data-testid="contact-form-card">
                                <EnquiryForm testidPrefix="contact" />
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-5">
                        <Reveal delay={0.1}>
                            <div className="space-y-4">
                                <a href={SITE.phoneHref} className="card-file flex items-center gap-4 p-5" data-testid="contact-call-card">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-[var(--amber-deep)]">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--label)]">Call us</span>
                                        <span className="block text-lg font-bold text-ink">{SITE.phoneDisplay}</span>
                                    </span>
                                </a>
                                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="card-file flex items-center gap-4 p-5" data-testid="contact-whatsapp-card">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wa-deep/10 text-[var(--green-deep)]">
                                        <MessageCircle className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--label)]">WhatsApp</span>
                                        <span className="block text-lg font-bold text-ink">{SITE.phoneDisplay}</span>
                                    </span>
                                </a>
                                <div className="card-file p-5" data-testid="contact-coverage-card">
                                    <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--label)]">
                                        <MapPin className="h-4 w-4 text-[var(--amber-deep)]" /> Coverage
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-ink/85">
                                        Delhi · Noida · Ghaziabad · Greater Noida · Gurugram ·
                                        Faridabad — served through consultation, document
                                        preparation and appointment support.
                                    </p>
                                </div>
                                <div className="card-file p-5" data-testid="contact-hours-card">
                                    <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--label)]">
                                        <Clock3 className="h-4 w-4 text-[var(--amber-deep)]" /> Response
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-ink/85">
                                        Enquiries and callback requests are answered as quickly
                                        as possible during working hours; WhatsApp messages are
                                        picked up too.
                                    </p>
                                </div>
                                <div className="rounded-md border border-gold/40 bg-gold-soft/60 p-5" data-testid="contact-honesty-note">
                                    <p className="flex items-start gap-2 text-[13px] leading-relaxed text-ink/85">
                                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--amber-deep)]" />
                                        We are an independent legal consultancy — not a government
                                        portal. Official applications are always filed on
                                        government portals in your own name.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </>
    );
}
