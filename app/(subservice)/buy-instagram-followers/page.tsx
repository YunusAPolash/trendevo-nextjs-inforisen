import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as instagramFollowersPageData } from '@/app/(subservice)/buy-instagram-followers/page-data';
import InstagramFollowersCtaSection from './_components/cta-section';
import InstagramFollowersHeroSection from './_components/hero-section';
import InstagramFollowersOrderFormSection from './_components/order-form-section';
import InstagramFollowersRelatedServicesSection from './_components/related-services-section';
import InstagramFollowersThingsToKnowSection from './_components/things-to-know-section';
import InstagramFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import InstagramFollowersWhyChooseSection from './_components/why-choose-section';
import InstagramFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: instagramFollowersPageData.seo.title,
  description: instagramFollowersPageData.seo.description,
  alternates: {
    canonical: instagramFollowersPageData.seo.canonical,
  },
};

export default function InstagramFollowersPage() {
  return (
    <>
      <InstagramFollowersHeroSection />
      <InstagramFollowersOrderFormSection />
      <InstagramFollowersWhyChooseSection />
      <InstagramFollowersWhoShouldBuySection />
      <InstagramFollowersWorkingProcessSection />
      <InstagramFollowersThingsToKnowSection />
      <FaqSection data={instagramFollowersPageData.faq} />
      <InstagramFollowersRelatedServicesSection />
      <InstagramFollowersCtaSection />
    </>
  );
}
