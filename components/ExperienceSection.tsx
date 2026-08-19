import { useTranslations } from "next-intl";
import { experience } from "@/data/experience";
import { matchesAudience } from "@/lib/utils";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";
import { CompanyLogo } from "@/components/CompanyLogo";
import { TechTags } from "@/components/TechTags";
import { Reveal } from "@/components/Reveal";

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
      <div className="mt-8 space-y-6">
        {entries.map((entry, i) => (
          <Reveal key={`${entry.company}-${entry.period}`} delay={i * 60}>
            <article className="flex flex-col gap-4 border border-border p-6 transition-colors hover:border-accent sm:flex-row sm:justify-between">
              <div className="flex flex-1 gap-4">
                <CompanyLogo name={entry.company} logo={entry.logo} />
                <div className="flex-1">
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
                    <div className="mt-3">
                      <TechTags items={entry.stack} />
                    </div>
                  )}
                </div>
              </div>
              <p className="whitespace-nowrap font-mono text-[12px] text-muted sm:text-right">
                {entry.period}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
