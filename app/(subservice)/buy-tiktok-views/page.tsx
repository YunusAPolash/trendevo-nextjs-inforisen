import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as tiktokViewsPageData } from '@/app/(subservice)/buy-tiktok-views/page-data';
import TiktokViewsCtaSection from './_components/cta-section';
import TiktokViewsHeroSection from './_components/hero-section';
import TiktokViewsOrderFormSection from './_components/order-form-section';
import TiktokViewsRelatedServicesSection from './_components/related-services-section';
import TiktokViewsThingsToKnowSection from './_components/things-to-know-section';
import TiktokViewsWhoShouldBuySection from './_components/who-should-buy-section';
import TiktokViewsWhyChooseSection from './_components/why-choose-section';
import TiktokViewsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokViewsPageData.seo.title,
  description: tiktokViewsPageData.seo.description,
  alternates: {
    canonical: tiktokViewsPageData.seo.canonical,
  },
};

export default function TiktokViewsPage() {
  return (
    <>
      <TiktokViewsHeroSection />
      <TiktokViewsOrderFormSection />
      <TiktokViewsWhyChooseSection />
      <TiktokViewsWhoShouldBuySection />
      <TiktokViewsWorkingProcessSection />
      <TiktokViewsThingsToKnowSection />
      <FaqSection data={tiktokViewsPageData.faq} />
      <TiktokViewsRelatedServicesSection />
      <TiktokViewsCtaSection />
    </>
  );
}
