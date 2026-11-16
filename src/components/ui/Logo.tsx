"use client";

import clsx from "clsx";
import { useSite } from "../SiteContext";

/** Oval "CsH" medallion, redrawn from the hotel's original logo, with the wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { site, ui } = useSite();
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 64 40" className="h-9 w-auto shrink-0" aria-hidden>
        <ellipse cx="32" cy="20" rx="30.5" ry="18.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="32" cy="20" rx="27" ry="15.2" fill="none" stroke="var(--accent)" strokeWidth="0.7" />
        <text x="32" y="26.5" textAnchor="middle" fontFamily="var(--font-display-family), Georgia, serif" fontSize="17" fill="currentColor">
          C<tspan fontSize="12">s</tspan>H
        </text>
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.2rem]">{site.shortName}</span>
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] opacity-70">{ui.logoSub}</span>
        </span>
      )}
    </span>
  );
}
