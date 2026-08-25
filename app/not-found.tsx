import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="rw-hero">
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <span
          style={{
            font: "var(--rw-weight-medium) var(--rw-label-size)/1 var(--rw-font-mono)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--rw-text-secondary)",
          }}
        >
          404
        </span>
        <h1
          style={{
            margin: 0,
            font: "var(--rw-weight-semibold) clamp(32px, 7vw, 58px)/1.04 var(--rw-font-sans)",
            letterSpacing: "-0.035em",
            fontStretch: "112%",
          }}
        >
          Esta ruta no existe.
        </h1>
        <p style={{ margin: 0, color: "var(--rw-text-secondary)", maxWidth: 420 }}>
          Vuelve al inicio o escribe para iniciar un proyecto.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button href="/">Ir al inicio</Button>
          <Button variant="secondary" href="/#contacto">
            Iniciar un proyecto
          </Button>
        </div>
        <p>
          <Link href="/#servicios">Ver servicios</Link>
        </p>
      </div>
    </section>
  );
}
