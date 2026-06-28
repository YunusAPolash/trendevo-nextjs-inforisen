import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeViewsPageData } from '@/app/(subservice)/buy-youtube-views/page-data';
import YoutubeViewsCtaSection from './_components/cta-section';
import YoutubeViewsHeroSection from './_components/hero-section';
import YoutubeViewsOrderFormSection from './_components/order-form-section';
import YoutubeViewsRelatedServicesSection from './_components/related-services-section';
import YoutubeViewsThingsToKnowSection from './_components/things-to-know-section';
import YoutubeViewsWhoShouldBuySection from './_components/who-should-buy-section';
import YoutubeViewsWhyChooseSection from './_components/why-choose-section';
import YoutubeViewsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeViewsPageData.seo.title,
  description: youtubeViewsPageData.seo.description,
  alternates: {
    canonical: youtubeViewsPageData.seo.canonical,
  },
};

export default function YoutubeViewsPage() {
  return (
    <>
      <YoutubeViewsHeroSection />
      <YoutubeViewsOrderFormSection />
      <YoutubeViewsWhyChooseSection />
      <YoutubeViewsWhoShouldBuySection />
      <YoutubeViewsWorkingProcessSection />
      <YoutubeViewsThingsToKnowSection />
      <FaqSection data={youtubeViewsPageData.faq} />
      <YoutubeViewsRelatedServicesSection />
      <YoutubeViewsCtaSection />
    </>
  );
}
