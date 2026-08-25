import { Button } from "@/components/ui/Button";
import { copy, phases, type Lang } from "@/lib/site";

export function Hero({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <section className="rw-hero">
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rw-accent-text)",
          }}
        >
          {c.heroKicker}
        </span>
        <h1
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) clamp(32px, 7vw, 58px)/1.04 var(--rw-font-sans)",
            letterSpacing: "-0.035em",
            fontStretch: "112%",
            fontVariationSettings: '"wdth" 112',
            color: "var(--rw-text)",
          }}
        >
          {c.heroHead}
        </h1>
        <p
          style={{
            margin: 0,
            font: "var(--rw-weight-regular) 17px/1.6 var(--rw-font-sans)",
            color: "var(--rw-text-secondary)",
            maxWidth: 520,
          }}
        >
          {c.heroSub}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button href="#contacto">{c.heroPrimary}</Button>
          <Button variant="secondary" href="#enfoque">
            {c.heroSecondary}
          </Button>
        </div>
      </div>
      <div
        style={{
          border: "1px solid var(--rw-border)",
          background: "var(--rw-surface-raised)",
          padding: 36,
        }}
      >
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--rw-text-secondary)",
          }}
        >
          {c.model}
        </span>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 22 }}>
          {phases.map((phase, index) => (
            <div
              key={phase}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                padding: "16px 0",
                borderBottom: index < phases.length - 1 ? "1px solid var(--rw-border-inner)" : "none",
              }}
            >
              <span
                style={{
                  font: "var(--rw-weight-medium) 12px/1 var(--rw-font-mono)",
                  color: "var(--rw-accent-text)",
                  minWidth: 26,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  font: "var(--rw-weight-semibold) 20px/1 var(--rw-font-sans)",
                  letterSpacing: "-0.02em",
                  color: "var(--rw-text)",
                }}
              >
                {phase}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
