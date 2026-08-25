import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/lib/site";

export function CapabilitiesPreview() {
  return (
    <section className="py-14 sm:py-[88px]">
      <Container>
        <SectionHeading
          eyebrow="Capacidades"
          title="Cuatro pilares, una sola ejecución."
          description="Cerramos la brecha entre objetivos de negocio y capacidades tecnológicas. Engineering es el punto de entrada principal; Data & AI, el segundo."
        />
        <div className="grid gap-[18px] md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.code} className="flex min-h-full flex-col border border-line bg-cloud p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                {item.code}
              </p>
              <h3 className="mt-2.5 font-display text-[21px] leading-tight tracking-[-0.045em]">
                {item.name}
              </h3>
              <p className="mt-3 flex-1 text-ink-muted">{item.summary}</p>
            </article>
          ))}
        </div>
        <Link
          href="/capacidades"
          className="mt-8 inline-flex font-mono text-[11px] uppercase tracking-[0.06em] text-signal hover:underline"
        >
          Ver el detalle de capacidades
        </Link>
      </Container>
    </section>
  );
}
