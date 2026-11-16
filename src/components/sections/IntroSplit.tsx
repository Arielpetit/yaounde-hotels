"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";
import { useHref, useSite } from "../SiteContext";

/** Home introduction: statement, short text, signature image and key facts. */
export function IntroSplit() {
  const { site, ui } = useSite();
  const href = useHref();
  const { intro } = site;

  return (
    <section id="main" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <p className="label flex items-center gap-3 text-accent">
            <Ornament />
            {intro.kicker}
          </p>
          <h2 className="font-display t-h2 mt-4 text-balance">{intro.statement}</h2>
          <p className="mt-6 text-muted">{intro.body}</p>
          <Link href={href("hotel")} className="link-arrow mt-8">
            {ui.discoverHotel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
          <figure>
            <div className="signature-frame relative mx-auto aspect-[4/5] w-full max-w-[420px]">
              <Image src={intro.image} alt={intro.imageCaption} fill sizes="(min-width:1024px) 420px, 90vw" className="object-cover" />
            </div>
            <figcaption className="mt-4 text-center text-xs tracking-[0.08em] text-muted">{intro.imageCaption}</figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="container-x mt-20">
        <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {intro.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={`px-2 py-8 text-center sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display block text-3xl text-accent md:text-[2.25rem]">{s.value}</span>
                <span className="mt-2 block text-sm text-muted">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
