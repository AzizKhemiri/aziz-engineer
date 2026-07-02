import { Code2, ExternalLink } from "lucide-react";
import type { ProjectEntry } from "@/data/projects";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function ProjectCard({
  project,
  locale,
}: {
  project: ProjectEntry;
  locale: AppLocale;
}) {
  return (
    <article className="flex flex-col gap-3 border border-border p-6 transition-colors hover:border-accent">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-lg leading-snug">{project.name}</h3>
        <span className="whitespace-nowrap font-mono text-[11px] text-muted">
          {project.period}
        </span>
      </div>
      <p className="text-[13px] text-muted">{loc(project.description, locale)}</p>
      <ul className="space-y-1.5 text-[14px] leading-relaxed text-foreground/90">
        {project.bullets.map((bullet) => (
          <li key={bullet.en} className="flex gap-2">
            <span className="text-accent">·</span>
            <span>{loc(bullet, locale)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      {(project.github || project.demo) && (
        <div className="flex gap-3 border-t border-border pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent"
            >
              <Code2 size={13} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
