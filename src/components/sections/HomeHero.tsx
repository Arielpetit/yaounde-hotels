"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useHref, useSite } from "../SiteContext";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const { site, ui } = useSite();
  const href = useHref();
  const { hero } = site;

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden text-white">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />

      <div className="container-x pb-16 pt-36 md:pb-24">
        <motion.p
          className="label text-white/85"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          className="font-display t-hero mt-5 max-w-3xl text-balance"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
        >
          {hero.titleLines.join(" ")}
        </motion.h1>
        <motion.p
          className="t-lead mt-6 max-w-xl text-white/85"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.45 }}
        >
          {hero.subtitle}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
        >
          <Link href={href("chambres")} className="btn btn-light">
            {hero.cta}
          </Link>
          <Link href={href("hotel")} className="btn btn-ghost-light">
            {ui.discoverHotel}
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#main"
        className="absolute bottom-8 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/40 md:flex lg:right-10"
        aria-label={ui.discoverHotel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
