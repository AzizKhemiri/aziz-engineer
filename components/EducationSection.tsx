import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function EducationSection({ locale }: { locale: AppLocale }) {
  const t = useTranslations("education");

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="prompt font-mono text-[13px] text-muted">{t("heading")}</h2>
      <div className="mt-8 space-y-8">
        {profile.education.map((edu) => (
          <article
            key={edu.school}
            className="grid gap-1 border-l border-border pl-6 sm:grid-cols-[1fr_auto] sm:gap-6"
          >
            <div>
              <h3 className="font-serif text-xl">{loc(edu.degree, locale)}</h3>
              <p className="mt-1 text-[14px] text-muted">
                {edu.school} · {loc(edu.location, locale)}
              </p>
            </div>
            <p className="whitespace-nowrap font-mono text-[12px] text-muted sm:text-right">
              {edu.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
