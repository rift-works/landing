"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { copy, type Lang } from "@/lib/site";

type HeaderProps = {
  lang: Lang;
  onLang: (lang: Lang) => void;
};

export function Header({ lang, onLang }: HeaderProps) {
  const c = copy[lang];

  return (
    <header className="rw-header">
      <Link href="/" style={{ borderBottom: "none", color: "inherit" }} aria-label="RiftWorks">
        <Logo size={24} clearSpace={false} />
      </Link>
      <nav className="rw-nav" aria-label={lang === "es" ? "Principal" : "Primary"}>
        {c.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              font: "var(--rw-weight-regular) 12px/1 var(--rw-font-mono)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--rw-text)",
              borderBottom: "none",
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {item.label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => onLang(lang === "es" ? "en" : "es")}
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            minHeight: 44,
            font: "var(--rw-weight-regular) 12px/1 var(--rw-font-mono)",
            letterSpacing: "0.1em",
            color: "var(--rw-text-secondary)",
          }}
        >
          {c.langSwitch}
        </button>
        <Button variant="accent" size="sm" href="#contacto">
          {c.cta}
        </Button>
      </nav>
    </header>
  );
}
