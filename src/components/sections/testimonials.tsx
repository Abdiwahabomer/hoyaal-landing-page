import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/site";
import { TestimonialCarousel } from "./testimonial-carousel";

export function Testimonials() {
  return (
    <section className="bg-white pt-4 pb-20 lg:pb-24">
      <Container>
        <SectionHeading
          eyebrow="Loved by Travelers"
          title={<span className="text-2xl sm:text-3xl">Loved by travelers and businesses alike</span>}
          description="Thousands of travelers trust Hoyaal for their perfect stays."
        />
        <TestimonialCarousel items={testimonials} />
      </Container>
    </section>
  );
}
