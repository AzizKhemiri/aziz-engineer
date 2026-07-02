import { useTranslations } from "next-intl";
import { skills } from "@/data/skills";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function SkillsGrid({ locale }: { locale: AppLocale }) {
  const t = useTranslations("skills");

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="prompt font-mono text-[13px] text-muted">{t("heading")}</h2>
      <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category.en}>
            <h3 className="font-mono text-[12px] uppercase tracking-wide text-muted">
              {loc(group.category, locale)}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border px-2.5 py-1 text-[13px] text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
