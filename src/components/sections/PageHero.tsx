"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PageKey } from "@/config/types";
import { useHref, useSite } from "../SiteContext";

/** Photo header for inner pages: breadcrumb, title and one-line intro. */
export function PageHero({ page }: { page: PageKey }) {
  const { site, ui } = useSite();
  const href = useHref();
  const p = site.pages[page];

  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden text-white md:min-h-[64vh]">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src={p.image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-black/35" />

      <motion.div
        className="container-x pb-14 pt-32 md:pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <nav aria-label="Breadcrumb" className="text-xs tracking-[0.08em] text-white/75">
          <Link href={href()} className="hover:text-white">
            {ui.home}
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-white">
            {p.nav}
          </span>
        </nav>
        <h1 className="font-display t-page mt-5 max-w-3xl text-balance">{p.title}</h1>
        <p className="mt-5 max-w-xl text-white/85">{p.intro}</p>
      </motion.div>
    </section>
  );
}
