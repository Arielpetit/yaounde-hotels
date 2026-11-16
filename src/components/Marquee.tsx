import { site } from "@/config/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-soft py-7" aria-hidden>
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center font-display text-3xl font-light italic sm:text-5xl">
            <span className="px-8 sm:px-12">{item}</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent sm:h-5 sm:w-5" fill="currentColor">
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
