"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Ornament } from "../ui/Ornament";
import { useSite } from "../SiteContext";

export function Testimonials() {
  const { site, ui } = useSite();
  const t = site.testimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = t?.items.length ?? 0;

  useEffect(() => {
    if (!count || paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % count), 8000);
    return () => clearInterval(id);
  }, [count, paused]);

  if (!t || !count) return null;
  const item = t.items[i];

  return (
    <section
      className="section bg-bg-soft"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      <div className="container-x mx-auto max-w-3xl text-center">
        <p className="label flex items-center justify-center gap-3 text-accent">
          <Ornament />
          {t.kicker}
        </p>
        <div className="relative mt-8 min-h-[220px] sm:min-h-[180px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-display text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.4] text-balance">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-semibold text-fg">{item.author}</span> · {item.date} · {item.source}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + count) % count)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            aria-label={ui.prevReview}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
          </button>
          <div className="flex gap-2" aria-hidden>
            {t.items.map((_, k) => (
              <span key={k} className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-6 bg-accent" : "w-1.5 bg-[var(--line-strong)]"}`} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % count)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            aria-label={ui.nextReview}
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
