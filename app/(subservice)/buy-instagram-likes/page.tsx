import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramLikesPageData } from '@/app/(subservice)/buy-instagram-likes/page-data';
import InstagramLikesCtaSection from './_components/cta-section';
import InstagramLikesHeroSection from './_components/hero-section';
import InstagramLikesOrderFormSection from './_components/order-form-section';
import InstagramLikesRelatedServicesSection from './_components/related-services-section';
import InstagramLikesThingsToKnowSection from './_components/things-to-know-section';
import InstagramLikesWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramLikesWhyChooseSection from './_components/why-choose-section';
import InstagramLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramLikesPageData.seo.title,
  description: instagramLikesPageData.seo.description,
  alternates: {
    canonical: instagramLikesPageData.seo.canonical,
  },
};

export default function InstagramLikesPage() {
  return (
    <>
      <InstagramLikesHeroSection />
      <InstagramLikesOrderFormSection />
      <InstagramLikesWhyChooseSection />
      <InstagramLikesWhoShouldBuySection />
      <InstagramLikesWorkingProcessSection />
      <InstagramLikesThingsToKnowSection />
      <FaqSection data={instagramLikesPageData.faq} />
      <InstagramLikesRelatedServicesSection />
      <InstagramLikesCtaSection />
    </>
  );
}
