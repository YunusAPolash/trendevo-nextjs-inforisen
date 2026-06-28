import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as facebookCommentsPageData } from '@/app/(subservice)/buy-facebook-comments/page-data';
import FacebookPageCommentsCtaSection from './_components/cta-section';
import FacebookCommentsHeroSection from './_components/hero-section';
import FacebookPageCommentsOrderFormSection from './_components/order-form-section';
import FacebookCommentsRelatedServicesSection from './_components/related-services-section';
import FacebookCommentsThingsToKnowSection from './_components/things-to-know-section';
import FacebookCommentsWhoShouldBuySection from './_components/who-should-buy-section';
import FacebookCommentsWhyChooseSection from './_components/why-choose-section';
import FacebookPageCommentsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: facebookCommentsPageData.seo.title,
  description: facebookCommentsPageData.seo.description,
  alternates: {
    canonical: facebookCommentsPageData.seo.canonical,
  },
};

export default function FacebookCommentsPage() {
  return (
    <>
      <FacebookCommentsHeroSection />
      <FacebookPageCommentsOrderFormSection />
      <FacebookCommentsWhyChooseSection />
      <FacebookCommentsWhoShouldBuySection />
      <FacebookPageCommentsWorkingProcessSection />
      <FacebookCommentsThingsToKnowSection />
      <FaqSection data={facebookCommentsPageData.faq} />
      <FacebookCommentsRelatedServicesSection />
      <FacebookPageCommentsCtaSection />
    </>
  );
}
