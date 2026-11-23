/** Locale-independent brand settings. */
export const brand = {
  /** Theme shown until the visitor picks one. */
  defaultTheme: "light" as "dark" | "light",
  /** Browser UI colour per theme (matches --bg in theme.css). */
  themeColor: { dark: "#15130f", light: "#fcfaf5" },
  /** Official logo emblem (gold roof lines), cut from the hotel's real logo. */
  logo: {
    mark: { src: "/logo-mark.png", width: 360, height: 125 },
    markDark: undefined as { src: string; width: number; height: number } | undefined,
  },
  /** Colours used by the web manifest (install icon on phones). */
  manifest: { background: "#15130f", theme: "#9a7410" },
};
