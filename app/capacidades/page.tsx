import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities, method } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capacidades",
  description:
    "Engineering & Architecture, Data & AI, Product Design y Strategy para organizaciones en crecimiento.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-cloud sm:py-[92px]">
        <Container>
          <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
            <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
            Capabilities / Services
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(44px,7vw,84px)] leading-[1.08] tracking-[-0.045em]">
            Capacidades que se integran, no servicios sueltos.
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-cloud/72">
            Cerramos la brecha entre objetivos de negocio y capacidades tecnológicas mediante
            ingeniería de software, datos e IA aplicada, diseño de producto y estrategia de
            transformación.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-[88px]">
        <Container>
          <SectionHeading
            eyebrow="Pilares"
            title="Una capacidad de ejecución, cuatro disciplinas."
            description="El catálogo es una base comercial. Lo que se publica es lo que podemos diagnosticar, estructurar y construir."
          />
          <div className="grid gap-[18px]">
            {capabilities.map((item) => (
              <article
                key={item.code}
                className="grid gap-6 border border-line p-6 md:grid-cols-[180px_1fr] md:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-signal">
                  {item.code}
                </p>
                <div>
                  <h2 className="font-display text-[28px] leading-tight tracking-[-0.045em]">
                    {item.name}
                  </h2>
                  <p className="mt-3 max-w-[62ch] text-ink-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="border-l-2 border-signal pl-3 text-[15px]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-soft py-14 sm:py-[88px]">
        <Container>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Discover → Architect → Build → Optimize"
            description="Primero el problema. Después la arquitectura. Luego la construcción. Al final, una capacidad que se puede operar."
          />
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
            {method.map((step) => (
              <article key={step.code} className="border border-line bg-cloud p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-signal">
                  {step.code}
                </p>
                <h3 className="mt-2.5 font-display text-[21px] leading-tight">{step.name}</h3>
                <p className="mt-3 text-ink-muted">{step.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/contacto">Iniciar un proyecto</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
