import config from "../../../astro.config.mjs";

export function getLocale(astro: {
  currentLocale?: string;
}): string {
  return astro.currentLocale || config.i18n?.defaultLocale || 'en';
}

export function t<T>(
  astro: { currentLocale: string | undefined },
): string;
export function t<T>(
  translations: { english: T; spanish: T },
  locale: string | null | undefined
): T;
export function t<T>(
  english: T,
  spanish: T,
  locale: string | null | undefined
): T;
export function t<T>(
  arg1: T | { english: T; spanish: T } | { currentLocale?: string },
  arg2?: T | string | null | undefined,
  arg3?: string | null | undefined
): T | string {
  let english: T;
  let spanish: T;
  let locale: string | null | undefined;
  if (typeof arg1 === 'object' && arg1 !== null && 'currentLocale' in arg1) {
    return arg1.currentLocale || config.i18n?.defaultLocale || 'en';
  } else if (typeof arg3 === 'string') {
    english = arg1 as T;
    spanish = arg2 as T;
    locale = arg3;
  } else {
    const translations = arg1 as { english: T; spanish: T };
    english = translations.english;
    spanish = translations.spanish;
    locale = arg2 as string;
  }
  return locale === 'es' ? spanish : english;
}
