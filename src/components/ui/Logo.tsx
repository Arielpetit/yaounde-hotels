import { site } from "@/config/site";
import clsx from "clsx";

/** Rising-sun roundel over a horizon line, plus wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 44 44" className="h-10 w-10 shrink-0" aria-hidden>
        <circle cx="22" cy="22" r="20.5" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M9 27a13 13 0 0 1 26 0" fill="var(--accent)" />
        <path d="M5 27h34" stroke="currentColor" strokeWidth="1" />
        <path d="M10 31h24M14 35h16" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <text x="22" y="24" textAnchor="middle" className="font-display" fontSize="8" fontStyle="italic" fill="var(--on-accent)">
          {site.monogram}
        </text>
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.4rem] italic tracking-tight">{site.shortName}</span>
          <span className="mt-1 text-[0.56rem] uppercase tracking-[0.45em] text-muted">Hôtel · Yaoundé</span>
        </span>
      )}
    </span>
  );
}
