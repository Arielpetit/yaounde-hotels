"use client";

import { createContext, useCallback, useContext, useState } from "react";

export interface BookingDraft {
  room: string;
  arrival: string;
  departure: string;
  adults: number;
  children: number;
}

interface BookingState {
  draft: BookingDraft;
  update: (patch: Partial<BookingDraft>) => void;
}

const initial: BookingDraft = { room: "", arrival: "", departure: "", adults: 2, children: 0 };

/** Number of nights between two ISO dates (0 if unknown). */
export function nightsBetween(a: string, b: string) {
  if (!a || !b) return 0;
  const d = (Date.parse(b) - Date.parse(a)) / 86_400_000;
  return d > 0 ? Math.round(d) : 0;
}

export function addDays(iso: string, days: number) {
  const d = new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const Ctx = createContext<BookingState>({ draft: initial, update: () => {} });
export const useBooking = () => useContext(Ctx);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft>(initial);
  const update = useCallback(
    (patch: Partial<BookingDraft>) =>
      setDraft((d) => {
        const next = { ...d, ...patch };
        // Keep departure after arrival.
        if (patch.arrival && (!next.departure || next.departure <= next.arrival)) next.departure = addDays(next.arrival, 1);
        return next;
      }),
    [],
  );
  return <Ctx.Provider value={{ draft, update }}>{children}</Ctx.Provider>;
}
