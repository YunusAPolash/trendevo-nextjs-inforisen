import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as youtubeSubscribersPageData } from '@/app/(subservice)/buy-youtube-subscribers/page-data';
import YoutubeSubscribersCtaSection from './_components/cta-section';
import YoutubeSubscribersHeroSection from './_components/hero-section';
import YoutubeSubscribersOrderFormSection from './_components/order-form-section';
import YoutubeSubscribersRelatedServicesSection from './_components/related-services-section';
import YoutubeSubscribersThingsToKnowSection from './_components/things-to-know-section';
import YoutubeSubscribersWhoShouldBuySection from './_components/who-should-buy-section';
import YoutubeSubscribersWhyChooseSection from './_components/why-choose-section';
import YoutubeSubscribersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeSubscribersPageData.seo.title,
  description: youtubeSubscribersPageData.seo.description,
  alternates: {
    canonical: youtubeSubscribersPageData.seo.canonical,
  },
};

export default function YoutubeSubscribersPage() {
  return (
    <>
      <YoutubeSubscribersHeroSection />
      <YoutubeSubscribersOrderFormSection />
      <YoutubeSubscribersWhyChooseSection />
      <YoutubeSubscribersWhoShouldBuySection />
      <YoutubeSubscribersWorkingProcessSection />
      <YoutubeSubscribersThingsToKnowSection />
      <FaqSection data={youtubeSubscribersPageData.faq} />
      <YoutubeSubscribersRelatedServicesSection />
      <YoutubeSubscribersCtaSection />
    </>
  );
}
