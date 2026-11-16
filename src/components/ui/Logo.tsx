"use client";

import { useSite } from "../SiteContext";
import clsx from "clsx";

/** Arched monogram (a nod to a vaulted cellar) + wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { site, ui } = useSite();
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 48" className="h-9 w-auto shrink-0" aria-hidden>
        <path
          d="M3 47V20C3 10.6 10.6 3 20 3s17 7.6 17 17v27"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M8 47V21C8 14.4 13.4 9 20 9s12 5.4 12 12v26" fill="none" stroke="var(--accent)" strokeWidth="0.8" />
        <text
          x="20"
          y="34"
          textAnchor="middle"
          className="font-display"
          fontSize="13"
          fontStyle="italic"
          fill="currentColor"
        >
          {site.monogram}
        </text>
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.35rem] tracking-wide">{site.shortName}</span>
          <span className="mt-1 text-[0.58rem] uppercase tracking-[0.42em] text-muted">{ui.logoSub}</span>
        </span>
      )}
    </span>
  );
}
