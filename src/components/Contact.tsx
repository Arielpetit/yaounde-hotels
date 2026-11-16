"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { MaskLines, Reveal } from "./ui/motion";
import { useSite } from "./SiteContext";

export function whatsappHref(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

function Row({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-5 border-b border-line py-5 transition-colors hover:border-accent"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted">{label}</span>
        <span className="block font-display text-xl [overflow-wrap:anywhere] sm:text-2xl">{value}</span>
      </span>
      <ArrowUpRight
        className="h-5 w-5 shrink-0 text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        strokeWidth={1.4}
      />
    </a>
  );
}

export function Contact() {
  const { site, ui } = useSite();
  const { contactSection: cs, contact } = site;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="contact" className="relative bg-bg-soft py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              {cs.kicker}
            </p>
          </Reveal>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.01em]">
            <MaskLines lines={[cs.title]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-fg/75">{cs.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 border-t border-line">
              {contact.whatsapp && (
                <Row
                  href={whatsappHref(contact.whatsapp, ui.whatsappGreeting)}
                  icon={<MessageCircle className="h-4 w-4" strokeWidth={1.5} />}
                  label={ui.writeWhatsapp}
                  value={`+${contact.whatsapp.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5")}`}
                  external
                />
              )}
              {contact.phones.map((p) => (
                <Row key={p.href} href={p.href} icon={<Phone className="h-4 w-4" strokeWidth={1.5} />} label={p.label} value={p.value} />
              ))}
              {contact.email && (
                <Row
                  href={`mailto:${contact.email}`}
                  icon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
                  label={ui.email}
                  value={contact.email}
                />
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div ref={ref} className="relative h-[480px] overflow-hidden rounded-sm sm:h-[600px] lg:h-full lg:min-h-[640px]">
            <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
              <Image src={cs.image} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-black/35 p-6 text-white backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/80" strokeWidth={1.4} />
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">{ui.address}</p>
                  <p className="mt-1 font-display text-xl leading-snug">
                    {site.location.address.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  {contact.postal && <p className="mt-1 text-sm text-white/70">{contact.postal}</p>}
                </div>
              </div>
              <div className="mt-5 flex gap-4 border-t border-white/15 pt-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-white/80" strokeWidth={1.4} />
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">{ui.hours}</p>
                  <p className="mt-1 text-sm">{contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
