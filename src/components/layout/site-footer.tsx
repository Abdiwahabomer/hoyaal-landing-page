import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig, socialLinks } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type SiteFooterProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  tagline: string;
  t: Dictionary["footer"];
  legal: Dictionary["legal"];
  /** Prefix for section anchors; set to "/<locale>" on pages other than home. */
  homeHref?: string;
};

export function SiteFooter({ locale, nav, tagline, t, legal, homeHref = "" }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const legalLinks = [
    { href: `/${locale}/privacy`, label: legal.privacy },
    { href: `/${locale}/terms`, label: legal.terms },
  ];

  return (
    <footer className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          <Logo homeHref={homeHref} />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <Link
                    href={`${homeHref}${link.href}`}
                    className={
                      i === 0
                        ? "text-sm font-medium text-brand-600"
                        : "text-sm text-ink/80 transition-colors hover:text-brand-600"
                    }
                  >
                    {nav[link.id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-600"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {t.rights}
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-brand-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p>{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
