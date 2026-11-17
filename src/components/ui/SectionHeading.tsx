import clsx from "clsx";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  className,
  aside,
}: {
  kicker: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  /** Optional element shown on the right (desktop) of a left-aligned heading. */
  aside?: React.ReactNode;
}) {
  const center = align === "center";
  return (
    <Reveal
      className={clsx(
        "flex flex-col gap-6",
        center ? "mx-auto max-w-2xl items-center text-center" : aside && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={clsx(center ? "flex flex-col items-center" : "max-w-2xl")}>
        <p className={clsx("label flex items-center gap-3 text-accent", center && "justify-center")}>
          <Ornament />
          {kicker}
        </p>
        <Tag className="font-display t-h2 mt-4 text-balance">{title}</Tag>
        {intro && <p className={clsx("mt-5 text-muted", center ? "mx-auto max-w-xl" : "max-w-xl")}>{intro}</p>}
      </div>
      {aside && !center && <div className="shrink-0">{aside}</div>}
    </Reveal>
  );
}
