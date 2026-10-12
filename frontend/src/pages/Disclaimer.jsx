import { AlertCircle } from "lucide-react";
import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function Disclaimer() {
    return (
        <>
            <Seo
                title="Legal Disclaimer | Court Marriage Help"
                description="Court Marriage Help is an independent legal consultancy, not a government portal. General information on this website is not legal advice and no outcome is guaranteed."
                path="/legal-disclaimer"
            />

            <section className="bg-ink text-white grain">
                <div className="container-x relative z-10 pb-14 pt-14 sm:pt-20">
                    <p className="eyebrow text-[var(--amber)]">Legal</p>
                    <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Legal Disclaimer</h1>
                    <p className="mt-3 text-xs text-white/50">Please read carefully</p>
                </div>
            </section>

            <section className="container-x py-14">
                <Reveal>
                    <div className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-[var(--muted)]" data-testid="disclaimer-content">
                        <div className="flex gap-3 rounded-md border border-gold/40 bg-gold-soft/60 p-5">
                            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--amber-deep)]" />
                            <p className="font-semibold text-ink">
                                {SITE.name} is a private legal consultancy. It is NOT a
                                government portal, and it is not affiliated with, endorsed by or
                                acting on behalf of any government authority, Marriage Officer
                                or court.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">Not legal advice</h2>
                            <p className="mt-2">
                                Information on this website — including pages about the Special
                                Marriage Act, 1954, registration rules, documents, notice
                                periods and fees — is general legal information for public
                                awareness. Your marriage route depends on the applicable law,
                                eligibility and your specific circumstances. Always verify
                                requirements with the concerned Marriage Officer or consult a
                                qualified legal professional before acting.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">No guarantees</h2>
                            <p className="mt-2">
                                We do not guarantee any outcome, certificate, timeline or
                                government approval. Statutory requirements — such as the
                                30-day notice under the Special Marriage Act — apply in every
                                case, and no consultant can lawfully waive them. Anyone
                                promising guaranteed same-day marriages or certificates is
                                misrepresenting the process.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">Fees and official sources</h2>
                            <p className="mt-2">
                                Government fees and procedures change and vary by state and
                                office. Verify the current schedule on the official portal for
                                your application — e-District Delhi, IGRS UP or e-Services
                                Haryana — before paying anything. Our professional charges are
                                always quoted separately and in advance.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">External links</h2>
                            <p className="mt-2">
                                Where this website links to government portals or other
                                resources, those links are for convenience only. We do not
                                control their content and are not responsible for it.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">Credentials</h2>
                            <p className="mt-2">
                                We do not publish ratings, reviews or advocate credentials that
                                we cannot verify. Details of the specific advocates and
                                consultants working on your file are shared at engagement.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
