"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import { EASE, MaskLines, Reveal } from "./ui/motion";

export function Testimonials() {
  const t = site.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = t?.items.length ?? 0;

  useEffect(() => {
    if (!count || paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % count), 7000);
    return () => clearInterval(id);
  }, [count, paused]);

  if (!t || !count) return null;
  const item = t.items[i];

  return (
    <section
      id="avis"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                {t.kicker}
              </p>
            </Reveal>
            <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1] tracking-[-0.01em]">
              <MaskLines lines={[t.title]} />
            </h2>
            {t.intro && (
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-sm text-fg/70">{t.intro}</p>
              </Reveal>
            )}
            <div className="mt-10 flex items-center gap-3">
              {[
                { d: -1, Icon: ArrowLeft, label: "Avis précédent" },
                { d: 1, Icon: ArrowRight, label: "Avis suivant" },
              ].map(({ d, Icon, label }) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setI((v) => (v + d + count) % count)}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-on-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </button>
              ))}
              <span className="ml-3 font-display text-lg tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:col-span-8 lg:min-h-[340px]" aria-live="polite">
            <span className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[10rem] leading-none text-accent/20 sm:-top-16 sm:text-[14rem]" aria-hidden>
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative"
              >
                <blockquote className="font-display text-[clamp(1.75rem,3.8vw,3.5rem)] font-light italic leading-[1.2]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="font-semibold uppercase tracking-[0.2em]">{item.author}</span>
                  <span className="h-px w-8 bg-line" />
                  <span className="text-muted">
                    {item.date} · {item.source}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
            <div className="mt-12 flex gap-2">
              {t.items.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setI(k)}
                  className="group py-3"
                  aria-label={`Afficher l'avis ${k + 1}`}
                  aria-current={k === i}
                >
                  <span className="relative block h-px w-10 overflow-hidden bg-line sm:w-14">
                    {k === i && (
                      <motion.span
                        className="absolute inset-y-0 left-0 bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: paused ? "100%" : "100%" }}
                        transition={{ duration: paused ? 0.3 : 7, ease: "linear" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
