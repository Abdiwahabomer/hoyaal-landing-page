import { AppHomeScreen } from "@/components/mockups/app-home-screen";
import { AppListingScreen } from "@/components/mockups/app-listing-screen";
import { PhoneFrame } from "@/components/mockups/phone-frame";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoreBadges } from "@/components/ui/store-badges";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/motion/reveal";

export function MobileApp({ t }: { t: Dictionary["mobile"] }) {
  return (
    <section id="download" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute top-1/2 -left-32 size-[460px] -translate-y-1/2 rounded-full bg-brand-100/60 blur-3xl" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <MobileVisual />
        </Reveal>

        <div className="lg:pl-6">
          <Reveal delay={100}>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
          </Reveal>
          <Reveal delay={220} className="mt-8">
            <StoreBadges appStoreLine1={t.appStoreLine1} playStoreLine1={t.playStoreLine1} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MobileVisual() {
  return (
    <div className="relative mx-auto aspect-[1/0.82] w-full max-w-[520px]">
      {/* Decorative orbit arc and motion strokes */}
      <div className="absolute top-[8%] left-[2%] aspect-square w-[88%] rounded-full border border-l-brand-300 border-t-transparent border-r-transparent border-b-brand-200 -rotate-12" />
      <span className="absolute top-[14%] right-[10%] h-0.5 w-8 -rotate-45 rounded-full bg-slate-300" />
      <span className="absolute top-[20%] right-[6%] h-0.5 w-6 -rotate-[20deg] rounded-full bg-slate-300" />

      <PhoneFrame className="absolute top-[2%] left-[14%] z-10 w-[40%] animate-float-slow -rotate-[8deg]">
        <AppHomeScreen />
      </PhoneFrame>

      <PhoneFrame className="absolute top-[12%] left-[52%] w-[32%] animate-float rotate-[6deg] [animation-delay:-3s]">
        <AppListingScreen />
      </PhoneFrame>
    </div>
  );
}
