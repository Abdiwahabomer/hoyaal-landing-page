import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.en),
  so: () => import("./dictionaries/so").then((m) => m.so),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export type { Dictionary };
