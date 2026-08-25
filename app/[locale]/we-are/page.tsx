import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/marketing/PageIntro";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { getCopy, site } from "@/lib/site";

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
        <article style={{ border: "1px solid var(--rw-border)", background: "var(--rw-surface-raised)", padding: 22 }}>
          <p
            style={{
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-text-secondary)",
            }}
          >
            {copy.foundersLabel}
          </p>
          <h2 style={{ margin: "12px 0 0", font: "var(--rw-weight-semibold) 28px/1.2 var(--rw-font-sans)" }}>
            Gabriel Obando
          </h2>
          <p style={{ margin: "8px 0 0", color: "var(--rw-text-secondary)" }}>{site.city}</p>
          <h2 style={{ margin: "28px 0 0", font: "var(--rw-weight-semibold) 28px/1.2 var(--rw-font-sans)" }}>
            Axel García
          </h2>
          <p style={{ margin: "8px 0 0", color: "var(--rw-text-secondary)" }}>{site.email}</p>
        </article>
        <article style={{ border: "1px solid var(--rw-border)", background: "var(--rw-surface-raised)", padding: 22 }}>
          <p
            style={{
              font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--rw-text-secondary)",
            }}
          >
            {copy.audienceLabel}
          </p>
          <h2 style={{ margin: "12px 0 8px", font: "var(--rw-weight-semibold) 28px/1.2 var(--rw-font-sans)" }}>
            {copy.audienceHead}
          </h2>
          <p style={{ margin: 0, color: "var(--rw-text-secondary)" }}>{copy.audienceBody}</p>
        </article>
      </section>
      <section className="rw-split" style={{ borderTop: "1px solid var(--rw-border)" }}>
        {copy.principles.map((item) => (
          <article key={item.title} style={{ borderLeft: "3px solid var(--rw-oxide)", padding: "8px 0 8px 18px" }}>
            <h3 style={{ margin: 0, font: "var(--rw-weight-semibold) 18px/1.3 var(--rw-font-sans)" }}>{item.title}</h3>
            <p style={{ margin: "8px 0 0", color: "var(--rw-text-secondary)" }}>{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
