import type { LocalizedText } from "./i18n";

export const skills: { category: LocalizedText; items: string[] }[] = [
  {
    category: { en: "Cloud & DevOps", fr: "Cloud & DevOps", de: "Cloud & DevOps" },
    items: ["Google Cloud Platform", "Microsoft Azure", "GitHub Actions (CI/CD)", "Git", "Docker"],
  },
  {
    category: {
      en: "Programming Languages",
      fr: "Langages de programmation",
      de: "Programmiersprachen",
    },
    items: ["Python", "JavaScript", "TypeScript", "PHP", "Java", "C", "SQL"],
  },
  {
    category: { en: "Frontend", fr: "Frontend", de: "Frontend" },
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: { en: "Backend", fr: "Backend", de: "Backend" },
    items: ["Python", "Java", "Nest.js", "Node.js", "REST APIs", "XML", "PHP"],
  },
  {
    category: { en: "Database", fr: "Bases de données", de: "Datenbanken" },
    items: ["MySQL", "Supabase", "Prisma ORM", "SQL", "PL/SQL"],
  },
  {
    category: {
      en: "Operating Systems",
      fr: "Systèmes d'exploitation",
      de: "Betriebssysteme",
    },
    items: ["Linux (Ubuntu)", "macOS", "Windows"],
  },
  {
    category: {
      en: "Project & Diagramming Tools",
      fr: "Outils de gestion & diagrammes",
      de: "Projekt- & Diagramm-Tools",
    },
    items: ["Trello", "UML", "Draw.io"],
  },
  {
    category: { en: "Networking Tools", fr: "Outils réseau", de: "Netzwerk-Tools" },
    items: ["Cisco Packet Tracer"],
  },
  {
    category: { en: "Code Editors", fr: "Éditeurs de code", de: "Code-Editoren" },
    items: ["VS Code", "Eclipse", "PyCharm", "Jupyter Notebook"],
  },
];
