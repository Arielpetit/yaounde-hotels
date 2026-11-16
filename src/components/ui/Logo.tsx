import { site } from "@/config/site";
import clsx from "clsx";

/** Crest monogram: a palace pediment over twin columns, plus wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 44 48" className="h-10 w-auto shrink-0" aria-hidden>
        <path d="M4 15L22 4l18 11" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
        <path d="M7 15h30" stroke="currentColor" strokeWidth="1" />
        <path d="M9 18v22M35 18v22" stroke="currentColor" strokeWidth="1" />
        <path d="M5 43h34M7 40h30" stroke="currentColor" strokeWidth="1" />
        <circle cx="22" cy="10.5" r="1.3" fill="var(--accent)" />
        <text x="22" y="34" textAnchor="middle" className="font-display" fontSize="11.5" letterSpacing="0.5" fill="currentColor">
          {site.monogram}
        </text>
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.2rem] uppercase tracking-[0.14em]">{site.shortName}</span>
          <span className="mt-1.5 text-[0.56rem] uppercase tracking-[0.5em] text-muted">Hôtel · Yaoundé</span>
        </span>
      )}
    </span>
  );
}
