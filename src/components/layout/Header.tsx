"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { PageKey } from "@/config/types";
import { Logo } from "../ui/Logo";
import { LangSwitch, ThemeToggle } from "../ThemeLangControls";
import { useHref, useSite } from "../SiteContext";

const ORDER: PageKey[] = ["hotel", "chambres", "services", "galerie", "contact"];

export function Header() {
  const { site, ui, locale } = useSite();
  const href = useHref();
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Every page opens on a photo, so the bar is transparent with light text until scrolled.
  const solid = scrolled || open;
  const isActive = (p: PageKey) => pathname === `/${locale}/${p}`;
  const navPages = ORDER.filter((p) => p !== "contact");

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-bg focus:px-4 focus:py-2">
        {ui.skip}
      </a>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500",
          solid ? "bg-bg/95 text-fg shadow-[0_1px_0_var(--line)] backdrop-blur-md" : "bg-transparent text-white",
        )}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <Link href={href()} aria-label={`${site.name} — ${ui.home}`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label={ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navPages.map((p) => (
                <li key={p}>
                  <Link
                    href={href(p)}
                    aria-current={isActive(p) ? "page" : undefined}
                    className={clsx(
                      "relative py-2 text-[0.8125rem] font-medium tracking-[0.04em] transition-opacity",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500",
                      isActive(p) ? "after:scale-x-100" : "opacity-85 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
                    )}
                  >
                    {site.pages[p].nav}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangSwitch className="hidden sm:flex" />
            <ThemeToggle />
            <Link
              href={href("contact")}
              className={clsx("btn hidden h-10 px-5 text-[0.75rem] md:inline-flex", solid ? "btn-primary" : "btn-ghost-light")}
            >
              {ui.contactCta}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.closeMenu : ui.openMenu}
            >
              <span className="relative block h-3 w-6">
                <span className={clsx("absolute left-0 h-px w-6 bg-current transition-all duration-300", open ? "top-1.5 rotate-45" : "top-0")} />
                <span className={clsx("absolute left-0 h-px w-6 bg-current transition-all duration-300", open ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col bg-bg pt-[76px] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label={ui.mainNav} className="container-x flex-1 overflow-y-auto py-6">
              <ul className="divide-y divide-line border-y border-line">
                {[{ key: "" as const, label: ui.home }, ...ORDER.map((p) => ({ key: p, label: site.pages[p].nav }))].map((item, i) => (
                  <motion.li
                    key={item.key || "home"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link href={href(item.key)} className="flex items-center justify-between py-4 font-display text-2xl">
                      {item.label}
                      <span aria-hidden className="text-accent">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container-x flex items-center justify-between border-t border-line py-5">
              <LangSwitch />
              {site.contact.phones[0] && (
                <a href={site.contact.phones[0].href} className="text-sm text-muted">
                  {site.contact.phones[0].value}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
