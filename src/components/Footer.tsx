"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "./ui/Logo";
import { useLenis } from "./SmoothScroll";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line bg-bg pt-20 sm:pt-28">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-6 max-w-sm font-display text-2xl font-light italic text-fg/80">{site.footer.line}</p>
          </div>
          <div>
            <p className="kicker mb-5">Navigation</p>
            <ul className="space-y-2.5 text-fg/75">
              {[...site.nav, { label: "Réservation", href: "#reservation" }].map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-5">Contact</p>
            <ul className="space-y-2.5 text-fg/75">
              {site.contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="link-underline hover:text-fg">
                    {p.value}
                  </a>
                </li>
              ))}
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="link-underline [overflow-wrap:anywhere] hover:text-fg">
                    {site.contact.email}
                  </a>
                </li>
              )}
              <li className="pt-2 text-sm text-muted">{site.contact.hours}</li>
              {site.contact.postal && <li className="text-sm text-muted">{site.contact.postal}</li>}
              {site.contact.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <motion.p
        style={{ y }}
        className="pointer-events-none mt-16 select-none whitespace-nowrap text-center font-display text-[clamp(3rem,13vw,14rem)] font-light leading-[0.8] tracking-[-0.03em] text-fg/[0.06]"
        aria-hidden
      >
        {site.shortName}
      </motion.p>

      <div className="container-x relative flex flex-col gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. Tous droits réservés. {site.footer.credit}
        </p>
        <button
          type="button"
          onClick={() => (lenis ? lenis.scrollTo(0, { duration: 2 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          className="inline-flex items-center gap-2 uppercase tracking-[0.2em] hover:text-fg"
        >
          Haut de page <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
