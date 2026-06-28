import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramCommentsPageData } from '@/app/(subservice)/buy-instagram-comments/page-data';
import InstagramCommentsCtaSection from './_components/cta-section';
import InstagramCommentsHeroSection from './_components/hero-section';
import InstagramCommentsOrderFormSection from './_components/order-form-section';
import InstagramCommentsRelatedServicesSection from './_components/related-services-section';
import InstagramCommentsThingsToKnowSection from './_components/things-to-know-section';
import InstagramCommentsWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramCommentsWhyChooseSection from './_components/why-choose-section';
import InstagramCommentsWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramCommentsPageData.seo.title,
  description: instagramCommentsPageData.seo.description,
  alternates: {
    canonical: instagramCommentsPageData.seo.canonical,
  },
};

export default function InstagramCommentsPage() {
  return (
    <>
      <InstagramCommentsHeroSection />
      <InstagramCommentsOrderFormSection />
      <InstagramCommentsWhyChooseSection />
      <InstagramCommentsWhoShouldBuySection />
      <InstagramCommentsWorkingProcessSection />
      <InstagramCommentsThingsToKnowSection />
      <FaqSection data={instagramCommentsPageData.faq} />
      <InstagramCommentsRelatedServicesSection />
      <InstagramCommentsCtaSection />
    </>
  );
}
