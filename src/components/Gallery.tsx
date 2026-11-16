"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSite } from "./SiteContext";
import { EASE, MaskLines, Reveal } from "./ui/motion";
import { useLenis } from "./SmoothScroll";

export function Gallery() {
  const { site, ui } = useSite();
  const [index, setIndex] = useState<number | null>(null);
  const lenis = useLenis();
  const items = site.gallery;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, lenis, close, step]);

  return (
    <section id="galerie" className="relative bg-bg-soft py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="kicker mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" />
                {ui.galleryKicker}
              </p>
            </Reveal>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1] tracking-[-0.01em]">
              <MaskLines lines={[ui.galleryTitle]} accentIndex={0} />
            </h2>
          </div>
          <Reveal delay={0.1}>
            <p className="text-sm text-muted">{ui.galleryHint}</p>
          </Reveal>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 3) * 0.08}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm"
                aria-label={`${ui.enlarge} : ${img.alt}`}
              >
                <div className={img.tall ? "relative aspect-[3/4]" : "relative aspect-[4/3]"}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-105"
                  />
                </div>
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-xl italic text-white">{img.alt}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={items[index].alt}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="relative h-[78svh] w-[92vw] max-w-6xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={items[index].src} alt={items[index].alt} fill sizes="92vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 tabular-nums">
              {index + 1} / {items.length} — {items[index].alt}
            </p>
            {[
              { d: -1, Icon: ChevronLeft, label: ui.prevImage, pos: "left-3 sm:left-6" },
              { d: 1, Icon: ChevronRight, label: ui.nextImage, pos: "right-3 sm:right-6" },
            ].map(({ d, Icon, label, pos }) => (
              <button
                key={d}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(d);
                }}
                className={`absolute top-1/2 ${pos} flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-black`}
                aria-label={label}
              >
                <Icon className="h-5 w-5" strokeWidth={1.4} />
              </button>
            ))}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
              aria-label={ui.close}
            >
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
