import Image from "next/image";

function getInitials(name: string) {
  const clean = name.replace(/\(.*?\)/g, "").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Shows the company logo if `logo` is set (path in /public, e.g. "/logos/aidodev.png").
 * Otherwise falls back to a two-letter initials badge — no broken images, ever.
 */
export function CompanyLogo({ name, logo }: { name: string; logo?: string }) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 flex-shrink-0 rounded-sm border border-border bg-surface object-contain p-1.5"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-border bg-surface font-mono text-[13px] text-accent">
      {getInitials(name)}
    </div>
  );
}
