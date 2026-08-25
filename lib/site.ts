export const site = {
  name: "RiftWorks",
  domain: "weareriftworks.com",
  url: "https://weareriftworks.com",
  descriptor: "Technology · Data · Design · Strategy",
  taglineEs: "Ingeniería tecnológica y estrategia para organizaciones en crecimiento.",
  taglineEn: "Technology engineering and strategy for scaling organizations.",
  emails: {
    axel: "axel@weareriftworks.com",
    gabriel: "gabriel@weareriftworks.com",
  },
} as const;

export const nav = [
  { href: "/capacidades", label: "Capacidades" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const capabilities = [
  {
    code: "01",
    name: "Engineering & Architecture",
    summary:
      "Diseñamos y construimos plataformas de software con arquitectura clara, integrable y preparada para escalar.",
    details: [
      "Arquitectura de sistemas y modernización de plataformas",
      "Ingeniería de software con rigor técnico y trazabilidad",
      "Integración de sistemas fragmentados en una base operable",
    ],
  },
  {
    code: "02",
    name: "Data & AI",
    summary:
      "Convertimos datos dispersos en visibilidad operativa e inteligencia aplicada con un caso de negocio explícito.",
    details: [
      "Gobernanza, pipelines y modelos de datos",
      "Business intelligence con calidad suficiente para decidir",
      "IA aplicada solo cuando hay un problema real que resolver",
    ],
  },
  {
    code: "03",
    name: "Product Design & Brand Experience",
    summary:
      "Diseñamos productos y sistemas de experiencia que las organizaciones pueden operar, no solo presentar.",
    details: [
      "Diseño de producto digital y sistemas de interfaz",
      "Identidad y experiencia alineadas a la operación real",
      "Claridad de uso para equipos internos y clientes",
    ],
  },
  {
    code: "04",
    name: "Strategy & Business Transformation",
    summary:
      "Diagnosticamos el problema de negocio y estructuramos la ruta tecnológica antes de construir.",
    details: [
      "Diagnóstico de operaciones, sistemas y deuda técnica",
      "Priorización de capacidades con impacto medible",
      "Acompañamiento de transformación con ejecución, no solo recomendaciones",
    ],
  },
] as const;

export const method = [
  {
    code: "01",
    name: "Discover",
    summary: "Entendemos el problema operativo, los sistemas actuales y las restricciones reales.",
  },
  {
    code: "02",
    name: "Architect",
    summary: "Estructuramos la solución: arquitectura, datos, experiencia y plan de entrega.",
  },
  {
    code: "03",
    name: "Build",
    summary: "Construimos con rigor técnico, trazabilidad y una base que se puede operar.",
  },
  {
    code: "04",
    name: "Optimize",
    summary: "Ajustamos, medimos y dejamos capacidades listas para escalar.",
  },
] as const;

export const problems = [
  {
    name: "Sistemas fragmentados",
    summary: "Herramientas que no conversan y procesos que dependen de trabajo manual.",
  },
  {
    name: "Integraciones frágiles",
    summary: "Arquitectura débil, deuda técnica y un costo creciente de cada cambio.",
  },
  {
    name: "Baja visibilidad",
    summary: "Datos incompletos, BI de baja calidad y decisiones sin evidencia suficiente.",
  },
  {
    name: "IA sin caso de negocio",
    summary: "Iniciativas tecnológicas que no se conectan con un problema operativo concreto.",
  },
] as const;

export const outcomes = [
  "Menos trabajo manual",
  "Mejor trazabilidad",
  "Menor deuda técnica",
  "Más velocidad a producción",
  "Capacidades listas para escalar",
] as const;
