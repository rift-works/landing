"use client";

import { useEffect, useState } from "react";
import { Approach } from "@/components/marketing/Approach";
import { Contact } from "@/components/marketing/Contact";
import { Footer } from "@/components/marketing/Footer";
import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { Services } from "@/components/marketing/Services";
import { copy, type Lang } from "@/lib/site";

export function Site() {
  const [lang, setLang] = useState<Lang>("es");
  const c = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div style={{ background: "var(--rw-surface)", minHeight: "100vh" }}>
      <a href="#contenido" className="rw-skip">
        {c.skip}
      </a>
      <Header lang={lang} onLang={setLang} />
      <main id="contenido">
        <Hero lang={lang} />
        <Services lang={lang} />
        <Approach lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
