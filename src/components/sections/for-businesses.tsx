import { CheckIcon } from "@/components/icons";
import { DashboardPreview } from "@/components/mockups/dashboard-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/motion/reveal";

export function ForBusinesses({ t }: { t: Dictionary["businesses"] }) {
  return (
    <section id="businesses" className="overflow-hidden bg-surface py-20 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow={t.eyebrow}
              title={
                <>
                  {t.titleLine1}
                  <br className="hidden sm:block" /> {t.titleLine2}
                </>
              }
              description={t.description}
            />
          </Reveal>

          <ul className="mt-8 space-y-4">
            {t.benefits.map((benefit, i) => (
              <Reveal
                as="li"
                key={benefit}
                delay={150 + i * 90}
                className="flex items-center gap-3 text-base text-ink"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success-500 text-white">
                  <CheckIcon className="size-3.5" strokeWidth={3} />
                </span>
                {benefit}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150}>
          <DashboardPreview alt={t.dashboardAlt} className="w-full" />
        </Reveal>
      </Container>
    </section>
  );
}
