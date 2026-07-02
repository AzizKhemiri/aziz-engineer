import type { LocalizedText } from "./i18n";

export const profile = {
  name: "Aziz Khemiri",
  role: {
    en: "Software Engineer",
    fr: "Ingénieur Logiciel",
    de: "Software-Ingenieur",
  } satisfies LocalizedText,
  tagline: {
    en: "Software Engineer focused on Cloud Infrastructure, DevOps, and System Design— building scalable, reliable, and modern software.",
    fr: "Ingénieur logiciel avec un focus sur l’infrastructure cloud, le DevOps et la conception de systèmes — création de solutions logicielles modernes, fiables et scalables.",
    de: "Software-Ingenieur mit Fokus auf Cloud-Infrastruktur, DevOps und Systemdesign — Entwicklung moderner, skalierbarer und zuverlässiger Softwarelösungen.",
  } satisfies LocalizedText,
  location: {
    en: "Ariana, Tunisia",
    fr: "Ariana, Tunisie",
    de: "Ariana, Tunesien",
  } satisfies LocalizedText,
  email: "aziz.khemiri@isitc.u-sousse.tn",
  phone: "+216 90 078 421",
  socials: {
    linkedin: "https://linkedin.com/in/azizkhemiri",
    github: "https://github.com/AzizKhemiri",
  },
  languages: [
    { name: "English", level: { en: "Advanced", fr: "Avancé", de: "Fortgeschritten" } satisfies LocalizedText },
    { name: "French", level: { en: "Advanced", fr: "Avancé", de: "Fortgeschritten" } satisfies LocalizedText },
    { name: "Arabic", level: { en: "Native", fr: "Langue maternelle", de: "Muttersprache" } satisfies LocalizedText },
  ],
  education: [
    {
      degree: {
        en: "Engineering Cycle in Computer and Telecommunications",
        fr: "Cycle d'ingénieur en Informatique et Télécommunications",
        de: "Ingenieurstudium in Informatik und Telekommunikation",
      } satisfies LocalizedText,
      school: "ISITCom Sousse",
      location: {
        en: "Sousse, Tunisia",
        fr: "Sousse, Tunisie",
        de: "Sousse, Tunesien",
      } satisfies LocalizedText,
      period: "Sep. 2025 – 2028",
    },
    {
      degree: {
        en: "Bachelor's Degree in Computer Science",
        fr: "Licence en Informatique",
        de: "Bachelor-Abschluss in Informatik",
      } satisfies LocalizedText,
      school: "Higher Institute of Applied Mathematics and Computer Science of Kairouan",
      location: {
        en: "Kairouan, Tunisia",
        fr: "Kairouan, Tunisie",
        de: "Kairouan, Tunesien",
      } satisfies LocalizedText,
      period: "Sep. 2022 – Jun. 2025",
    },
  ],
};
