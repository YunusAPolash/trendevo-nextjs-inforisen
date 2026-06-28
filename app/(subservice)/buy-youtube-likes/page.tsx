import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeLikesPageData } from '@/app/(subservice)/buy-youtube-likes/page-data';
import YoutubeLikesCtaSection from './_components/cta-section';
import YoutubeLikesHeroSection from './_components/hero-section';
import YoutubeLikesOrderFormSection from './_components/order-form-section';
import YoutubeLikesRelatedServicesSection from './_components/related-services-section';
import YoutubeLikesThingsToKnowSection from './_components/things-to-know-section';
import YoutubeLikesWhoShouldBuySection from './_components/who-should-buy-section';
import YoutubeLikesWhyChooseSection from './_components/why-choose-section';
import YoutubeLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeLikesPageData.seo.title,
  description: youtubeLikesPageData.seo.description,
  alternates: {
    canonical: youtubeLikesPageData.seo.canonical,
  },
};

export default function YoutubeLikesPage() {
  return (
    <>
      <YoutubeLikesHeroSection />
      <YoutubeLikesOrderFormSection />
      <YoutubeLikesWhyChooseSection />
      <YoutubeLikesWhoShouldBuySection />
      <YoutubeLikesWorkingProcessSection />
      <YoutubeLikesThingsToKnowSection />
      <FaqSection data={youtubeLikesPageData.faq} />
      <YoutubeLikesRelatedServicesSection />
      <YoutubeLikesCtaSection />
    </>
  );
}
