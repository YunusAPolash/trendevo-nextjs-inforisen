import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as twitterLikesPageData } from '@/app/(subservice)/buy-x-twitter-likes/page-data';
import TwitterLikesCtaSection from './_components/cta-section';
import TwitterLikesHeroSection from './_components/hero-section';
import TwitterLikesOrderFormSection from './_components/order-form-section';
import TwitterLikesRelatedServicesSection from './_components/related-services-section';
import TwitterLikesThingsToKnowSection from './_components/things-to-know-section';
import TwitterLikesWhoShouldBuySection from './_components/who-should-buy-section';
import TwitterLikesWhyChooseSection from './_components/why-choose-section';
import TwitterLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: twitterLikesPageData.seo.title,
  description: twitterLikesPageData.seo.description,
  alternates: {
    canonical: twitterLikesPageData.seo.canonical,
  },
};

export default function TwitterLikesPage() {
  return (
    <>
      <TwitterLikesHeroSection />
      <TwitterLikesOrderFormSection />
      <TwitterLikesWhyChooseSection />
      <TwitterLikesWhoShouldBuySection />
      <TwitterLikesWorkingProcessSection />
      <TwitterLikesThingsToKnowSection />
      <FaqSection data={twitterLikesPageData.faq} />
      <TwitterLikesRelatedServicesSection />
      <TwitterLikesCtaSection />
    </>
  );
}
