import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { copy, site } from "@/lib/site";
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
  title: {
    default: "RiftWorks — Technology · Data · Design · Strategy",
    template: "%s — RiftWorks",
  },
  description: copy.es.heroHead,
  keywords: [
    "RiftWorks",
    "ingeniería de software",
    "arquitectura",
    "datos",
    "IA aplicada",
    "diseño de producto",
    "estrategia tecnológica",
    "Managua",
    "Nicaragua",
  ],
  openGraph: {
    title: "RiftWorks",
    description: copy.es.heroSub,
    url: site.url,
    siteName: site.name,
    locale: "es_NI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RiftWorks",
    description: copy.es.heroSub,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
