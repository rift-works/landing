import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
          <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
          404
        </p>
        <h1 className="max-w-[720px] font-display text-[clamp(40px,6vw,72px)] leading-[1.08] tracking-[-0.045em]">
          Esta ruta no existe.
        </h1>
        <p className="mt-5 max-w-[52ch] text-ink-muted">
          Vuelve al inicio o abre una conversación sobre un proyecto.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Ir al inicio</Button>
          <Button href="/contacto" variant="ghost">
            Iniciar un proyecto
          </Button>
        </div>
        <p className="mt-8">
          <Link href="/capacidades" className="font-mono text-[11px] uppercase tracking-[0.06em] text-signal">
            Ver capacidades
          </Link>
        </p>
      </Container>
    </section>
  );
}
