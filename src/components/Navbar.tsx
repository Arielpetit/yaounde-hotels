"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { useSite } from "./SiteContext";
import { Logo } from "./ui/Logo";
import { LangSwitch, ThemeToggle } from "./ThemeLangControls";
import { EASE, Magnetic } from "./ui/motion";
import { useScrollTo, useLenis } from "./SmoothScroll";

export function Navbar() {
  const { site, ui } = useSite();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev && !open);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 350 : 0);
  };

  const phone = site.contact.phones[0];

  return (
    <>
      <motion.header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled && !open ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "border-b border-transparent",
          !scrolled && !open && "hero-scope",
        )}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <nav className="container-x flex h-[72px] items-center justify-between lg:h-[84px]" aria-label={ui.mainNav}>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="relative z-10 text-fg"
            aria-label={`${site.name} — ${ui.home}`}
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-7 xl:flex 2xl:gap-10">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.href);
                  }}
                  className="link-underline whitespace-nowrap text-[0.78rem] uppercase tracking-[0.18em] text-fg/80 transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <LangSwitch className="hidden md:flex" />
            <ThemeToggle />
            {phone && (
              <a
                href={phone.href}
                className="hidden items-center gap-2 whitespace-nowrap text-sm text-fg/80 transition-colors hover:text-fg 2xl:flex"
              >
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                {phone.value}
              </a>
            )}
            <div className="hidden sm:block">
            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  go("#contact");
                }}
                className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-on-accent transition-transform hover:scale-[1.03]"
              >
                {ui.contactCta}
              </a>
            </Magnetic>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? ui.closeMenu : ui.openMenu}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={clsx(
                    "absolute left-0 h-px w-5 bg-fg transition-all duration-500",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 h-px w-5 bg-fg transition-all duration-500",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-bg-soft pt-28 xl:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 2.4rem) 2.25rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.4rem) 2.25rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.4rem) 2.25rem)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <ul className="container-x flex flex-col gap-2">
              {[...site.nav, { label: ui.contact, href: "#contact" }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: EASE }}
                  className="border-b border-line"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className="flex items-baseline justify-between py-4 font-display text-4xl"
                  >
                    {item.label}
                    <span className="text-xs text-muted tabular-nums">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="container-x mt-auto space-y-4 pb-10 text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <LangSwitch className="w-max" />
              <div className="space-y-1">
              {site.contact.phones.map((p) => (
                <a key={p.href} href={p.href} className="block text-fg">
                  {p.value}
                </a>
              ))}
              {site.contact.email && <a href={`mailto:${site.contact.email}`} className="block">{site.contact.email}</a>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
