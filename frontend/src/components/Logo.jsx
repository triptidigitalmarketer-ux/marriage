export default function Logo({ light = true }) {
    return (
        <span className="inline-flex items-center" data-testid="brand-logo" data-light={light}>
            <img
                src="/images/logo-horizontal.png"
                alt="Court Marriage Help — Delhi NCR logo"
                className="h-10 w-auto sm:h-11"
                data-testid="brand-logo-image"
            />
        </span>
    );
}
