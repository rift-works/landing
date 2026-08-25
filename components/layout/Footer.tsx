import Link from "next/link";
import { SignalMark } from "@/components/brand/SignalMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-[34px] text-[13px] text-ink-muted">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-navy">
            <SignalMark className="h-8 w-8" />
            <Wordmark size="sm" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em]">{site.descriptor}</p>
          <p className="max-w-[42ch]">{site.taglineEs}</p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em]">Navegación</span>
          <Link href="/" className="hover:text-signal">
            Inicio
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-signal">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em]">Contacto</span>
          <a href={`mailto:${site.emails.axel}`} className="hover:text-signal">
            {site.emails.axel}
          </a>
          <a href={`mailto:${site.emails.gabriel}`} className="hover:text-signal">
            {site.emails.gabriel}
          </a>
        </div>
      </Container>
      <Container className="mt-8 flex flex-col gap-2 border-t border-line pt-6 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} RiftWorks</span>
        <span>Nicaragua · Centroamérica · mercados internacionales</span>
      </Container>
    </footer>
  );
}
