"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { MaskLines, Reveal } from "./ui/motion";
import { useBooking } from "./BookingContext";

const input =
  "peer w-full border-b border-line bg-transparent pb-3 pt-6 text-base text-fg outline-none transition-colors focus:border-accent [color-scheme:inherit]";
const label =
  "pointer-events-none absolute left-0 top-0 text-[0.65rem] uppercase tracking-[0.25em] text-muted transition-colors peer-focus:text-accent";

export function Booking() {
  const { draft, update } = useBooking();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().slice(0, 10);
  const { booking, contact } = site;

  const buildMessage = () =>
    [
      `Bonjour ${site.name},`,
      "",
      "Je souhaite effectuer une demande de réservation :",
      `• Chambre : ${draft.room || "Pas de préférence"}`,
      `• Arrivée : ${draft.arrival || "À préciser"}`,
      `• Nuits : ${draft.nights}`,
      `• Adultes : ${draft.adults} — Enfants : ${draft.children}`,
      `• Nom : ${name}`,
      `• Téléphone : ${phone}`,
      message ? `• Message : ${message}` : "",
      "",
      "Merci de me confirmer la disponibilité et le tarif.",
    ]
      .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
      .join("\n");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = buildMessage();
    const url =
      booking.channel === "whatsapp" && booking.whatsapp
        ? `https://wa.me/${booking.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${booking.email}?subject=${encodeURIComponent(`Demande de réservation — ${name}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="reservation" className="relative overflow-hidden bg-bg-soft py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-[0.12]">
        <Image src={site.hero.image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-soft via-bg-soft/90 to-bg-soft" />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />
              {booking.kicker}
            </p>
          </Reveal>
          <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[0.95] tracking-[-0.01em]">
            <MaskLines lines={[booking.title]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-fg/75">{booking.intro}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-12 space-y-5">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="group flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                      <Phone className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted">{p.label}</span>
                      <span className="font-display text-2xl">{p.value}</span>
                    </span>
                  </a>
                </li>
              ))}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                      <Mail className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted">E-mail</span>
                      <span className="text-base [overflow-wrap:anywhere] sm:text-lg">{contact.email}</span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-line bg-bg/70 p-6 backdrop-blur-xl sm:p-10 lg:p-12"
            aria-label="Formulaire de demande de réservation"
          >
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              <div className="relative sm:col-span-2">
                <select
                  id="room"
                  value={draft.room}
                  onChange={(e) => update({ room: e.target.value })}
                  className={input}
                >
                  <option value="" className="bg-bg">
                    Pas de préférence
                  </option>
                  {site.rooms.map((r) => (
                    <option key={r.id} value={r.name} className="bg-bg">
                      {r.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="room" className={label}>
                  Chambre
                </label>
              </div>
              <div className="relative">
                <input
                  id="arrival"
                  type="date"
                  required
                  min={today}
                  value={draft.arrival}
                  onChange={(e) => update({ arrival: e.target.value })}
                  className={input}
                />
                <label htmlFor="arrival" className={label}>
                  Date d&apos;arrivée *
                </label>
              </div>
              <div className="relative">
                <select
                  id="nights"
                  value={draft.nights}
                  onChange={(e) => update({ nights: Number(e.target.value) })}
                  className={input}
                >
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-bg">
                      {n} {n > 1 ? "nuits" : "nuit"}
                    </option>
                  ))}
                </select>
                <label htmlFor="nights" className={label}>
                  Nombre de nuits
                </label>
              </div>
              <div className="relative">
                <select
                  id="adults"
                  value={draft.adults}
                  onChange={(e) => update({ adults: Number(e.target.value) })}
                  className={input}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-bg">
                      {n}
                    </option>
                  ))}
                </select>
                <label htmlFor="adults" className={label}>
                  Adultes
                </label>
              </div>
              <div className="relative">
                <select
                  id="children"
                  value={draft.children}
                  onChange={(e) => update({ children: Number(e.target.value) })}
                  className={input}
                >
                  {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                    <option key={n} value={n} className="bg-bg">
                      {n}
                    </option>
                  ))}
                </select>
                <label htmlFor="children" className={label}>
                  Enfants
                </label>
              </div>
              <div className="relative">
                <input
                  id="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={input}
                />
                <label htmlFor="name" className={label}>
                  Nom complet *
                </label>
              </div>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={input}
                />
                <label htmlFor="phone" className={label}>
                  Téléphone *
                </label>
              </div>
              <div className="relative sm:col-span-2">
                <textarea
                  id="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${input} resize-none`}
                />
                <label htmlFor="message" className={label}>
                  Demandes particulières
                </label>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted sm:max-w-xs">
                {booking.channel === "whatsapp"
                  ? "Votre demande s'ouvre dans WhatsApp, prête à être envoyée à la réception."
                  : "Votre demande s'ouvre dans votre messagerie, prête à être envoyée à la réception."}
              </p>
              <button
                type="submit"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-accent px-8 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-on-accent transition-transform hover:scale-[1.02]"
              >
                {sent ? <Check className="h-4 w-4" /> : booking.channel === "whatsapp" ? <MessageCircle className="h-4 w-4" /> : null}
                {sent ? "Demande préparée" : "Envoyer la demande"}
                {!sent && <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
