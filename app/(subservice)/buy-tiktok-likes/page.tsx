import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as tiktokLikesPageData } from '@/app/(subservice)/buy-tiktok-likes/page-data';
import TiktokLikesCtaSection from './_components/cta-section';
import TiktokLikesHeroSection from './_components/hero-section';
import TiktokLikesOrderFormSection from './_components/order-form-section';
import TiktokLikesRelatedServicesSection from './_components/related-services-section';
import TiktokLikesThingsToKnowSection from './_components/things-to-know-section';
import TiktokLikesWhoShouldBuySection from './_components/who-should-buy-section';
import TiktokLikesWhyChooseSection from './_components/why-choose-section';
import TiktokLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokLikesPageData.seo.title,
  description: tiktokLikesPageData.seo.description,
  alternates: {
    canonical: tiktokLikesPageData.seo.canonical,
  },
};

export default function TiktokLikesPage() {
  return (
    <>
      <TiktokLikesHeroSection />
      <TiktokLikesOrderFormSection />
      <TiktokLikesWhyChooseSection />
      <TiktokLikesWhoShouldBuySection />
      <TiktokLikesWorkingProcessSection />
      <TiktokLikesThingsToKnowSection />
      <FaqSection data={tiktokLikesPageData.faq} />
      <TiktokLikesRelatedServicesSection />
      <TiktokLikesCtaSection />
    </>
  );
}
