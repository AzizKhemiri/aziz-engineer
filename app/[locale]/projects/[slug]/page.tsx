import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TechTags } from "@/components/TechTags";
import { ImageLightbox } from "@/components/ImageLightbox";
import { projects } from "@/data/projects";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  return { title: `${project.name} — ${t("overview")} — Aziz Khemiri` };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}

function ProjectDetail({ project }: { project: (typeof projects)[number] }) {
  const t = useTranslations("projectDetail");
  const locale = useLocale() as AppLocale;
  const allTech = [...project.stack, ...(project.tools ?? [])];

  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/projects"
            className="mb-6 flex w-fit items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={14} />
            {t("back")}
          </Link>

          <h1 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 font-mono text-[13px] text-muted">{project.period}</p>

          <div className="mt-6">
            <TechTags items={allTech} />
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-accent"
                >
                  <Code2 size={14} />
                  {t("viewCode")}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-accent"
                >
                  <ExternalLink size={14} />
                  {t("liveDemo")}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <section className="mx-auto max-w-4xl space-y-12 px-6 py-14">
        <DetailBlock label={t("overview")}>
          <p className="text-[15px] leading-relaxed text-foreground/90">
            {loc(project.description, locale)}
          </p>
        </DetailBlock>

        {project.problem && (
          <DetailBlock label={t("problem")}>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              {loc(project.problem, locale)}
            </p>
          </DetailBlock>
        )}

        {project.role && (
          <DetailBlock label={t("role")}>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              {loc(project.role, locale)}
            </p>
          </DetailBlock>
        )}

        <DetailBlock label={t("features")}>
          <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/90">
            {project.bullets.map((bullet) => (
              <li key={bullet.en} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{loc(bullet, locale)}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>

        {project.impact && (
          <DetailBlock label={t("impact")}>
            <p className="text-[15px] leading-relaxed text-foreground/90">
              {loc(project.impact, locale)}
            </p>
          </DetailBlock>
        )}

        {project.images && project.images.length > 0 && (
          <DetailBlock label={t("screenshots")}>
            <ImageLightbox images={project.images} alt={project.name} />
          </DetailBlock>
        )}
      </section>
    </div>
  );
}

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="prompt font-mono text-[13px] text-muted">{label}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
