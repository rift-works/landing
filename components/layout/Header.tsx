"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignalMark } from "@/components/brand/SignalMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-cloud/93 backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-4 py-[18px] sm:px-7">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <SignalMark className="h-9 w-9" />
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden items-center gap-[18px] md:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.06em] transition-colors",
                  active ? "text-signal" : "text-ink-muted hover:text-signal",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href="/contacto">Iniciar un proyecto</Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <span className="flex w-4 flex-col gap-1">
            <span className={cn("h-px w-full bg-navy transition-transform", open && "translate-y-[5px] rotate-45")} />
            <span className={cn("h-px w-full bg-navy transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-full bg-navy transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-4 py-4 md:hidden"
          aria-label="Móvil"
        >
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.06em] text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contacto" className="w-fit">
              Iniciar un proyecto
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
