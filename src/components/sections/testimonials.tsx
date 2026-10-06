import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/motion/reveal";
import { TestimonialCarousel } from "./testimonial-carousel";

export function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  return (
    <section className="bg-white pt-4 pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.eyebrow}
            title={<span className="text-2xl sm:text-3xl">{t.title}</span>}
            description={t.description}
          />
        </Reveal>
        <TestimonialCarousel items={t.items} goToSlide={t.goToSlide} />
      </Container>
    </section>
  );
}
