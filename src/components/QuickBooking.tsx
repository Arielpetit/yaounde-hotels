"use client";

import { ArrowRight } from "lucide-react";
import { addDays, useBooking } from "./BookingContext";
import { useScrollTo } from "./SmoothScroll";

const field =
  "w-full bg-transparent text-base text-fg outline-none [color-scheme:inherit] placeholder:text-fg/40";

/** Glass booking bar in the hero; hands its values to the full reservation form. */
export function QuickBooking() {
  const { draft, update } = useBooking();
  const scrollTo = useScrollTo();
  const today = new Date().toISOString().slice(0, 10);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        scrollTo("#reservation");
      }}
      className="hidden grid-cols-[1fr_1fr_0.8fr_auto] items-stretch overflow-hidden rounded-2xl border border-fg/15 bg-bg/40 backdrop-blur-xl md:grid"
      aria-label="Recherche rapide de disponibilité"
    >
      <label className="flex flex-col gap-1 border-r border-fg/10 px-6 py-4">
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-fg/60">Arrivée</span>
        <input
          type="date"
          min={today}
          value={draft.arrival}
          onChange={(e) => update({ arrival: e.target.value })}
          className={field}
        />
      </label>
      <label className="flex flex-col gap-1 border-r border-fg/10 px-6 py-4">
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-fg/60">Départ</span>
        <input
          type="date"
          min={draft.arrival ? addDays(draft.arrival, 1) : today}
          value={draft.departure}
          onChange={(e) => update({ departure: e.target.value })}
          className={field}
        />
      </label>
      <label className="flex flex-col gap-1 border-r border-fg/10 px-6 py-4">
        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-fg/60">Adultes</span>
        <select value={draft.adults} onChange={(e) => update({ adults: Number(e.target.value) })} className={field}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n} className="bg-bg text-fg">
              {n} {n > 1 ? "adultes" : "adulte"}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="group flex items-center gap-3 bg-accent px-8 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-on-accent transition-colors hover:brightness-110"
      >
        Disponibilités
        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
