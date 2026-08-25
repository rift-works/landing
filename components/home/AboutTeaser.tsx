import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutTeaser() {
  return (
    <section className="py-14 sm:py-[88px]">
      <Container>
        <SectionHeading
          eyebrow="Nosotros"
          title="Un socio de ingeniería que entiende el negocio."
          description="RiftWorks nace en Nicaragua y Centroamérica, con una presencia diseñada desde el inicio para Estados Unidos y mercados internacionales."
        />
        <div className="grid gap-[18px] md:grid-cols-3">
          <article className="border border-line p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Fundadores</p>
            <h3 className="mt-2.5 font-display text-[21px] leading-tight">Gabriel Obando y Axel García</h3>
            <p className="mt-3 text-ink-muted">
              Acceso directo a quienes diagnostican, diseñan y construyen.
            </p>
          </article>
          <article className="border border-line p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Cliente</p>
            <h3 className="mt-2.5 font-display text-[21px] leading-tight">Organizaciones en crecimiento</h3>
            <p className="mt-3 text-ink-muted">
              Empresas regionales, startups maduras y equipos de 20 a 500 colaboradores.
            </p>
          </article>
          <article className="border border-line p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">Modo de trabajo</p>
            <h3 className="mt-2.5 font-display text-[21px] leading-tight">Estratégico y ejecutable</h3>
            <p className="mt-3 text-ink-muted">
              Técnico sin ser inaccesible. Sobrio, bilingüe y basado en evidencia.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Button href="/nosotros" variant="ghost">
            Conoce RiftWorks
          </Button>
        </div>
      </Container>
    </section>
  );
}
