"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { EASE } from "./ui/motion";
import { useScrollTo } from "./SmoothScroll";

/** Sticky call + book bar on small screens, hidden on the hero and the reservation section. */
export function MobileBookBar() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const scrollTo = useScrollTo();
  const phone = site.contact.phones[0];

  useMotionValueEvent(scrollY, "change", (y) => {
    const res = document.getElementById("reservation");
    const top = res ? res.getBoundingClientRect().top : Infinity;
    const bottom = res ? res.getBoundingClientRect().bottom : Infinity;
    const inBooking = top < window.innerHeight && bottom > 0;
    setShow(y > window.innerHeight * 0.8 && !inBooking);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 p-3 backdrop-blur-xl lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="flex gap-3">
            {phone && (
              <a
                href={phone.href}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-accent"
                aria-label={`Appeler ${phone.value}`}
              >
                <Phone className="h-4 w-4" strokeWidth={1.6} />
              </a>
            )}
            <button
              type="button"
              onClick={() => scrollTo("#reservation")}
              className="h-12 flex-1 rounded-full bg-accent text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-on-accent"
            >
              Réserver un séjour
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
