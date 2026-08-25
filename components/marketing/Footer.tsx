import { Logo } from "@/components/brand/Logo";
import { copy, site, type Lang } from "@/lib/site";

export function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];

  return (
    <footer data-theme="dark" className="rw-footer">
      <Logo size={30} reversed descriptor clearSpace={false} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
        <a
          href={`mailto:${site.email}`}
          style={{
            font: "var(--rw-weight-regular) 13px/1.4 var(--rw-font-mono)",
            color: "var(--rw-oxide-lift)",
            borderBottom: "none",
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
      </div>
    </footer>
  );
}
