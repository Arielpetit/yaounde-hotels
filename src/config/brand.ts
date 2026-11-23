/** Locale-independent brand settings. */
export const brand = {
  /** Theme shown until the visitor picks one. */
  defaultTheme: "light" as "dark" | "light",
  /** Browser UI colour per theme (matches --bg in theme.css). */
  themeColor: { dark: "#131816", light: "#f6f6f2" },
  /** Official logo emblem, cut from the hotel's real logo (see public/). Sizes are the file's pixel size. */
  logo: {
    mark: { src: "/logo-mark.png", width: 185, height: 160 },
    /** Optional variant for dark mode (use when the emblem has black parts). */
    markDark: undefined as { src: string; width: number; height: number } | undefined,
  },
  /** Colours used by the web manifest (install icon on phones). */
  manifest: { background: "#f6f6f2", theme: "#2c6a36" },
};
