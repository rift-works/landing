import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function ContactBand() {
  return (
    <section className="bg-navy py-14 text-cloud sm:py-[88px]">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[720px]">
          <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
            <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
            Start a Project
          </p>
          <h2 className="font-display text-[clamp(32px,4vw,54px)] leading-[1.08] tracking-[-0.045em]">
            Si el problema es complejo, empecemos por estructurarlo.
          </h2>
          <p className="mt-5 max-w-[540px] text-cloud/72">
            Escríbenos a {site.emails.axel} o {site.emails.gabriel}. El siguiente paso es una
            conversación concreta sobre el sistema, no un pitch genérico.
          </p>
        </div>
        <Button href="/contacto">Iniciar un proyecto</Button>
      </Container>
    </section>
  );
}
