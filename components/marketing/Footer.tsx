import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy, site } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <footer data-theme="dark" className="rw-footer">
      <Logo size={30} reversed descriptor clearSpace={false} />
      <nav
        aria-label={c.navAria}
        style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}
      >
        {c.nav.map((item) => (
          <Link
            key={item.href}
            href={localePath(locale, item.href)}
            style={{
              font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--rw-bone)",
              borderBottom: "none",
            }}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          style={{
            font: "var(--rw-weight-regular) 13px/1.4 var(--rw-font-mono)",
            color: "var(--rw-oxide-lift)",
            borderBottom: "none",
            marginTop: 8,
          }}
        >
          {site.email}
        </a>
        <span
          style={{
            font: "var(--rw-weight-regular) 11px/1.4 var(--rw-font-mono)",
            color: "rgba(237,233,227,.55)",
          }}
        >
          {c.legal}
        </span>
      </nav>
    </footer>
  );
}
