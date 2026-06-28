import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as soundcloudFollowersPageData } from '@/app/(subservice)/buy-soundcloud-followers/page-data';
import SoundcloudFollowersCtaSection from './_components/cta-section';
import SoundcloudFollowersHeroSection from './_components/hero-section';
import SoundcloudFollowersOrderFormSection from './_components/order-form-section';
import SoundcloudFollowersRelatedServicesSection from './_components/related-services-section';
import SoundcloudFollowersThingsToKnowSection from './_components/things-to-know-section';
import SoundcloudFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import SoundcloudFollowersWhyChooseSection from './_components/why-choose-section';
import SoundcloudFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudFollowersPageData.seo.title,
  description: soundcloudFollowersPageData.seo.description,
  alternates: {
    canonical: soundcloudFollowersPageData.seo.canonical,
  },
};

export default function SoundcloudFollowersPage() {
  return (
    <>
      <SoundcloudFollowersHeroSection />
      <SoundcloudFollowersOrderFormSection />
      <SoundcloudFollowersWhyChooseSection />
      <SoundcloudFollowersWhoShouldBuySection />
      <SoundcloudFollowersWorkingProcessSection />
      <SoundcloudFollowersThingsToKnowSection />
      <FaqSection data={soundcloudFollowersPageData.faq} />
      <SoundcloudFollowersRelatedServicesSection />
      <SoundcloudFollowersCtaSection />
    </>
  );
}
