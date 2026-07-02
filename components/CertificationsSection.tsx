import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { certifications } from "@/data/certifications";
import { Reveal } from "@/components/Reveal";

export function CertificationsSection() {
  const t = useTranslations("certifications");

  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <h2 className="prompt font-mono text-[13px] text-muted">{t("heading")}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 60}>
            <article className="group flex h-full flex-col gap-3 border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-[17px] leading-snug">{cert.name}</h3>
                {cert.period && (
                  <span className="whitespace-nowrap font-mono text-[11px] text-muted">
                    {cert.period}
                  </span>
                )}
              </div>
              <p className="text-[13px] text-muted">{cert.issuer}</p>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-1 pt-2 font-mono text-[12px] text-accent transition-opacity hover:opacity-80"
                >
                  {t("viewCredential")}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : (
                <span className="mt-auto flex items-center gap-1 pt-2 font-mono text-[12px] text-muted/60">
                  {t("viewCredential")}
                  <ArrowUpRight size={13} />
                </span>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
