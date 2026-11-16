/** Small brand mark placed before section labels. Massao Palace: a rule ending in an arched window. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 12" className={`h-3 w-8 shrink-0 ${className}`} aria-hidden>
      <path d="M0 8h22" stroke="currentColor" strokeWidth="1" />
      <path d="M25 11.5V6.5a4 4 0 0 1 8 0v5" fill="none" stroke="var(--accent-2)" strokeWidth="1.1" />
    </svg>
  );
}
