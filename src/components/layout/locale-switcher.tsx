"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { rememberLocale } from "@/i18n/remember-locale";
import { cn } from "@/lib/cn";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  className?: string;
};

/** EN | SO pill. Swaps the locale segment of the URL and remembers the choice. */
export function LocaleSwitcher({ locale, label, className }: LocaleSwitcherProps) {
  const pathname = usePathname();

  const hrefFor = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/") || `/${target}`;
  };

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("relative flex rounded-full bg-slate-100 p-1 ring-1 ring-slate-200/70", className)}
    >
      {/* Sliding highlight behind the active option */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-brand-600 shadow-sm shadow-brand-600/30 transition-transform duration-300 ease-out",
          locale === locales[1] && "translate-x-full",
        )}
      />
      {locales.map((target) => (
        <Link
          key={target}
          href={hrefFor(target)}
          hrefLang={target}
          lang={target}
          scroll={false}
          replace
          onClick={() => rememberLocale(target)}
          aria-current={target === locale ? "true" : undefined}
          title={localeLabels[target].name}
          className={cn(
            "relative z-10 grid h-7 w-10 place-items-center rounded-full text-xs font-semibold transition-colors duration-300",
            target === locale ? "text-white" : "text-slate-500 hover:text-ink",
          )}
        >
          {localeLabels[target].short}
        </Link>
      ))}
    </div>
  );
}
