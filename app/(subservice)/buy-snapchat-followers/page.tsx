import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as snapchatFollowersPageData } from '@/app/(subservice)/buy-snapchat-followers/page-data';
import SnapchatFollowersCtaSection from './_components/cta-section';
import SnapchatFollowersHeroSection from './_components/hero-section';
import SnapchatFollowersOrderFormSection from './_components/order-form-section';
import SnapchatFollowersRelatedServicesSection from './_components/related-services-section';
import SnapchatFollowersThingsToKnowSection from './_components/things-to-know-section';
import SnapchatFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import SnapchatFollowersWhyChooseSection from './_components/why-choose-section';
import SnapchatFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: snapchatFollowersPageData.seo.title,
  description: snapchatFollowersPageData.seo.description,
  alternates: {
    canonical: snapchatFollowersPageData.seo.canonical,
  },
};

export default function SnapchatFollowersPage() {
  return (
    <>
      <SnapchatFollowersHeroSection />
      <SnapchatFollowersOrderFormSection />
      <SnapchatFollowersWhyChooseSection />
      <SnapchatFollowersWhoShouldBuySection />
      <SnapchatFollowersWorkingProcessSection />
      <SnapchatFollowersThingsToKnowSection />
      <FaqSection data={snapchatFollowersPageData.faq} />
      <SnapchatFollowersRelatedServicesSection />
      <SnapchatFollowersCtaSection />
    </>
  );
}
