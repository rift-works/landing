import type { Locale } from "@/lib/i18n";
import { pillars } from "@/lib/site";

export function Services({ locale }: { locale: Locale }) {
  const items = pillars[locale];

  return (
    <section className="rw-services">
      {items.map(([n, title, body], index) => (
        <article
          key={n}
          className="rw-service"
          data-last={index === items.length - 1 ? "true" : undefined}
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <span className="rw-rebuild-code">{n}</span>
          <h2 className="rw-rebuild-title">{title}</h2>
          <p className="rw-rebuild-body">{body}</p>
        </article>
      ))}
    </section>
  );
}
