"use client";

import { createContext, useCallback, useContext, useState } from "react";

export interface BookingDraft {
  room: string;
  arrival: string;
  nights: number;
  adults: number;
  children: number;
}

interface BookingState {
  draft: BookingDraft;
  update: (patch: Partial<BookingDraft>) => void;
}

const initial: BookingDraft = { room: "", arrival: "", nights: 1, adults: 2, children: 0 };

const Ctx = createContext<BookingState>({ draft: initial, update: () => {} });
export const useBooking = () => useContext(Ctx);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState<BookingDraft>(initial);
  const update = useCallback((patch: Partial<BookingDraft>) => setDraft((d) => ({ ...d, ...patch })), []);
  return <Ctx.Provider value={{ draft, update }}>{children}</Ctx.Provider>;
}
