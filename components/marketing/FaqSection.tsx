import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function FaqSection({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-section" style={{ borderTop: "1px solid var(--rw-border)" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(32px, 5vw, 64px)",
          alignItems: "start",
        }}
      >
        <Reveal>
          <span className="rw-kicker">{c.faqKicker}</span>
          <h2 className="rw-display" style={{ margin: "14px 0 16px" }}>{c.faqHead}</h2>
          <p className="rw-lead" style={{ margin: 0, maxWidth: "34ch" }}>{c.faqLead}</p>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ background: "var(--rw-surface-raised)", border: "1px solid var(--rw-border)", padding: "16px 24px" }}>
            <Accordion items={c.faq} defaultOpen={0} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
