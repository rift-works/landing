export type Lang = "es" | "en";

export const site = {
  name: "RiftWorks",
  url: "https://weareriftworks.com",
  email: "hola@weareriftworks.com",
  city: "Managua, Nicaragua",
} as const;

export const copy = {
  es: {
    descriptor: "Tecnología · Datos · Diseño · Estrategia",
    nav: [
      { href: "#servicios", label: "Servicios" },
      { href: "#enfoque", label: "Enfoque" },
      { href: "#contacto", label: "Contacto" },
    ],
    langSwitch: "EN",
    cta: "Iniciar un proyecto",
    heroKicker: "Tecnología · Datos · Diseño · Estrategia",
    heroHead:
      "Integramos software, datos y diseño estratégico para transformar operaciones complejas.",
    heroSub:
      "RiftWorks entiende el problema, estructura la solución y tiene la capacidad técnica para construirla.",
    heroPrimary: "Iniciar un proyecto",
    heroSecondary: "Ver el enfoque",
    model: "Modelo de entrega",
    approachHead: "Cuatro fases, siempre en este orden.",
    approachBody:
      "No renombramos las fases por cliente. Cada una termina en un entregable que se factura por separado.",
    min: "Compromiso mínimo",
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
    contactHead: "Iniciar un proyecto",
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
    pillars: [
      "Ingeniería y Arquitectura",
      "Datos e IA",
      "Diseño de Producto",
      "Estrategia",
    ],
    placeholder: "Describa el alcance esperado",
    selectPlaceholder: "Seleccione…",
    formError: "Completa correo y alcance antes de enviar.",
    legal: "RiftWorks · Managua, Nicaragua · Marca en proceso de registro",
    skip: "Saltar al contenido",
  },
  en: {
    descriptor: "Technology · Data · Design · Strategy",
    nav: [
      { href: "#servicios", label: "Services" },
      { href: "#enfoque", label: "Approach" },
      { href: "#contacto", label: "Contact" },
    ],
    langSwitch: "ES",
    cta: "Start a project",
    heroKicker: "Technology · Data · Design · Strategy",
    heroHead:
      "We integrate software, data and strategic design to transform complex operations.",
    heroSub:
      "RiftWorks understands the problem, structures the solution, and has the technical capacity to build it.",
    heroPrimary: "Start a project",
    heroSecondary: "See the approach",
    model: "Delivery model",
    approachHead: "Four phases, always in this order.",
    approachBody:
      "We do not rename the phases per client. Each one ends in a deliverable and is invoiced separately.",
    min: "Engagement minimum",
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
    contactHead: "Start a project",
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
    pillars: ["Engineering & Architecture", "Data & AI", "Product Design", "Strategy"],
    placeholder: "Describe the scope you expect",
    selectPlaceholder: "Select…",
    formError: "Complete email and scope before sending.",
    legal: "RiftWorks · Managua, Nicaragua · Mark pending registration",
    skip: "Skip to content",
  },
} as const;

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

export const phases = ["Discover", "Architect", "Build", "Optimize"] as const;
