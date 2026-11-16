"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { site } from "@/config/site";
import { EASE, MaskLines, Reveal } from "./ui/motion";

export function Faq() {
  const faq = site.faq;
  const [open, setOpen] = useState<number | null>(0);
  if (!faq) return null;

  return (
    <section id="infos" className="relative bg-bg-soft py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="kicker mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              {faq.kicker}
            </p>
          </Reveal>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1] tracking-[-0.01em] lg:sticky lg:top-32">
            <MaskLines lines={[faq.title]} />
          </h2>
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="font-display text-xl transition-colors group-hover:text-accent sm:text-2xl">{item.q}</span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 ${
                        isOpen ? "rotate-45 border-accent bg-accent text-on-accent" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 leading-relaxed text-fg/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
