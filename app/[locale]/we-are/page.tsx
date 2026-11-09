import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Coverage } from "@/components/marketing/Coverage";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageIntro } from "@/components/marketing/PageIntro";
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
  return buildMetadata(locale, "/we-are", copy.weAreTitle, copy.weAreDescription);
}

export default async function WeArePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  return (
    <>
      <PageIntro locale={locale} kicker={copy.weAreKicker} title={copy.weAreHead} lead={copy.weAreLead} />
      <section className="rw-split">
        <article style={{ border: "1px solid var(--rw-border)", background: "var(--rw-surface-raised)", padding: 28 }}>
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-accent)",
            }}
          >
            {copy.foundersLabel}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 20 }}>
            {copy.foundersList.map((founder) => (
              <div key={founder.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--rw-text-secondary)",
                  }}
                >
                  {founder.role}
                </span>
                <h2 style={{ margin: 0, font: "var(--rw-weight-semibold) 24px/1.2 var(--rw-font-sans)" }}>
                  {founder.name}
                </h2>
                <p style={{ margin: 0, font: "var(--rw-weight-regular) 14px/1.5 var(--rw-font-sans)", color: "var(--rw-text-secondary)" }}>
                  {founder.focus}
                </p>
              </div>
            ))}
          </div>
        </article>
        <article style={{ border: "1px solid var(--rw-border)", background: "var(--rw-surface-raised)", padding: 28 }}>
          <p
            style={{
              margin: 0,
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-accent)",
            }}
          >
            {copy.audienceLabel}
          </p>
          <h2 style={{ margin: "20px 0 12px", font: "var(--rw-weight-semibold) 24px/1.2 var(--rw-font-sans)" }}>
            {copy.audienceHead}
          </h2>
          <p style={{ margin: 0, font: "var(--rw-weight-regular) 14px/1.6 var(--rw-font-sans)", color: "var(--rw-text-secondary)" }}>
            {copy.audienceBody}
          </p>
        </article>
      </section>
      <section className="rw-section" style={{ borderTop: "1px solid var(--rw-border)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {copy.principles.map((item, i) => (
            <article
              key={item.title}
              style={{
                border: "1px solid var(--rw-border)",
                background: "var(--rw-surface-raised)",
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span style={{ font: "var(--rw-weight-medium) 11px/1 var(--rw-font-mono)", color: "var(--rw-text-secondary)" }}>
                0{i + 1}
              </span>
              <h3 style={{ margin: 0, font: "var(--rw-weight-semibold) 18px/1.3 var(--rw-font-sans)" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, font: "var(--rw-weight-regular) 14px/1.5 var(--rw-font-sans)", color: "var(--rw-text-secondary)" }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <Coverage locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
