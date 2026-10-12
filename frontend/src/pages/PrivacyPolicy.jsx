import { Seo } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function PrivacyPolicy() {
    return (
        <>
            <Seo
                title="Privacy Policy | Court Marriage Help"
                description="How Court Marriage Help collects, uses and protects enquiry information submitted through its website — name, phone number, city, service and message."
                path="/privacy-policy"
            />

            <section className="bg-[var(--paper)] text-ink grain">
                <div className="container-x relative z-10 pb-14 pt-14 sm:pt-20">
                    <p className="eyebrow text-[var(--amber-deep)]">Legal</p>
                    <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
                    <p className="mt-3 text-[13px] text-[var(--label)]">Last updated: 26 January 2026</p>
                </div>
            </section>

            <section className="container-x py-14">
                <Reveal>
                    <div className="max-w-3xl space-y-8 text-[15px] leading-relaxed text-[var(--muted)]" data-testid="privacy-policy-content">
                        <p>
                            This Privacy Policy explains how {SITE.name} ("we", "us") handles
                            personal information submitted through this website. We follow the
                            principles of India's Digital Personal Data Protection Act, 2023:
                            collection limited to what is necessary, use limited to the stated
                            purpose.
                        </p>
                        <div>
                            <h2 className="text-lg font-bold text-ink">1. What we collect</h2>
                            <p className="mt-2">
                                When you submit an enquiry or callback request, we collect only:
                                your name, phone number, city, the service you asked about and
                                any optional message you write. We do not collect Aadhaar
                                numbers, OTPs, passwords or payment details through this
                                website — and no genuine consultant will ever ask you for an
                                OTP.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">2. How we use it</h2>
                            <p className="mt-2">
                                Your details are used solely to respond to your enquiry — to
                                call you back, advise on your marriage route and quote our
                                professional charges. We do not sell, rent or share your
                                information with advertisers or data brokers.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">3. Where it is stored</h2>
                            <p className="mt-2">
                                Enquiries are stored in our secured backend database and, where
                                configured, delivered to our business email by a transactional
                                email provider. Access is restricted to our consultants.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">4. Analytics</h2>
                            <p className="mt-2">
                                This site uses anonymous traffic analytics (Google Analytics 4)
                                only if you accept the consent notice, and never in a way that
                                identifies you personally. You can decline or withdraw consent
                                at any time from the notice on your next visit.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">5. Retention and deletion</h2>
                            <p className="mt-2">
                                We keep enquiry records only as long as needed to serve you and
                                maintain our professional records. Write to us or call the
                                number on the website to request correction or deletion of your
                                enquiry data.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-ink">6. Contact</h2>
                            <p className="mt-2">
                                Questions about this policy: call or WhatsApp {SITE.phoneDisplay}
                                , or use the contact form. Where this policy and the law
                                differ, the law prevails.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    );
}
