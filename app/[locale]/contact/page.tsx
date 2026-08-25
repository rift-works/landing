import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/marketing/Contact";
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
  return buildMetadata(locale, "/contact", copy.contactTitle, copy.contactDescription);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Contact locale={locale} />;
}
