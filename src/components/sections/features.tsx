import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/content/site";

export function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Choose Hoyaal"
          title="Everything you need for a perfect stay"
          description="From finding the best deals to managing your bookings, Hoyaal makes your travel experience simple, smooth, and stress-free."
        />

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
