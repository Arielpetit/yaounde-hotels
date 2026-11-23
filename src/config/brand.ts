/** Locale-independent brand settings. */
export const brand = {
  /** Theme shown until the visitor picks one. */
  defaultTheme: "light" as "dark" | "light",
  /** Browser UI colour per theme (matches --bg in theme.css). */
  themeColor: { dark: "#14110e", light: "#fffaf5" },
  /** Official logo emblem (orange hands, MPH monogram), cut from the hotel's real logo. */
  logo: {
    mark: { src: "/logo-mark.png", width: 111, height: 160 },
    /** The monogram is black, so dark mode uses a variant with white lettering. */
    markDark: { src: "/logo-mark-dark.png", width: 111, height: 160 } as { src: string; width: number; height: number } | undefined,
  },
  /** Colours used by the web manifest (install icon on phones). */
  manifest: { background: "#fffaf5", theme: "#c2570c" },
};
