"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { EASE } from "./ui/motion";
import { useSite } from "./SiteContext";
import { useScrollTo } from "./SmoothScroll";
import { whatsappHref } from "./Contact";

/** Sticky call / message bar on small screens, hidden on the hero and the contact section. */
export function MobileContactBar() {
  const { site, ui } = useSite();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const scrollTo = useScrollTo();
  const phone = site.contact.phones[0];
  const wa = site.contact.whatsapp;

  useMotionValueEvent(scrollY, "change", (y) => {
    const el = document.getElementById("contact");
    const r = el?.getBoundingClientRect();
    const inContact = r ? r.top < window.innerHeight && r.bottom > 0 : false;
    setShow(y > window.innerHeight * 0.8 && !inContact);
  });

  const btn = "flex h-12 flex-1 items-center justify-center gap-2 rounded-full text-[0.74rem] font-semibold uppercase tracking-[0.14em]";

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
              <a href={phone.href} className={`${btn} border border-line text-fg`}>
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.6} />
                {ui.call}
              </a>
            )}
            {wa ? (
              <a href={whatsappHref(wa, ui.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className={`${btn} bg-accent text-on-accent`}>
                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                {ui.whatsapp}
              </a>
            ) : (
              <button type="button" onClick={() => scrollTo("#contact")} className={`${btn} bg-accent text-on-accent`}>
                {ui.contact}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
