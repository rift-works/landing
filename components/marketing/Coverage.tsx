import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Coverage({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-section">
      <Reveal>
        <span className="rw-kicker">{c.coverageKicker}</span>
        <h2 className="rw-display">{c.coverageHead}</h2>
      </Reveal>
      <div className="rw-coverage">
        {c.coverage.map((item, index) => (
          <Reveal key={item.title} delay={index * 40}>
            <article className="rw-coverage-card">
              <span className="rw-kicker">{item.title}</span>
              <p>{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
