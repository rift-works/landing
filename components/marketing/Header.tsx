"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";
import { Button } from "@/components/ui/Button";
import { localePath, stripLocalePrefix, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Header({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const pathname = usePathname() || "/";
  const current = stripLocalePrefix(pathname);

  return (
    <header className="rw-header">
      <Link
        href={localePath(locale, "/")}
        style={{ borderBottom: "none", color: "inherit" }}
        aria-label="RiftWorks"
      >
        <Logo size={24} clearSpace={false} />
      </Link>
      <nav className="rw-nav" aria-label={c.navAria}>
        {c.nav.map((item) => {
          const href = localePath(locale, item.href);
          const active = current === item.href;
          return (
            <Link
              key={item.href}
              href={href}
              aria-current={active ? "page" : undefined}
              style={{
                font: "var(--rw-weight-regular) 12px/1 var(--rw-font-mono)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active ? "var(--rw-text)" : "var(--rw-text-secondary)",
                borderBottom: active ? "2px solid var(--rw-invert)" : "2px solid transparent",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
                transition:
                  "color var(--rw-duration) var(--rw-easing), border-color var(--rw-duration) var(--rw-easing)",
              }}
            >
              {item.label}
            </Link>
          );
        })}
        <LanguageSwitch locale={locale} />
        <Button variant="accent" size="sm" href={localePath(locale, "/contact")}>
          {c.cta}
        </Button>
      </nav>
    </header>
  );
}
