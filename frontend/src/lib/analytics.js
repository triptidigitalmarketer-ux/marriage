// Google Analytics 4 — loaded only when REACT_APP_GA_MEASUREMENT_ID is set
// AND the visitor accepts the consent banner. No invented IDs.

const GA_ID = (process.env.REACT_APP_GA_MEASUREMENT_ID || "").trim();

export function initAnalytics() {
    if (!GA_ID || document.getElementById("ga4-script")) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
    const s = document.createElement("script");
    s.async = true;
    s.id = "ga4-script";
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
}

export function trackEvent(name, params = {}) {
    if (window.gtag) window.gtag("event", name, params);
}

export const EVENTS = {
    CALL: "call_click",
    WHATSAPP: "whatsapp_click",
    FORM: "enquiry_form_submit",
    CALLBACK: "callback_request",
};
