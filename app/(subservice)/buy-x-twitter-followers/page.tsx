import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as twitterFollowersPageData } from '@/app/(subservice)/buy-x-twitter-followers/page-data';
import TwitterFollowersCtaSection from './_components/cta-section';
import TwitterFollowersHeroSection from './_components/hero-section';
import TwitterFollowersOrderFormSection from './_components/order-form-section';
import TwitterFollowersRelatedServicesSection from './_components/related-services-section';
import TwitterFollowersThingsToKnowSection from './_components/things-to-know-section';
import TwitterFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import TwitterFollowersWhyChooseSection from './_components/why-choose-section';
import TwitterFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: twitterFollowersPageData.seo.title,
  description: twitterFollowersPageData.seo.description,
  alternates: {
    canonical: twitterFollowersPageData.seo.canonical,
  },
};

export default function TwitterFollowersPage() {
  return (
    <>
      <TwitterFollowersHeroSection />
      <TwitterFollowersOrderFormSection />
      <TwitterFollowersWhyChooseSection />
      <TwitterFollowersWhoShouldBuySection />
      <TwitterFollowersWorkingProcessSection />
      <TwitterFollowersThingsToKnowSection />
      <FaqSection data={twitterFollowersPageData.faq} />
      <TwitterFollowersRelatedServicesSection />
      <TwitterFollowersCtaSection />
    </>
  );
}
