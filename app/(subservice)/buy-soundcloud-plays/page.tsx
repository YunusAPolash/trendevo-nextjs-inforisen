import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as soundcloudPlaysPageData } from '@/app/(subservice)/buy-soundcloud-plays/page-data';
import SoundcloudPlaysCtaSection from './_components/cta-section';
import SoundcloudPlaysHeroSection from './_components/hero-section';
import SoundcloudPlaysOrderFormSection from './_components/order-form-section';
import SoundcloudPlaysRelatedServicesSection from './_components/related-services-section';
import SoundcloudPlaysThingsToKnowSection from './_components/things-to-know-section';
import SoundcloudPlaysWhoShouldBuySection from './_components/who-should-buy-section';
import SoundcloudPlaysWhyChooseSection from './_components/why-choose-section';
import SoundcloudPlaysWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: soundcloudPlaysPageData.seo.title,
  description: soundcloudPlaysPageData.seo.description,
  alternates: {
    canonical: soundcloudPlaysPageData.seo.canonical,
  },
};

export default function SoundcloudPlaysPage() {
  return (
    <>
      <SoundcloudPlaysHeroSection />
      <SoundcloudPlaysOrderFormSection />
      <SoundcloudPlaysWhyChooseSection />
      <SoundcloudPlaysWhoShouldBuySection />
      <SoundcloudPlaysWorkingProcessSection />
      <SoundcloudPlaysThingsToKnowSection />
      <FaqSection data={soundcloudPlaysPageData.faq} />
      <SoundcloudPlaysRelatedServicesSection />
      <SoundcloudPlaysCtaSection />
    </>
  );
}
