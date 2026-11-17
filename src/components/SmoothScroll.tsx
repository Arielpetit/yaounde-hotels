"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/** Gentle inertial scrolling (skipped when the visitor prefers reduced motion). */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: { offset: -96 }, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // New page: start at the top.
  useEffect(() => {
    const l = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (window.location.hash) return;
    if (l) l.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/** Locks or unlocks page scrolling (menus, lightbox). */
export function setScrollLocked(locked: boolean) {
  const l = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (locked) l?.stop();
  else l?.start();
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

export function scrollToTop() {
  const l = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (l) l.scrollTo(0, { duration: 1.4 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
