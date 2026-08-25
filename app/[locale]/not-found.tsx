import { headers } from "next/headers";
import { NotFoundView } from "@/components/marketing/NotFoundView";
import { isLocale } from "@/lib/i18n";

export default async function LocaleNotFound() {
  const headerLocale = (await headers()).get("x-rw-locale");
  const locale = isLocale(headerLocale) ? headerLocale : "es";
  return <NotFoundView locale={locale} />;
}
