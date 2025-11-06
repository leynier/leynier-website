import { toCodes } from "astro:i18n";
import config from "../../../astro.config.mjs";

interface Params {
  lang?: string;
  [key: string]: string | undefined;
}

interface Item {
  params: Params;
  [key: string]: unknown;
}

export default function addLangPaths(items: Item[] = []): Item[] {
  const langs = toCodes(config.i18n?.locales ?? []);
  return items.length === 0
    ? langs.map(lang => ({ params: { lang } }))
    : items.flatMap(item => langs.map(lang => ({ ...item, params: { ...item.params, lang } })));
}