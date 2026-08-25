import { ChannelMark } from "@/components/brand/ChannelMark";
import { Button } from "@/components/ui/Button";
import { localePath, type Locale } from "@/lib/i18n";
import { getCopy, phases } from "@/lib/site";

export function Hero({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-hero">
      <div className="rw-hero-copy">
        <span className="rw-kicker rw-enter" style={{ animationDelay: "0ms" }}>
          {c.heroKicker}
        </span>
        <h1 className="rw-hero-title rw-enter" style={{ animationDelay: "40ms" }}>
          {c.heroHead}
        </h1>
        <p className="rw-lead rw-enter" style={{ animationDelay: "80ms" }}>
          {c.heroSub}
        </p>
        <div className="rw-hero-actions rw-enter" style={{ animationDelay: "120ms" }}>
          <Button href={localePath(locale, "/contact")}>{c.heroPrimary}</Button>
          <Button variant="secondary" href={localePath(locale, "/services")}>
            {c.heroSecondary}
          </Button>
        </div>
      </div>
      <div className="rw-hero-panel rw-enter" style={{ animationDelay: "80ms" }}>
        <div className="rw-hero-channel">
          <ChannelMark size={120} />
          <span className="rw-kicker">{c.channel}</span>
        </div>
        <span className="rw-kicker" style={{ color: "var(--rw-text-secondary)" }}>
          {c.model}
        </span>
        <div className="rw-hero-phases">
          {phases.map((phase, index) => (
            <div key={phase} className="rw-hero-phase">
              <span className="rw-rebuild-code">{String(index + 1).padStart(2, "0")}</span>
              <span className="rw-hero-phase-name">{phase}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
