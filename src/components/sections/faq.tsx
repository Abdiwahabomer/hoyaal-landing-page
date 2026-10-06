import { ChevronDownIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Reveal as="h2" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.title}
          </Reveal>
          <Reveal as="p" delay={100} className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            {t.description}
          </Reveal>
        </div>

        {/* Native <details> with a shared name: an accessible, JS-free exclusive accordion. */}
        <div className="space-y-3">
          {t.items.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 90}>
              <details
                name="faq"
                open={i === 0}
                className="group rounded-2xl bg-white px-6 ring-1 ring-slate-200/70 transition-shadow duration-300 open:shadow-[0_12px_32px_-16px_rgba(23,65,140,0.25)] open:ring-brand-100 hover:ring-brand-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-ink transition-colors hover:text-brand-700 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-open:rotate-180 group-open:bg-brand-600 group-open:text-white">
                    <ChevronDownIcon className="size-4" />
                  </span>
                </summary>
                {/* Animation only applies while open, so it restarts every time the item opens. */}
                <p className="-mt-1 pr-10 pb-5 text-sm leading-relaxed text-muted group-open:animate-fade-up group-open:[animation-duration:0.45s]">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
