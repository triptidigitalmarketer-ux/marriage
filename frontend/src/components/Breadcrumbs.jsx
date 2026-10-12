import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
    return (
        <nav aria-label="Breadcrumb" data-testid="breadcrumbs">
            <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-white/60">
                {items.map((it, i) => {
                    const last = i === items.length - 1;
                    return (
                        <li key={i} className="flex items-center gap-1">
                            {last ? (
                                <span aria-current="page" className="text-[var(--amber)]">{it.label}</span>
                            ) : it.to ? (
                                <>
                                    <Link to={it.to} className="transition-colors duration-200 hover:text-white" data-testid={`breadcrumb-${it.label.toLowerCase().replace(/\s+/g, "-")}`}>
                                        {it.label}
                                    </Link>
                                    <ChevronRight className="h-3 w-3 opacity-50" />
                                </>
                            ) : (
                                <span>{it.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
