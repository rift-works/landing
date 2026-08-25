import type { Locale } from "@/lib/i18n";

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  locale: Locale;
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="rw-hero" style={{ gridTemplateColumns: "1fr" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820 }}>
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rw-accent-text)",
          }}
        >
          {kicker}
        </span>
        <h1
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) clamp(32px, 7vw, 58px)/1.04 var(--rw-font-sans)",
            letterSpacing: "-0.035em",
            fontStretch: "112%",
            fontVariationSettings: '"wdth" 112',
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 620,
            color: "var(--rw-text-secondary)",
            font: "var(--rw-weight-regular) 17px/1.6 var(--rw-font-sans)",
          }}
        >
          {lead}
        </p>
      </div>
    </section>
  );
}
