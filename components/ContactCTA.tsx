import { useTranslations, useLocale } from "next-intl";
import { profile } from "@/data/profile";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export function ContactCTA() {
  const t = useTranslations("contact");
  const locale = useLocale() as AppLocale;

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="prompt justify-center font-mono text-[13px] text-muted flex">
          {t("command")}
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight">{t("heading")}</h2>
        <p className="mt-3 text-[15px] text-muted">
          {loc(profile.location, locale)} · {t("subtext")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[13px] text-accent-foreground transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-5 py-2.5 font-mono text-[13px] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t("linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
