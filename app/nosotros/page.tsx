import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "RiftWorks integra technology, data, design y strategy para construir capacidades digitales con rigor.",
};

const principles = [
  {
    title: "Técnico, no inaccesible",
    body: "Hablamos de arquitectura, datos y sistemas con claridad ejecutiva.",
  },
  {
    title: "Estratégico, no abstracto",
    body: "Cada recomendación se conecta con un problema operativo y un resultado medible.",
  },
  {
    title: "Ejecución, no solo diagnóstico",
    body: "Estructuramos la solución y tenemos la capacidad técnica para construirla.",
  },
  {
    title: "Sobriedad y evidencia",
    body: "No usamos promesas grandilocuentes ni métricas sin verificación.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-16 text-cloud sm:py-[92px]">
        <Container>
          <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
            <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
            About / Manifesto
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(44px,7vw,84px)] leading-[1.08] tracking-[-0.045em]">
            Un socio capaz de entender el problema y construirlo.
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-cloud/72">
            RiftWorks integra {site.descriptor} para entender problemas complejos, estructurar
            soluciones y construir capacidades digitales que ayuden a organizaciones reales a crecer
            con rigor.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-[88px]">
        <Container>
          <SectionHeading
            eyebrow="Identidad"
            title="De Centroamérica, con alcance internacional."
            description="Mercado inicial en Nicaragua y Centroamérica. La marca, el idioma y la operación se diseñaron desde el inicio para Estados Unidos y clientes internacionales."
          />
          <div className="grid gap-[18px] md:grid-cols-2">
            <article className="border border-line p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                Fundadores
              </p>
              <h2 className="mt-3 font-display text-[28px] leading-tight">Gabriel Obando</h2>
              <p className="mt-2 text-ink-muted">{site.emails.gabriel}</p>
              <h2 className="mt-8 font-display text-[28px] leading-tight">Axel García</h2>
              <p className="mt-2 text-ink-muted">{site.emails.axel}</p>
            </article>
            <article className="border border-line bg-navy p-6 text-cloud md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
                Mensaje central
              </p>
              <p className="mt-4 font-display text-[28px] leading-[1.15] tracking-[-0.045em]">
                RiftWorks entiende el problema, estructura la solución y tiene la capacidad técnica
                para construirla.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-14 sm:py-[88px]">
        <Container>
          <SectionHeading
            eyebrow="Principios"
            title="Cómo se presenta RiftWorks."
            description="Una presencia global, bilingüe y libre de regionalismos. Inglés para mercados globales; español para Latinoamérica."
          />
          <div className="grid gap-[18px] md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="border-l-[3px] border-signal bg-cloud p-[22px]">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-[88px]">
        <Container className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <h2 className="font-display text-[clamp(32px,4vw,54px)] leading-[1.08] tracking-[-0.045em]">
              Empecemos por el sistema, no por el eslogan.
            </h2>
            <p className="mt-4 text-ink-muted">
              Si hay un problema de arquitectura, datos, producto o transformación, el siguiente
              paso es una conversación concreta.
            </p>
          </div>
          <Button href="/contacto">Iniciar un proyecto</Button>
        </Container>
      </section>
    </>
  );
}
