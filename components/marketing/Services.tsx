import type { Locale } from "@/lib/i18n";
import { pillars, getCopy } from "@/lib/site";

export function Services({ locale }: { locale: Locale }) {
  const items = pillars[locale];
  const c = getCopy(locale);

  return (
    <section className="rw-services">
      {items.map(([n, title, body, outputs], index) => (
        <article
          key={n}
          className="rw-service"
          data-last={index === items.length - 1 ? "true" : undefined}
          style={{ animationDelay: `${index * 40}ms`, display: "flex", flexDirection: "column" }}
        >
          <span className="rw-rebuild-code">{n}</span>
          <h2 className="rw-rebuild-title">{title}</h2>
          <p className="rw-rebuild-body">{body}</p>

          {outputs && outputs.length > 0 && (
            <div
              style={{
                marginTop: "auto",
                paddingTop: 16,
                borderTop: "1px solid var(--rw-border-inner)",
              }}
            >
              <span
                style={{
                  display: "block",
                  font: "var(--rw-weight-medium) 9px/1 var(--rw-font-mono)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--rw-text-secondary)",
                  marginBottom: 8,
                }}
              >
                {c.outputsLabel}
              </span>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                {outputs.map((out) => (
                  <li
                    key={out}
                    style={{
                      font: "var(--rw-weight-regular) 11.5px/1.4 var(--rw-font-sans)",
                      color: "var(--rw-text)",
                    }}
                  >
                    • {out}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
