"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { brand } from "@/config/brand";
import { locales } from "@/i18n/config";
import { useSite } from "./SiteContext";

type Theme = "light" | "dark";

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", brand.themeColor[t]);
  try {
    localStorage.setItem("theme", t);
  } catch {}
}

export function ThemeToggle({ className }: { className?: string }) {
  const { ui } = useSite();
  const [theme, setTheme] = useState<Theme>(brand.defaultTheme);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className={clsx(
        "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent",
        className,
      )}
      aria-label={next === "light" ? ui.themeLight : ui.themeDark}
      title={next === "light" ? ui.themeLight : ui.themeDark}
    >
      <Sun
        className={clsx("absolute h-4 w-4 transition-all duration-500", theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0")}
        strokeWidth={1.5}
      />
      <Moon
        className={clsx("absolute h-4 w-4 transition-all duration-500", theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0")}
        strokeWidth={1.5}
      />
    </button>
  );
}

export function LangSwitch({ className }: { className?: string }) {
  const { locale, ui } = useSite();
  return (
    <nav aria-label={ui.language} className={clsx("flex h-11 items-center rounded-full border border-line p-1", className)}>
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "page" : undefined}
          className={clsx(
            "flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors",
            l === locale ? "bg-fg text-bg" : "text-fg/70 hover:text-fg",
          )}
        >
          {l}
        </a>
      ))}
    </nav>
  );
}
