import type { LocalizedText } from "./i18n";

export type Audience = "business" | "personal" | "both";

export type ExperienceEntry = {
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  period: string;
  audience: Audience;
  bullets: LocalizedText[];
  stack?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "Full Stack Developer — End of Studies Internship",
      fr: "Développeur Full Stack — Stage de fin d'études",
      de: "Full-Stack-Entwickler — Abschlusspraktikum",
    },
    company: "Aidodev",
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
  {
    role: {
      en: "Part-Time Software Engineer",
      fr: "Ingénieur Logiciel à temps partiel",
      de: "Software-Ingenieur (Teilzeit)",
    },
    company: "InfiniteBlocks (Remote)",
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
  {
    role: {
      en: "Technical Support Intern",
      fr: "Support technique Intern",
      de: "Technischer Support Praktikant",
    },
    company: "Tunisia Télécom",
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
    role: {
      en: "Technical Support Intern",
      fr: "Support technique Intern",
      de: "Technischer Support Praktikant",
    },
    company: "Tunisia Télécom",
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
