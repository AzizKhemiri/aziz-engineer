import { useTranslations } from "next-intl";
import { experience } from "@/data/experience";
import { matchesAudience } from "@/lib/utils";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function ExperienceSection({
  mode,
  locale,
}: {
  mode: "business" | "personal";
  locale: AppLocale;
}) {
  const t = useTranslations("experience");
  const entries = experience.filter((entry) => matchesAudience(entry.audience, mode));

  if (entries.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="prompt font-mono text-[13px] text-muted">{t("heading")}</h2>
      <div className="mt-8 space-y-10">
        {entries.map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className="grid gap-2 border-l border-border pl-6 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div>
              <h3 className="font-serif text-xl">{loc(entry.role, locale)}</h3>
              <p className="mt-1 text-[14px] text-muted">
                {entry.company} · {loc(entry.location, locale)}
              </p>
              <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-foreground/90">
                {entry.bullets.map((bullet) => (
                  <li key={bullet.en} className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>{loc(bullet, locale)}</span>
                  </li>
                ))}
              </ul>
              {entry.stack && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="whitespace-nowrap font-mono text-[12px] text-muted sm:text-right">
              {entry.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
