import { pillars, type Lang } from "@/lib/site";

export function Services({ lang }: { lang: Lang }) {
  const items = pillars[lang];

  return (
    <section id="servicios" className="rw-services">
      {items.map(([n, title, body], index) => (
        <div key={n} className="rw-service" data-last={index === items.length - 1 ? "true" : undefined}>
          <span
            style={{
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              color: "var(--rw-text-secondary)",
            }}
          >
            {n}
          </span>
          <span
            style={{
              font: "var(--rw-weight-semibold) 16px/1.3 var(--rw-font-sans)",
              color: "var(--rw-text)",
            }}
          >
            {title}
          </span>
          <span
            style={{
              font: "var(--rw-weight-regular) 13px/1.55 var(--rw-font-sans)",
              color: "var(--rw-text-secondary)",
            }}
          >
            {body}
          </span>
        </div>
      ))}
    </section>
  );
}
