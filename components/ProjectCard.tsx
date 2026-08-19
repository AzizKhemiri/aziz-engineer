import { ArrowUpRight, Folder } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ProjectEntry } from "@/data/projects";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";
import { TechTags } from "@/components/TechTags";

export function ProjectCard({
  project,
  locale,
}: {
  project: ProjectEntry;
  locale: AppLocale;
}) {
  const visibleStack = project.stack.slice(0, 4);
  const extraCount = project.stack.length - visibleStack.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
    >
      {/* thumbnail: real screenshot if provided, otherwise a branded placeholder */}
      <div className="relative flex aspect-[16/9] items-center justify-center border-b border-border bg-surface">
        {project.images?.[0] ? (
          <Image src={project.images[0]} alt={project.name} fill className="object-cover" />
        ) : (
          <Folder size={36} className="text-muted/40 transition-colors group-hover:text-accent/50" />
        )}
        <span className="absolute right-3 top-3 whitespace-nowrap rounded-sm border border-border bg-background/90 px-2 py-0.5 font-mono text-[11px] text-muted">
          {project.period}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg leading-snug">{project.name}</h3>
          <ArrowUpRight
            size={16}
            className="mt-1 flex-shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>
        <p className="text-[13px] leading-relaxed text-muted">{loc(project.description, locale)}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <TechTags items={visibleStack} />
          {extraCount > 0 && (
            <span className="font-mono text-[11px] text-muted">+{extraCount} more</span>
          )}
        </div>
      </div>
    </Link>
  );
}
