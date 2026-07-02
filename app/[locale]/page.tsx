import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { profile } from "@/data/profile";
import { t as loc } from "@/data/i18n";
import type { AppLocale } from "@/data/i18n";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale() as AppLocale;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <section className="flex flex-col-reverse items-start gap-10 border-b border-border py-20 sm:flex-row sm:items-center sm:justify-between sm:py-28">
        <div>
          <p className="prompt font-mono text-[13px] text-muted">{t("eyebrow")}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-[1.1] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-[14px] text-accent">{loc(profile.role, locale)}</p>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            {loc(profile.tagline, locale)}
          </p>
        </div>
        <Image
          src="/profile.jpg"
          alt={profile.name}
          width={144}
          height={144}
          priority
          className="h-28 w-28 flex-shrink-0 rounded-full border border-border object-cover sm:h-36 sm:w-36"
        />
      </section>

      <section className="grid divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <ModeCard
          command={t("projectsCard.command")}
          title={t("projectsCard.title")}
          description={t("projectsCard.description")}
          href="/projects"
        />
        <ModeCard
          command={t("hireCard.command")}
          title={t("hireCard.title")}
          description={t("hireCard.description")}
          href="/hire-me"
        />
      </section>
    </div>
  );
}

function ModeCard({
  command,
  title,
  description,
  href,
}: {
  command: string;
  title: string;
  description: string;
  href: "/projects" | "/hire-me";
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 px-2 py-12 transition-colors hover:bg-surface sm:px-8"
    >
      <p className="prompt font-mono text-[13px] text-muted">{command}</p>
      <div className="flex items-center gap-2">
        <h2 className="font-serif text-2xl tracking-tight">{title}</h2>
        <ArrowUpRight
          size={18}
          className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
      <p className="max-w-sm text-[14px] leading-relaxed text-muted">{description}</p>
    </Link>
  );
}
