"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useSite } from "./SiteContext";
import { CountUp, Reveal } from "./ui/motion";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}

export function Intro() {
  const { site } = useSite();
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.45"] });
  const words = site.intro.statement.split(" ");

  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imgProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(imgProgress, [0, 1], ["-12%", "12%"]);
  const clip = useTransform(imgProgress, [0, 0.35], ["inset(18% 12% 18% 12%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section id="hotel" className="relative py-24 sm:py-32 lg:py-44">
      <div className="container-x">
        <Reveal>
          <p className="kicker mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            {site.intro.kicker}
          </p>
        </Reveal>
        <p
          ref={textRef}
          className="max-w-6xl font-display text-[clamp(1.9rem,4.6vw,4.4rem)] font-light leading-[1.08] tracking-[-0.01em]"
        >
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-20 grid gap-12 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          <div ref={imgRef} className="relative lg:col-span-7">
            <motion.div style={{ clipPath: clip }} className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[16/11]">
              <motion.div style={{ y: imgY }} className="absolute -inset-y-[14%] inset-x-0">
                <Image src={site.intro.image} alt={site.intro.imageCaption} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </motion.div>
            </motion.div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted">{site.intro.imageCaption}</p>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:col-span-5">
            <Reveal>
              <p className="text-lg leading-relaxed text-fg/80">{site.intro.body}</p>
            </Reveal>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10">
              {site.intro.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-5xl font-light text-accent sm:text-6xl">
                      <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                    <span className="mt-2 block text-sm leading-snug text-muted">{s.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
