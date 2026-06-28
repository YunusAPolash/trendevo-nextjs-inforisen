import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramSharesPageData } from '@/app/(subservice)/buy-instagram-shares/page-data';
import InstagramSharesCtaSection from './_components/cta-section';
import InstagramSharesHeroSection from './_components/hero-section';
import InstagramSharesOrderFormSection from './_components/order-form-section';
import InstagramSharesRelatedServicesSection from './_components/related-services-section';
import InstagramSharesThingsToKnowSection from './_components/things-to-know-section';
import InstagramSharesWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramSharesWhyChooseSection from './_components/why-choose-section';
import InstagramSharesWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramSharesPageData.seo.title,
  description: instagramSharesPageData.seo.description,
  alternates: {
    canonical: instagramSharesPageData.seo.canonical,
  },
};

export default function InstagramSharesPage() {
  return (
    <>
      <InstagramSharesHeroSection />
      <InstagramSharesOrderFormSection />
      <InstagramSharesWhyChooseSection />
      <InstagramSharesWhoShouldBuySection />
      <InstagramSharesWorkingProcessSection />
      <InstagramSharesThingsToKnowSection />
      <FaqSection data={instagramSharesPageData.faq} />
      <InstagramSharesRelatedServicesSection />
      <InstagramSharesCtaSection />
    </>
  );
}
