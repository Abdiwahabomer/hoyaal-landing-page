import { LOCALE_COOKIE, type Locale } from "./config";

/** Persists the visitor's language choice for a year; `src/proxy.ts` reads it on `/`. */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
