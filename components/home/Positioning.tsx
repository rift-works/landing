import { Container } from "@/components/ui/Container";

export function Positioning() {
  return (
    <section className="bg-navy py-14 text-cloud sm:py-[88px]">
      <Container>
        <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
          <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
          Posicionamiento
        </p>
        <blockquote className="max-w-[920px] font-display text-[clamp(28px,4vw,48px)] leading-[1.12] tracking-[-0.045em]">
          RiftWorks no vende horas de programación; construye capacidades organizacionales mediante
          tecnología.
        </blockquote>
        <p className="mt-8 max-w-[680px] text-lg leading-relaxed text-cloud/72">
          Nos diferenciamos de consultoras grandes por el acceso directo a quienes ejecutan, y de
          fábricas de software por combinar estrategia, arquitectura, datos, diseño y construcción.
        </p>
      </Container>
    </section>
  );
}
