import { ChevronDownIcon, SearchIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { faqs, siteConfig } from "@/content/site";

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-20 lg:py-24">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_380px]">
          {/* Native <details> with a shared name: an accessible, JS-free exclusive accordion. */}
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, i) => (
              <details key={faq.question} name="faq" open={i === 0} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDownIcon className="size-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="-mt-1 pb-5 pr-10 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <aside
            id="contact"
            className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <SearchIcon className="size-5" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-ink">
              Have questions?
              <br />
              We&apos;re here to help.
            </h3>
            <p className="mt-3 text-sm text-muted">
              Our team is happy to help — get in touch with us anytime.
            </p>
            <ButtonLink
              href={`mailto:${siteConfig.contactEmail}`}
              variant="success"
              size="sm"
              className="mt-6"
            >
              Contact us
            </ButtonLink>
          </aside>
        </div>
      </Container>
    </section>
  );
}
