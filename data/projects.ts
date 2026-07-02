import type { Audience } from "./experience";
import type { LocalizedText } from "./i18n";

export type ProjectEntry = {
  name: string;
  period: string;
  audience: Audience;
  description: LocalizedText;
  bullets: LocalizedText[];
  stack: string[];
  tools?: string[];
  link?: string;
  github?: string;
  demo?: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "IronOps",
    period: "May 2026 – Present",
    audience: "personal",
    description: {
      en: "Open-source Python package published on PyPI.",
      fr: "Package Python open-source publié sur PyPI.",
      de: "Open-Source-Python-Paket, veröffentlicht auf PyPI.",
    },
    bullets: [
      {
        en: "Developed and published a Python CLI for monitoring remote Linux servers over SSH with automated health reporting and alerts.",
        fr: "Développement et publication d'un CLI Python pour surveiller des serveurs Linux distants via SSH, avec rapports de santé et alertes automatisés.",
        de: "Entwicklung und Veröffentlichung einer Python-CLI zur Überwachung entfernter Linux-Server über SSH mit automatisierten Statusberichten und Warnmeldungen.",
      },
    ],
    stack: ["Python", "paramiko", "PyYAML", "smtplib", "cron", "JSON"],
    tools: ["VS Code", "GitHub", "PyPI"],
    github: "https://github.com/AzizKhemiri/ironops",
  },
  {
    name: "CASTOR CLI — Secure Authentication Console",
    period: "Oct 2025 – Dec 2025",
    audience: "personal",
    description: {
      en: "x86 assembly authentication console.",
      fr: "Console d'authentification en assembleur x86.",
      de: "Authentifizierungskonsole in x86-Assembler.",
    },
    bullets: [
      {
        en: "Implemented a password-protected login system with attempt limiting and automatic lockout features.",
        fr: "Mise en œuvre d'un système de connexion protégé par mot de passe avec limitation des tentatives et verrouillage automatique.",
        de: "Implementierung eines passwortgeschützten Anmeldesystems mit Versuchsbegrenzung und automatischer Sperrfunktion.",
      },
    ],
    stack: ["x86 Assembly"],
    tools: ["EMU8086"],
    github: "https://github.com/AzizKhemiri/castor-cli",
  },
  {
    name: "R3D2D — Reconstruction of 3D Objects from 2D Images",
    period: "Sep. 2024 – Dec. 2024",
    audience: "both",
    description: {
      en: "Web application converting 2D images into 3D voxel models.",
      fr: "Application web convertissant des images 2D en modèles voxel 3D.",
      de: "Webanwendung zur Umwandlung von 2D-Bildern in 3D-Voxelmodelle.",
    },
    bullets: [
      {
        en: "Developed and collaborated on a web app using Variational Autoencoders (VAEs) to reconstruct 3D voxel models from 2D images.",
        fr: "Développement collaboratif d'une application web utilisant des auto-encodeurs variationnels (VAE) pour reconstruire des modèles voxel 3D à partir d'images 2D.",
        de: "Gemeinsame Entwicklung einer Webanwendung mit Variational Autoencoders (VAEs) zur Rekonstruktion von 3D-Voxelmodellen aus 2D-Bildern.",
      },
    ],
    stack: ["React", "Python", "Flask"],
    tools: ["VS Code", "Jupyter Notebook"],
    github: "https://github.com/AzizKhemiri/R3D-2D",
  },
  {
    name: "Manara — AI-Driven Educational Platform",
    period: "Sep. 2024 – Dec. 2024",
    audience: "both",
    description: {
      en: "AI-powered educational platform for personalized learning.",
      fr: "Plateforme éducative propulsée par l'IA pour un apprentissage personnalisé.",
      de: "KI-gestützte Bildungsplattform für personalisiertes Lernen.",
    },
    bullets: [
      {
        en: "Developed and collaborated on an AI-powered educational platform leveraging GPT-4o for personalized assessments and collaborative learning.",
        fr: "Développement collaboratif d'une plateforme éducative propulsée par l'IA exploitant GPT-4o pour des évaluations personnalisées et l'apprentissage collaboratif.",
        de: "Gemeinsame Entwicklung einer KI-gestützten Bildungsplattform, die GPT-4o für personalisierte Bewertungen und kollaboratives Lernen nutzt.",
      },
    ],
    stack: ["Next.js", "Tailwind CSS", "GPT-4o"],
    tools: ["VS Code"],
    github: "#",
  },
  {
    name: "The Medical — Web App for Medical Practice Management",
    period: "Feb. 2024 – Apr. 2024",
    audience: "both",
    description: {
      en: "Multi-role practice management platform.",
      fr: "Plateforme de gestion de cabinet médical multi-rôles.",
      de: "Praxisverwaltungsplattform mit mehreren Rollen.",
    },
    bullets: [
      {
        en: "Developed a multi-role web application for administrators, secretaries, and doctors to manage patients, appointments, medical records, and prescriptions.",
        fr: "Développement d'une application web multi-rôles pour administrateurs, secrétaires et médecins, permettant de gérer patients, rendez-vous, dossiers médicaux et ordonnances.",
        de: "Entwicklung einer Webanwendung mit mehreren Rollen für Administratoren, Sekretariat und Ärzte zur Verwaltung von Patienten, Terminen, Krankenakten und Rezepten.",
      },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    tools: ["VS Code", "XAMPP"],
    github: "https://github.com/AzizKhemiri/The-Medical",
  },
  {
    name: "DevWay — Online Learning Web Application",
    period: "Feb. 2023 – Apr. 2023",
    audience: "personal",
    description: {
      en: "Full-stack e-learning platform.",
      fr: "Plateforme d'e-learning full-stack.",
      de: "Full-Stack-E-Learning-Plattform.",
    },
    bullets: [
      {
        en: "Developed and collaborated on a full-stack e-learning platform with interactive tutorials, quizzes, and video content.",
        fr: "Développement collaboratif d'une plateforme d'e-learning full-stack avec tutoriels interactifs, quiz et contenu vidéo.",
        de: "Gemeinsame Entwicklung einer Full-Stack-E-Learning-Plattform mit interaktiven Tutorials, Quiz und Videoinhalten.",
      },
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    tools: ["VS Code", "Trello", "XAMPP"],
    github: "#",
  },
];
