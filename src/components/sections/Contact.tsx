"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Plus } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { formatIntl, useSite, whatsappHref } from "../SiteContext";

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="h-full rounded-[var(--media-radius,4px)] border border-line bg-surface p-7">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-soft text-accent">{icon}</span>
      <h2 className="label mt-6 text-muted">{title}</h2>
      <div className="mt-3 space-y-1.5">{children}</div>
    </div>
  );
}

/** Contact page: ways to reach the hotel, then the map and directions. */
export function ContactDetails() {
  const { site, ui } = useSite();
  const { contact, location } = site;
  const [showMap, setShowMap] = useState(false);
  const q = encodeURIComponent(location.mapQuery);

  return (
    <section id="main" className="section">
      <div className="container-x">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {contact.whatsapp && (
            <Reveal>
              <Card icon={<MessageCircle className="h-5 w-5" strokeWidth={1.5} />} title={ui.whatsapp}>
                <p className="font-display text-xl">{formatIntl(contact.whatsapp)}</p>
                <a
                  href={whatsappHref(contact.whatsapp, ui.whatsappGreeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow pt-2"
                >
                  {ui.writeWhatsapp} →
                </a>
              </Card>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <Card icon={<Phone className="h-5 w-5" strokeWidth={1.5} />} title={ui.phone}>
              {contact.phones.map((p) => (
                <p key={p.href}>
                  <a href={p.href} className="font-display text-xl hover:text-accent">
                    {p.value}
                  </a>
                  <span className="block text-xs text-muted">{p.label}</span>
                </p>
              ))}
            </Card>
          </Reveal>
          {contact.email && (
            <Reveal delay={0.1}>
              <Card icon={<Mail className="h-5 w-5" strokeWidth={1.5} />} title={ui.email}>
                <a href={`mailto:${contact.email}`} className="block text-sm leading-snug [overflow-wrap:anywhere] hover:text-accent">
                  {contact.email}
                </a>
              </Card>
            </Reveal>
          )}
          <Reveal delay={0.15}>
            <Card icon={<Clock className="h-5 w-5" strokeWidth={1.5} />} title={ui.hours}>
              <p>{contact.hours}</p>
              {contact.postal && <p className="text-sm text-muted">{contact.postal}</p>}
            </Card>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading kicker={location.kicker} title={location.title} />
            <Reveal delay={0.05}>
              <address className="mt-8 flex gap-4 not-italic">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <span>
                  {location.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </address>
              <h3 className="label mt-10 text-muted">{ui.gettingHere}</h3>
              <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
                {location.landmarks.map((l) => (
                  <div key={l.label} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="text-muted">{l.label}</dt>
                    <dd className="text-right font-medium">{l.value}</dd>
                  </div>
                ))}
              </dl>
              {location.note && <p className="mt-3 text-xs text-muted">{location.note}</p>}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-8"
              >
                <Navigation className="h-4 w-4" strokeWidth={1.6} />
                {ui.directions}
              </a>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="media relative h-[380px] border border-line bg-bg-soft sm:h-[460px] lg:h-full lg:min-h-[520px]">
              {showMap ? (
                <iframe
                  title={`${ui.map} — ${site.name}`}
                  src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`}
                  className="absolute inset-0 h-full w-full"
                  style={{ filter: "var(--map-filter)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button type="button" onClick={() => setShowMap(true)} className="group absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-on-accent transition-transform group-hover:scale-105">
                    <MapPin className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <span className="label">{ui.showMap}</span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { site } = useSite();
  const faq = site.faq;
  const [open, setOpen] = useState<number | null>(0);
  if (!faq) return null;

  return (
    <section className="section bg-bg-soft">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading kicker={faq.kicker} title={faq.title} />
        </div>
        <ul className="border-t border-line lg:col-span-8">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                  >
                    <span className="text-lg font-medium">{item.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      strokeWidth={1.5}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
