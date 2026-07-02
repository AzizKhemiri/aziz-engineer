"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

const LOCALE_META: Record<string, { label: string; flag: string }> = {
  en: { label: "EN", flag: "🇬🇧" },
  fr: { label: "FR", flag: "🇫🇷" },
  de: { label: "DE", flag: "🇩🇪" },
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const current = LOCALE_META[locale] ?? LOCALE_META.en;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 font-mono text-[12px] text-muted transition-colors hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <span className="text-[14px] leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-sm border border-border bg-background shadow-[0_8px_24px_-8px_rgba(0,0,0,0.2)]"
        >
          {routing.locales.map((loc) => {
            const meta = LOCALE_META[loc];
            const active = loc === locale;
            return (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setOpen(false);
                    router.replace(pathname, { locale: loc });
                  }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2 text-left font-mono text-[12px] transition-colors hover:bg-surface ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  <span className="text-[14px] leading-none">{meta.flag}</span>
                  <span>{meta.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
