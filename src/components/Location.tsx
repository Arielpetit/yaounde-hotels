"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { useSite } from "./SiteContext";
import { MaskLines, Reveal } from "./ui/motion";

export function Location() {
  const { site, ui } = useSite();
  const [mapActive, setMapActive] = useState(false);
  const q = encodeURIComponent(site.location.mapQuery);
  const embed = `https://maps.google.com/maps?q=${q}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <section id="acces" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              {site.location.kicker}
            </p>
          </Reveal>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.01em]">
            <MaskLines lines={[site.location.title]} />
          </h2>

          <Reveal delay={0.1}>
            <address className="mt-10 flex gap-4 not-italic">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
              <span className="text-lg leading-relaxed">
                {site.location.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </address>
          </Reveal>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {site.location.landmarks.map((l, i) => (
              <Reveal key={l.label} delay={0.05 * i}>
                <div className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="text-fg/75">{l.label}</dt>
                  <dd className="text-right font-display text-xl text-accent">{l.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          {site.location.note && <p className="mt-4 text-xs text-muted">{site.location.note}</p>}

          <Reveal delay={0.2}>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-12 items-center gap-3 rounded-full border border-fg/25 px-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.6} />
              {ui.directions}
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="relative h-[420px] overflow-hidden rounded-sm border border-line sm:h-[520px] lg:h-full lg:min-h-[600px]">
            {mapActive ? (
              <iframe
                title={`${ui.map} — ${site.name}`}
                src={embed}
                className="absolute inset-0 h-full w-full"
                style={{ filter: "var(--map-filter, grayscale(0.4) contrast(1.05))" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapActive(true)}
                className="group absolute inset-0 flex flex-col items-center justify-center gap-5 bg-surface"
              >
                <svg className="absolute inset-0 h-full w-full opacity-[0.15]" aria-hidden>
                  <defs>
                    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <path d="M-20 300 C 200 220, 380 420, 900 260" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M300 -20 C 340 200, 260 380, 420 900" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
                <span className="relative flex h-20 w-20 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent">
                    <MapPin className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                </span>
                <span className="relative text-[0.78rem] font-semibold uppercase tracking-[0.2em] transition-colors group-hover:text-accent">
                  {ui.showMap}
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
