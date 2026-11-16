"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { useHref, useSite } from "../SiteContext";

/** Home preview: four images and a link to the gallery page. */
export function GalleryPreview() {
  const { site, ui } = useSite();
  const href = useHref();
  const p = site.pages.galerie;
  const imgs = site.gallery.slice(0, 4);
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          kicker={p.kicker}
          title={p.title}
          aside={
            <Link href={href("galerie")} className="link-arrow">
              {ui.fullGallery}
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {imgs.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06} className={i % 2 === 1 ? "md:mt-10" : ""}>
              <Link href={href("galerie")} className="media img-zoom relative block aspect-[3/4]">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Gallery page: masonry grid with a keyboard-friendly lightbox. */
export function GalleryGrid() {
  const { site, ui } = useSite();
  const items = site.gallery;
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <section id="main" className="section">
      <div className="container-x columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((img, i) => (
          <Reveal key={img.src + i} delay={(i % 3) * 0.06}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="media img-zoom group relative block w-full"
              aria-label={`${ui.enlarge} : ${img.alt}`}
            >
              <div className={img.tall ? "relative aspect-[3/4]" : "relative aspect-[4/3]"}>
                <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
              </div>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-left text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          </Reveal>
        ))}
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
            <motion.div
              key={index}
              className="relative h-[76svh] w-[90vw] max-w-6xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={items[index].src} alt={items[index].alt} fill sizes="90vw" className="object-contain" />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 tabular-nums">
              {index + 1} / {items.length} · {items[index].alt}
            </p>
            {[
              { d: -1, I: ChevronLeft, label: ui.prevImage, pos: "left-3 sm:left-6" },
              { d: 1, I: ChevronRight, label: ui.nextImage, pos: "right-3 sm:right-6" },
            ].map(({ d, I, label, pos }) => (
              <button
                key={d}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(d);
                }}
                className={`absolute top-1/2 ${pos} flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-black`}
                aria-label={label}
              >
                <I className="h-5 w-5" strokeWidth={1.5} />
              </button>
            ))}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white hover:text-black"
              aria-label={ui.close}
              autoFocus
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
