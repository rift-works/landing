import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy, pillars, site } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const currentPillars = pillars[locale];

  return (
    <footer
      data-theme="dark"
      style={{
        background: "var(--rw-basalt-deep)",
        color: "var(--rw-bone)",
        borderTop: "2px solid var(--rw-border)",
        padding: "clamp(44px, 6vw, 64px) clamp(20px, 4vw, 48px) 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "clamp(32px, 4vw, 48px)",
          alignItems: "start",
        }}
      >
        {/* Col 1: Brand & Thesis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Logo size={28} reversed descriptor={false} clearSpace={false} />
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-semibold) 16px/1.4 var(--rw-font-sans)",
              color: "var(--rw-bone)",
              letterSpacing: "-0.01em",
              maxWidth: "24ch",
            }}
          >
            {locale === "es"
              ? "Capacidad técnica, no promesas."
              : "Technical depth, not promises."}
          </p>
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-regular) 10px/1.6 var(--rw-font-mono)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(237,233,227,0.55)",
            }}
          >
            {c.heroKicker}
          </p>
        </div>

        {/* Col 2: Capacidades / Pillars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-oxide-lift)",
            }}
          >
            {locale === "es" ? "Capacidades" : "Disciplines"}
          </span>
          <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {currentPillars.map(([n, title]) => (
              <Link
                key={n}
                href={localePath(locale, "/services")}
                style={{
                  font: "var(--rw-weight-regular) 13px/1.4 var(--rw-font-sans)",
                  color: "rgba(237,233,227,0.85)",
                  textDecoration: "none",
                  transition: "color 160ms ease",
                }}
              >
                <span style={{ fontFamily: "var(--rw-font-mono)", fontSize: 10, color: "rgba(237,233,227,0.45)", marginRight: 8 }}>
                  {n}
                </span>
                {title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Navigation */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-oxide-lift)",
            }}
          >
            {locale === "es" ? "Navegación" : "Navigation"}
          </span>
          <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.nav.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                style={{
                  font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(237,233,227,0.85)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={localePath(locale, "/")}
              style={{
                font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(237,233,227,0.85)",
                textDecoration: "none",
              }}
            >
              {locale === "es" ? "Inicio" : "Home"}
            </Link>
          </nav>
        </div>

        {/* Col 4: Direct Channel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-oxide-lift)",
            }}
          >
            {locale === "es" ? "Canal Directo" : "Direct Channel"}
          </span>
          <a
            href={`mailto:${site.email}`}
            style={{
              font: "var(--rw-weight-semibold) 14px/1.4 var(--rw-font-mono)",
              color: "var(--rw-oxide-lift)",
              textDecoration: "none",
            }}
          >
            {site.email}
          </a>
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-regular) 12px/1.5 var(--rw-font-sans)",
              color: "rgba(237,233,227,0.6)",
            }}
          >
            {locale === "es"
              ? "Operación bilingüe · Respuesta en 48 horas hábiles."
              : "Bilingual operations · 48-hour response turnaround."}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: 1240,
          margin: "44px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(237,233,227,0.12)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          font: "var(--rw-weight-regular) 10px/1.4 var(--rw-font-mono)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(237,233,227,0.45)",
        }}
      >
        <div>
          © {new Date().getFullYear()} {site.name} · {locale === "es" ? "Todos los derechos reservados" : "All rights reserved"}
        </div>
        <div>
          {locale === "es" ? "Sistema Aperture · Canal CH-A" : "Aperture System · Channel CH-A"}
        </div>
      </div>
    </footer>
  );
}
