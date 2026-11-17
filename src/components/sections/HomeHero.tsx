"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useHref, useSite } from "../SiteContext";
import { SplitWords } from "../ui/Reveal";

const ease = [0.16, 1, 0.3, 1] as const;

/** Contained hero band with an info card overlapping its lower edge. */
export function HomeHero() {
  const { site, ui } = useSite();
  const href = useHref();
  const { hero, location, contact } = site;
  const phone = contact.phones[0];

  return (
    <section>
      <div className="relative isolate flex h-[clamp(420px,58vh,560px)] items-center overflow-hidden text-white">
        <motion.div className="absolute inset-0 -z-10" initial={{ scale: 1.12 }} animate={{ scale: 1.02 }} transition={{ duration: 2.4, ease }}>
          <Image src={hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="container-x pb-14">
          <motion.p
            className="label text-white/85"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            {hero.eyebrow}
          </motion.p>
          <SplitWords as="h1" immediate delay={0.15} text={hero.titleLines.join(" ")} className="font-display t-hero mt-4 max-w-2xl text-balance" />
          <motion.p
            className="mt-5 max-w-lg text-white/85"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.32 }}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.44 }}
          >
            <Link href={href("chambres")} className="btn btn-light">
              {hero.cta}
            </Link>
            <Link href={href("hotel")} className="btn btn-ghost-light">
              {ui.discoverHotel}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container-x">
        <motion.div
          className="relative z-10 -mt-12 grid overflow-hidden rounded-[var(--media-radius,4px)] border border-line bg-surface shadow-[0_18px_50px_-24px_rgba(0,0,0,0.35)] md:grid-cols-[1.5fr_1fr_auto]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
        >
          <div className="flex items-center gap-4 border-b border-line p-5 md:border-b-0 md:border-r md:p-6">
            <MapPin className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
            <div className="min-w-0">
              <p className="label text-muted">{ui.address}</p>
              <p className="mt-1 text-sm">{location.address.slice(0, 2).join(", ")}</p>
            </div>
          </div>
          {phone && (
            <a href={phone.href} className="group flex items-center gap-4 border-b border-line p-5 md:border-b-0 md:border-r md:p-6">
              <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <div>
                <p className="label text-muted">{phone.label}</p>
                <p className="mt-1 text-sm transition-colors group-hover:text-accent">{phone.value}</p>
              </div>
            </a>
          )}
          <Link href={href("contact")} className="link-arrow justify-between gap-6 p-5 hover:bg-bg-soft md:p-6">
            {ui.contactCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
