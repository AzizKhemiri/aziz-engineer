export type LocalizedText = {
  en: string;
  fr: string;
  de: string;
};

export type AppLocale = "en" | "fr" | "de";

export function t(text: LocalizedText, locale: AppLocale): string {
  return text[locale] ?? text.en;
}
