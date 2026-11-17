"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { useSite } from "../SiteContext";

/** Key practical facts at a glance: check-in, breakfast, parking, languages… */
export function Practical({ tone = "plain" }: { tone?: "plain" | "soft" }) {
  const { site } = useSite();
  const p = site.practical;
  return (
    <section className={`section ${tone === "soft" ? "bg-bg-soft" : ""}`}>
      <div className="container-x">
        <SectionHeading kicker={p.kicker} title={p.title} align="center" />
        <RevealGroup as="dl" className="mt-14 grid gap-px overflow-hidden rounded-[var(--media-radius,4px)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it) => (
            <RevealItem key={it.label} className="group flex gap-4 bg-surface p-6 transition-colors duration-500 hover:bg-bg-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg-soft text-accent transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
                <Icon name={it.icon} className="h-5 w-5" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{it.label}</dt>
                <dd className="mt-1.5 text-[0.95rem]">{it.value}</dd>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
