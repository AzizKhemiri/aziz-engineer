import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";
import { CompanyLogo } from "@/components/CompanyLogo";

export function EducationSection({ locale }: { locale: AppLocale }) {
  const t = useTranslations("education");

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="prompt font-mono text-[13px] text-muted">{t("heading")}</h2>
      <div className="mt-8 space-y-6">
        {profile.education.map((edu) => (
          <article
            key={edu.school}
            className="flex flex-col gap-4 border border-border p-6 transition-colors hover:border-accent sm:flex-row sm:justify-between"
          >
            <div className="flex flex-1 gap-4">
              <CompanyLogo name={edu.school} logo={edu.logo} />
              <div>
                <h3 className="font-serif text-xl">{loc(edu.degree, locale)}</h3>
                <p className="mt-1 text-[14px] text-muted">
                  {edu.school} · {loc(edu.location, locale)}
                </p>
              </div>
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