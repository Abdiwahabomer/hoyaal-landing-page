import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig, socialLinks } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

type SiteFooterProps = {
  nav: Dictionary["nav"];
  tagline: string;
  t: Dictionary["footer"];
};

export function SiteFooter({ nav, tagline, t }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          <Logo />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
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

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {t.rights}
          </p>
          <p>{tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
