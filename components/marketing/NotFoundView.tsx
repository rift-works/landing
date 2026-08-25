import { Button } from "@/components/ui/Button";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function NotFoundView({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section className="rw-hero">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--rw-text-secondary)",
          }}
        >
          404
        </span>
        <h1
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) clamp(32px, 7vw, 58px)/1.04 var(--rw-font-sans)",
            letterSpacing: "-0.035em",
            fontStretch: "112%",
          }}
        >
          {copy.notFoundTitle}
        </h1>
        <p style={{ margin: 0, color: "var(--rw-text-secondary)", maxWidth: 420 }}>
          {copy.notFoundBody}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button href={localePath(locale, "/")}>{copy.notFoundHome}</Button>
          <Button variant="secondary" href={localePath(locale, "/contact")}>
            {copy.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
