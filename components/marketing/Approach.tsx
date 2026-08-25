import { Accordion } from "@/components/ui/Accordion";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Approach({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-split">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <h2
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) var(--rw-h2-size)/var(--rw-h2-lh) var(--rw-font-sans)",
            letterSpacing: "var(--rw-h2-track)",
            color: "var(--rw-text)",
          }}
        >
          {c.approachHead}
        </h2>
        <p
          style={{
            margin: 0,
            font: "var(--rw-weight-regular) var(--rw-body-size)/var(--rw-body-lh) var(--rw-font-sans)",
            color: "var(--rw-text-secondary)",
            maxWidth: "42em",
          }}
        >
          {c.approachBody}
        </p>
      </div>
      <Accordion items={c.faq} />
    </section>
  );
}
