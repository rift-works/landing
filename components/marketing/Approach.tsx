import { Accordion } from "@/components/ui/Accordion";
import { copy, type Lang } from "@/lib/site";

export function Approach({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <section id="enfoque" className="rw-split">
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
        <div
          style={{
            borderTop: "var(--rw-border-strong) solid var(--rw-invert)",
            paddingTop: 14,
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--rw-space-4)",
            font: "var(--rw-weight-regular) var(--rw-data-size)/1.4 var(--rw-font-mono)",
          }}
        >
          <span style={{ color: "var(--rw-text-secondary)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            {c.min}
          </span>
          <span style={{ color: "var(--rw-text)" }}>USD 5,000</span>
        </div>
      </div>
      <Accordion items={c.faq} />
    </section>
  );
}
