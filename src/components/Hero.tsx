"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, MapPin, Phone } from "lucide-react";
import { useSite } from "./SiteContext";
import { EASE, MaskLines, Magnetic } from "./ui/motion";
import { useScrollTo } from "./SmoothScroll";
import { useIntroReady } from "./Preloader";

export function Hero() {
  const { site, ui } = useSite();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollTo = useScrollTo();
  const ready = useIntroReady();

  return (
    <section id="top" ref={ref} className="hero-scope relative isolate flex min-h-[100svh] flex-col overflow-hidden text-fg">
      <motion.div className="absolute inset-0 -z-10" style={{ y: imgY }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={ready ? { scale: 1.05 } : { scale: 1.25 }}
          transition={{ duration: 2.6, ease: EASE, delay: 0 }}
        >
          <Image src={site.hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="container-x flex flex-1 flex-col justify-end pb-10 pt-32 sm:pb-14 lg:pb-16"
      >
        <motion.p
          className="kicker mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
        >
          {site.hero.eyebrow}
        </motion.p>
        <h1 className="font-display text-[clamp(3rem,10.5vw,9.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-fg">
          <MaskLines
            lines={site.hero.titleLines}
            play={ready}
            delay={0.25}
            accentIndex={1}
          />
        </h1>
        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            className="max-w-xl text-base leading-relaxed text-fg/80 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 0.7 }}
          >
            {site.hero.subtitle}
          </motion.p>
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease: EASE, delay: 0.85 }}
          >
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex h-14 items-center rounded-full bg-fg px-8 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-bg transition-colors hover:bg-accent hover:text-on-accent"
              >
                {site.hero.cta}
              </button>
            </Magnetic>
            <button
              type="button"
              onClick={() => scrollTo("#hotel")}
              className="group hidden h-14 w-14 items-center justify-center rounded-full border border-fg/30 sm:flex"
              aria-label={ui.discover}
            >
              <ArrowDown className="h-5 w-5 transition-transform duration-500 group-hover:translate-y-1" strokeWidth={1.3} />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="container-x relative z-10 pb-6 sm:pb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1.1, ease: EASE, delay: 1 }}
      >
        <div className="hidden items-stretch overflow-hidden rounded-2xl border border-fg/15 bg-bg/35 backdrop-blur-xl md:grid md:grid-cols-[1.4fr_1fr_auto]">
          <div className="flex items-center gap-4 border-r border-fg/10 px-6 py-5">
            <MapPin className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
            <div className="min-w-0">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-fg/60">{ui.address}</p>
              <p className="truncate text-sm text-fg">{site.location.address.join(" · ")}</p>
            </div>
          </div>
          {site.contact.phones[0] && (
            <a href={site.contact.phones[0].href} className="group flex items-center gap-4 border-r border-fg/10 px-6 py-5">
              <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-fg/60">{site.contact.phones[0].label}</p>
                <p className="text-sm text-fg transition-colors group-hover:text-accent">{site.contact.phones[0].value}</p>
              </div>
            </a>
          )}
          <button
            type="button"
            onClick={() => scrollTo("#hotel")}
            className="group flex items-center gap-3 px-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-fg transition-colors hover:bg-fg/10"
          >
            {ui.discover}
            <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" strokeWidth={1.5} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
