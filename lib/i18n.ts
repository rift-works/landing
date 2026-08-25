export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const localeCookie = "rw-locale";

export const routes = {
  home: "/",
  services: "/services",
  weAre: "/we-are",
  contact: "/contact",
} as const;

export const routeList = [routes.home, routes.services, routes.weAre, routes.contact] as const;

export const legacyRedirects: Record<string, string> = {
  "/nosotros": routes.weAre,
  "/contacto": routes.contact,
  "/capacidades": routes.services,
  "/servicios": routes.services,
  "/enfoque": routes.services,
};

export const spanishCountries = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GQ",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/en" || pathname === "/es") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  return pathname || "/";
}

export function isAppPath(pathname: string): boolean {
  const path = stripLocalePrefix(pathname);
  return (routeList as readonly string[]).includes(path);
}

export function parseAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((item) => item.trim().startsWith("q="));
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q.split("=")[1]) || 0 : 1 };
    })
    .filter((item) => item.tag)
    .sort((a, b) => b.q - a.q);

  for (const item of ranked) {
    if (item.tag === "*" ) continue;
    if (item.tag === "es" || item.tag.startsWith("es-")) return "es";
    if (item.tag === "en" || item.tag.startsWith("en-")) return "en";
  }
  return null;
}

export function localeFromCountry(country: string | null): Locale | null {
  if (!country) return null;
  return spanishCountries.has(country.toUpperCase()) ? "es" : "en";
}

const botPattern =
  /googlebot|bingbot|yandex|duckduckbot|baiduspider|slurp|facebookexternalhit|linkedinbot|twitterbot|slackbot|discordbot|applebot|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider/i;

export function isCrawler(userAgent: string | null): boolean {
  return Boolean(userAgent && botPattern.test(userAgent));
}

export function negotiateLocale(input: {
  cookie: string | null;
  acceptLanguage: string | null;
  country: string | null;
  userAgent: string | null;
}): Locale {
  if (isLocale(input.cookie)) return input.cookie;
  if (isCrawler(input.userAgent)) return defaultLocale;

  const fromBrowser = parseAcceptLanguage(input.acceptLanguage);
  if (fromBrowser) return fromBrowser;

  const fromRegion = localeFromCountry(input.country);
  if (fromRegion) return fromRegion;

  return defaultLocale;
}

export function requestCountry(headers: Headers): string | null {
  return (
    headers.get("x-vercel-ip-country") ||
    headers.get("cf-ipcountry") ||
    headers.get("x-country-code") ||
    headers.get("cloudfront-viewer-country") ||
    null
  );
}
