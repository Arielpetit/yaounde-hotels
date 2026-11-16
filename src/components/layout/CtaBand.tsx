"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { useHref, useSite } from "../SiteContext";

/** Closing invitation shown above the footer on every page. */
export function CtaBand() {
  const { site, ui } = useSite();
  const href = useHref();
  const phone = site.contact.phones[0];

  return (
    <section className="relative isolate overflow-hidden">
      <Image src={site.cta.image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/65" />
      <div className="container-x py-24 text-center text-white lg:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display t-h2 text-balance">{site.cta.title}</h2>
          <p className="mx-auto mt-5 max-w-lg text-white/80">{site.cta.text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={href("contact")} className="btn btn-light">
              {ui.contactCta}
            </Link>
            {phone && (
              <a href={phone.href} className="btn btn-ghost-light">
                <Phone className="h-4 w-4" strokeWidth={1.6} />
                {phone.value}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
