import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/site";

export function Problem() {
  return (
    <section className="py-14 sm:py-[88px]">
      <Container>
        <SectionHeading
          eyebrow="El problema"
          title="Fragmentación, deuda técnica y poca visibilidad operativa."
          description="Ayudamos a organizaciones en crecimiento a diseñar, construir y operar plataformas de software, arquitecturas de datos y experiencias digitales escalables."
        />
        <div className="grid gap-[18px] md:grid-cols-2">
          {problems.map((item) => (
            <article key={item.name} className="rounded-lg border border-line bg-cloud p-6">
              <h3 className="font-display text-[21px] leading-tight tracking-[-0.045em]">{item.name}</h3>
              <p className="mt-3 text-ink-muted">{item.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
