import { WhatsAppLogo } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function ContactCta({ t }: { t: Dictionary["contact"] }) {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-slate-100 bg-linear-to-b from-white to-brand-50/70 py-24 lg:py-28"
    >
      {/* Slowly drifting dot grid, faded out toward the edges. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-pattern-drift bg-[radial-gradient(var(--color-brand-300)_1.2px,transparent_1.2px)] bg-size-[28px_28px] opacity-70 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/50 blur-3xl"
      />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-[#25D366] shadow-[0_10px_30px_-12px_rgba(23,65,140,0.35)] ring-1 ring-slate-100">
            <WhatsAppLogo className="size-7" />
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppLogo className="size-5" />
              {t.whatsappCta}
            </ButtonLink>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm font-semibold text-ink underline-offset-4 hover:text-brand-600 hover:underline"
            >
              {t.emailCta}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
