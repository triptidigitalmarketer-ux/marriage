import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function Terms() {
    return (
        <>
            <Seo
                title="Terms & Conditions | Court Marriage Help"
                description="Terms governing the use of the Court Marriage Help website and its legal consultancy services — scope of services, quotes, government fees, liability and governing law."
                path="/terms-and-conditions"
            />

            <section className="bg-[var(--paper)] text-ink grain">
                <div className="container-x relative z-10 pb-14 pt-14 sm:pt-20">
                    <p className="eyebrow text-[var(--amber-deep)]">Legal</p>
                    <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Terms &amp; Conditions</h1>
                    <p className="mt-3 text-[13px] text-[var(--label)]">Last updated: 26 January 2026</p>
                </div>
            </section>

            <section className="container-x py-14">
                <Reveal>
                    <div className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-[var(--muted)]" data-testid="terms-content">
                        <p>
                            These terms govern your use of the {SITE.name} website and the
                            services you engage us for. Using the website or submitting an
                            enquiry means you accept these terms.
                        </p>
                        <div>
                            <h2 className="text-lg font-bold text-ink">1. Our services</h2>
                            <p className="mt-2">
                                We provide documentation assistance, legal consultation,
                                application guidance and appointment support for court marriage
                                and marriage registration across Delhi NCR. Official
                                applications are always filed on government portals or offices,
                                in your own name. We are an independent consultancy — not a
                                government body.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">2. No client-solicitor relationship by website use</h2>
                            <p className="mt-2">
                                Browsing this website or submitting an enquiry does not create a
                                client-solicitor relationship. That relationship begins only
                                when we both agree to an engagement, in writing or by
                                confirmed payment of professional charges.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">3. Quotes, fees and government charges</h2>
                            <p className="mt-2">
                                Our professional charges are quoted as a fixed figure before
                                work begins. Statutory government fees are set by the
                                respective state's rules, shown on the official portal at
                                filing, and paid by you directly. We do not add hidden charges;
                                if your case's facts change materially, we inform you before
                                any additional work.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">4. Refund and cancellation</h2>
                            <p className="mt-2">
                                You may cancel an engagement before work begins for a full
                                refund of professional charges paid. Once drafting or filing
                                has started, refunds are handled as agreed in writing at
                                engagement. Government fees, once paid on official portals,
                                are governed by the respective portal's own rules.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">5. No guarantees</h2>
                            <p className="mt-2">
                                Government processes, timelines and outcomes depend on statutory
                                requirements and officials. We do not guarantee same-day
                                marriages, certificates or approvals, and no statement on this
                                website should be read as one.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">6. Limitation of liability</h2>
                            <p className="mt-2">
                                To the extent permitted by law, our liability for any claim
                                connected with our services is limited to the professional
                                charges you paid us for that engagement. We are not liable for
                                delays or decisions of government offices.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">7. Website content</h2>
                            <p className="mt-2">
                                Content on this website is general legal information, kept as
                                current as practical, and is not legal advice for your specific
                                case. Do not act on it without consulting a qualified legal
                                professional.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">8. Governing law</h2>
                            <p className="mt-2">
                                These terms are governed by the laws of India, and courts at New
                                Delhi have exclusive jurisdiction.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
