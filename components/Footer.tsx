import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-5 font-mono">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            {t("email")}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {t("linkedin")}
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {t("github")}
          </a>
        </div>
      </div>
    </footer>
  );
}
