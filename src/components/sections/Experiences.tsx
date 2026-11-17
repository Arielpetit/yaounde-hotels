"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { useHref, useSite } from "../SiteContext";

/** Home preview: services as image tiles linking to the services page. */
export function ExperiencesPreview() {
  const { site, ui } = useSite();
  const href = useHref();

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          kicker={site.experiencesSection.kicker}
          title={site.experiencesSection.title}
          intro={site.experiencesSection.intro}
          aside={
            <Link href={href("services")} className="link-arrow">
              {ui.allServices}
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {site.experiences.slice(0, 4).map((e, i) => (
            <Reveal key={e.id} delay={(i % 2) * 0.08}>
              <Link href={`${href("services")}#${e.id}`} className="media img-zoom group relative block aspect-[16/11] text-white">
                <Image src={e.image} alt={e.title} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="label text-white/75">{e.kicker}</p>
                    <h3 className="font-display t-h3 mt-2">{e.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:bg-white group-hover:text-black">
                    <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Services page: every experience in an alternating layout. */
export function ExperiencesList() {
  const { site } = useSite();
  return (
    <section id="main" className="section">
      <div className="container-x space-y-24 lg:space-y-32">
        {site.experiences.map((e, i) => (
          <article key={e.id} id={e.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className={clsx("lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
              <div className={clsx("relative aspect-[4/5] w-full", i === 0 ? "signature-frame mx-auto max-w-[460px]" : "media img-zoom")}>
                <Image src={e.image} alt={e.title} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal className={clsx("lg:col-span-5", i % 2 === 1 ? "lg:order-1" : "lg:col-start-8")} delay={0.1}>
              <p className="label text-accent">{e.kicker}</p>
              <h2 className="font-display t-h2 mt-3">{e.title}</h2>
              <p className="mt-5 text-muted">{e.description}</p>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
