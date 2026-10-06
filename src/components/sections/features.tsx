import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featureIcons } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/motion/reveal";

export function Features({ t }: { t: Dictionary["features"] }) {
  const items = Object.entries(t.items) as [
    keyof typeof t.items,
    { title: string; description: string },
  ][];

  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </Reveal>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {items.map(([key, { title, description }], i) => {
            const Icon = featureIcons[key];
            return (
              <li key={key} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <Reveal delay={i * 100} className="group">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
