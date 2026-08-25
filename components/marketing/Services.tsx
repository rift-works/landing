import type { Locale } from "@/lib/i18n";
import { pillars } from "@/lib/site";

export function Services({ locale }: { locale: Locale }) {
  const items = pillars[locale];

  return (
    <section className="rw-services">
      {items.map(([n, title, body], index) => (
        <article key={n} className="rw-service" data-last={index === items.length - 1 ? "true" : undefined}>
          <span
            style={{
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              color: "var(--rw-text-secondary)",
            }}
          >
            {n}
          </span>
          <h2
            style={{
              margin: 0,
              font: "var(--rw-weight-semibold) 16px/1.3 var(--rw-font-sans)",
              color: "var(--rw-text)",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-regular) 13px/1.55 var(--rw-font-sans)",
              color: "var(--rw-text-secondary)",
            }}
          >
            {body}
          </p>
        </article>
      ))}
    </section>
  );
}
