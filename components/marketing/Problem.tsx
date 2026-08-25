import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Problem({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-band rw-hatch">
      <Reveal>
        <span className="rw-kicker rw-kicker-on-dark">{c.problemKicker}</span>
        <h2 className="rw-display">{c.problemHead}</h2>
        <p className="rw-lead rw-lead-on-dark">{c.problemBody}</p>
      </Reveal>
    </section>
  );
}
