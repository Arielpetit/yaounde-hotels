"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { Logo } from "./ui/Logo";
import { EASE } from "./ui/motion";

const READY_EVENT = "intro:ready";

function markReady() {
  document.documentElement.dataset.introReady = "1";
  window.dispatchEvent(new Event(READY_EVENT));
}

/** True once the preloader has started leaving (or was skipped). */
export function useIntroReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (document.documentElement.dataset.introReady === "1") {
      setReady(true);
      return;
    }
    const on = () => setReady(true);
    window.addEventListener(READY_EVENT, on);
    return () => window.removeEventListener(READY_EVENT, on);
  }, []);
  return ready;
}

/** Brief brand intro, shown once per browser session. */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("preloader-seen") === "1";
      sessionStorage.setItem("preloader-seen", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      markReady();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else
        setTimeout(() => {
          setVisible(false);
          markReady();
        }, 250);
    };
    raf = requestAnimationFrame(tick);
    // Safety net: rAF pauses in background tabs, never block the page.
    const fallback = setTimeout(() => {
      setVisible(false);
      markReady();
    }, 2600);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!visible) document.documentElement.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg text-fg"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1, ease: EASE }}
          aria-hidden
        >
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE }}>
            <Logo className="scale-150" />
          </motion.div>
          <motion.p
            className="mt-10 font-display text-lg italic text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {site.tagline}
          </motion.p>
          <div className="absolute bottom-8 left-0 right-0 container-x flex items-end justify-between">
            <span className="kicker">{site.shortName}</span>
            <span className="font-display text-5xl tabular-nums sm:text-7xl">{count}</span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
