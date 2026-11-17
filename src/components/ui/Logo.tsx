"use client";

import clsx from "clsx";
import { useSite } from "../SiteContext";

/** Double gold roof line over a small building, after the hotel's logo, with the wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { site, ui } = useSite();
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 44 36" className="h-9 w-auto shrink-0" aria-hidden>
        <path d="M2 17 22 3l20 14" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 22 22 12l14 10" fill="none" stroke="var(--accent-2)" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 34V25h12v9" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M22 25v9M16 29.5h12" stroke="currentColor" strokeWidth="1" />
      </svg>
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.25rem] font-semibold">{site.shortName}</span>
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] opacity-70">{ui.logoSub}</span>
        </span>
      )}
    </span>
  );
}
