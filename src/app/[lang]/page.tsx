import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { ForBusinesses } from "@/components/sections/for-businesses";
import { Hero } from "@/components/sections/hero";
import { MobileApp } from "@/components/sections/mobile-app";
import { Testimonials } from "@/components/sections/testimonials";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <SiteHeader locale={lang} nav={dict.nav} t={dict.header} />
      <main>
        <Hero t={dict.hero} />
        <Features t={dict.features} />
        <ForBusinesses t={dict.businesses} />
        <MobileApp t={dict.mobile} />
        <Testimonials t={dict.testimonials} />
        <Faq t={dict.faq} />
        <ContactCta t={dict.contact} />
      </main>
      <SiteFooter
        locale={lang}
        nav={dict.nav}
        tagline={dict.tagline}
        t={dict.footer}
        legal={dict.legal}
      />
    </>
  );
}
