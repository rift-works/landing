import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function FoundersStrip({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-section" style={{ borderTop: "1px solid var(--rw-border)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 36 }}>
        <Reveal>
          <span className="rw-kicker">{c.foundersKicker}</span>
          <h2 className="rw-display" style={{ margin: "12px 0 8px" }}>{c.foundersHead}</h2>
          <p className="rw-lead" style={{ margin: 0 }}>{c.foundersLead}</p>
        </Reveal>
        <Reveal delay={60}>
          <Button variant="secondary" href={localePath(locale, "/we-are")}>
            {c.foundersCta}
          </Button>
        </Reveal>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {c.foundersList.map((founder, i) => (
          <Reveal key={founder.name} delay={i * 60}>
            <article
              style={{
                border: "1px solid var(--rw-border)",
                background: "var(--rw-surface-raised)",
                padding: "24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  font: "var(--rw-weight-medium) 9.5px/1 var(--rw-font-mono)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--rw-accent)",
                }}
              >
                {founder.role}
              </span>
              <h3
                style={{
                  margin: 0,
                  font: "var(--rw-weight-semibold) 24px/1.2 var(--rw-font-sans)",
                  color: "var(--rw-text)",
                }}
              >
                {founder.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  font: "var(--rw-weight-regular) 14px/1.5 var(--rw-font-sans)",
                  color: "var(--rw-text-secondary)",
                }}
              >
                {founder.focus}
              </p>
              <span
                style={{
                  marginTop: "auto",
                  paddingTop: 12,
                  borderTop: "1px solid var(--rw-border-inner)",
                  font: "var(--rw-weight-regular) 11px/1 var(--rw-font-mono)",
                  color: "var(--rw-text-secondary)",
                }}
              >
                {founder.location}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
