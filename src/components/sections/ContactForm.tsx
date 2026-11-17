"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useSite, whatsappHref } from "../SiteContext";

type Channel = "whatsapp" | "email";

function Field({
  label,
  required,
  error,
  children,
  htmlFor,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${htmlFor}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-sm text-[#b42318] dark:text-[#f97066]"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full rounded-[var(--media-radius,4px)] border border-line bg-bg px-4 py-3 text-[0.95rem] text-fg outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted/60 focus:border-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_18%,transparent)] [color-scheme:inherit]";

/** Contact form with no server: it composes a WhatsApp or e-mail message for the front desk. */
export function ContactForm() {
  const { site, ui } = useSite();
  const id = useId();
  const { whatsapp, email } = site.contact;
  const channels: Channel[] = [...(whatsapp ? (["whatsapp"] as const) : []), ...(email ? (["email"] as const) : [])];
  const [channel, setChannel] = useState<Channel>(channels[0] ?? "email");
  const [f, setF] = useState({ name: "", phone: "", email: "", subject: ui.formSubjects[0], arrival: "", departure: "", guests: "2", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF((v) => ({ ...v, [k]: e.target.value }));
    setErrors((v) => ({ ...v, [k]: "", contact: k === "phone" || k === "email" ? "" : v.contact }));
    setDone(false);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!f.name.trim()) err.name = ui.formErrorName;
    if (!f.phone.trim() && !f.email.trim()) err.contact = ui.formErrorContact;
    if (!f.message.trim()) err.message = ui.formErrorMessage;
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`${id}-${Object.keys(err)[0] === "contact" ? "phone" : Object.keys(err)[0]}`)?.focus();
      return;
    }
    const lines = [
      `${ui.formHello} ${site.name},`,
      ui.formIntroLine,
      "",
      `${ui.formSubject} : ${f.subject}`,
      f.arrival ? `${ui.formArrival.replace(/\s*\(.*\)/, "")} : ${f.arrival}` : "",
      f.departure ? `${ui.formDeparture.replace(/\s*\(.*\)/, "")} : ${f.departure}` : "",
      f.arrival || f.departure ? `${ui.formGuests} : ${f.guests}` : "",
      "",
      f.message.trim(),
      "",
      `— ${f.name.trim()}`,
      f.phone ? `${ui.formPhone} : ${f.phone}` : "",
      f.email ? `${ui.formEmail} : ${f.email}` : "",
    ].filter((l, i, a) => l !== "" || (a[i - 1] !== "" && i > 0));
    const text = lines.join("\n");
    const url =
      channel === "whatsapp" && whatsapp
        ? whatsappHref(whatsapp, text)
        : `mailto:${email}?subject=${encodeURIComponent(`${f.subject} — ${f.name.trim()}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setDone(true);
  };

  return (
    <section className="section bg-bg-soft">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading kicker={ui.formKicker} title={ui.formTitle} intro={ui.formIntro} />
        </div>

        <Reveal className="lg:col-span-8" delay={0.1}>
          <form
            onSubmit={submit}
            noValidate
            className="rounded-[var(--media-radius,4px)] border border-line bg-surface p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)] sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={ui.formName} required htmlFor={`${id}-name`} error={errors.name} className="sm:col-span-2">
                <input
                  id={`${id}-name`}
                  autoComplete="name"
                  value={f.name}
                  onChange={set("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${id}-name-error` : undefined}
                  className={inputClass}
                />
              </Field>
              <Field label={ui.formPhone} htmlFor={`${id}-phone`} error={errors.contact}>
                <input
                  id={`${id}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+237 6…"
                  value={f.phone}
                  onChange={set("phone")}
                  aria-invalid={Boolean(errors.contact)}
                  className={inputClass}
                />
              </Field>
              <Field label={ui.formEmail} htmlFor={`${id}-email`}>
                <input id={`${id}-email`} type="email" autoComplete="email" value={f.email} onChange={set("email")} className={inputClass} />
              </Field>
              <Field label={ui.formSubject} htmlFor={`${id}-subject`} className="sm:col-span-2">
                <select id={`${id}-subject`} value={f.subject} onChange={set("subject")} className={inputClass}>
                  {ui.formSubjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label={ui.formArrival} htmlFor={`${id}-arrival`}>
                <input id={`${id}-arrival`} type="date" min={today} value={f.arrival} onChange={set("arrival")} className={inputClass} />
              </Field>
              <div className="grid grid-cols-[1fr_96px] gap-4">
                <Field label={ui.formDeparture} htmlFor={`${id}-departure`}>
                  <input
                    id={`${id}-departure`}
                    type="date"
                    min={f.arrival || today}
                    value={f.departure}
                    onChange={set("departure")}
                    className={inputClass}
                  />
                </Field>
                <Field label={ui.formGuests} htmlFor={`${id}-guests`}>
                  <input id={`${id}-guests`} type="number" min={1} max={500} value={f.guests} onChange={set("guests")} className={inputClass} />
                </Field>
              </div>
              <Field label={ui.formMessage} required htmlFor={`${id}-message`} error={errors.message} className="sm:col-span-2">
                <textarea
                  id={`${id}-message`}
                  rows={5}
                  value={f.message}
                  onChange={set("message")}
                  aria-invalid={Boolean(errors.message)}
                  className={clsx(inputClass, "resize-y")}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-5 border-t border-line pt-8 lg:flex-row lg:items-center lg:justify-between">
              {channels.length > 1 ? (
                <div role="radiogroup" aria-label={ui.formSubject} className="inline-flex rounded-full border border-line p-1">
                  {channels.map((c) => (
                    <button
                      key={c}
                      type="button"
                      role="radio"
                      aria-checked={channel === c}
                      onClick={() => setChannel(c)}
                      className={clsx(
                        "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors",
                        channel === c ? "bg-accent text-on-accent" : "text-muted hover:text-fg",
                      )}
                    >
                      {c === "whatsapp" ? <MessageCircle className="h-4 w-4" strokeWidth={1.6} /> : <Mail className="h-4 w-4" strokeWidth={1.6} />}
                      {c === "whatsapp" ? ui.whatsapp : ui.email}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted">
                  <span className="text-accent">*</span> {ui.formRequired}
                </p>
              )}
              <button type="submit" className="btn btn-primary group">
                {channel === "whatsapp" ? ui.formSendWhatsapp : ui.formSendEmail}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            <AnimatePresence>
              {done && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 flex items-start gap-3 overflow-hidden text-sm text-accent"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} />
                  {ui.formDone}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
