export function t<T>(
    translations: { english: T; spanish: T },
    locale: string
): T;
export function t<T>(
    english: T,
    spanish: T,
    locale: string
): T;
export function t<T>(
    arg1: T | { english: T; spanish: T },
    arg2: T | string,
    arg3?: string
): T {
    let english: T;
    let spanish: T;
    let locale: string;

    if (typeof arg3 === 'string') {
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
