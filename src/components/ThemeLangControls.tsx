"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { brand } from "@/config/brand";
import { locales } from "@/i18n/config";
import { useSite } from "./SiteContext";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const { ui } = useSite();
  const [theme, setTheme] = useState<Theme>(brand.defaultTheme);

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? ui.themeLight : ui.themeDark;
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next;
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", brand.themeColor[next]);
        try {
          localStorage.setItem("theme", next);
        } catch {}
        setTheme(next);
      }}
      className={clsx("flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-current/10", className)}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} />}
    </button>
  );
}

/** FR | EN switch that keeps the visitor on the same page. */
export function LangSwitch({ className }: { className?: string }) {
  const { locale, ui } = useSite();
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
  return (
    <nav aria-label={ui.language} className={clsx("flex items-center text-[0.75rem] font-semibold tracking-[0.12em]", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 opacity-40">/</span>}
          <a
            href={`/${l}${rest}`}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "page" : undefined}
            className={clsx("uppercase transition-opacity", l === locale ? "opacity-100" : "opacity-55 hover:opacity-100")}
          >
            {l}
          </a>
        </span>
      ))}
    </nav>
  );
}
