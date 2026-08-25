import type { Metadata } from "next";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy, site } from "@/lib/site";

export function pageUrl(locale: Locale, path: string) {
  return new URL(localePath(locale, path), site.url).toString();
}

export function buildMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const url = pageUrl(locale, path);
  const es = pageUrl("es", path);
  const en = pageUrl("en", path);
  const c = getCopy(locale);
  const fullTitle = title.includes("RiftWorks") ? title : `${title} — RiftWorks`;

  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    keywords: [...c.keywords],
    authors: [{ name: "RiftWorks" }],
    creator: "RiftWorks",
    publisher: "RiftWorks",
    robots: { index: true, follow: true },
    category: "technology",
    alternates: {
      canonical: url,
      languages: {
        es,
        en,
        "x-default": es,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: c.ogLocale,
      alternateLocale: locale === "es" ? ["en_US"] : ["es_NI"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationJsonLd(locale: Locale) {
  const c = getCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    image: `${site.url}/brand/logo-primary.svg`,
    logo: `${site.url}/brand/logo-symbol.svg`,
    description: c.homeDescription,
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Managua",
      addressCountry: "NI",
    },
    areaServed: ["NI", "Central America", "US"],
    knowsLanguage: ["es", "en"],
    founder: [
      { "@type": "Person", name: "Gabriel Obando" },
      { "@type": "Person", name: "Axel García" },
    ],
    sameAs: [site.url],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: ["es", "en"],
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}

export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
