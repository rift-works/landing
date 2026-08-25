"use client";

import { usePathname } from "next/navigation";
import { localeCookie, localePath, otherLocale, stripLocalePrefix, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const next = otherLocale(locale);
  const href = localePath(next, stripLocalePrefix(pathname));
  const c = getCopy(locale);

  return (
    <a
      href={href}
      hrefLang={next}
      aria-label={c.langSwitchAria}
      onClick={() => {
        document.cookie = `${localeCookie}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
      }}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        minHeight: 44,
        display: "inline-flex",
        alignItems: "center",
        font: "var(--rw-weight-regular) 12px/1 var(--rw-font-mono)",
        letterSpacing: "0.1em",
        color: "var(--rw-text-secondary)",
        borderBottom: "none",
        textTransform: "uppercase",
      }}
    >
      {c.langSwitch}
    </a>
  );
}
