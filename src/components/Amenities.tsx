"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";
import { EASE, MaskLines, Reveal } from "./ui/motion";
import { Icon } from "./ui/Icon";

export function Amenities() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                {site.amenitiesSection.kicker}
              </p>
            </Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1] tracking-[-0.01em]">
              <MaskLines lines={[site.amenitiesSection.title]} />
            </h2>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="max-w-md text-fg/70 lg:ml-auto">{site.amenitiesSection.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {site.amenities.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden border-b border-r border-line p-7 sm:p-9"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-surface transition-transform duration-700 ease-out-expo group-hover:scale-y-100" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-accent transition-all duration-700 group-hover:rotate-[360deg] group-hover:border-accent">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-8 font-display text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
