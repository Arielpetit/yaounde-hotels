import { Cormorant_Garamond, Jost } from "next/font/google";

/** Cormorant for a gracious "palace" voice, Jost for clean, modern text. */
export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display-family",
  display: "swap",
});

export const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});
