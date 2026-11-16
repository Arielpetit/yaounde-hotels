"use client";

import clsx from "clsx";
import { useSite } from "../SiteContext";

/** Three arched windows under a cornice, after the hotel's facade, with the wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { site, ui } = useSite();
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 44 40" className="h-9 w-auto shrink-0" aria-hidden>
        <path d="M2 9h40M5 5h34" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 38V22a4.5 4.5 0 0 1 9 0v16M17.5 38V18a4.5 4.5 0 0 1 9 0v20M28 38V22a4.5 4.5 0 0 1 9 0v16" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M20 38V19.5a2 2 0 0 1 4 0V38" fill="var(--accent)" opacity="0.9" />
        <path d="M2 38h40" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.3rem] font-semibold uppercase tracking-[0.12em]">{site.shortName}</span>
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] opacity-70">{ui.logoSub}</span>
        </span>
      )}
    </span>
  );
}
