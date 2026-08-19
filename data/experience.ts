import type { LocalizedText } from "./i18n";

export type Audience = "business" | "personal" | "both";

export type ExperienceEntry = {
  role: LocalizedText;
  company: string;
  /** Path to a logo file in /public, e.g. "/logos/aidodev.png". Omit to show initials instead. */
  logo?: string;
  location: LocalizedText;
  period: string;
  audience: Audience;
  bullets: LocalizedText[];
  stack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    // SWE & NETWORK ENGINEER INTERN
    role: {
      en: "Software & Network Engineer Intern",
      fr: "Ingénieur Logiciél et Réseaux — Stage d'été",
      de: "Software und Netzwerk Ingenieur-Praktikant - Sommerpraktikum",
    },
    company: "Tunisie Telecom",
    logo: "/logos/tt.png",
    location: {
      en: "Tunis, Tunisia",
      fr: "Tunis, Tunisie",
      de: "Tunis, Tunesien",
    },
    period: "July. 2026 – Aug 2026",
    audience: "both",
    bullets: [
      {
        en: "Developed and collaborated on an Intelligent Network Operations Center (NOC) platform that was accepted by the Head of the Unit and adopted as an internship solution to improve collaboration and bridge the gap between technical and commercial teams.",
        fr: "Conçu et développé, en collaboration avec l’équipe, une plateforme intelligente de Network Operations Center (NOC), validée par le responsable de l’unité Centrale d'Opération Réseaux et retenue comme solution de stage afin d’améliorer la collaboration et de renforcer la coordination entre les équipes techniques et commerciales.",
        de: "Entwicklung und Mitarbeit an einer Intelligenten Network Operations Center (NOC)-Plattform, die vom Leiter der Einheit genehmigt und als Praktikumslösung eingesetzt wurde, um die Zusammenarbeit zu verbessern und die Kluft zwischen technischen und kaufmännischen Teams zu überbrücken.",
      },
      {
        en: "Developed a RAG AI assistant with Llama and Groq that enables engineers to query operational data in natural language, providing context-aware answers from logs, alerts, metrics, incidents, and network device information.",
        fr: "Développé un assistant IA basé sur le RAG avec Llama et Groq, permettant aux ingénieurs d’interroger les données opérationnelles en langage naturel et d’obtenir des réponses contextualisées à partir des logs, alertes, métriques, incidents et informations des équipement.",
        de: "Entwicklung eines RAG-basierten KI-Assistenten mit Llama und Groq, der Ingenieuren ermöglicht, operative Daten in natürlicher Sprache abzufragen und kontextbezogene Antworten auf Basis von Logs, Alarmen, Metriken, Incidents und Informationen zu Netzwerkgeräten bereitzustellen.",
      },
      {
        en: "Designed a scalable microservices architecture to support real-time monitoring, AI services, and event-driven communication.",
        fr: "Conçu une architecture microservices évolutive pour prendre en charge la supervision en temps réel, les services IA et la communication orientée événements.",
        de: "Konzeption einer skalierbaren Microservice-Architektur zur Unterstützung der Echtzeitüberwachung, der KI-Dienste und der ereignisgesteuerten Kommunikation.",
      },
      { 
        en: "Developed an AI-powered PDF report generation feature using Llama and Groq for network and incident analysis.",
        fr: "Développé une fonctionnalité de génération de rapports PDF assistée par l’IA avec Llama et Groq pour l’analyse des réseaux et des incidents.",
        de: "Entwicklung einer KI-gestützten Funktion zur Generierung von PDF-Berichten mit Llama und Groq für die Analyse von Netzwerken und Incidents.",
      },
      {
        en: "Containerized services with Docker and streamlined collaborative development using Git and GitHub, ensuring consistent development and deployment environments.",
        fr: "Conteneurisé les différents services avec Docker et structuré le développement collaboratif avec Git et GitHub afin de garantir des environnements cohérents de développement et de déploiement.",
        de: "Containerisierung der Services mit Docker und Optimierung der kollaborativen Entwicklung mit Git und GitHub, um konsistente Entwicklungs- und Deployment-Umgebungen sicherzustellen.",
      },
    ],
    stack: ["Next.js", "Nest.js", "Python", "FastAPI", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Docker", "Rest API, Web Socket", "RAG", "Groq", "Gemini", "llama", "Git", "GitHub", "VSCode"],
  },
    // AIDODEV INTERN
  {
    role: {
      en: "Full Stack Developer — End of Studies Internship",
      fr: "Développeur Full Stack — Stage de fin d'études",
      de: "Full-Stack-Entwickler — Abschlusspraktikum",
    },
    company: "Aidodev",
    logo: "/logos/aidodev.jpg",
    location: {
      en: "Ile-de-France, France",
      fr: "Île-de-France, France",
      de: "Île-de-France, Frankreich",
    },
    period: "Feb. 2025 – May 2025",
    audience: "both",
    bullets: [
      {
        en: "Designed and developed an intelligent blockchain-based web platform for managing and tracking cryptocurrencies.",
        fr: "Conception et développement d'une plateforme web intelligente basée sur la blockchain pour la gestion et le suivi de cryptomonnaies.",
        de: "Entwurf und Entwicklung einer intelligenten blockchainbasierten Webplattform zur Verwaltung und Verfolgung von Kryptowährungen.",
      },
      {
        en: "Implemented a full CI/CD pipeline using GitHub Actions to automate deployment on Google Cloud Platform.",
        fr: "Mise en place d'un pipeline CI/CD complet avec GitHub Actions pour automatiser le déploiement sur Google Cloud Platform.",
        de: "Implementierung einer vollständigen CI/CD-Pipeline mit GitHub Actions zur Automatisierung des Deployments auf Google Cloud Platform.",
      },
      {
        en: "Integrated AI features using Gemini-2.0-flash and external APIs (CoinGecko, Thirdweb, Rapid API, Gmail).",
        fr: "Intégration de fonctionnalités IA avec Gemini-2.0-flash et des API externes (CoinGecko, Thirdweb, Rapid API, Gmail).",
        de: "Integration von KI-Funktionen mit Gemini-2.0-flash und externen APIs (CoinGecko, Thirdweb, Rapid API, Gmail).",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "Prisma", "Supabase", "GCP", "Docker"],
  },
  // PART TIME SWE AT IFB
  {
    role: {
      en: "Part-Time Software Engineer",
      fr: "Ingénieur Logiciel à temps partiel",
      de: "Software-Ingenieur (Teilzeit)",
    },
    company: "InfiniteBlocks (Remote)",
    logo: "/logos/ifb.jpg",
    location: {
      en: "Ile-de-France, France",
      fr: "Île-de-France, France",
      de: "Île-de-France, Frankreich",
    },
    period: "Sep. 2024 – May 2025",
    audience: "both",
    bullets: [
      {
        en: "Developed and deployed an automated content distribution pipeline using Cloud Run and Cloud Build, significantly reducing manual intervention.",
        fr: "Développement et déploiement d'un pipeline automatisé de distribution de contenu avec Cloud Run et Cloud Build, réduisant significativement les interventions manuelles.",
        de: "Entwicklung und Bereitstellung einer automatisierten Content-Distribution-Pipeline mit Cloud Run und Cloud Build, wodurch manuelle Eingriffe deutlich reduziert wurden.",
      },
    ],
    stack: ["Next.js", "Python", "GCP", "GitHub Actions", "Docker"],
  },
  // TT INTERN
  {
    role: {
      en: "Technical Support Intern",
      fr: "Support technique Intern",
      de: "Technischer Support Praktikant",
    },
    company: "Tunisia Telecom",
    logo: "/logos/tt.png",
    location: {
      en: "Tunisia",
      fr: "Tunisie",
      de: "Tunesien",
    },
    period: "Jun. 2024 – Jul. 2024",
    audience: "business",
    bullets: [
      {
        en: "Optimized service workflows within the Service Management Unit of the Customer Service Centre.",
        fr: "Optimisation des flux de service au sein de l'unité de gestion des services du centre de relation client.",
        de: "Optimierung von Serviceabläufen innerhalb der Service-Management-Einheit des Kundenservicezentrums.",
      },
    ],
  },
  {
    // TT INTERN
    role: {
      en: "Technical Support Intern",
      fr: "Support technique Intern",
      de: "Technischer Support Praktikant",
    },
    company: "Tunisia Telecom",
    logo: "/logos/tt.png",
    location: {
      en: "Tunisia",
      fr: "Tunisie",
      de: "Tunesien",
    },
    period: "Jul. 2023 – Aug. 2023",
    audience: "business",
    bullets: [
      {
        en: "Diagnosed and resolved network issues alongside the Network Support Team, applying academic knowledge in a production environment.",
        fr: "Diagnostic et résolution de problèmes réseau aux côtés de l'équipe de support réseau, application des connaissances académiques en environnement de production.",
        de: "Diagnose und Behebung von Netzwerkproblemen gemeinsam mit dem Network Support Team, Anwendung akademischen Wissens in einer Produktionsumgebung.",
      },
    ],
  },
];
