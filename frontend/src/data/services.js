export const SERVICES = {
    "marriage-registration-delhi": {
        slug: "marriage-registration-delhi",
        metaTitle: "Marriage Registration in Delhi — Certificate & Process",
        metaDesc:
            "Registering a marriage already performed in Delhi — who can apply under the Delhi registration rules, e-District filing, documents, witnesses, verification and the marriage certificate process.",
        h1: "Marriage Registration in Delhi",
        kicker: "Registering a marriage already solemnized",
        intro:
            "If your wedding has already taken place — a Hindu ceremony, nikah, church wedding or any other — registration documents the marriage that legally exists and gives you the government certificate that visa offices, banks and property registrars ask for. In Delhi, this is handled by the SDM concerned, with applications filed through the e-District Delhi portal.",
        image: {
            src: "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600",
            alt: "Bride and groom's hands with mehndi during an Indian wedding ceremony",
        },
        blocks: [
            { t: "h2", text: "Who can apply" },
            { t: "p", text: "Registration is available for marriages performed according to the parties' personal law or customs, subject to the applicable registration rules. In Delhi, a Hindu marriage can be registered under the Delhi Hindu Marriage Registration Rules; marriages of other communities are registered under the provisions applicable to them. At least one partner generally needs to be able to show residence in the district of the SDM you apply to — the precise residence requirement follows the current rules, and we confirm it for your situation in the first consultation." },
            { t: "h2", text: "What you will need" },
            { t: "list", items: [
                "Age and address proof for both partners — Aadhaar, passport, matriculation certificate or similar.",
                "Marriage evidence — marriage photographs, invitation card, and where applicable a nikah nama or certificate from the officiating priest.",
                "Passport-size photographs of both partners.",
                "Identity proofs of witnesses — the number and requirement varies by route and rules.",
                "Joint affidavit(s) in the prescribed format stating marital status, date and place of marriage.",
                "Divorce decree or death certificate if either partner was previously married.",
            ] },
            { t: "h2", text: "How the Delhi e-District process runs" },
            { t: "steps", items: [
                { h: "Application on e-District", d: "The application is filed on the official e-District Delhi portal with scanned documents — you remain the applicant; we prepare and guide every field." },
                { h: "Appointment with the SDM", d: "An appointment date is taken at the office of the SDM (Marriage Officer) for your district." },
                { h: "Verification with originals", d: "Both partners attend with original documents and witnesses. The Marriage Officer verifies the file." },
                { h: "Certificate issued", d: "Once verified, the marriage certificate is issued and made available for download on the portal." },
            ] },
            { t: "note", text: "No consultant can guarantee same-day certificates — timelines follow verification and the office's schedule. We keep your file complete and correct so nothing stalls on paperwork." },
            { t: "h2", text: "Why registering matters" },
            { t: "list", items: [
                "Visa and immigration applications for spouses, including NRI cases.",
                "Passport updates and name-change documentation.",
                "Bank accounts, insurance nominations and succession matters.",
                "Proof of marriage for property, maintenance and guardianship proceedings.",
            ] },
        ],
        faqs: [
            { q: "Can we register our marriage if it was performed years ago?", a: "Yes — registration of an existing marriage is available even long after the ceremony, provided you can produce the marriage evidence and documents the applicable rules require. Older cases sometimes need extra supporting evidence, which we will identify in the consultation." },
            { q: "Do both partners need to be present for registration in Delhi?", a: "Yes — both partners attend the appointment with originals, along with the required witnesses." },
            { q: "Is Aadhaar mandatory?", a: "Aadhaar is accepted widely but alternate government age and address proofs — such as a passport or matriculation certificate — are usable. Requirements for specific cases are confirmed before filing." },
            { q: "How much does registration cost in Delhi?", a: "Government fees are nominal and set by the current fee schedule on the e-District portal. Our professional charges for preparation, filing and appointment support are quoted separately and upfront." },
        ],
        related: [
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
            { label: "Court Marriage in Delhi", to: "/court-marriage-delhi" },
            { label: "Special Marriage Act, 1954", to: "/special-marriage-act" },
        ],
    },

    "court-marriage-process-delhi": {
        slug: "court-marriage-process-delhi",
        metaTitle: "Court Marriage Process in Delhi — Step-by-Step Guide",
        metaDesc:
            "The complete court marriage process in Delhi — eligibility, Special Marriage Act notice, 30-day notice period, solemnization with three witnesses, and the alternate registration route for existing marriages.",
        h1: "Court Marriage Process in Delhi",
        kicker: "Every step, explained without exaggeration",
        intro:
            "There are two different things people call 'court marriage': solemnizing a new civil marriage under the Special Marriage Act, 1954, and registering a marriage that has already been performed. They follow different procedures — and confusing them is the most common mistake couples make. This page explains both, step by step.",
        blocks: [
            { t: "h2", text: "Route 1 — Solemnization under the Special Marriage Act" },
            { t: "p", text: "This is a civil marriage for couples of any religion — no religious ceremony is required, and no conversion is needed for interfaith couples. It is governed by the Special Marriage Act, 1954, and performed by the Marriage Officer (in Delhi, the SDM)." },
            { t: "steps", items: [
                { h: "1 · Eligibility check", d: "Ages of 21 (male) and 18 (female), neither partner with a living spouse, and the partners not within the Act's degrees of prohibited relationship (unless a governing custom permits it)." },
                { h: "2 · 30-day residence", d: "At least one partner must have resided in the district of the Marriage Officer for at least 30 days before the notice." },
                { h: "3 · Notice of intended marriage", d: "The notice is filed and displayed at the Marriage Officer's office. Both partners sign it." },
                { h: "4 · 30-day notice period", d: "A statutory window for any lawful objection under Section 7. The officer must inquire into any objection; most objections are personal disputes that fail the legal test." },
                { h: "5 · Solemnization", d: "After the notice period, the marriage is solemnized in any form the couple chooses, before the Marriage Officer and three witnesses. The certificate is then issued and recorded." },
            ] },
            { t: "h2", text: "Route 2 — Registration of an existing marriage" },
            { t: "p", text: "If your religious or customary ceremony is already complete, you do not solemnize anything again — you register the existing marriage. In Delhi this runs through the e-District portal to the SDM: application, document upload, appointment, verification with originals and witnesses, then the certificate. There is no 30-day statutory notice for this route; the timeline follows verification and the office's schedule." },
            { t: "h2", text: "The two routes at a glance" },
            { t: "table", head: ["", "Solemnization (SMA)", "Registration of existing marriage"], rows: [
                ["Who it is for", "Couples marrying now, any religion", "Couples whose ceremony is already done"],
                ["Statutory notice", "30 days", "No 30-day notice; verification instead"],
                ["Where", "Marriage Officer / SDM", "SDM via e-District Delhi"],
                ["Witnesses", "Three witnesses", "As per the applicable registration rules"],
                ["Outcome", "Marriage solemnized and certified", "Marriage certified as already performed"],
            ] },
            { t: "note", text: "General information, not legal advice: eligibility exceptions, previous marriages, foreign nationals and conversion cases each carry additional requirements. Consult a qualified advocate for case-specific advice." },
        ],
        faqs: [
            { q: "Can the 30-day notice be skipped?", a: "No — the notice period is written into the Special Marriage Act itself. Any office or consultant claiming a guaranteed one-day court marriage under the SMA is misrepresenting the law." },
            { q: "Which route applies if we already had a temple wedding?", a: "Registration of the existing marriage. A temple or Arya Samaj ceremony creates a valid Hindu marriage; the certificate documents it formally." },
            { q: "Where exactly do we file in Delhi?", a: "With the SDM (Marriage Officer) of the district where either partner has lived for 30 days. Registration applications go through the e-District Delhi portal." },
            { q: "What happens on the solemnization day?", a: "Both partners and three witnesses attend before the Marriage Officer. The marriage is solemnized in the form you choose, the declarations are signed, and the certificate process follows." },
        ],
        related: [
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Fees & Charges in Delhi", to: "/court-marriage-fees-delhi" },
            { label: "Special Marriage Act, 1954", to: "/special-marriage-act" },
            { label: "Court Marriage in Delhi", to: "/court-marriage-delhi" },
        ],
    },

    "court-marriage-documents": {
        slug: "court-marriage-documents",
        metaTitle: "Court Marriage Documents Required — Delhi NCR Checklist",
        metaDesc:
            "Documents required for court marriage and marriage registration in Delhi NCR — age and address proofs, affidavits, photographs and witnesses, listed separately for solemnization and registration routes.",
        h1: "Court Marriage Documents Required",
        kicker: "The correct checklist depends on your route",
        intro:
            "There is no single universal checklist. A couple solemnizing a marriage under the Special Marriage Act needs a different set of papers from a couple registering a marriage they already celebrated. Below are both checklists as they apply across Delhi NCR — we confirm the exact formats for your office before anything is filed.",
        image: {
            src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600",
            alt: "Person filling and signing official documents on a desk with a pen",
        },
        blocks: [
            { t: "h2", text: "Checklist A — Solemnization under the Special Marriage Act" },
            { t: "list", items: [
                "Age proof of both partners — birth certificate, matriculation certificate, passport or Aadhaar.",
                "Address proof of both partners — Aadhaar, voter ID, passport, utility bill or similar.",
                "Passport-size photographs of both partners.",
                "Affidavit(s) stating date of birth, marital status, nationality and that the partners are not within the prohibited degrees of relationship — formats vary by office.",
                "ID and address proofs of three witnesses.",
                "If applicable: divorce decree absolute, or death certificate of a former spouse.",
                "If applicable: passport and valid visa of a foreign-national partner, plus any single-status / no-impediment certificate their country requires.",
            ] },
            { t: "h2", text: "Checklist B — Registration of an existing marriage" },
            { t: "list", items: [
                "Age and address proofs of both partners.",
                "Marriage evidence — marriage photographs, invitation card, and where applicable a nikah nama or a certificate from the officiating priest.",
                "Passport-size photographs of both partners.",
                "Joint affidavit in the prescribed format — date and place of marriage, marital status, religion.",
                "ID proofs of witnesses as required by the applicable rules.",
                "If applicable: divorce decree or former spouse's death certificate.",
            ] },
            { t: "h2", text: "Common reasons files get held up" },
            { t: "list", items: [
                "Name spellings that differ between Aadhaar, matriculation certificates and affidavits — resolve or explain them before filing.",
                "Address proofs that do not show the required 30-day district residence for the SMA route.",
                "Missing witness IDs or witnesses who cannot attend on the appointment day.",
                "Photographs of the ceremony that do not clearly show both partners or the ritual.",
            ] },
            { t: "note", text: "Checklists are indicative and office-specific requirements can change. We verify the current formats with the concerned office before your application is filed." },
        ],
        faqs: [
            { q: "How many witnesses are required?", a: "Three witnesses are required for solemnization under the Special Marriage Act. For registration of an existing marriage, the number follows the applicable state rules — typically two in the NCR states, confirmed per office." },
            { q: "Can Aadhaar be used as age proof?", a: "Aadhaar is commonly accepted, but offices often prefer a matriculation certificate or birth certificate as primary age proof. Carry both where possible." },
            { q: "Do documents need to be in a specific format?", a: "Affidavits and annexures follow formats prescribed by the concerned office or state rules. We prepare them to match, so a single visit covers verification." },
            { q: "What if one partner's address proof is from another state?", a: "The 30-day district residence for the SMA route is shown through either partner's proof. If neither partner can show local residence, the filing district changes — we work this out in the consultation." },
        ],
        related: [
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
            { label: "Marriage Registration in Delhi", to: "/marriage-registration-delhi" },
            { label: "Fees & Charges in Delhi", to: "/court-marriage-fees-delhi" },
            { label: "Online Application Assistance", to: "/online-court-marriage-application-delhi" },
        ],
    },

    "court-marriage-fees-delhi": {
        slug: "court-marriage-fees-delhi",
        metaTitle: "Court Marriage Fees in Delhi — Charges Explained",
        metaDesc:
            "Court marriage and marriage registration costs in Delhi NCR explained honestly — statutory government fees versus professional service charges, same-day claims, and how a transparent quote works.",
        h1: "Court Marriage Fees in Delhi",
        kicker: "Government charges and professional charges — kept separate",
        intro:
            "Two different things get called 'court marriage fees': the statutory charges government offices levy, and the professional charges a consultancy charges for preparing and filing your case. Mixing them up is how inflated quotes happen. Here is exactly how the money works — including the fee figures we deliberately do not publish.",
        blocks: [
            { t: "h2", text: "1 · Government (statutory) charges" },
            { t: "p", text: "Statutory fees for notice, application and certificate are nominal and set by each state's current rules — Delhi through e-District, Uttar Pradesh through IGRS UP, Haryana through e-Services. The authentic figure for your application is displayed on the official portal at the time of filing, and it is paid by you, in your own name, on the government portal. We do not publish specific rupee figures because they change, vary by state and route, and quoting a stale number could mislead you — verifying the current schedule takes one minute on the portal, and we do it with you." },
            { t: "h2", text: "2 · Incidental costs" },
            { t: "table", head: ["Item", "Paid to", "Notes"], rows: [
                ["Stamp paper & notarisation of affidavits", "Local vendors", "Depends on the number of affidavits your office requires"],
                ["Passport-size photographs & photocopies", "Local vendors", "Small, one-time"],
                ["Travel to the SDM office", "—", "You attend in person at the required stages"],
            ] },
            { t: "h2", text: "3 · Professional charges — Court Marriage Help" },
            { t: "list", items: [
                "Consultation and route assessment — the first teleconsultation is free.",
                "Preparation of every affidavit, annexure and document to your office's current format.",
                "Drafting and filing support of the notice or registration application.",
                "Appointment scheduling, reminders and representation support on the day.",
                "Quoted as a single, fixed figure before you commit — no per-step add-ons, no 'urgent fees' invented later.",
            ] },
            { t: "h2", text: "About 'same day' and urgency" },
            { t: "p", text: "The 30-day notice under the Special Marriage Act is a statutory requirement — no fee, agent or consultant can lawfully skip it for a new civil marriage. What urgency genuinely affects is registration of an existing marriage: where the office offers priority appointment slots and the documents are complete, the certificate can follow much faster. We tell you the realistic timeline for your route, and we will not sell urgency that the law does not allow." },
            { t: "note", text: "Be cautious of anyone quoting 'government fees' without showing the portal, or promising guaranteed same-day certificates. Verify every figure on the official portal before paying anything." },
        ],
        faqs: [
            { q: "What is the government fee for court marriage in Delhi?", a: "It is a nominal statutory amount set by the current fee schedule, shown on the e-District Delhi portal when you apply. We do not quote unverified figures — the portal figure at filing is the authentic one." },
            { q: "Why won't you publish one price for everything?", a: "Because two costs exist: statutory government fees (state-specific, portal-displayed) and professional charges (case-specific — route, documents, urgency). Quoting one blended number would be either padded or wrong." },
            { q: "How do I get your quote?", a: "Call, WhatsApp or submit the callback form. After a short consultation we quote a single fixed professional fee in writing; government charges are always paid by you on the official portal." },
            { q: "Are there hidden charges later?", a: "Our engagement is a fixed written quote. If your case's facts change materially — for example a foreign-national partner or an objection under Section 7 — we tell you before any additional work happens." },
        ],
        related: [
            { label: "Same Day Court Marriage Assistance", to: "/same-day-court-marriage" },
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Same-Day & Urgent Guidance", to: "/online-court-marriage-application-delhi" },
            { label: "Court Marriage in Delhi", to: "/court-marriage-delhi" },
        ],
    },

    "online-court-marriage-application-delhi": {
        slug: "online-court-marriage-application-delhi",
        metaTitle: "Online Court Marriage Application Delhi — e-District Help",
        metaDesc:
            "Filing a marriage registration application online in Delhi through the e-District portal — registration steps, DigiLocker documents, appointments, and how our assistance keeps the file clean.",
        h1: "Online Court Marriage Application in Delhi",
        kicker: "e-District Delhi · you file, we guide",
        intro:
            "Delhi's e-District portal lets couples apply for registration of an existing marriage online — forms, document uploads and appointment booking all happen digitally, with one in-person verification at the SDM office. Note what this page is for: online filing covers registration of a marriage already solemnized. A new civil marriage under the Special Marriage Act always involves the office and its 30-day notice.",
        blocks: [
            { t: "h2", text: "What can genuinely be done online in Delhi" },
            { t: "list", items: [
                "Registration of an existing marriage — application, uploads and appointment booking on the e-District Delhi portal.",
                "Tracking the application status until the certificate is available for download.",
                "For solemnization under the Special Marriage Act — the notice is filed at the Marriage Officer's office, so the process is office-led rather than portal-led.",
            ] },
            { t: "h2", text: "Step-by-step: e-District registration" },
            { t: "steps", items: [
                { h: "1 · Create the application", d: "The marriage registration application is filled on the e-District Delhi portal with details of both partners, the marriage and the witnesses." },
                { h: "2 · Upload documents", d: "Scanned age proofs, address proofs, marriage evidence, photographs and affidavits are uploaded — DigiLocker-verified documents speed up verification." },
                { h: "3 · Book the appointment", d: "An appointment is taken at the SDM office for your district." },
                { h: "4 · Verification with originals", d: "Both partners attend with original documents and witnesses; the Marriage Officer verifies the file." },
                { h: "5 · Certificate", d: "After verification, the certificate is issued and can be downloaded from the portal." },
            ] },
            { t: "h2", text: "Safety first — applying online without risk" },
            { t: "list", items: [
                "You are always the applicant; logins, OTPs and Aadhaar details are never shared with anyone — including us.",
                "We never ask for OTPs, passwords or card details. No government portal ever does.",
                "Keep copies of everything you upload — the portal receipt and appointment slip included.",
            ] },
            { t: "note", text: "Urgent or priority timelines depend on the office's appointment availability and your documents being complete. We will always tell you the realistic position for your case." },
        ],
        faqs: [
            { q: "Can a court marriage be applied for fully online in Delhi?", a: "Registration of an existing marriage can be applied for online on e-District Delhi, with one in-person verification. A new civil marriage under the Special Marriage Act is office-led — the notice and solemnization happen at the Marriage Officer's end." },
            { q: "Is DigiLocker valid for documents?", a: "Yes — documents pulled through DigiLocker are verifiable and generally speed up scrutiny. Scanned physical copies are also accepted where the portal allows them." },
            { q: "Do I need to share my portal password with you?", a: "Never. You keep every credential. We prepare documents, drafts and guidance; the application and its logins stay in your control." },
            { q: "What if my application gets rejected?", a: "Rejections usually cite a document or format issue. We identify the precise gap, correct the file and refile — as quickly as the portal allows." },
        ],
        related: [
            { label: "Marriage Registration in Delhi", to: "/marriage-registration-delhi" },
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Fees & Charges in Delhi", to: "/court-marriage-fees-delhi" },
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
        ],
    },

    "interfaith-court-marriage": {
        slug: "interfaith-court-marriage",
        metaTitle: "Interfaith Court Marriage in Delhi — Special Marriage Act",
        metaDesc:
            "Interfaith court marriage in Delhi NCR — how the Special Marriage Act 1954 works for couples of different religions, why conversion is not required, the 30-day notice, documents and safety considerations.",
        h1: "Interfaith Court Marriage in Delhi",
        kicker: "Different faiths, one lawful route",
        intro:
            "For couples from different religions, the Special Marriage Act, 1954 is the standard route: a civil marriage valid across India, performed by the Marriage Officer, with no religious ceremony and no conversion required by the law. The Act's conditions, its 30-day notice and its three witnesses apply — and the rest is preparation, paperwork and, sometimes, patience with social pressure.",
        image: {
            src: "https://images.unsplash.com/photo-1735052712489-f45220126a0c?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600",
            alt: "Bride and groom in traditional Indian wedding attire walking together on a path",
        },
        blocks: [
            { t: "h2", text: "Does either partner need to convert?" },
            { t: "p", text: "Under the Special Marriage Act — no. The marriage is solemnized as a civil marriage regardless of the partners' religions, and both partners keep their faith. Conversion is a personal choice some couples make for religious marriage ceremonies afterwards, but it is not a legal requirement for a court marriage. If one partner does convert and the couple then wishes to register under the Hindu Marriage Act, different rules apply — we walk you through both positions in the consultation." },
            { t: "h2", text: "How the process runs" },
            { t: "steps", items: [
                { h: "Eligibility", d: "Ages 21 (male) and 18 (female), neither partner with a living spouse, and not within the Act's degrees of prohibited relationship." },
                { h: "Residence & notice", d: "One partner resides 30 days in the district, then the notice of intended marriage is filed with the Marriage Officer." },
                { h: "30-day notice period", d: "The notice is displayed and open to lawful objection. Objections are inquired into under Section 7; personal disapproval is not a lawful ground." },
                { h: "Solemnization", d: "After the window, the marriage is solemnized before the Marriage Officer with three witnesses, in any form the couple chooses." },
            ] },
            { t: "h2", text: "Practical realities we prepare you for" },
            { t: "list", items: [
                "Family or community pressure: the law does not let an objection based on disapproval block the marriage — but plan your notice filing with privacy in mind.",
                "Safety concerns: where safety is at risk, we explain the protection mechanisms available and recommend you consult a qualified advocate on the specifics.",
                "Documents: both partners' age and address proofs, photographs, affidavits and three witnesses with IDs — same checklist as any SMA marriage.",
                "Ceremonies afterwards: many couples complete a religious or social ceremony after the civil solemnization — the legal marriage date is the solemnization date.",
            ] },
            { t: "note", text: "General information, not legal advice. Interfaith cases involving conversion, foreign nationals or prior marriages carry extra requirements — consult a qualified advocate for advice on your specific facts." },
        ],
        faqs: [
            { q: "Can a Hindu and a Muslim marry without conversion?", a: "Yes — under the Special Marriage Act, 1954, religion of the partners is irrelevant to a civil marriage. No conversion is required by law." },
            { q: "Will our families be informed of the notice?", a: "The notice is displayed publicly at the Marriage Officer's office as the Act requires, and objections can be raised during the 30 days. It is not sent to your homes; concerns about privacy and safety should be discussed with a qualified advocate." },
            { q: "Can an objection by our families stop the marriage?", a: "Only on grounds the Act actually recognises — age, existing marriage, prohibited relationship and similar. Simple disapproval is not a lawful objection, and the officer must inquire before acting on one." },
            { q: "We want a religious ceremony too. Can we do both?", a: "Many couples solemnize under the SMA first and hold a ceremony afterwards. The legal marriage exists from the civil solemnization date." },
        ],
        related: [
            { label: "Special Marriage Act, 1954", to: "/special-marriage-act" },
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
            { label: "Court Marriage in Delhi", to: "/court-marriage-delhi" },
        ],
    },

    "special-marriage-act": {
        slug: "special-marriage-act",
        metaTitle: "Special Marriage Act 1954 — Notice, Process & Eligibility",
        metaDesc:
            "The Special Marriage Act, 1954 explained — who it applies to, eligibility conditions, the 30-day notice and objection window, solemnization with three witnesses, and how it differs from registration.",
        h1: "The Special Marriage Act, 1954",
        kicker: "India's civil marriage law, explained plainly",
        intro:
            "The Special Marriage Act, 1954 (SMA) is the central law under which any two eligible persons can marry as a civil marriage, regardless of their religion — and it is the law that governs most court marriages in India, including every interfaith court marriage. Here is what it actually says, without folklore.",
        image: {
            src: "https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?crop=entropy&cs=srgb&fm=jpg&q=80&w=1600",
            alt: "Scales of justice and legal books on a lawyer's desk",
        },
        blocks: [
            { t: "h2", text: "Who the Act applies to" },
            { t: "p", text: "The SMA applies to any couple marrying as a civil marriage in India — same-faith couples who prefer a civil marriage, and different-faith couples for whom it is the usual route. It is solemnization, not registration: it creates the marriage itself, whereas registration rules merely certify a marriage that already exists. The distinction matters — the two routes have different steps, timelines and offices." },
            { t: "h2", text: "Conditions for a valid SMA marriage" },
            { t: "list", items: [
                "Ages: the male partner must be 21 and the female partner 18.",
                "Neither party has a living spouse at the time of marriage (monogamy).",
                "The parties are not within the degrees of prohibited relationship under the Act, unless a custom governing them permits such a marriage.",
                "Both parties are capable of giving valid consent.",
            ] },
            { t: "h2", text: "Notice, objections and solemnization" },
            { t: "list", items: [
                "Notice (Section 5): either party gives notice of intended marriage to the Marriage Officer of the district where at least one party has resided for at least 30 days.",
                "Publication: the notice is published/displayed, opening the objection window.",
                "Objections (Section 7): anyone may object on grounds the Act recognises; the officer must inquire. Appeal from a refusal lies to the district court.",
                "Solemnization: after the 30-day window closes without a sustained objection, the marriage may be solemnized in any form, before the Marriage Officer, with three witnesses.",
                "Certificate: the marriage is recorded and the certificate issued — the legal proof of marriage.",
            ] },
            { t: "h2", text: "SMA vs registration under personal laws" },
            { t: "table", head: ["", "Special Marriage Act, 1954", "Registration of an existing marriage"], rows: [
                ["What it does", "Creates the marriage (civil solemnization)", "Certifies a marriage already performed"],
                ["Religion of parties", "Any, or none", "Follows the law the marriage was performed under"],
                ["Notice", "30 days, statutory", "No 30-day notice; verification instead"],
                ["Witnesses", "Three witnesses required", "As per the applicable state registration rules"],
            ] },
            { t: "note", text: "This is general legal information, current as published, and not legal advice. Verify requirements with the concerned Marriage Officer or a qualified advocate for your specific circumstances." },
        ],
        faqs: [
            { q: "Is the 30-day notice period fixed?", a: "Yes — it is part of the statutory scheme. The notice must be given and the objection window runs for 30 days; solemnization follows once it closes without a sustained objection." },
            { q: "Does the SMA require a religious ceremony?", a: "No. The marriage is solemnized in any form the parties choose before the Marriage Officer and three witnesses — that is the point of a civil marriage." },
            { q: "Can a couple already married under personal law marry again under the SMA?", a: "No — a person with a living spouse cannot marry under the SMA. An existing marriage is registered under the applicable rules instead." },
            { q: "Where is the notice filed?", a: "With the Marriage Officer of the district where at least one party has resided for at least 30 days before the notice — in Delhi NCR, the concerned SDM's office." },
        ],
        related: [
            { label: "Interfaith Court Marriage", to: "/interfaith-court-marriage" },
            { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
            { label: "Documents Required", to: "/court-marriage-documents" },
            { label: "Marriage Registration in Delhi", to: "/marriage-registration-delhi" },
        ],
    },
};
