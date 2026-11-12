"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/cn";
import { LocaleSwitcher } from "./locale-switcher";

/** Tracks which nav section is currently in view. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band near the top of the viewport decides the active section.
      { rootMargin: "-30% 0px -65% 0px" },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((link) => link.id);

type SiteHeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  t: Dictionary["header"];
  /** Prefix for section anchors; set to "/<locale>" on pages other than home. */
  homeHref?: string;
};

export function SiteHeader({ locale, nav, t, homeHref = "" }: SiteHeaderProps) {
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        // Always frosted so content never shows through; the divider appears once scrolled.
        "sticky top-0 z-50 animate-fade-in bg-white/80 backdrop-blur-lg transition-shadow",
        (scrolled || menuOpen) && "shadow-[0_1px_0_rgba(15,23,42,0.08)]",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo preload homeHref={homeHref} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`${homeHref}${link.href}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium whitespace-nowrap transition-colors",
                    // Underline grows from the left on hover and for the active section.
                    "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300 hover:after:scale-x-100",
                    active === link.id
                      ? "text-brand-600 after:scale-x-100"
                      : "text-ink/80 hover:text-ink",
                  )}
                >
                  {nav[link.id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} label={t.language} />
          <div className="hidden sm:block">
            <ButtonLink href={`${homeHref}#download`} size="sm">
              {t.cta}
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-ink transition-colors hover:bg-slate-100 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="animate-fade-in border-t border-slate-100 lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`${homeHref}${link.href}`}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active === link.id ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-slate-50",
                )}
              >
                {nav[link.id]}
              </Link>
            ))}
            <ButtonLink href={`${homeHref}#download`} onClick={() => setMenuOpen(false)} className="mt-2">
              {t.cta}
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
