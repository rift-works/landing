import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Coverage } from "@/components/marketing/Coverage";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FoundersStrip } from "@/components/marketing/FoundersStrip";
import { Hero } from "@/components/marketing/Hero";
import { Phases } from "@/components/marketing/Phases";
import { Problem } from "@/components/marketing/Problem";
import { Rebuild } from "@/components/marketing/Rebuild";
import { Services } from "@/components/marketing/Services";
import { SignalStrip } from "@/components/marketing/SignalStrip";
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
      <SignalStrip locale={locale} />
      <Problem locale={locale} />
      <Services locale={locale} />
      <Phases locale={locale} />
      <Rebuild locale={locale} />
      <Coverage locale={locale} />
      <FoundersStrip locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
