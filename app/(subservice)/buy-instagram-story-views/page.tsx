import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramStoryViewsPageData } from '@/app/(subservice)/buy-instagram-story-views/page-data';
import InstagramStoryViewsCtaSection from './_components/cta-section';
import InstagramStoryViewsHeroSection from './_components/hero-section';
import InstagramStoryViewsOrderFormSection from './_components/order-form-section';
import InstagramStoryViewsRelatedServicesSection from './_components/related-services-section';
import InstagramStoryViewsThingsToKnowSection from './_components/things-to-know-section';
import InstagramStoryViewsWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramStoryViewsWhyChooseSection from './_components/why-choose-section';
import InstagramStoryViewsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramStoryViewsPageData.seo.title,
  description: instagramStoryViewsPageData.seo.description,
  alternates: {
    canonical: instagramStoryViewsPageData.seo.canonical,
  },
};

export default function InstagramStoryViewsPage() {
  return (
    <>
      <InstagramStoryViewsHeroSection />
      <InstagramStoryViewsOrderFormSection />
      <InstagramStoryViewsWhyChooseSection />
      <InstagramStoryViewsWhoShouldBuySection />
      <InstagramStoryViewsWorkingProcessSection />
      <InstagramStoryViewsThingsToKnowSection />
      <FaqSection data={instagramStoryViewsPageData.faq} />
      <InstagramStoryViewsRelatedServicesSection />
      <InstagramStoryViewsCtaSection />
    </>
  );
}
