import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Approach } from "@/components/marketing/Approach";
import { PageIntro } from "@/components/marketing/PageIntro";
import { Services } from "@/components/marketing/Services";
import { JsonLd } from "@/components/seo/JsonLd";
import { isLocale } from "@/lib/i18n";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getCopy } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return buildMetadata(locale, "/services", copy.servicesTitle, copy.servicesDescription);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  return (
    <>
      <JsonLd data={faqJsonLd(copy.faq)} />
      <PageIntro locale={locale} kicker={copy.servicesTitle} title={copy.servicesHead} lead={copy.servicesLead} />
      <Services locale={locale} />
      <Approach locale={locale} />
    </>
  );
}
