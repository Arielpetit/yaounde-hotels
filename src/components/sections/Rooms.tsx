"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, Users, Maximize2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ImageReveal, Reveal, RevealGroup, RevealItem, SplitWords } from "../ui/Reveal";
import { Icon } from "../ui/Icon";
import { useHref, useSite } from "../SiteContext";

/** Home preview: up to three room cards and a link to the rooms page. */
export function RoomsPreview() {
  const { site, ui } = useSite();
  const href = useHref();
  const rooms = site.rooms.slice(0, 3);

  return (
    <section className="section bg-bg-soft">
      <div className="container-x">
        <SectionHeading
          kicker={site.roomsSection.kicker}
          title={site.roomsSection.title}
          intro={site.roomsSection.intro}
          aside={
            <Link href={href("chambres")} className="link-arrow">
              {ui.allRooms}
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <RevealGroup className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {rooms.map((room) => (
            <RevealItem key={room.id}>
              <Link href={`${href("chambres")}#${room.id}`} className="group block">
                <div className="media img-zoom relative aspect-[4/5] transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5">
                  <Image src={room.image} alt={room.name} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <p className="label mt-6 text-muted">{room.tagline}</p>
                <h3 className="font-display t-h3 mt-2 transition-colors group-hover:text-accent">{room.name}</h3>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  {room.capacity && <span>{room.capacity}</span>}
                  {room.size && <span>{room.size}</span>}
                  <span className="text-fg">{room.price ? `${room.price} · ${room.priceNote ?? ""}` : room.priceNote}</span>
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** Rooms page: every room in an alternating image / details layout. */
export function RoomsList() {
  const { site, ui } = useSite();
  const href = useHref();

  return (
    <section className="section">
      <div className="container-x space-y-24 lg:space-y-32">
        {site.rooms.map((room, i) => (
          <article key={room.id} id={room.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className={clsx("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
              <ImageReveal className="media aspect-[4/3]">
                <Image src={room.image} alt={room.name} fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
              </ImageReveal>
            </Reveal>
            <Reveal className={clsx("lg:col-span-5", i % 2 === 1 && "lg:order-1")} delay={0.1}>
              <p className="label text-accent">{room.tagline}</p>
              <SplitWords text={room.name} className="font-display t-h2 mt-3" />
              <p className="mt-5 text-muted">{room.description}</p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5 text-sm">
                {room.capacity && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-muted">
                      <Users className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {ui.capacity}
                    </dt>
                    <dd className="mt-1">{room.capacity}</dd>
                  </div>
                )}
                {room.size && (
                  <div>
                    <dt className="flex items-center gap-1.5 text-muted">
                      <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.6} />
                      {ui.size}
                    </dt>
                    <dd className="mt-1">{room.size}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted">{ui.rate}</dt>
                  <dd className="mt-1">
                    {room.price ?? room.priceNote}
                    {room.price && room.priceNote && <span className="text-muted"> {room.priceNote}</span>}
                  </dd>
                </div>
              </dl>

              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {room.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm">
                    <Icon name={f.icon} className="h-[18px] w-[18px] shrink-0 text-accent" />
                    {f.label}
                  </li>
                ))}
              </ul>

              <Link href={href("contact")} className="btn btn-outline mt-9">
                {ui.enquire}
              </Link>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
