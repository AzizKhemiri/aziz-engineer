import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { CertificationsSection } from "@/components/CertificationsSection";
import type { AppLocale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hireMePage" });
  return { title: `${t("title")} — Aziz Khemiri` };
}

export default function HireMePage() {
  const t = useTranslations("hireMePage");
  const locale = useLocale() as AppLocale;

  return (
    <div>
      <Hero command={t("command")} title={t("title")} subtitle={t("subtitle")} />
      <ExperienceSection mode="business" locale={locale} />
      <EducationSection locale={locale} />
      <SkillsGrid locale={locale} />
      <CertificationsSection />

    </div>
  );
}
