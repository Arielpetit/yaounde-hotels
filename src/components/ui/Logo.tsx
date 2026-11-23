"use client";

import Image from "next/image";
import clsx from "clsx";
import { brand } from "@/config/brand";
import { useSite } from "../SiteContext";

/** Official emblem (from the hotel's real logo) with the hotel name set in the site's display font. */
export function Logo({ className, compact = false, height = 40 }: { className?: string; compact?: boolean; height?: number }) {
  const { site, ui } = useSite();
  const { mark, markDark } = brand.logo;
  const w = Math.round((mark.width / mark.height) * height);
  const wd = markDark ? Math.round((markDark.width / markDark.height) * height) : w;
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <Image
        src={mark.src}
        alt=""
        width={w}
        height={height}
        priority
        className={clsx("shrink-0 object-contain", markDark && "dark:hidden")}
        style={{ height, width: w }}
      />
      {markDark && (
        <Image
          src={markDark.src}
          alt=""
          width={wd}
          height={height}
          priority
          className="hidden shrink-0 object-contain dark:block"
          style={{ height, width: wd }}
        />
      )}
      {!compact && (
        <span className="flex flex-col whitespace-nowrap leading-none">
          <span className="font-display text-[1.25rem]">{site.shortName}</span>
          <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.3em] opacity-70">{ui.logoSub}</span>
        </span>
      )}
    </span>
  );
}
