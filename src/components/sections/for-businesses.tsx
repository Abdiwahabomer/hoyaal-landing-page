import { CheckIcon } from "@/components/icons";
import { DashboardPreview } from "@/components/mockups/dashboard-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessBenefits } from "@/content/site";

export function ForBusinesses() {
  return (
    <section id="businesses" className="bg-surface py-20 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Built for Businesses"
            title={
              <>
                Manage your property
                <br className="hidden sm:block" /> with ease
              </>
            }
            description="Streamline your operations, manage bookings, properties, and more, all from a unified dashboard."
          />

          <ul className="mt-8 space-y-4">
            {businessBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-base text-ink">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-success-500 text-white">
                  <CheckIcon className="size-3.5" strokeWidth={3} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <DashboardPreview className="w-full" />
      </Container>
    </section>
  );
}
