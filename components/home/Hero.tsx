import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-cloud sm:py-[92px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7FAFC 1px, transparent 1px), linear-gradient(to bottom, #F7FAFC 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 80px",
        }}
      />
      <Container className="relative">
        <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
          <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
          {site.descriptor}
        </p>
        <h1 className="max-w-[900px] font-display text-[clamp(44px,7vw,84px)] leading-[1.08] tracking-[-0.045em]">
          Entendemos el problema, estructuramos la solución y la construimos.
        </h1>
        <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-cloud/72">
          {site.taglineEs} Integramos software, datos y diseño estratégico para transformar
          operaciones complejas.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/contacto">Iniciar un proyecto</Button>
          <Button href="/capacidades" variant="ghostOnDark">
            Ver capacidades
          </Button>
        </div>
      </Container>
    </section>
  );
}
