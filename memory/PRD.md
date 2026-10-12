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
