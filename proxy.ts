import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isAppPath,
  isCrawler,
  isLocale,
  legacyRedirects,
  localeCookie,
  localePath,
  negotiateLocale,
  requestCountry,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n";

function applyLocale(response: NextResponse, locale: Locale) {
  response.headers.set("x-rw-locale", locale);
  response.headers.set("Content-Language", locale);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

function nextWithLocale(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-rw-locale", locale);
  return applyLocale(NextResponse.next({ request: { headers: requestHeaders } }), locale);
}

function rewriteToDefaultLocale(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-rw-locale", defaultLocale);
  return applyLocale(NextResponse.rewrite(url, { request: { headers: requestHeaders } }), defaultLocale);
}

function persistLocale(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const bare = stripLocalePrefix(pathname);

  if (legacyRedirects[bare]) {
    const locale = pathname.startsWith("/en") ? "en" : defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = localePath(locale, legacyRedirects[bare]);
    return applyLocale(NextResponse.redirect(url, 308), locale);
  }

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    if (bare === "/" || isAppPath(bare)) {
      const url = request.nextUrl.clone();
      url.pathname = bare;
      return applyLocale(NextResponse.redirect(url, 308), defaultLocale);
    }
    return nextWithLocale(request, defaultLocale);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return nextWithLocale(request, "en");
  }

  const detected = negotiateLocale({
    cookie: request.cookies.get(localeCookie)?.value ?? null,
    acceptLanguage: request.headers.get("accept-language"),
    country: requestCountry(request.headers),
    userAgent: request.headers.get("user-agent"),
  });

  if (!isAppPath(pathname)) {
    return nextWithLocale(request, detected);
  }

  if (detected !== defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = localePath(detected, pathname);
    const response = applyLocale(NextResponse.redirect(url), detected);
    if (!request.cookies.get(localeCookie)) persistLocale(response, detected);
    return response;
  }

  const response = rewriteToDefaultLocale(request, pathname);
  if (!isCrawler(request.headers.get("user-agent")) && !request.cookies.get(localeCookie) && isLocale(detected)) {
    persistLocale(response, detected);
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
