export default function Logo({ light = false }) {
    const ink = light ? "#F7F3EA" : "#0B192C";
    return (
        <span className="inline-flex items-center gap-2.5" data-testid="brand-logo">
            <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
                <rect width="64" height="64" rx="14" fill="#0B192C" />
                <path d="M32 15v30" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M20 49h24" stroke="#F7F3EA" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M32 15l-5 4" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M18 26h28" stroke="#F7F3EA" strokeWidth="3" strokeLinecap="round" />
                <path d="M18 26l-5.5 11h11L18 26z" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M46 26l-5.5 11h11L46 26z" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="32" cy="15" r="2.6" fill="#F7F3EA" />
            </svg>
            <span className="leading-none">
                <span className="block text-[15px] font-black uppercase tracking-[0.08em]" style={{ color: ink }}>
                    Court Marriage
                </span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--amber)]">
                    Help · Delhi NCR
                </span>
            </span>
        </span>
    );
}
