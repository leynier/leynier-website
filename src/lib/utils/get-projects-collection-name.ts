import { t } from "./i18n";

export type ProjectCollectionName = "projects-en" | "projects-es";

export function getProjectsCollectionName(astro: {
  currentLocale: string | undefined;
}): ProjectCollectionName {
  return t(astro) === "es" ? "projects-es" : "projects-en";
}
