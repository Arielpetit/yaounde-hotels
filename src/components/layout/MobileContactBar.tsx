"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import clsx from "clsx";
import { useSite, whatsappHref } from "../SiteContext";

/** Call / WhatsApp bar on phones, shown once the visitor scrolls past the first screen. */
export function MobileContactBar() {
  const { site, ui } = useSite();
  const [show, setShow] = useState(false);
  const phone = site.contact.phones[0];
  const wa = site.contact.whatsapp;

  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  if (!phone && !wa) return null;
  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 px-4 pt-3 backdrop-blur-md transition-transform duration-500 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <div className="flex gap-3">
        {phone && (
          <a href={phone.href} tabIndex={show ? 0 : -1} className="btn btn-outline h-11 flex-1">
            <Phone className="h-4 w-4" strokeWidth={1.6} />
            {ui.call}
          </a>
        )}
        {wa && (
          <a
            href={whatsappHref(wa, ui.whatsappGreeting)}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={show ? 0 : -1}
            className="btn btn-primary h-11 flex-1"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            {ui.whatsapp}
          </a>
        )}
      </div>
    </div>
  );
}
