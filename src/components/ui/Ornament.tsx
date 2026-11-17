/** Small brand mark placed before section labels. Mo'o Sa'a: a short pitched roof line. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 12" className={`h-3 w-7 shrink-0 ${className}`} aria-hidden>
      <path d="M1 11 15 2l14 9" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 11 15 6l8 5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}
