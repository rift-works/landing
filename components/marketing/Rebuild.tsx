import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Rebuild({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-section">
      <Reveal>
        <span className="rw-kicker">{c.rebuildKicker}</span>
        <h2 className="rw-display">{c.rebuildHead}</h2>
        <p className="rw-lead">{c.rebuildLead}</p>
      </Reveal>
      <div className="rw-rebuild">
        {c.rebuild.map((item, index) => (
          <Reveal key={item.code} delay={index * 40}>
            <article className="rw-rebuild-row">
              <span className="rw-rebuild-code">{item.code}</span>
              <h3 className="rw-rebuild-title">{item.title}</h3>
              <p className="rw-rebuild-body">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
