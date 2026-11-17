"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { ImageReveal, Reveal } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";
import { useSite } from "../SiteContext";

/** The real building, shown large with its address: the hotel's most recognisable image. */
export function Facade() {
  const { site, ui } = useSite();
  const { facade, location } = site;
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ImageReveal className="media aspect-[16/10] w-full">
            <Image src={facade.image} alt={facade.caption} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" style={{ objectPosition: facade.focus ?? "50% 50%" }} />
          </ImageReveal>
          <p className="mt-3 flex items-center gap-2 text-xs text-muted">
            <Camera className="h-3.5 w-3.5" strokeWidth={1.6} />
            {ui.realPhoto} · {facade.caption}
          </p>
        </div>
        <Reveal className="lg:col-span-5" delay={0.1}>
          <p className="label flex items-center gap-3 text-accent">
            <Ornament />
            {facade.kicker}
          </p>
          <h2 className="font-display t-h2 mt-4 text-balance">{facade.title}</h2>
          <p className="mt-5 text-muted">{facade.text}</p>
          <address className="mt-8 border-l-2 border-accent pl-5 not-italic">
            {location.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </Reveal>
      </div>
    </section>
  );
}
