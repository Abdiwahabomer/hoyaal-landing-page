import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig, socialLinks } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <Container>
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
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
                        : "text-sm text-ink/80 transition-colors hover:text-ink"
                    }
                  >
                    {link.label}
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
                  className="grid size-9 place-items-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-100 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
