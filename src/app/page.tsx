import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { ForBusinesses } from "@/components/sections/for-businesses";
import { Hero } from "@/components/sections/hero";
import { MobileApp } from "@/components/sections/mobile-app";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <ForBusinesses />
        <MobileApp />
        <Testimonials />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
