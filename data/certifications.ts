export type Certification = {
  name: string;
  issuer: string;
  period: string | null;
  link: string | null;
};

export const certifications: Certification[] = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft Azure & DataCamp",
    period: null,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/bbc63a2ee00b0bc8933526258dcbf2f2d68c0339",
  },
  //{
  //  name: "Global Consumer Intelligence Program",
  //  issuer: "Matsuo-Iwasawa Lab, University of Tokyo",
  //  period: "Apr 2026 – Present",
  //  link: "https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/",
  //},
  {
    name: "GitHub Foundations",
    issuer: "GitHub & DataCamp",
    period: null,
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/0ae9c232d970cbf80b88bdd781daaff055be8f09?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    period: null,
    link: "https://www.freecodecamp.org/certification/AzizKhemiri/front-end-development-libraries",
  },
  {
    name: "Legacy JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    period: null,
    link: "https://www.freecodecamp.org/certification/AzizKhemiri/javascript-algorithms-and-data-structures",
  },
  {
    name: "Cyber Security Defense Analyst Career Path",
    issuer: "Cisco Networking Academy - Splunk",
    period: null,
    link: "https://www.credly.com/badges/4753a0c6-b246-45f5-94d2-fcc8cdaab383",
  },
  {
    name: "Certificate of Training in AI and ML",
    issuer: "Virtual University of Tunis",
    period: null,
    link: "https://drive.google.com/file/d/1IkVRy9BIg1cYMVt74lg7lV-IjQ_BHx0m/view",
  },
];
