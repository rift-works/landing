import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { method, outcomes } from "@/lib/site";

export function Method() {
  return (
    <section className="bg-soft py-14 sm:py-[88px]">
      <Container>
        <SectionHeading
          eyebrow="Modelo de entrega"
          title="Discover → Architect → Build → Optimize"
          description="El resultado esperado se expresa en operación: menos fricción, más trazabilidad y una base técnica que se puede escalar."
        />
        <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
          {method.map((step) => (
            <article key={step.code} className="border border-line bg-cloud p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-signal">{step.code}</p>
              <h3 className="mt-2.5 font-display text-[21px] leading-tight tracking-[-0.045em]">
                {step.name}
              </h3>
              <p className="mt-3 text-ink-muted">{step.summary}</p>
            </article>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {outcomes.map((item) => (
            <li
              key={item}
              className="border border-line bg-cloud px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
