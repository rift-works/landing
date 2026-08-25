import { ChannelMark } from "@/components/brand/ChannelMark";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function CtaBand({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-cta rw-hatch">
      <Reveal>
        <span className="rw-kicker rw-kicker-on-dark">{c.ctaKicker}</span>
        <h2 className="rw-display">{c.ctaHead}</h2>
        <p className="rw-lead rw-lead-on-dark">{c.ctaBody}</p>
        <div style={{ marginTop: 28 }}>
          <Button variant="accent" href={localePath(locale, "/contact")}>
            {c.cta}
          </Button>
        </div>
      </Reveal>
      <div className="rw-cta-mark" aria-hidden="true">
        <ChannelMark size={220} reversed />
      </div>
    </section>
  );
}
