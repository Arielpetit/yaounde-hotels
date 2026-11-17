"use client";

import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { CountUp, ImageReveal, Reveal, RevealGroup, RevealItem, SplitWords } from "../ui/Reveal";
import { Ornament } from "../ui/Ornament";
import { Icon } from "../ui/Icon";
import { useSite } from "../SiteContext";

/** Hotel page: the story in two columns with the signature image. */
export function Story() {
  const { site } = useSite();
  const { story, intro } = site;
  return (
    <section className="section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="signature-frame relative mx-auto aspect-[4/5] w-full max-w-[440px]">
            <ImageReveal className="absolute inset-0">
              <Image src={story.image} alt="" fill sizes="(min-width:1024px) 440px, 90vw" className="object-cover" />
            </ImageReveal>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7 lg:self-center" delay={0.1}>
          <p className="label flex items-center gap-3 text-accent">
            <Ornament />
            {story.kicker}
          </p>
          <SplitWords text={story.title} className="font-display t-h2 mt-4 text-balance" />
          <div className="mt-6 space-y-5 text-muted">
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="container-x mt-20">
        <RevealGroup as="dl" className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {intro.stats.map((s) => (
            <RevealItem key={s.label} className="bg-bg px-4 py-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="font-display block text-3xl text-accent" />
                <span className="mt-2 block text-sm text-muted">{s.label}</span>
              </dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Amenities as a compact icon grid. */
export function Amenities() {
  const { site } = useSite();
  const a = site.amenitiesSection;
  return (
    <section className="section bg-bg-soft">
      <div className="container-x">
        <SectionHeading kicker={a.kicker} title={a.title} intro={a.intro} align="center" />
        <RevealGroup as="ul" className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.amenities.map((item) => (
            <RevealItem as="li" key={item.title} className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-accent shadow-[0_0_0_1px_var(--line)] transition-all duration-500 group-hover:bg-accent group-hover:text-on-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
