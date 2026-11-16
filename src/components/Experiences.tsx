"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSite } from "./SiteContext";
import { EASE, MaskLines, Reveal } from "./ui/motion";

export function Experiences() {
  const { site } = useSite();
  const [active, setActive] = useState(0);
  const items = site.experiences;

  return (
    <section id="experiences" className="relative bg-bg-soft py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <p className="kicker mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            {site.experiencesSection.kicker}
          </p>
        </Reveal>
        <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1] tracking-[-0.01em]">
          <MaskLines lines={[site.experiencesSection.title]} accentIndex={0} />
        </h2>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          {/* Sticky visual (desktop) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28 aspect-[4/5] max-h-[calc(100vh-9rem)] w-full overflow-hidden rounded-sm">
              <AnimatePresence initial={false}>
                <motion.div
                  key={items[active].id}
                  className="absolute inset-0"
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <Image src={items[active].image} alt={items[active].title} fill sizes="45vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-6 left-6 z-10 font-display text-7xl font-light italic text-white/90">
                {String(active + 1).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-6">
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="border-t border-line py-10 last:border-b lg:flex lg:min-h-[70vh] lg:flex-col lg:justify-center lg:py-16"
              >
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-sm lg:hidden">
                  <Image src={item.image} alt={item.title} fill sizes="100vw" className="object-cover" />
                </div>
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm italic text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted">{item.kicker}</p>
                  </div>
                  <h3
                    className="mt-4 font-display text-4xl font-light transition-colors duration-700 sm:text-5xl lg:text-6xl"
                    style={{ color: active === i ? "var(--fg)" : undefined }}
                  >
                    <span className={active === i ? "" : "lg:text-fg/35"}>{item.title}</span>
                  </h3>
                  <p className="mt-5 max-w-lg leading-relaxed text-fg/75">{item.description}</p>
                  <ul className="mt-7 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-fg/85">
                        <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
