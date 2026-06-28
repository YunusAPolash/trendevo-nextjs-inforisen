import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as tiktokFollowersPageData } from '@/app/(subservice)/buy-tiktok-followers/page-data';
import TiktokFollowersCtaSection from './_components/cta-section';
import TiktokFollowersHeroSection from './_components/hero-section';
import TiktokFollowersOrderFormSection from './_components/order-form-section';
import TiktokFollowersRelatedServicesSection from './_components/related-services-section';
import TiktokFollowersThingsToKnowSection from './_components/things-to-know-section';
import TiktokFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import TiktokFollowersWhyChooseSection from './_components/why-choose-section';
import TiktokFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokFollowersPageData.seo.title,
  description: tiktokFollowersPageData.seo.description,
  alternates: {
    canonical: tiktokFollowersPageData.seo.canonical,
  },
};

export default function TiktokFollowersPage() {
  return (
    <>
      <TiktokFollowersHeroSection />
      <TiktokFollowersOrderFormSection />
      <TiktokFollowersWhyChooseSection />
      <TiktokFollowersWhoShouldBuySection />
      <TiktokFollowersWorkingProcessSection />
      <TiktokFollowersThingsToKnowSection />
      <FaqSection data={tiktokFollowersPageData.faq} />
      <TiktokFollowersRelatedServicesSection />
      <TiktokFollowersCtaSection />
    </>
  );
}
