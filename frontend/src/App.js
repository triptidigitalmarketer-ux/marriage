import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import CallbackForm from "@/components/CallbackForm";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Faq from "@/pages/Faq";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import LocationPage from "@/pages/LocationPage";
import ServicePage from "@/pages/ServicePage";
import NotFound from "@/pages/NotFound";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        if (this.state.error) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] p-6 text-center" data-testid="error-boundary">
                    <div>
                        <h1 className="text-2xl font-black text-ink">Something went wrong</h1>
                        <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
                            An unexpected error occurred. Please reload the page — if it
                            persists, call or WhatsApp us for help with your enquiry.
                        </p>
                        <button className="btn btn-ink mt-6" onClick={() => window.location.reload()} data-testid="error-reload-button">
                            Reload page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

function ScrollAndSmooth() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        if (typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, []);
    return null;
}

function CallbackDialog({ open, onOpenChange }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md rounded-lg bg-[var(--card)]" data-testid="callback-dialog">
                <DialogHeader>
                    <DialogTitle className="text-left text-xl font-black text-ink">Request a callback</DialogTitle>
                    <DialogDescription className="text-left text-[13px] leading-relaxed text-[var(--muted)]">
                        Free first consultation — we will call you back on the number you give.
                    </DialogDescription>
                </DialogHeader>
                <CallbackForm testidPrefix="dialog-callback" />
            </DialogContent>
        </Dialog>
    );
}

function App() {
    const [cbOpen, setCbOpen] = useState(false);
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <ScrollAndSmooth />
                <div className="flex min-h-screen flex-col bg-[var(--paper)]">
                    <Header onRequestCallback={() => setCbOpen(true)} />
                    <main className="flex-1 pb-14 md:pb-0">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-us" element={<About />} />
                            <Route path="/our-services" element={<Services />} />
                            <Route path="/contact-us" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-and-conditions" element={<Terms />} />
                            <Route path="/legal-disclaimer" element={<Disclaimer />} />

                            <Route path="/court-marriage-delhi" element={<LocationPage slug="delhi" />} />
                            <Route path="/court-marriage-noida" element={<LocationPage slug="noida" />} />
                            <Route path="/court-marriage-ghaziabad" element={<LocationPage slug="ghaziabad" />} />
                            <Route path="/court-marriage-greater-noida" element={<LocationPage slug="greater-noida" />} />
                            <Route path="/court-marriage-gurugram" element={<LocationPage slug="gurugram" />} />
                            <Route path="/court-marriage-faridabad" element={<LocationPage slug="faridabad" />} />

                            <Route path="/marriage-registration-delhi" element={<ServicePage slug="marriage-registration-delhi" />} />
                            <Route path="/court-marriage-process-delhi" element={<ServicePage slug="court-marriage-process-delhi" />} />
                            <Route path="/court-marriage-documents" element={<ServicePage slug="court-marriage-documents" />} />
                            <Route path="/court-marriage-fees-delhi" element={<ServicePage slug="court-marriage-fees-delhi" />} />
                            <Route path="/online-court-marriage-application-delhi" element={<ServicePage slug="online-court-marriage-application-delhi" />} />
                            <Route path="/interfaith-court-marriage" element={<ServicePage slug="interfaith-court-marriage" />} />
                            <Route path="/special-marriage-act" element={<ServicePage slug="special-marriage-act" />} />

                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                    <StickyCTA />
                    <CookieConsent />
                    <Toaster position="top-center" richColors />
                    <CallbackDialog open={cbOpen} onOpenChange={setCbOpen} />
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
