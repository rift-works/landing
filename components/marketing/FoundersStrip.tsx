import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy, site } from "@/lib/site";

export function FoundersStrip({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-split">
      <Reveal>
        <span className="rw-kicker">{c.foundersKicker}</span>
        <h2 className="rw-display">{c.foundersHead}</h2>
        <p className="rw-lead">{site.city}</p>
      </Reveal>
      <Reveal delay={80} style={{ display: "flex", alignItems: "flex-end" }}>
        <Button variant="secondary" href={localePath(locale, "/we-are")}>
          {c.foundersCta}
        </Button>
      </Reveal>
    </section>
  );
}
