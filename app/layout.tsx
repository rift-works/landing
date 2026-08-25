import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import { isLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "RiftWorks",
    template: "%s",
  },
  description:
    "Integramos software, datos y diseño estratégico para transformar operaciones complejas. Consultora de tecnología con sede en Managua.",
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/brand/logo-symbol.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#EDE9E3",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerLocale = (await headers()).get("x-rw-locale");
  const locale = isLocale(headerLocale) ? headerLocale : "es";

  return (
    <html
      lang={locale}
      className={`${archivo.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
