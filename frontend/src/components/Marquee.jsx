export default function Marquee({ items }) {
    const row = (hidden) => (
        <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
            {items.map((it, i) => (
                <span key={i} className="flex items-center">
                    <span className="px-6 text-sm font-bold uppercase tracking-[0.25em] sm:px-10 sm:text-base">{it}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
                </span>
            ))}
        </div>
    );
    return (
        <div className="marquee border-y border-ink/20 bg-[var(--amber)] py-3.5 text-ink" data-testid="city-marquee">
            <div className="marquee-track">
                {row(false)}
                {row(true)}
            </div>
        </div>
    );
}
