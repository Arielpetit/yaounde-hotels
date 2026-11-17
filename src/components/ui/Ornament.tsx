/** Small brand mark placed before section labels. La Cave Simson: a short rule ending in an oval. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 10" className={`h-2.5 w-8 shrink-0 ${className}`} aria-hidden>
      <path d="M0 5h22" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="28" cy="5" rx="5" ry="3.6" fill="none" stroke="var(--accent-2)" strokeWidth="1.1" />
    </svg>
  );
}
