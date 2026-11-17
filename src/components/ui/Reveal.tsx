"use client";

import { motion, useInView, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "-10% 0px" } as const;

/** Fade-and-rise when an element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  y?: number;
}) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

const groupVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Container whose RevealItem children appear one after another. */
export function RevealGroup({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "ul" | "dl" }) {
  const Comp = as === "ul" ? motion.ul : as === "dl" ? motion.dl : motion.div;
  return (
    <Comp className={className} variants={groupVariants} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      {children}
    </Comp>
  );
}

export function RevealItem({ children, className, as = "div" }: { children: React.ReactNode; className?: string; as?: "div" | "li" }) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}

/** Image wrapper: a curtain lifts while the photo settles from a slight zoom, then drifts on scroll. */
export function ImageReveal({
  children,
  className,
  parallax = true,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={clsx("overflow-hidden", !className?.includes("absolute") && "relative", className)}
      initial={{ clipPath: "inset(12% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.2, ease: EASE, delay }}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax ? { y, scale: 1.12 } : undefined}
        initial={parallax ? undefined : { scale: 1.12 }}
        whileInView={parallax ? undefined : { scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.6, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Heading whose words rise in sequence. Keeps real text (with spaces) for screen readers and search. */
export function SplitWords({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  immediate = false,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const show = immediate || inView;
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "105%" }}
              animate={show ? { y: "0%" } : { y: "105%" }}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.045 }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </Tag>
  );
}

/** Animates the first number found in a value like "300+", "24h/24" or "120 m²". */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const m = value.match(/^(\D*)(\d+)(.*)$/);
  const target = m ? Number(m[2]) : 0;
  const hasNumber = Boolean(m);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!hasNumber || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, hasNumber]);

  if (!m) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden>
        {m[1]}
        {inView ? n : 0}
        {m[3]}
      </span>
    </span>
  );
}
