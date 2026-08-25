import type { Locale } from "@/lib/i18n";

export const site = {
  name: "RiftWorks",
  url: "https://weareriftworks.com",
  email: "hola@weareriftworks.com",
  city: "Managua, Nicaragua",
} as const;

export const phases = ["Discover", "Architect", "Build", "Optimize"] as const;

export const pillars = {
  es: [
    ["01", "Ingeniería y Arquitectura", "Arquitectura cloud, construcción de plataforma, DevOps."],
    ["02", "Datos e IA", "Pipelines, almacenamiento, modelos aplicados."],
    ["03", "Diseño de Producto y Marca", "Investigación, sistemas de diseño, identidad."],
    ["04", "Estrategia y Transformación", "Diagnóstico operativo, hoja de ruta, gobierno."],
  ],
  en: [
    ["01", "Engineering & Architecture", "Cloud architecture, platform build, DevOps."],
    ["02", "Data & AI", "Pipelines, warehousing, applied models."],
    ["03", "Product Design & Brand Experience", "Research, design systems, identity."],
    ["04", "Strategy & Business Transformation", "Operational diagnosis, roadmap, governance."],
  ],
} as const;

export const copy = {
  es: {
    htmlLang: "es",
    ogLocale: "es_NI",
    navAria: "Principal",
    langSwitch: "EN",
    langSwitchAria: "Switch to English",
    cta: "Iniciar un proyecto",
    skip: "Saltar al contenido",
    keywords: [
      "RiftWorks",
      "consultora de tecnología",
      "arquitectura de software",
      "datos",
      "inteligencia artificial",
      "diseño de producto",
      "Managua",
      "Nicaragua",
    ],
    nav: [
      { href: "/services", label: "Servicios" },
      { href: "/we-are", label: "Nosotros" },
      { href: "/contact", label: "Contacto" },
    ],
    homeTitle: "RiftWorks — Tecnología · Datos · Diseño · Estrategia",
    homeDescription:
      "Integramos software, datos y diseño estratégico para transformar operaciones complejas. Consultora de tecnología con sede en Managua.",
    heroKicker: "Tecnología · Datos · Diseño · Estrategia",
    heroHead:
      "Integramos software, datos y diseño estratégico para transformar operaciones complejas.",
    heroSub:
      "RiftWorks entiende el problema, estructura la solución y tiene la capacidad técnica para construirla.",
    heroPrimary: "Iniciar un proyecto",
    heroSecondary: "Ver servicios",
    model: "Modelo de entrega",
    servicesTitle: "Servicios",
    servicesDescription:
      "Ingeniería y arquitectura, datos e IA, diseño de producto y estrategia para organizaciones en crecimiento.",
    servicesHead: "Cuatro capacidades, una sola ejecución.",
    servicesLead:
      "Cerramos la brecha entre objetivos de negocio y capacidades tecnológicas. Engineering es el punto de entrada; Data & AI, el segundo.",
    approachHead: "Cuatro fases, siempre en este orden.",
    approachBody:
      "No renombramos las fases por cliente. Cada una termina en un entregable que se factura por separado.",
    faq: [
      {
        question: "¿Qué incluye Discover?",
        answer:
          "Dos semanas de diagnóstico, entrevistas con el equipo y un mapa del estado actual de la operación.",
      },
      {
        question: "¿Cómo se factura?",
        answer: "Por fase, contra entregable.",
      },
      {
        question: "¿Trabajan en inglés?",
        answer: "Sí. Toda la documentación existe en ambos idiomas.",
      },
    ],
    weAreTitle: "Nosotros",
    weAreDescription:
      "RiftWorks es una consultora de tecnología con sede en Managua, fundada por Gabriel Obando y Axel García.",
    weAreKicker: "Nosotros",
    weAreHead: "Una consultora de tecnología con sede en Managua.",
    weAreLead:
      "RiftWorks entiende el problema, estructura la solución y tiene la capacidad técnica para construirla. Trabajamos en español con clientes regionales y en inglés con clientes internacionales.",
    foundersLabel: "Fundadores",
    audienceLabel: "Audiencia",
    audienceHead: "Organizaciones que necesitan reconstruir operaciones complejas.",
    audienceBody:
      "El trabajo es para equipos en crecimiento que ya no pueden parchar sistemas fragmentados. Diagnóstico, arquitectura y construcción quedan en las mismas manos.",
    principles: [
      {
        title: "Técnico, no inaccesible",
        body: "Hablamos de arquitectura, datos y sistemas con claridad ejecutiva.",
      },
      {
        title: "Estratégico, no abstracto",
        body: "Cada recomendación se conecta con un problema operativo y un resultado medible.",
      },
      {
        title: "Ejecución, no solo diagnóstico",
        body: "Estructuramos la solución y tenemos la capacidad técnica para construirla.",
      },
    ],
    contactTitle: "Contacto",
    contactDescription: "Inicia un proyecto con RiftWorks. Escríbenos para una conversación concreta.",
    contactHead: "Iniciar un proyecto",
    contactLead: "Describe el problema operativo, el sistema actual y lo que necesitas construir.",
    labels: {
      mail: "Correo",
      co: "Empresa",
      pillar: "Pilar",
      scope: "Alcance",
      budget: "Presupuesto",
    },
    send: "Enviar",
    sent: "Solicitud registrada",
    sentBody: "Respondemos en dos días hábiles.",
    formPillars: [
      "Ingeniería y Arquitectura",
      "Datos e IA",
      "Diseño de Producto",
      "Estrategia",
    ],
    placeholder: "Describa el alcance esperado",
    emailPlaceholder: "nina.v@example.com",
    selectPlaceholder: "Seleccione…",
    formError: "Completa correo y alcance antes de enviar.",
    legal: "RiftWorks · Managua, Nicaragua · Marca en proceso de registro",
    notFoundTitle: "Esta ruta no existe.",
    notFoundBody: "Vuelve al inicio o escribe para iniciar un proyecto.",
    notFoundHome: "Ir al inicio",
    notFoundServices: "Ver servicios",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    navAria: "Primary",
    langSwitch: "ES",
    langSwitchAria: "Cambiar a español",
    cta: "Start a project",
    skip: "Skip to content",
    keywords: [
      "RiftWorks",
      "technology consultancy",
      "software architecture",
      "data",
      "artificial intelligence",
      "product design",
      "Managua",
      "Nicaragua",
    ],
    nav: [
      { href: "/services", label: "Services" },
      { href: "/we-are", label: "We are" },
      { href: "/contact", label: "Contact" },
    ],
    homeTitle: "RiftWorks — Technology · Data · Design · Strategy",
    homeDescription:
      "We integrate software, data and strategic design to transform complex operations. Technology consultancy based in Managua.",
    heroKicker: "Technology · Data · Design · Strategy",
    heroHead:
      "We integrate software, data and strategic design to transform complex operations.",
    heroSub:
      "RiftWorks understands the problem, structures the solution, and has the technical capacity to build it.",
    heroPrimary: "Start a project",
    heroSecondary: "See services",
    model: "Delivery model",
    servicesTitle: "Services",
    servicesDescription:
      "Engineering and architecture, data and AI, product design and strategy for scaling organizations.",
    servicesHead: "Four capabilities, one execution.",
    servicesLead:
      "We close the gap between business objectives and technical capability. Engineering is the main entry point; Data & AI is the second.",
    approachHead: "Four phases, always in this order.",
    approachBody:
      "We do not rename the phases per client. Each one ends in a deliverable and is invoiced separately.",
    faq: [
      {
        question: "What does Discover include?",
        answer:
          "Two weeks of diagnosis, interviews with the team, and a map of the operation as it stands.",
      },
      {
        question: "How is it invoiced?",
        answer: "By phase, against a deliverable.",
      },
      {
        question: "Do you work in Spanish?",
        answer: "Yes. Every document exists in both languages.",
      },
    ],
    weAreTitle: "We are",
    weAreDescription:
      "RiftWorks is a technology consultancy based in Managua, founded by Gabriel Obando and Axel García.",
    weAreKicker: "We are",
    weAreHead: "A technology consultancy based in Managua.",
    weAreLead:
      "RiftWorks understands the problem, structures the solution, and has the technical capacity to build it. We work in Spanish with regional clients and in English with international clients.",
    foundersLabel: "Founders",
    audienceLabel: "Audience",
    audienceHead: "Organizations that need to rebuild complex operations.",
    audienceBody:
      "The work is for growing teams that can no longer patch fragmented systems. Diagnosis, architecture and construction stay in the same hands.",
    principles: [
      {
        title: "Technical, not inaccessible",
        body: "We talk about architecture, data and systems with executive clarity.",
      },
      {
        title: "Strategic, not abstract",
        body: "Every recommendation connects to an operational problem and a measurable result.",
      },
      {
        title: "Execution, not diagnosis alone",
        body: "We structure the solution and have the technical capacity to build it.",
      },
    ],
    contactTitle: "Contact",
    contactDescription: "Start a project with RiftWorks. Write to us for a concrete conversation.",
    contactHead: "Start a project",
    contactLead: "Describe the operational problem, the current system, and what you need to build.",
    labels: {
      mail: "Email",
      co: "Company",
      pillar: "Pillar",
      scope: "Scope",
      budget: "Budget",
    },
    send: "Send",
    sent: "Request logged",
    sentBody: "We reply within two business days.",
    formPillars: ["Engineering & Architecture", "Data & AI", "Product Design", "Strategy"],
    placeholder: "Describe the scope you expect",
    emailPlaceholder: "name@company.com",
    selectPlaceholder: "Select…",
    formError: "Complete email and scope before sending.",
    legal: "RiftWorks · Managua, Nicaragua · Mark pending registration",
    notFoundTitle: "This route does not exist.",
    notFoundBody: "Return home or write to start a project.",
    notFoundHome: "Go home",
    notFoundServices: "See services",
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
