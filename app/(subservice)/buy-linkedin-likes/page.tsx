import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as linkedinLikesPageData } from '@/app/(subservice)/buy-linkedin-likes/page-data';
import LinkedinLikesCtaSection from './_components/cta-section';
import LinkedinLikesHeroSection from './_components/hero-section';
import LinkedinLikesOrderFormSection from './_components/order-form-section';
import LinkedinLikesRelatedServicesSection from './_components/related-services-section';
import LinkedinLikesThingsToKnowSection from './_components/things-to-know-section';
import LinkedinLikesWhoShouldBuySection from './_components/who-should-buy-section';
import LinkedinLikesWhyChooseSection from './_components/why-choose-section';
import LinkedinLikesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: linkedinLikesPageData.seo.title,
  description: linkedinLikesPageData.seo.description,
  alternates: {
    canonical: linkedinLikesPageData.seo.canonical,
  },
};

export default function LinkedinLikesPage() {
  return (
    <>
      <LinkedinLikesHeroSection />
      <LinkedinLikesOrderFormSection />
      <LinkedinLikesWhyChooseSection />
      <LinkedinLikesWhoShouldBuySection />
      <LinkedinLikesWorkingProcessSection />
      <LinkedinLikesThingsToKnowSection />
      <FaqSection data={linkedinLikesPageData.faq} />
      <LinkedinLikesRelatedServicesSection />
      <LinkedinLikesCtaSection />
    </>
  );
}
