"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useSite } from "./SiteContext";
import type { Room } from "@/config/types";
import { EASE, MaskLines, Reveal } from "./ui/motion";
import { Icon } from "./ui/Icon";
import { useLenis, useScrollTo } from "./SmoothScroll";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function RoomCard({ room, index, onOpen }: { room: Room; index: number; onOpen: () => void }) {
  const { site, ui } = useSite();
  return (
    <article className="group relative flex h-full w-full flex-col">
      <button
        type="button"
        onClick={onOpen}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-sm text-left sm:aspect-[5/4] lg:aspect-auto lg:h-[min(52vh,560px)]"
        aria-label={`${ui.viewRoom} : ${room.name}`}
      >
        <Image
          src={room.image}
          alt={room.name}
          fill
          sizes="(min-width:1024px) 60vw, 90vw"
          className="object-cover transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-5 top-5 font-display text-sm italic text-white/80">
          {String(index + 1).padStart(2, "0")} / {String(site.rooms.length).padStart(2, "0")}
        </span>
        <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.4} />
        </span>
        <div className="absolute inset-x-5 bottom-5 text-white">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/70">{room.tagline}</p>
          <h3 className="mt-2 font-display text-3xl font-light sm:text-4xl">{room.name}</h3>
        </div>
      </button>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
        <span>{room.capacity}</span>
        <span className="font-display text-lg text-fg">{room.price ?? room.priceNote}</span>
      </div>
    </article>
  );
}

function RoomModal({ room, onClose }: { room: Room; onClose: () => void }) {
  const { ui } = useSite();
  const scrollTo = useScrollTo();
  const lenis = useLenis();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lenis, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
    >
      <motion.div
        className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-2xl bg-bg-soft sm:rounded-2xl md:grid-cols-2"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px]">
          <Image src={room.image} alt={room.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col p-6 sm:p-10">
          <p className="kicker">{room.tagline}</p>
          <h3 id="room-modal-title" className="mt-3 font-display text-4xl font-light sm:text-5xl">
            {room.name}
          </h3>
          <p className="mt-5 leading-relaxed text-fg/80">{room.description}</p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {room.features.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-sm text-fg/85">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-8 md:mt-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">{room.capacity}{room.size ? ` · ${room.size}` : ""}</p>
              <p className="mt-1 font-display text-3xl">{room.price ?? room.priceNote}</p>
              {room.price && room.priceNote && <p className="text-xs text-muted">{room.priceNote}</p>}
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                setTimeout(() => scrollTo("#contact"), 300);
              }}
              className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-on-accent transition-transform hover:scale-[1.03]"
            >
              {ui.contactAboutRoom}
            </button>
          </div>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
          aria-label={ui.close}
        >
          <X className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Rooms() {
  const { site } = useSite();
  const [active, setActive] = useState<Room | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [desktop, setDesktop] = useState(false);

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const measure = () => {
      setDesktop(mq.matches);
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const header = (
    <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <Reveal>
          <p className="kicker mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />
            {site.roomsSection.kicker}
          </p>
        </Reveal>
        <h2 className="max-w-3xl font-display text-[clamp(2.4rem,5.5vw,5rem)] font-light leading-[1] tracking-[-0.01em]">
          <MaskLines lines={[site.roomsSection.title]} />
        </h2>
      </div>
      <Reveal delay={0.1}>
        <p className="max-w-sm text-fg/70">{site.roomsSection.intro}</p>
      </Reveal>
    </div>
  );

  return (
    <section
      id="chambres"
      ref={sectionRef}
      className="relative bg-bg"
      style={desktop ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={desktop ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16" : "py-24 sm:py-32"}>
        {header}
        {desktop ? (
          <>
            <motion.div ref={trackRef} style={{ x }} className="mt-14 flex w-max gap-8 pl-14 pr-14">
              {site.rooms.map((room, i) => (
                <div key={room.id} className="w-[clamp(420px,44vw,780px)] shrink-0">
                  <RoomCard room={room} index={i} onOpen={() => setActive(room)} />
                </div>
              ))}
            </motion.div>
            <div className="container-x mt-10">
              <div className="h-px w-full bg-line">
                <motion.div className="h-px bg-accent" style={{ width: progressWidth }} />
              </div>
            </div>
          </>
        ) : (
          <div ref={trackRef} className="container-x mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8">
            {site.rooms.map((room, i) => (
              <Reveal key={room.id} delay={(i % 2) * 0.08}>
                <RoomCard room={room} index={i} onOpen={() => setActive(room)} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>{active && <RoomModal room={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
