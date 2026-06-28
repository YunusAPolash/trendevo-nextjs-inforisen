import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as facebookPageLikesPageData } from '@/app/(subservice)/buy-facebook-page-likes/page-data';
import FacebookPageLikesCtaSection from './_components/cta-section';
import FacebookPageLikesHeroSection from './_components/hero-section';
import FacebookPageLikesOrderFormSection from './_components/order-form-section';
import FacebookPageLikesRelatedServicesSection from './_components/related-services-section';
import FacebookPageLikesThingsToKnowSection from './_components/things-to-know-section';
import FacebookPageLikesWhoShouldBuySection from './_components/who-should-buy-section';
import FacebookPageLikesWhyChooseSection from './_components/why-choose-section';
import FacebookPageLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: facebookPageLikesPageData.seo.title,
  description: facebookPageLikesPageData.seo.description,
  alternates: {
    canonical: facebookPageLikesPageData.seo.canonical,
  },
};

export default function FacebookPageLikesPage() {
  return (
    <>
      <FacebookPageLikesHeroSection />
      <FacebookPageLikesOrderFormSection />
      <FacebookPageLikesWhyChooseSection />
      <FacebookPageLikesWhoShouldBuySection />
      <FacebookPageLikesWorkingProcessSection />
      <FacebookPageLikesThingsToKnowSection />
      <FaqSection data={facebookPageLikesPageData.faq} />
      <FacebookPageLikesRelatedServicesSection />
      <FacebookPageLikesCtaSection />
    </>
  );
}
