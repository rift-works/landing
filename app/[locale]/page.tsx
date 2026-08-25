import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getCopy } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getCopy(locale);
  return buildMetadata(locale, "/", copy.homeTitle, copy.homeDescription);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <Services locale={locale} />
    </>
  );
}
