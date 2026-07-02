import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { matchesAudience } from "@/lib/utils";
import type { AppLocale } from "@/data/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  return { title: `${t("title")} — Aziz Khemiri` };
}

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  const locale = useLocale() as AppLocale;
  const entries = projects.filter((p) => matchesAudience(p.audience, "personal"));

  return (
    <div>
      <Hero command={t("command")} title={t("title")} subtitle={t("subtitle")} />
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {entries.map((project) => (
            <ProjectCard key={project.name} project={project} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
