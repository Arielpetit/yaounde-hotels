"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PageKey } from "@/config/types";
import { useHref, useSite } from "../SiteContext";
import { SplitWords } from "../ui/Reveal";

/** Short photo band for inner pages: breadcrumb, title and one-line intro. */
export function PageHero({ page }: { page: PageKey }) {
  const { site, ui } = useSite();
  const href = useHref();
  const p = site.pages[page];

  return (
    <section className="relative isolate flex min-h-[280px] items-center overflow-hidden text-white md:min-h-[340px]">
      <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}>
        <Image src={p.image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />

      <motion.div
        className="container-x py-12 md:py-16"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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
        <SplitWords as="h1" immediate delay={0.1} text={p.title} className="font-display t-page mt-4 max-w-3xl text-balance" />
        <p className="mt-4 max-w-xl text-white/85">{p.intro}</p>
      </motion.div>
    </section>
  );
}
