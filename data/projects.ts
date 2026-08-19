import type { Audience } from "./experience";
import type { LocalizedText } from "./i18n";

export type ProjectEntry = {
  slug: string;
  name: string;
  period: string;
  audience: Audience;
  /** Short one-liner shown on the card. */
  description: LocalizedText;
  /** The problem this project solves — shown on the detail page. */
  problem?: LocalizedText;
  /** Your role and contributions — shown on the detail page. */
  role?: LocalizedText;
  /** Key features / what you built. Shown on both the card and detail page. */
  bullets: LocalizedText[];
  /** Results or impact — shown on the detail page. */
  impact?: LocalizedText;
  stack: string[];
  tools?: string[];
  link?: string;
  github?: string;
  demo?: string;
  /** Screenshot paths in /public, e.g. "/projects/ironops-1.png". Optional. */
  images?: string[];
};

export const projects: ProjectEntry[] = [
  {
    slug: "ironops",
    name: "IronOps",
    period: "May 2026 – Present",
    audience: "personal",
    description: {
      en: "IronOps – Open Source Python CLI for Server Monitoring.",
      fr: "IronOps – Open Source Python CLI pour la surveillance des serveurs.",
      de: "Open-Source-Python-Paket, veröffentlicht auf PyPI.",
    },
    problem: {
      en: "Monitoring a handful of remote Linux servers usually means logging into each one by hand, or standing up a heavy dashboard just to check disk space and uptime.",
      fr: "Surveiller quelques serveurs Linux distants oblige souvent à se connecter à chacun manuellement, ou à déployer un tableau de bord lourd juste pour vérifier l'espace disque et la disponibilité.",
      de: "Die Überwachung einiger weniger entfernter Linux-Server bedeutet meist, sich manuell bei jedem einzelnen anzumelden oder ein aufwendiges Dashboard aufzusetzen, nur um Speicherplatz und Verfügbarkeit zu prüfen.",
    },
    role: {
      en: "Sole developer — designed the CLI, built the SSH-based health checks, and published the package on PyPI.",
      fr: "Développeur unique — conception du CLI, développement des vérifications de santé via SSH, et publication du package sur PyPI.",
      de: "Alleiniger Entwickler — Entwurf der CLI, Entwicklung der SSH-basierten Statusprüfungen und Veröffentlichung des Pakets auf PyPI.",
    },
    bullets: [
      {
        en: "Developed and published a Python CLI for monitoring remote Linux servers over SSH with automated health reporting and alerts.",
        fr: "Développement et publication d'un CLI Python pour surveiller des serveurs Linux distants via SSH, avec rapports de santé et alertes automatisés.",
        de: "Entwicklung und Veröffentlichung einer Python-CLI zur Überwachung entfernter Linux-Server über SSH mit automatisierten Statusberichten und Warnmeldungen.",
      },
    ],
    impact: {
      en: "Published as an open-source PyPI package, giving developers a lightweight, dashboard-free way to keep an eye on their servers.",
      fr: "Publié en open source sur PyPI, offrant aux développeurs un moyen léger de surveiller leurs serveurs sans tableau de bord.",
      de: "Als Open-Source-Paket auf PyPI veröffentlicht — ein leichtgewichtiger Weg für Entwickler, ihre Server ohne Dashboard im Blick zu behalten.",
    },
    stack: ["Python", "paramiko", "PyYAML", "smtplib", "cron", "JSON"],
    images: [
      "/proj-iron/ironops.png",
      "/proj-iron/1-demo.png",
      "/proj-iron/2-demo.png",
      "/proj-iron/3-demo.png",
      "/proj-iron/4-mac-demo.png",
      "/proj-iron/ironops-architecture.png"
    ],
    //images: ["/projects/ironops.png"],
    tools: ["VS Code", "GitHub", "PyPI"],
    github: "https://github.com/AzizKhemiri/ironops",
  },
  {
    slug: "castor-cli",
    name: "CASTOR CLI — Secure Authentication Console",
    period: "Oct 2025 – Dec 2025",
    audience: "personal",
    description: {
      en: "x86 assembly authentication console.",
      fr: "Console d'authentification en assembleur x86.",
      de: "Authentifizierungskonsole in x86-Assembler.",
    },
    problem: {
      en: "Understanding how authentication really works means building the login logic yourself, without high-level language conveniences to hide the details.",
      fr: "Comprendre le fonctionnement réel de l'authentification implique de construire soi-même la logique de connexion, sans les facilités d'un langage haut niveau pour masquer les détails.",
      de: "Um wirklich zu verstehen, wie Authentifizierung funktioniert, muss man die Login-Logik selbst bauen — ohne die Annehmlichkeiten einer High-Level-Sprache, die Details verbergen.",
    },
    role: {
      en: "Sole developer — designed and implemented the full authentication flow directly in x86 assembly.",
      fr: "Développeur unique — conception et implémentation complète du flux d'authentification en assembleur x86.",
      de: "Alleiniger Entwickler — Entwurf und vollständige Implementierung des Authentifizierungsablaufs direkt in x86-Assembler.",
    },
    bullets: [
      {
        en: "Implemented a password-protected login system with attempt limiting and automatic lockout features.",
        fr: "Mise en œuvre d'un système de connexion protégé par mot de passe avec limitation des tentatives et verrouillage automatique.",
        de: "Implementierung eines passwortgeschützten Anmeldesystems mit Versuchsbegrenzung und automatischer Sperrfunktion.",
      },
    ],
    impact: {
      en: "Deepened low-level understanding of memory and security logic close to the hardware — knowledge that carries over to writing safer, more efficient higher-level code.",
      fr: "Approfondissement de la compréhension bas niveau de la mémoire et de la logique de sécurité proche du matériel — des connaissances utiles pour écrire un code de plus haut niveau plus sûr et plus efficace.",
      de: "Vertieftes Low-Level-Verständnis von Speicher und Sicherheitslogik nah an der Hardware — Wissen, das sich auf sichereren, effizienteren High-Level-Code überträgt.",
    },
    stack: ["x86 Assembly"],
    images: ["/proj-castor/castor-cli.png"],
    tools: ["EMU8086"],
    github: "https://github.com/AzizKhemiri/castor-cli",
  },
  {
    slug: "r3d2d",
    name: "R3D2D — Reconstruction of 3D Objects from 2D Images",
    period: "Sep. 2024 – Dec. 2024",
    audience: "both",
    description: {
      en: "Web application converting 2D images into 3D voxel models.",
      fr: "Application web convertissant des images 2D en modèles voxel 3D.",
      de: "Webanwendung zur Umwandlung von 2D-Bildern in 3D-Voxelmodelle.",
    },
    problem: {
      en: "Turning a flat 2D image into a 3D representation is a hard computer-vision problem, with real applications in gaming, AR, and product design.",
      fr: "Transformer une image 2D plate en une représentation 3D est un problème complexe de vision par ordinateur, avec des applications concrètes dans le jeu vidéo, la RA et le design produit.",
      de: "Ein flaches 2D-Bild in eine 3D-Darstellung umzuwandeln ist ein anspruchsvolles Computer-Vision-Problem mit realen Anwendungen in Gaming, AR und Produktdesign.",
    },
    role: {
      en: "Collaborated within a team of two — built the web application layer and integrated the trained VAE model to serve reconstructions to users.",
      fr: "Collaboration au sein d'une équipe de deux personnes — développement de la couche application web et intégration du modèle VAE entraîné pour servir les reconstructions.",
      de: "Zusammenarbeit in einem Zweierteam — Entwicklung der Webanwendungsschicht und Integration des trainierten VAE-Modells zur Bereitstellung der Rekonstruktionen.",
    },
    bullets: [
      {
        en: "Developed and collaborated on a web app using Variational Autoencoders (VAEs) to reconstruct 3D voxel models from 2D images.",
        fr: "Développement collaboratif d'une application web utilisant des auto-encodeurs variationnels (VAE) pour reconstruire des modèles voxel 3D à partir d'images 2D.",
        de: "Gemeinsame Entwicklung einer Webanwendung mit Variational Autoencoders (VAEs) zur Rekonstruktion von 3D-Voxelmodellen aus 2D-Bildern.",
      },
    ],
    impact: {
      en: "Delivered a working prototype demonstrating end-to-end 2D-to-3D reconstruction through a usable web interface, presented as an academic project.",
      fr: "Livraison d'un prototype fonctionnel démontrant la reconstruction 2D vers 3D de bout en bout via une interface web utilisable, présenté comme projet académique.",
      de: "Lieferung eines funktionierenden Prototyps, der die durchgängige 2D-zu-3D-Rekonstruktion über eine nutzbare Weboberfläche demonstriert, vorgestellt als akademisches Projekt.",
    },
    stack: ["React", "Python","PyTorch", "Flask"],
    images: [
      "/proj-3d/1-r3d-2d.png",
      "/proj-3d/2-web_app_interface.png"
    ],
    tools: ["VS Code", "Jupyter Notebook"],
    github: "https://github.com/AzizKhemiri/R3D-2D",
  },
  {
    slug: "manara",
    name: "Manara — AI-Driven Educational Platform",
    period: "Sep. 2023 – Dec. 2023",
    audience: "both",
    description: {
      en: "AI-powered educational platform for personalized learning.",
      fr: "Plateforme éducative propulsée par l'IA pour un apprentissage personnalisé.",
      de: "KI-gestützte Bildungsplattform für personalisiertes Lernen.",
    },
    problem: {
      en: "Students often need personalized feedback and pacing that a single teacher can't realistically scale to every learner in a class.",
      fr: "Les élèves ont souvent besoin d'un retour et d'un rythme personnalisés qu'un seul enseignant ne peut pas réellement offrir à chaque apprenant d'une classe.",
      de: "Schüler benötigen oft personalisiertes Feedback und individuelles Lerntempo, das eine einzelne Lehrkraft nicht für jeden Lernenden einer Klasse skalieren kann.",
    },
    role: {
      en: "Collaborated within a team — integrated GPT-4o for personalized assessment generation and built the collaborative learning features.",
      fr: "Collaboration au sein d'une équipe — intégration de GPT-4o pour la génération d'évaluations personnalisées et développement des fonctionnalités d'apprentissage collaboratif.",
      de: "Zusammenarbeit im Team — Integration von GPT-4o zur Generierung personalisierter Bewertungen und Entwicklung der kollaborativen Lernfunktionen.",
    },
    bullets: [
      {
        en: "Developed and collaborated on an AI-powered educational platform leveraging GPT-4o for personalized assessments and collaborative learning.",
        fr: "Développement collaboratif d'une plateforme éducative propulsée par l'IA exploitant GPT-4o pour des évaluations personnalisées et l'apprentissage collaboratif.",
        de: "Gemeinsame Entwicklung einer KI-gestützten Bildungsplattform, die GPT-4o für personalisierte Bewertungen und kollaboratives Lernen nutzt.",
      },
    ],
    impact: {
      en: "Built a working platform demonstrating how AI can personalize assessments and enable collaborative learning at scale, presented as an academic project.",
      fr: "Construction d'une plateforme fonctionnelle démontrant comment l'IA peut personnaliser les évaluations et permettre l'apprentissage collaboratif à grande échelle, présentée comme projet académique.",
      de: "Aufbau einer funktionierenden Plattform, die zeigt, wie KI Bewertungen personalisieren und kollaboratives Lernen skalierbar ermöglichen kann, vorgestellt als akademisches Projekt.",
    },
    stack: ["Next.js", "Tailwind CSS", "GPT-4o"],
    images: [
      "/proj-manara/manara-0.png",
      "/proj-manara/manara-1.png",
      "/proj-manara/manara-2.png",
      "/proj-manara/manara-3.png",
      "/proj-manara/manara-4.png",
      "/proj-manara/manara-5.png"
    ],
    tools: ["VS Code"],
    github: "#",
  },
  {
    slug: "the-medical",
    name: "The Medical — Web App for Medical Practice Management",
    period: "Feb. 2022 – Apr. 2022",
    audience: "both",
    description: {
      en: "Multi-role practice management platform.",
      fr: "Plateforme de gestion de cabinet médical multi-rôles.",
      de: "Praxisverwaltungsplattform mit mehreren Rollen.",
    },
    problem: {
      en: "Small medical practices often juggle patients, appointments, and records across paper forms and disconnected tools.",
      fr: "Les petits cabinets médicaux jonglent souvent avec patients, rendez-vous et dossiers entre formulaires papier et outils déconnectés.",
      de: "Kleine Arztpraxen jonglieren oft mit Patienten, Terminen und Akten zwischen Papierformularen und unverbundenen Tools.",
    },
    role: {
      en: "Sole developer — designed the database schema and built the multi-role application end to end.",
      fr: "Développeur unique — conception du schéma de base de données et développement complet de l'application multi-rôles.",
      de: "Alleiniger Entwickler — Entwurf des Datenbankschemas und vollständige Entwicklung der Anwendung mit mehreren Rollen.",
    },
    bullets: [
      {
        en: "Developed a multi-role web application for administrators, secretaries, and doctors to manage patients, appointments, medical records, and prescriptions.",
        fr: "Développement d'une application web multi-rôles pour administrateurs, secrétaires et médecins, permettant de gérer patients, rendez-vous, dossiers médicaux et ordonnances.",
        de: "Entwicklung einer Webanwendung mit mehreren Rollen für Administratoren, Sekretariat und Ärzte zur Verwaltung von Patienten, Terminen, Krankenakten und Rezepten.",
      },
    ],
    impact: {
      en: "Delivered a functional multi-role system bringing patients, appointments, records, and prescriptions into a single place.",
      fr: "Livraison d'un système multi-rôles fonctionnel réunissant patients, rendez-vous, dossiers et ordonnances en un seul endroit.",
      de: "Lieferung eines funktionsfähigen Systems mit mehreren Rollen, das Patienten, Termine, Akten und Rezepte an einem Ort zusammenführt.",
    },
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    images: [
      "/proj-medical/medical-0.jpg",
      "/proj-medical/medical-1.png",
    ],
    tools: ["VS Code", "XAMPP"],
    github: "https://github.com/AzizKhemiri/The-Medical/tree/main/App_Medical",
  },
  /*{
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
  },*/
];
