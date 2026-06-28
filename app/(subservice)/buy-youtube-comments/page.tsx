import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeCommentsPageData } from '@/app/(subservice)/buy-youtube-comments/page-data';
import YoutubeCommentsCtaSection from './_components/cta-section';
import YoutubeCommentsHeroSection from './_components/hero-section';
import YoutubeCommentsOrderFormSection from './_components/order-form-section';
import YoutubeCommentsRelatedServicesSection from './_components/related-services-section';
import YoutubeCommentsThingsToKnowSection from './_components/things-to-know-section';
import YoutubeCommentsWhoShouldBuySection from './_components/who-should-buy-section';
import YoutubeCommentsWhyChooseSection from './_components/why-choose-section';
import YoutubeCommentsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeCommentsPageData.seo.title,
  description: youtubeCommentsPageData.seo.description,
  alternates: {
    canonical: youtubeCommentsPageData.seo.canonical,
  },
};

export default function YoutubeCommentsPage() {
  return (
    <>
      <YoutubeCommentsHeroSection />
      <YoutubeCommentsOrderFormSection />
      <YoutubeCommentsWhyChooseSection />
      <YoutubeCommentsWhoShouldBuySection />
      <YoutubeCommentsWorkingProcessSection />
      <YoutubeCommentsThingsToKnowSection />
      <FaqSection data={youtubeCommentsPageData.faq} />
      <YoutubeCommentsRelatedServicesSection />
      <YoutubeCommentsCtaSection />
    </>
  );
}
