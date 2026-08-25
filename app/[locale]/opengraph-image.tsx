import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getCopy(isLocale(locale) ? locale : "es");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#EDE9E3",
          color: "#1A1A18",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 64, height: 64 }}>
            <svg width="64" height="64" viewBox="0 0 64 64">
              <path d="M6 6 H26 V32 H21 V58 H6 Z" fill="#1A1A18" />
              <path d="M43 6 H58 V58 H38 V32 H43 Z" fill="#1A1A18" />
            </svg>
          </div>
          <div style={{ fontSize: 42, fontWeight: 600, letterSpacing: -1.5 }}>RiftWorks</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 920 }}>
          <div style={{ fontSize: 18, letterSpacing: 4, textTransform: "uppercase", color: "#8F2A06" }}>
            {copy.heroKicker}
          </div>
          <div style={{ fontSize: 44, fontWeight: 600, lineHeight: 1.1, letterSpacing: -1.2 }}>
            {copy.heroHead}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
