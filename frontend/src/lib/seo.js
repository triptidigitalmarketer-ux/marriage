import { useEffect } from "react";

const SITE_URL = (process.env.REACT_APP_SITE_URL || "").trim().replace(/\/+$/, "");

function upsertMeta(attr, key, content) {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function upsertLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!href) {
        if (el) el.remove();
        return;
    }
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

function upsertJsonLd(data) {
    let el = document.getElementById("route-jsonld");
    if (!data) {
        if (el) el.remove();
        return;
    }
    if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = "route-jsonld";
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

/**
 * Per-route SEO: title, description, canonical, Open Graph, Twitter card, JSON-LD.
 * Canonical/og:url are emitted only when REACT_APP_SITE_URL is configured —
 * never ship a placeholder or preview host as a canonical.
 */
export function Seo({ title, description, path, jsonLd }) {
    const jsonLdKey = JSON.stringify(jsonLd);
    useEffect(() => {
        document.title = title;
        upsertMeta("name", "description", description);
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:type", "website");
        upsertMeta("property", "og:site_name", "Court Marriage Help");
        upsertMeta("property", "og:locale", "en_IN");
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);
        upsertMeta("name", "twitter:card", "summary");
        upsertLink("canonical", SITE_URL ? `${SITE_URL}${path}` : null);
        upsertMeta("property", "og:url", SITE_URL ? `${SITE_URL}${path}` : null);
        upsertJsonLd(jsonLd);
    }, [title, description, path, jsonLdKey]);
    return null;
}

export const SITE_URL_CONFIGURED = SITE_URL;
