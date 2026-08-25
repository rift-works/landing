"use client";

import { FormEvent, useState } from "react";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Slider } from "@/components/ui/Slider";
import { Textarea } from "@/components/ui/Textarea";
import type { Locale } from "@/lib/i18n";
import { getCopy, site } from "@/lib/site";

export function Contact({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [pillarIndex, setPillarIndex] = useState(0);
  const [budget, setBudget] = useState(25000);
  const [scope, setScope] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const pillar = c.formPillars[pillarIndex] ?? c.formPillars[0];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !scope.trim()) {
      setError(c.formError);
      return;
    }

    const subject = encodeURIComponent(
      locale === "es" ? `Proyecto RiftWorks — ${company || email}` : `RiftWorks project — ${company || email}`,
    );
    const body = encodeURIComponent(
      [
        `${c.labels.mail}: ${email}`,
        `${c.labels.co}: ${company || "—"}`,
        `${c.labels.pillar}: ${pillar}`,
        `${c.labels.budget}: USD ${budget.toLocaleString("en-US")}`,
        "",
        scope,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setError("");
    setSent(true);
  }

  return (
    <section className="rw-contact">
      <div>
        <h1
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) var(--rw-h2-size)/var(--rw-h2-lh) var(--rw-font-sans)",
            letterSpacing: "var(--rw-h2-track)",
            color: "var(--rw-text)",
          }}
        >
          {c.contactHead}
        </h1>
        <p
          style={{
            margin: "16px 0 0",
            maxWidth: 420,
            color: "var(--rw-text-secondary)",
          }}
        >
          {c.contactLead}
        </p>
      </div>
      <form onSubmit={onSubmit} className="rw-contact-form" noValidate>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Input
            label={c.labels.mail}
            type="email"
            autoComplete="email"
            placeholder={c.emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Input
            label={c.labels.co}
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <Select
            label={c.labels.pillar}
            value={pillar}
            onChange={(value) => {
              const next = c.formPillars.findIndex((item) => item === value);
              setPillarIndex(next === -1 ? 0 : next);
            }}
            options={[...c.formPillars]}
            placeholder={c.selectPlaceholder}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Slider
            label={c.labels.budget}
            min={0}
            max={120000}
            step={1000}
            value={budget}
            onChange={setBudget}
            valueLabel={`USD ${budget.toLocaleString("en-US")}`}
          />
          <Textarea
            label={c.labels.scope}
            rows={3}
            value={scope}
            onChange={(event) => setScope(event.target.value)}
            maxLength={500}
            placeholder={c.placeholder}
          />
          {error ? <Alert tone="negative" title={error} /> : null}
          {sent ? (
            <Alert tone="positive" title={c.sent}>
              {c.sentBody}
            </Alert>
          ) : (
            <Button type="submit" fullWidth>
              {c.send}
            </Button>
          )}
        </div>
      </form>
    </section>
  );
}
