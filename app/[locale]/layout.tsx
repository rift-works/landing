import { notFound } from "next/navigation";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { getCopy } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const copy = getCopy(locale);

  return (
    <div style={{ background: "var(--rw-surface)", minHeight: "100vh" }} lang={locale}>
      <JsonLd data={[organizationJsonLd(locale), websiteJsonLd()]} />
      <a href="#main" className="rw-skip">
        {copy.skip}
      </a>
      <Header locale={locale} />
      <main id="main">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
