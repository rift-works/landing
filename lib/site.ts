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
    [
      "01",
      "Ingeniería y Arquitectura",
      "Arquitectura cloud, plataformas de software distribuidas y entrega continua.",
      ["Blueprints de Arquitectura", "Plataformas en Producción", "Pipelines CI/CD"]
    ],
    [
      "02",
      "Datos e IA",
      "Pipelines de procesamiento, almacenamiento estructurado y modelos aplicados.",
      ["Data Warehouses", "Procesamiento en Tiempo Real", "Inferencia de Modelos"]
    ],
    [
      "03",
      "Diseño de Producto y Marca",
      "Investigación con usuarios, sistemas de diseño en código e interfaces de alta conversión.",
      ["Design Systems en Código", "Prototipos Funcionales", "Experiencia de Usuario"]
    ],
    [
      "04",
      "Estrategia y Transformación",
      "Diagnóstico operativo, hoja de ruta técnica y modernización de sistemas.",
      ["Auditoría de Deuda Técnica", "Plan de Modernización", "Transferencia al Equipo"]
    ],
  ],
  en: [
    [
      "01",
      "Engineering & Architecture",
      "Cloud architecture, distributed software platforms, and continuous delivery.",
      ["Architecture Blueprints", "Production Platforms", "CI/CD Pipelines"]
    ],
    [
      "02",
      "Data & AI",
      "Data processing pipelines, structured warehousing, and applied machine learning.",
      ["Data Warehouses", "Realtime Data Pipelines", "Model Inference"]
    ],
    [
      "03",
      "Product Design & Brand Experience",
      "User research, code-level design systems, and high-conversion interfaces.",
      ["Code Design Systems", "Interactive Prototypes", "User Experience"]
    ],
    [
      "04",
      "Strategy & Business Transformation",
      "Operational diagnosis, technical roadmaps, and systems modernization.",
      ["Technical Debt Audit", "Modernization Roadmap", "Team Knowledge Transfer"]
    ],
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
    channel: "CH-A",
    signals: [
      "CH-A",
      "Discover",
      "Architect",
      "Build",
      "Optimize",
      "Managua",
      "ES · EN",
      "Ingeniería",
      "Datos",
      "Diseño",
      "Estrategia",
    ],
    problemKicker: "Audiencia",
    problemHead: "El trabajo es reconstruir operaciones complejas.",
    problemBody:
      "RiftWorks trabaja con equipos en crecimiento que ya no pueden sostener sistemas fragmentados. Diagnóstico, arquitectura y construcción quedan en las mismas manos.",

    // Case Studies
    caseStudiesKicker: "Casos de Producción",
    caseStudiesHead: "Ingeniería probada en el mercado.",
    caseStudiesLead:
      "Construimos plataformas que operan en producción, procesan transacciones y sostienen operaciones comerciales críticas.",
    caseStudiesVisit: "Visitar plataforma",
    caseStudiesOutputsLabel: "Outputs de valor entregados",
    caseStudies: [
      {
        id: "canela",
        code: "RW-CASE-01",
        client: "Canela",
        url: "https://canela.vet",
        badge: "Pet-care & E-commerce en vivo",
        title: "Plataforma integral de salud, delivery y comercio para mascotas en Nicaragua.",
        summary:
          "Diseño y construcción del ecosistema digital completo: aplicaciones móviles para iOS y Android, catálogo transaccional con pagos mixtos, rastreo logístico en tiempo real y expedientes veterinarios digitales.",
        challenge:
          "Coordinar compras con inventario dinámico, múltiples métodos de pago (tarjeta, transferencia y efectivo) y entregas a domicilio en tiempo real, junto con el historial médico y de vacunación de miles de mascotas.",
        solution:
          "Arquitectura móvil de alto rendimiento, backend transaccional con estados en tiempo real y una experiencia de usuario sin fricción pensada para el mercado centroamericano.",
        metrics: [
          { label: "Plataformas", value: "iOS + Android" },
          { label: "Operación", value: "En producción" },
          { label: "Logística", value: "Tiempo real" },
          { label: "Propiedad", value: "100% del cliente" },
        ],
        outputs: [
          "Aplicación móvil nativa/multiplataforma en App Store y Google Play",
          "Módulo de tracking logístico y estados de entrega en vivo",
          "Expediente clínico y carnet de vacunas digital por mascota",
          "Pasarela transaccional de pagos combinados",
        ],
        tags: ["Mobile Apps", "E-Commerce", "Realtime Logistics", "Digital Health"],
      },
    ],

    phasesKicker: "Fases",
    phasesHead: "Cuatro fases, siempre en este orden.",
    phasesLead: "Cada fase termina en un entregable y se factura por separado.",
    phaseDetail: [
      {
        name: "Discover",
        code: "01",
        body: "Dos semanas de diagnóstico, entrevistas con el equipo y un mapa del estado actual de la operación.",
      },
      {
        name: "Architect",
        code: "02",
        body: "Arquitectura, secuencia de entrega y criterios de aceptación escritos antes de construir.",
      },
      {
        name: "Build",
        code: "03",
        body: "Construcción de la plataforma, los datos o el producto, contra el entregable de la fase.",
      },
      {
        name: "Optimize",
        code: "04",
        body: "Operación, medición y ajuste del sistema ya en producción.",
      },
    ],
    rebuildKicker: "Alcance",
    rebuildHead: "Lo que se reconstruye.",
    rebuildLead: "Cuatro tipos de trabajo. El punto de entrada más frecuente es ingeniería; el segundo, datos e IA.",
    rebuild: [
      {
        code: "01",
        title: "Sistemas fragmentados",
        body: "Arquitectura cloud, construcción de plataforma y entrega continua.",
      },
      {
        code: "02",
        title: "Datos sin gobierno",
        body: "Pipelines, almacenamiento y modelos aplicados que se pueden operar.",
      },
      {
        code: "03",
        title: "Productos sin sistema",
        body: "Investigación, sistemas de diseño e identidad que sostienen el producto.",
      },
      {
        code: "04",
        title: "Operaciones sin ruta",
        body: "Diagnóstico operativo, hoja de ruta y gobierno para ejecutar.",
      },
    ],
    coverageKicker: "Cobertura",
    coverageHead: "Managua como sede. Español e inglés como idiomas de trabajo.",
    coverage: [
      { title: "Sede", body: "Managua, Nicaragua." },
      { title: "Regional", body: "Documentación y entrega en español." },
      { title: "Internacional", body: "Documentación y entrega en inglés." },
      { title: "Canal", body: "CH-A. Una ejecución, cuatro capacidades." },
    ],
    foundersKicker: "Liderazgo técnico",
    foundersHead: "Gabriel Obando y Axel García.",
    foundersLead: "Dirección técnica y de producto con sede en Managua y alcance internacional.",
    foundersCta: "Conocer al equipo",
    foundersList: [
      {
        name: "Gabriel Obando",
        role: "Chief Technology Architect",
        focus: "Arquitectura cloud, plataformas distribuidas y sistemas de alta escala.",
        location: "Managua, Nicaragua",
      },
      {
        name: "Axel García",
        role: "Principal Product Architect",
        focus: "Sistemas de diseño, ingeniería de producto y estrategia digital.",
        location: "Managua, Nicaragua",
      },
    ],
    ctaKicker: "Siguiente paso",
    ctaHead: "Iniciar un proyecto.",
    ctaBody: "Describe el problema operativo, el sistema actual y lo que necesitas construir.",
    servicesTitle: "Servicios",
    servicesDescription:
      "Ingeniería y arquitectura, datos e IA, diseño de producto y estrategia para organizaciones en crecimiento.",
    servicesHead: "Cuatro capacidades, una sola ejecución.",
    servicesLead:
      "Cerramos la brecha entre objetivos de negocio y capacidades tecnológicas. Engineering es el punto de entrada; Data & AI, el segundo.",
    outputsLabel: "Artefactos y entregables de valor:",
    approachHead: "Cuatro fases, siempre en este orden.",
    approachBody:
      "No renombramos las fases por cliente. Cada una termina en un entregable que se factura por separado.",

    // FAQ
    faqKicker: "Certeza operativa",
    faqHead: "Preguntas frecuentes.",
    faqLead: "Respuestas directas a cómo protegemos tu negocio, cómo trabajamos y cómo se estructura la inversión.",
    faq: [
      {
        question: "¿Quién es dueño del código y de la propiedad intelectual?",
        answer:
          "El cliente es dueño del 100% de la propiedad intelectual, el código y los artefactos desde el primer día. No retenemos licencias propietarias ni creamos dependencias forzadas.",
      },
      {
        question: "¿Cómo se estructuran los proyectos y la inversión?",
        answer:
          "Trabajamos por fases cerradas con entregables definidos, no por horas ambiguas. Los compromisos comienzan en USD 5,000 y cada fase se aprueba y se factura de forma independiente contra entrega.",
      },
      {
        question: "¿Cómo interactúan con nuestro equipo interno?",
        answer:
          "Nos adaptamos a su operación: podemos operar como una célula técnica autónoma de ejecución o integrarnos directamente con sus líderes de ingeniería y producto para acelerar la entrega.",
      },
      {
        question: "¿Cómo garantizan la confidencialidad técnica y comercial?",
        answer:
          "Firmamos un acuerdo de confidencialidad (NDA) antes de cualquier revisión técnica o acceso a datos. Su arquitectura e información operativa permanecen estrictamente confidenciales.",
      },
      {
        question: "¿Trabajan en inglés con clientes internacionales?",
        answer:
          "Sí. Todo el equipo es bilingüe y toda la documentación, especificaciones de arquitectura y comunicación técnica se entregan en inglés o español según el cliente.",
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
    legal: "RiftWorks · Managua, Nicaragua · Marca oficial Aperture",
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
      "RiftWorks understands the problem, structures the solution, and has the engineering capacity to build it.",
    heroPrimary: "Start a project",
    heroSecondary: "View services",
    model: "Delivery model",
    channel: "CH-A",
    signals: [
      "CH-A",
      "Discover",
      "Architect",
      "Build",
      "Optimize",
      "Managua",
      "ES · EN",
      "Engineering",
      "Data",
      "Design",
      "Strategy",
    ],
    problemKicker: "Audience",
    problemHead: "The mandate is rebuilding complex operations.",
    problemBody:
      "RiftWorks partners with growing organizations that can no longer sustain fragmented systems. Diagnosis, architecture, and construction remain in the same hands.",

    // Case Studies
    caseStudiesKicker: "Production Case Studies",
    caseStudiesHead: "Market-proven engineering.",
    caseStudiesLead:
      "We engineer platforms operating in production, processing transactions, and sustaining critical commercial operations.",
    caseStudiesVisit: "Visit platform",
    caseStudiesOutputsLabel: "Delivered value outputs",
    caseStudies: [
      {
        id: "canela",
        code: "RW-CASE-01",
        client: "Canela",
        url: "https://canela.vet",
        badge: "Pet-care & Live E-Commerce",
        title: "Full-scale pet health, delivery, and e-commerce platform in Nicaragua.",
        summary:
          "Design and build of the complete digital ecosystem: native/cross-platform mobile apps for iOS and Android, dynamic e-commerce catalog with mixed payment gateways, real-time logistics tracking, and digital veterinary records.",
        challenge:
          "Coordinate high-frequency orders with dynamic inventory, mixed payment options (card, bank transfer, and cash on delivery), and live doorstep routing alongside medical and vaccination records for thousands of pets.",
        solution:
          "High-performance mobile architecture, transactional backend with real-time state synchronization, and a frictionless checkout experience crafted for the Central American market.",
        metrics: [
          { label: "Platforms", value: "iOS + Android" },
          { label: "Status", value: "Live production" },
          { label: "Logistics", value: "Real-time" },
          { label: "Ownership", value: "100% Client-owned" },
        ],
        outputs: [
          "Native/cross-platform mobile applications on App Store and Google Play",
          "Real-time logistics dispatch and live order tracking module",
          "Digital health and vaccination medical records per pet",
          "Integrated multi-gateway payment processing infrastructure",
        ],
        tags: ["Mobile Apps", "E-Commerce", "Realtime Logistics", "Digital Health"],
      },
    ],

    phasesKicker: "Phases",
    phasesHead: "Four phases, always in this sequence.",
    phasesLead: "Every phase concludes with a concrete deliverable and is billed independently.",
    phaseDetail: [
      {
        name: "Discover",
        code: "01",
        body: "Two weeks of deep diagnosis, team interviews, and an operational map of the current state.",
      },
      {
        name: "Architect",
        code: "02",
        body: "System architecture, delivery milestones, and acceptance criteria documented before writing code.",
      },
      {
        name: "Build",
        code: "03",
        body: "Production build of the platform, data infrastructure, or product against agreed specifications.",
      },
      {
        name: "Optimize",
        code: "04",
        body: "Monitoring, performance tuning, and operational scaling of the live system.",
      },
    ],
    rebuildKicker: "Scope",
    rebuildHead: "What gets rebuilt.",
    rebuildLead: "Four engagement profiles. The primary entry point is engineering; the second is data and AI.",
    rebuild: [
      {
        code: "01",
        title: "Fragmented systems",
        body: "Cloud architecture, resilient platform engineering, and automated delivery.",
      },
      {
        code: "02",
        title: "Ungoverned data",
        body: "Pipelines, warehousing, and practical machine learning models that can be operated.",
      },
      {
        code: "03",
        title: "Products without systems",
        body: "User research, code design systems, and identity frameworks that sustain the product.",
      },
      {
        code: "04",
        title: "Operations without direction",
        body: "Operational diagnosis, technical roadmaps, and systems governance to execute.",
      },
    ],
    coverageKicker: "Coverage",
    coverageHead: "Managua headquarters. English and Spanish as working languages.",
    coverage: [
      { title: "HQ", body: "Managua, Nicaragua." },
      { title: "Regional", body: "Documentation and delivery in Spanish." },
      { title: "International", body: "Documentation and delivery in English." },
      { title: "Channel", body: "CH-A. One execution across four disciplines." },
    ],
    foundersKicker: "Technical Leadership",
    foundersHead: "Gabriel Obando & Axel García.",
    foundersLead: "Software architecture and product design based in Managua with international reach.",
    foundersCta: "Meet the team",
    foundersList: [
      {
        name: "Gabriel Obando",
        role: "Chief Technology Architect",
        focus: "Cloud architecture, distributed systems, and scalable platform engineering.",
        location: "Managua, Nicaragua",
      },
      {
        name: "Axel García",
        role: "Principal Product Architect",
        focus: "Design systems, digital product engineering, and technical strategy.",
        location: "Managua, Nicaragua",
      },
    ],
    ctaKicker: "Next step",
    ctaHead: "Start a project.",
    ctaBody: "Describe your operational bottleneck, your current stack, and what needs to be engineered.",
    servicesTitle: "Services",
    servicesDescription:
      "Software architecture, data and AI, product design, and strategy for growing organizations.",
    servicesHead: "Four disciplines, unified execution.",
    servicesLead:
      "We bridge the gap between business objectives and technical capability. Engineering is the primary entry point; Data & AI, the second.",
    outputsLabel: "Delivered value outputs:",
    approachHead: "Four phases, always in this order.",
    approachBody:
      "We never rename phases per client. Every phase concludes with a concrete deliverable billed independently.",

    // FAQ
    faqKicker: "Operational Certainty",
    faqHead: "Frequently Asked Questions.",
    faqLead: "Direct answers on intellectual property, team integration, and engagement economics.",
    faq: [
      {
        question: "Who owns the code and intellectual property?",
        answer:
          "The client owns 100% of all intellectual property, source code, and architecture assets from day one. We never retain proprietary licensing or create artificial lock-in.",
      },
      {
        question: "How are engagements structured and billed?",
        answer:
          "We operate in fixed phases with defined deliverables, never ambiguous open billing. Minimum engagements start at USD 5,000, and each phase is approved and billed independently upon milestone delivery.",
      },
      {
        question: "How do you integrate with our internal engineering team?",
        answer:
          "We adapt to your structure: either as an autonomous delivery squad or directly embedded alongside your engineering and product leadership to accelerate execution.",
      },
      {
        question: "How do you ensure technical and commercial confidentiality?",
        answer:
          "We execute a mutual Non-Disclosure Agreement (NDA) before any technical review or codebase access. Your architecture and operational metrics remain strictly confidential.",
      },
      {
        question: "Do you work with international clients in English?",
        answer:
          "Yes. Our entire team is bilingual. All technical specifications, architecture blueprints, code documentation, and sprints are conducted in English or Spanish depending on the client.",
      },
    ],

    weAreTitle: "We are",
    weAreDescription:
      "RiftWorks is a technology consultancy based in Managua, founded by Gabriel Obando and Axel García.",
    weAreKicker: "We are",
    weAreHead: "A technology consultancy headquartered in Managua.",
    weAreLead:
      "RiftWorks understands the problem, structures the solution, and has the engineering capacity to build it. We work in Spanish with regional partners and in English with international clients.",
    foundersLabel: "Founders",
    audienceLabel: "Audience",
    audienceHead: "Organizations needing to rebuild complex operations.",
    audienceBody:
      "Our work is for scaling teams that can no longer patch fragmented systems. Diagnosis, architecture, and construction remain unified.",
    principles: [
      {
        title: "Technical, yet accessible",
        body: "We discuss architecture, data pipelines, and systems with executive clarity.",
      },
      {
        title: "Strategic, yet practical",
        body: "Every recommendation ties directly to an operational hurdle and a measurable KPI.",
      },
      {
        title: "Execution over diagnosis",
        body: "We structure the solution and possess the in-house engineering depth to build it.",
      },
    ],
    contactTitle: "Contact",
    contactDescription: "Start a project with RiftWorks. Reach out for a concrete conversation.",
    contactHead: "Start a project",
    contactLead: "Describe the operational problem, your current system, and what needs to be built.",
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
    legal: "RiftWorks · Managua, Nicaragua · Official Aperture Mark",
    notFoundTitle: "This route does not exist.",
    notFoundBody: "Return home or write to start a project.",
    notFoundHome: "Go home",
    notFoundServices: "See services",
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
