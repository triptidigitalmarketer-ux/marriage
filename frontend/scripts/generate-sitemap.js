/**
 * Generates public/sitemap.xml when REACT_APP_SITE_URL is set to the real
 * production domain (https://...). With no domain configured this exits
 * quietly — a sitemap with a guessed or preview domain is never shipped.
 */
const fs = require("fs");
const path = require("path");

const ROUTES = [
    "/",
    "/about-us",
    "/our-services",
    "/contact-us",
    "/faq",
    "/privacy-policy",
    "/terms-and-conditions",
    "/legal-disclaimer",
    "/court-marriage-delhi",
    "/court-marriage-noida",
    "/court-marriage-ghaziabad",
    "/court-marriage-greater-noida",
    "/court-marriage-gurugram",
    "/court-marriage-faridabad",
    "/marriage-registration-delhi",
    "/court-marriage-process-delhi",
    "/court-marriage-documents",
    "/court-marriage-fees-delhi",
    "/online-court-marriage-application-delhi",
    "/interfaith-court-marriage",
    "/special-marriage-act",
    "/blog",
    "/blog/special-marriage-act-30-day-notice-explained",
    "/blog/court-marriage-vs-marriage-registration",
    "/blog/marriage-registration-mistakes-delhi-ncr",
    "/blog/why-marriage-certificate-matters",
    "/blog/same-day-court-marriage-promises",
    "/blog/nri-foreign-national-court-marriage",
    "/same-day-court-marriage",
    "/same-day-court-marriage-delhi",
    "/same-day-court-marriage-noida",
    "/same-day-court-marriage-ghaziabad",
    "/same-day-court-marriage-greater-noida",
];

try {
    const raw = (process.env.REACT_APP_SITE_URL || "").trim().replace(/\/+$/, "");
    if (!/^https:\/\/[a-z0-9.-]+(:\d+)?$/.test(raw)) {
        console.log("[sitemap] REACT_APP_SITE_URL not set to a production https:// domain — skipped");
        process.exit(0);
    }
    const today = new Date().toISOString().slice(0, 10);
    const body = ROUTES.map(
        (r) => `  <url><loc>${raw}${r}</loc><lastmod>${today}</lastmod></url>`
    ).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
    fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
    console.log(`[sitemap] written for ${raw} (${ROUTES.length} routes)`);
} catch (e) {
    console.warn("[sitemap] skipped:", e.message);
}
process.exit(0);
