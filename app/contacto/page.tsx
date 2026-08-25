import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Inicia un proyecto con RiftWorks. Escríbenos para una conversación concreta.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-16 text-cloud sm:py-[92px]">
        <Container>
          <p className="mb-[18px] flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coast">
            <span className="inline-block h-px w-8 bg-signal" aria-hidden="true" />
            Start a Project
          </p>
          <h1 className="max-w-[900px] font-display text-[clamp(44px,7vw,84px)] leading-[1.08] tracking-[-0.045em]">
            Iniciar un proyecto.
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-cloud/72">
            Describe el problema operativo, el sistema actual y lo que necesitas construir. Te
            responden Gabriel o Axel.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-[88px]">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ContactForm />
          <aside className="border border-line p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
              Correo directo
            </p>
            <ul className="mt-5 grid gap-3">
              <li>
                <a className="text-signal hover:underline" href={`mailto:${site.emails.axel}`}>
                  {site.emails.axel}
                </a>
              </li>
              <li>
                <a className="text-signal hover:underline" href={`mailto:${site.emails.gabriel}`}>
                  {site.emails.gabriel}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              CTA principal: Start a Project / Iniciar un proyecto. El proceso comercial, CRM y
              agenda definitiva siguen en definición; el canal público actual es el correo.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
