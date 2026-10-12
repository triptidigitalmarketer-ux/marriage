# PRD — Court Marriage Help (Court Marriage Delhi NCR)

## Original problem statement
Build a professional, trustworthy, SEO-friendly court marriage and marriage registration lead-generation website targeting Delhi, Noida, Ghaziabad and wider Delhi NCR. Generate genuine enquiries via phone, WhatsApp and forms. Preserve any existing design; apply Roboto font globally; create main pages, 6 location SEO pages, 7 service SEO pages; accurate, legally current content; on-page + technical SEO; lead forms with backend + email; analytics prep; legal transparency pages. Brand name: "Court Marriage Help".

## Architecture (FARM)
- Frontend: CRA (React 19) + Tailwind + framer-motion + lenis; react-router-dom v7; custom `Seo` hook (no helmet dependency); data-driven page templates (`InfoPage` + `data/locations.js`, `data/services.js`).
- Backend: FastAPI + Motor/MongoDB (`enquiries` collection, PyObjectId/BaseDocument), POST /api/enquiries (validation, honeypot, per-IP rate limit), GET /api/enquiries (x-admin-key), Resend email via Emergent proxy (gated, template-only).
- SEO: static head (title/desc/OG/Twitter/JSON-LD LegalService, noscript content), robots.txt + AI-crawler groups, llms.txt, favicon.svg, build-time sitemap generator keyed to REACT_APP_SITE_URL, per-route meta/canonical only when domain configured.
- Analytics: GA4 injected only with `REACT_APP_GA_MEASUREMENT_ID` + cookie consent; events: call_click, whatsapp_click, enquiry_form_submit, callback_request.

## User personas
1. Anxious couple planning a civil/interfaith marriage — needs process clarity, honest timelines.
2. Married couple needing the certificate — registration route, documents, appointments.
3. Family member researching on behalf of couple — needs trust signals and a fast way to call/WhatsApp.

## Core requirements → status (as of 2026-10-12)
- ✅ Roboto 400/500/600/700/900 globally (verified via computed style)
- ✅ 8 main pages: /, /about-us, /our-services, /contact-us, /faq, /privacy-policy, /terms-and-conditions, /legal-disclaimer
- ✅ 6 location pages (/court-marriage-delhi … faridabad) — unique local content, jurisdiction, local FAQs
- ✅ 7 service pages (registration, process, documents, fees, online application, interfaith, SMA)
- ✅ Lead gen: sticky header Call Now, mobile sticky Call/WhatsApp bar, floating WhatsApp, Request Callback dialog, full enquiry form (name/phone/city/service/message), success confirmation with reference, error states
- ✅ Backend: enquiries stored in Mongo + Resend email (fires when ENQUIRY_EMAIL set); validation + honeypot + rate limit; admin listing
- ✅ SEO: unique titles/descriptions per page, one H1, breadcrumbs, JSON-LD (LegalService + FAQPage + BreadcrumbList), robots.txt, llms.txt, sitemap generator, noindex on 404 semantics
- ✅ Trust: honest do/don't positioning, no fake reviews/ratings/addresses, disclaimers
- ✅ Analytics wiring: GA4 + consent banner; GSC spot marked in index.html
- ✅ Blog (added 2026-10-12): /blog index + 6 posts (30-day notice, court marriage vs registration, certificate-delay mistakes, why the certificate matters, false same-day promises, NRI/foreign-national cases) — unique titles/descriptions, BlogPosting JSON-LD, internal links, homepage teaser, in sitemap (28 routes)
- ✅ Domain wired (2026-10-12): courtmarriagehelp.in — REACT_APP_SITE_URL set; static canonical + og:url in head; per-route canonicals active; sitemap.xml (33 URLs) + robots.txt Sitemap line serve correctly; JSON-LD url set
- ✅ Blog images (2026-10-12): each post has a featured hero image in a clipped frame with descriptive alt text
- ✅ Owner's uploaded wedding photos (2026-10-12): self-hosted at /images/ (hero-wedding.webp, mehndi-hands.webp) and used on the home hero, marriage-registration page, interfaith page and two blog posts; a third uploaded image (pngtree watermark) was excluded — licensing/watermark risk
- ✅ Services page images (2026-10-12): all 7 service cards on /our-services carry relevant photos with alt text
- ✅ FIX (2026-10-12): all 7 service SEO pages crashed on load (missing `glance` data — undefined.map). InfoPage now renders the glance grid conditionally and every service entry gained a unique glance strip; all pages verified rendering
- ✅ Homepage USP section (2026-10-12): headline "Court Marriage Guidance Made Simple Across Delhi NCR" + 5 benefit cards (urgent guidance by eligibility/law, location-wise NCR assistance, document checklist & verification, easy consultation via phone/WhatsApp/form, transparent procedures/timelines/fees) + Book a Consultation CTA card; placed after the marquee, existing design language preserved; also fixed a latent Tailwind @apply error (btn-outline-wa) the new section surfaced
- ⏸ First deploy (50 ECU) awaiting the owner's "confirm deploy" — requested via deploy confirmation
- ⏸ Testimonials: owner confirmed they have real quotes (4-6) and will paste them — section on hold until received (no invented testimonials per content policy)
- ↩️ Background experiments REVERTED (2026-10-12): full-navy page, full-page photo and banner-photo backgrounds — sab revert (owner request). Home page is back to the pre-background state: solid navy hero + footer, warm paper sections, light Trust/CTA (eye-strain fix retained), USP section + owner's logo retained. Unused .home-photo CSS class remains in index.css (harmless)
- ✅ Owner's brand logo applied (2026-10-12): interlocking-rings horizontal logo (dark-bg version) in header + footer (self-hosted /images/logo-horizontal.png), rings SVG recreated as favicon.svg, 1024px icon as apple-touch-icon, and the hero stamp glyph swapped to the rings mark
- ✅ Eye-strain fix (2026-10-12): homepage Trust and CTA sections converted from dark navy to the light paper tone (dark now reserved for hero + footer + cards); layout, branding and Roboto unchanged; verified desktop + mobile
- ✅ Same-day court marriage pages (2026-10-12): /same-day-court-marriage (main, with full consultation form section) + /same-day-court-marriage-delhi, -noida, -ghaziabad, -greater-noida (consultation form in sidebar); existing /court-marriage-faridabad and /court-marriage-gurugram pages gained "Urgent or same-day assistance" sections + links instead of duplicates; Services dropdown/footer/mobile menu list the main page; fees page cross-links it
- ✅ Consultation form (2026-10-12): full name, mobile, optional email (validated), preferred location, service, preferred contact method, preferred contact time, brief requirement, required consent checkbox, honeypot, rate limit; stored via POST /api/enquiries (source=consultation, consent enforced server-side 422); success panel shows reference; admin API returns email_configured flag so the owner can see email delivery needs ENQUIRY_EMAIL

## Backlog
- P0: replace phone/WhatsApp placeholder (site.js — user chose to keep placeholder for now); set ENQUIRY_EMAIL (user skipped); GA4 ID (user skipped). ✅ Domain confirmed: courtmarriagehelp.in — REACT_APP_SITE_URL set, canonicals/og:url/JSON-LD url + sitemap.xml (21 routes) + robots Sitemap line live.
- P1: Google Business Profile (if eligible); Hindi versions of key guides; WhatsApp click-to-chat UTM tagging.
- P2: admin dashboard UI for enquiries; blog/resources for long-tail content; OG share image once domain confirmed.

## Next tasks
1. Replace placeholder phone in site.js (owner-supplied number).
2. Buy domain, set REACT_APP_SITE_URL, redeploy — sitemap + canonicals go live.
3. Set ENQUIRY_EMAIL to owner inbox to switch on enquiry emails.
