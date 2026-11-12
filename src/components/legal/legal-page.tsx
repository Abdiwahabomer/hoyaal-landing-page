import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import type { LegalBlock, LegalDocument } from "@/content/legal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type LegalPageProps = {
  locale: Locale;
  dict: Dictionary;
  doc: LegalDocument;
};

const sectionId = (index: number) => `section-${index + 1}`;

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("lines" in block) {
    return (
      <address className="rounded-xl bg-surface p-5 not-italic leading-7">
        {block.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    );
  }
  return (
    <p>
      <strong className="font-semibold text-ink">{block.label}:</strong> {block.text}
    </p>
  );
}

export function LegalPage({ locale, dict, doc }: LegalPageProps) {
  const homeHref = `/${locale}`;

  return (
    <>
      <SiteHeader locale={locale} nav={dict.nav} t={dict.header} homeHref={homeHref} />
      <main className="bg-surface/60 py-12 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href={homeHref}
            className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            ← {dict.legal.backHome}
          </Link>

          <header className="mt-6 border-b border-slate-200 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{doc.title}</h1>
            <p className="mt-3 text-sm text-muted">{doc.effectiveDate}</p>
            {dict.legal.languageNote && (
              <p className="mt-4 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-800">
                {dict.legal.languageNote}
              </p>
            )}
          </header>

          <div className="mt-8 space-y-4 text-base leading-7 text-ink/80">
            {doc.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <nav
            aria-label={dict.legal.contents}
            className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-slate-200/70"
          >
            <h2 className="text-sm font-semibold tracking-wide text-ink uppercase">
              {dict.legal.contents}
            </h2>
            <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {doc.sections.map((section, i) => (
                <li key={section.title}>
                  <a
                    href={`#${sectionId(i)}`}
                    className="text-ink/80 transition-colors hover:text-brand-600"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {doc.sections.map((section, i) => (
              <section key={section.title} id={sectionId(i)} className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  {i + 1}. {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-ink/80">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter
        locale={locale}
        nav={dict.nav}
        tagline={dict.tagline}
        t={dict.footer}
        legal={dict.legal}
        homeHref={homeHref}
      />
    </>
  );
}
