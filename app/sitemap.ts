import type { MetadataRoute } from "next";
import { locales, routeList, localePath } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routeList.map((path) => {
      const languages = Object.fromEntries(
        locales.map((item) => [item, `${site.url}${localePath(item, path)}`]),
      ) as Record<string, string>;
      languages["x-default"] = `${site.url}${localePath("es", path)}`;

      return {
        url: `${site.url}${localePath(locale, path)}`,
        lastModified,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? (locale === "es" ? 1 : 0.9) : 0.8,
        alternates: { languages },
      };
    }),
  );
}
