import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramViewsPageData } from '@/app/(subservice)/buy-instagram-views/page-data';
import InstagramViewsCtaSection from './_components/cta-section';
import InstagramViewsHeroSection from './_components/hero-section';
import InstagramViewsOrderFormSection from './_components/order-form-section';
import InstagramViewsRelatedServicesSection from './_components/related-services-section';
import InstagramViewsThingsToKnowSection from './_components/things-to-know-section';
import InstagramViewsWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramViewsWhyChooseSection from './_components/why-choose-section';
import InstagramViewsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramViewsPageData.seo.title,
  description: instagramViewsPageData.seo.description,
  alternates: {
    canonical: instagramViewsPageData.seo.canonical,
  },
};

export default function InstagramViewsPage() {
  return (
    <>
      <InstagramViewsHeroSection />
      <InstagramViewsOrderFormSection />
      <InstagramViewsWhyChooseSection />
      <InstagramViewsWhoShouldBuySection />
      <InstagramViewsWorkingProcessSection />
      <InstagramViewsThingsToKnowSection />
      <FaqSection data={instagramViewsPageData.faq} />
      <InstagramViewsRelatedServicesSection />
      <InstagramViewsCtaSection />
    </>
  );
}
