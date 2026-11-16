"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import type { PageKey } from "@/config/types";
import { Logo } from "../ui/Logo";
import { useHref, useSite, whatsappHref, formatIntl } from "../SiteContext";

const ORDER: PageKey[] = ["hotel", "chambres", "services", "galerie", "contact"];

export function Footer() {
  const { site, ui } = useSite();
  const href = useHref();
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft text-sm">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-muted">{site.footer.line}</p>
        </div>

        <div className="lg:col-span-2">
          <p className="label text-fg">{ui.pages}</p>
          <ul className="mt-5 space-y-2.5 text-muted">
            <li>
              <Link href={href()} className="hover:text-accent">
                {ui.home}
              </Link>
            </li>
            {ORDER.map((p) => (
              <li key={p}>
                <Link href={href(p)} className="hover:text-accent">
                  {site.pages[p].nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-fg">{ui.contact}</p>
          <ul className="mt-5 space-y-2.5 text-muted">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="hover:text-accent">
                  {p.value}
                </a>
              </li>
            ))}
            {contact.whatsapp && (
              <li>
                <a href={whatsappHref(contact.whatsapp, ui.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  WhatsApp {formatIntl(contact.whatsapp)}
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="[overflow-wrap:anywhere] hover:text-accent">
                  {contact.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="label text-fg">{ui.address}</p>
          <address className="mt-5 not-italic text-muted">
            {site.location.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            {contact.postal && <span className="mt-2 block">{contact.postal}</span>}
          </address>
          <p className="mt-4 text-muted">{contact.hours}</p>
          {contact.socials.length > 0 && (
            <p className="mt-4 flex gap-4">
              {contact.socials.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-fg underline-offset-4 hover:text-accent hover:underline">
                  {s.label}
                </a>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 pb-24 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:pb-6">
          <p>
            © {year} {site.name}. {ui.rights} {site.footer.credit}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 uppercase tracking-[0.16em] hover:text-fg"
          >
            {ui.backToTop} <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
