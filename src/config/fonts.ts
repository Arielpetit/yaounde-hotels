import { Fraunces, Outfit } from "next/font/google";

export const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display-family",
  display: "swap",
});

export const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-family",
  display: "swap",
});
