import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/Logo";
import { SITE, NAV } from "@/lib/site";
import { trackEvent, EVENTS } from "@/lib/analytics";

const coreLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Our Services", to: "/our-services" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact-us" },
];

function Dropdown({ label, items, testid }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                data-testid={testid}
                className="inline-flex items-center gap-1 rounded px-1 py-1 text-[13px] font-semibold text-white/80 transition-colors duration-200 hover:text-white"
            >
                {label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10} className="z-[60] w-72 rounded-md border-[var(--line)] bg-[var(--card)] p-1.5 shadow-xl">
                {items.map((it) => (
                    <DropdownMenuItem key={it.to} asChild>
                        <Link
                            to={it.to}
                            data-testid={`${testid}-${it.to.replace(/\//g, "")}`}
                            className="rounded px-3 py-2.5 text-[13px] font-medium text-ink transition-colors duration-150 hover:bg-[var(--amber-soft)]"
                        >
                            {it.label}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Header({ onRequestCallback }) {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    return (
        <header className="sticky top-0 z-50 bg-ink/95 text-white shadow-md backdrop-blur-md">
            {/* Utility strip */}
            <div className="hidden border-b border-white/10 md:block">
                <div className="container-x flex items-center justify-between py-1.5 text-[11px] font-medium tracking-wide text-white/60">
                    <span>Free first consultation · Delhi · Noida · Ghaziabad · Greater Noida · Gurugram · Faridabad</span>
                    <span>Court Marriage Help — independent legal consultancy</span>
                </div>
            </div>

            <div className="container-x flex h-16 items-center justify-between gap-4">
                <Link to="/" aria-label="Court Marriage Help — home" data-testid="header-logo-link">
                    <Logo light />
                </Link>

                <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
                    {coreLinks.slice(0, 3).map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            data-testid={`nav-link-${l.to.replace(/\//g, "") || "home"}`}
                            className={`text-[13px] font-semibold transition-colors duration-200 ${pathname === l.to ? "text-white" : "text-white/80 hover:text-white"}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Dropdown label="Services" items={NAV.services} testid="nav-dropdown-services" />
                    <Dropdown label="Locations" items={NAV.locations} testid="nav-dropdown-locations" />
                    {coreLinks.slice(3).map((l) => (
                        <Link
                            key={l.to}
                            to={l.to}
                            data-testid={`nav-link-${l.to.replace(/\//g, "") || "home"}`}
                            className={`text-[13px] font-semibold transition-colors duration-200 ${pathname === l.to ? "text-white" : "text-white/80 hover:text-white"}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2.5">
                    <a
                        href={SITE.phoneHref}
                        onClick={() => trackEvent(EVENTS.CALL, { location: "header" })}
                        data-testid="header-call-now-button"
                        className="btn btn-amber hidden !px-4 !py-2.5 sm:inline-flex"
                        aria-label={`Call ${SITE.phoneDisplay}`}
                    >
                        <Phone className="h-4 w-4" />
                        Call Now
                    </a>
                    <button
                        onClick={() => {
                            trackEvent(EVENTS.CALLBACK);
                            onRequestCallback();
                        }}
                        data-testid="header-callback-trigger"
                        className="btn btn-ghost-light hidden !px-4 !py-2.5 md:inline-flex"
                    >
                        Request Callback
                    </button>
                    <button
                        className="rounded p-2 lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        data-testid="mobile-menu-toggle"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="border-t border-white/10 bg-ink lg:hidden" data-testid="mobile-menu-panel">
                    <nav className="container-x flex flex-col gap-0.5 py-4" aria-label="Mobile">
                        {coreLinks.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-link-${l.to.replace(/\//g, "") || "home"}`}
                                className="rounded px-2 py-2.5 text-sm font-semibold text-white/85 hover:bg-white/10"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <p className="px-2 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--amber)]">Services</p>
                        {NAV.services.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-link-${l.to.replace(/\//g, "")}`}
                                className="rounded px-2 py-2 text-[13px] text-white/70 hover:bg-white/10"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <p className="px-2 pb-1 pt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--amber)]">Locations</p>
                        {NAV.locations.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-link-${l.to.replace(/\//g, "")}`}
                                className="rounded px-2 py-2 text-[13px] text-white/70 hover:bg-white/10"
                            >
                                {l.label}
                            </Link>
                        ))}
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <a href={SITE.phoneHref} onClick={() => trackEvent(EVENTS.CALL, { location: "mobile-menu" })} className="btn btn-amber" data-testid="mobile-call-now-button">
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    onRequestCallback();
                                }}
                                className="btn btn-ghost-light"
                                data-testid="mobile-callback-trigger"
                            >
                                Callback
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
