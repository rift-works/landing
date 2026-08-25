"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "ready" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Completa nombre, correo y una descripción breve del proyecto.");
      return;
    }

    const subject = encodeURIComponent(`Proyecto RiftWorks — ${organization || name}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Organización: ${organization || "—"}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.emails.axel},${site.emails.gabriel}?subject=${subject}&body=${body}`;
    setStatus("ready");
    setError("");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Nombre</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="rounded-md border border-line bg-cloud px-3 py-3 text-[15px] text-navy outline-none focus:border-signal"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Correo</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="rounded-md border border-line bg-cloud px-3 py-3 text-[15px] text-navy outline-none focus:border-signal"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Organización</span>
        <input
          name="organization"
          type="text"
          autoComplete="organization"
          className="rounded-md border border-line bg-cloud px-3 py-3 text-[15px] text-navy outline-none focus:border-signal"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          Qué necesitas construir
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y rounded-md border border-line bg-cloud px-3 py-3 text-[15px] text-navy outline-none focus:border-signal"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-md border border-signal bg-signal px-4 py-[11px] font-mono text-[11px] uppercase tracking-[0.06em] text-cloud transition-colors hover:border-[#185dcc] hover:bg-[#185dcc]"
      >
        Iniciar un proyecto
      </button>
      {status === "error" ? <p className="text-sm text-navy">{error}</p> : null}
      {status === "ready" ? (
        <p className="text-sm text-ink-muted">
          Si el correo no se abrió, escríbenos a {site.emails.axel} o {site.emails.gabriel}.
        </p>
      ) : null}
    </form>
  );
}
