import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramAutoLikesPageData } from '@/app/(subservice)/buy-instagram-auto-likes/page-data';
import InstagramAutoLikesCtaSection from './_components/cta-section';
import InstagramAutoLikesHeroSection from './_components/hero-section';
import InstagramAutoLikesOrderFormSection from './_components/order-form-section';
import InstagramAutoLikesRelatedServicesSection from './_components/related-services-section';
import InstagramAutoLikesThingsToKnowSection from './_components/things-to-know-section';
import InstagramAutoLikesWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramAutoLikesWhyChooseSection from './_components/why-choose-section';
import InstagramAutoLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramAutoLikesPageData.seo.title,
  description: instagramAutoLikesPageData.seo.description,
  alternates: {
    canonical: instagramAutoLikesPageData.seo.canonical,
  },
};

export default function InstagramAutoLikesPage() {
  return (
    <>
      <InstagramAutoLikesHeroSection />
      <InstagramAutoLikesOrderFormSection />
      <InstagramAutoLikesWhyChooseSection />
      <InstagramAutoLikesWhoShouldBuySection />
      <InstagramAutoLikesWorkingProcessSection />
      <InstagramAutoLikesThingsToKnowSection />
      <FaqSection data={instagramAutoLikesPageData.faq} />
      <InstagramAutoLikesRelatedServicesSection />
      <InstagramAutoLikesCtaSection />
    </>
  );
}
