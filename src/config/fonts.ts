import { Marcellus, DM_Sans } from "next/font/google";

/** Marcellus echoes the flared classical capitals of the CsH logo. */
export const displayFont = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display-family",
  display: "swap",
});

export const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});
