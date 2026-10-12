// Central site configuration. REPLACE PLACEHOLDERS before going live:
// phone/WhatsApp: +9198XXXXXXXX is a placeholder chosen by the owner.
export const SITE = {
    name: "Court Marriage Help",
    descriptor: "Court Marriage & Marriage Registration — Delhi NCR",
    // PLACEHOLDER — replace with the real business number (display + links).
    phoneDisplay: "+91 98XXX XXXXX",
    phoneHref: "tel:+9198XXXXXXXX",
    whatsappHref:
        "https://wa.me/9198XXXXXXXX?text=" +
        encodeURIComponent(
            "Hello, I need guidance about court marriage / marriage registration in Delhi NCR."
        ),
    cities: ["Delhi", "Noida", "Ghaziabad", "Greater Noida", "Gurugram", "Faridabad"],
};

export const CITY_OPTIONS = [...SITE.cities, "Other NCR city"];

export const SERVICE_OPTIONS = [
    "Court marriage (Special Marriage Act)",
    "Marriage registration of an existing marriage",
    "Interfaith court marriage guidance",
    "Online application assistance",
    "Document preparation",
    "Urgent / priority appointment help",
    "Not sure — need guidance",
];

export const NAV = {
    services: [
        { label: "Same Day Court Marriage Assistance", to: "/same-day-court-marriage" },
        { label: "Marriage Registration in Delhi", to: "/marriage-registration-delhi" },
        { label: "Court Marriage Process in Delhi", to: "/court-marriage-process-delhi" },
        { label: "Documents Required", to: "/court-marriage-documents" },
        { label: "Fees & Charges in Delhi", to: "/court-marriage-fees-delhi" },
        { label: "Online Application Assistance", to: "/online-court-marriage-application-delhi" },
        { label: "Interfaith Court Marriage", to: "/interfaith-court-marriage" },
        { label: "Special Marriage Act, 1954", to: "/special-marriage-act" },
    ],
    locations: [
        { label: "Court Marriage in Delhi", to: "/court-marriage-delhi" },
        { label: "Court Marriage in Noida", to: "/court-marriage-noida" },
        { label: "Court Marriage in Ghaziabad", to: "/court-marriage-ghaziabad" },
        { label: "Court Marriage in Greater Noida", to: "/court-marriage-greater-noida" },
        { label: "Court Marriage in Gurugram", to: "/court-marriage-gurugram" },
        { label: "Court Marriage in Faridabad", to: "/court-marriage-faridabad" },
    ],
};
