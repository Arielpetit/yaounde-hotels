import { Playfair_Display, Montserrat } from "next/font/google";

/** Playfair echoes the high-contrast serif of the logo's wordmark; Montserrat matches its clean caps. */
export const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display-family",
  display: "swap",
});

export const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});
