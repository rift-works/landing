import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function SignalStrip({ locale }: { locale: Locale }) {
  const items = [...getCopy(locale).signals];
  const loop = [...items, ...items];

  return (
    <div className="rw-marquee" aria-hidden="true">
      <div className="rw-marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="rw-marquee-item">
            {item}
            <span className="rw-marquee-rule" />
          </span>
        ))}
      </div>
    </div>
  );
}
