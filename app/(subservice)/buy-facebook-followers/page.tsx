import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as facebookFollowersPageData } from '@/app/(subservice)/buy-facebook-followers/page-data';
import FacebookPageFollowersCtaSection from './_components/cta-section';
import FacebookPageFollowersHeroSection from './_components/hero-section';
import OrderFormSection from './_components/order-form-section';
import FacebookFollowersRelatedServicesSection from './_components/related-services-section';
import FacebookFollowersThingsToKnowSection from './_components/things-to-know-section';
import FacebookFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import FacebookFollowersWhyChooseSection from './_components/why-choose-section';
import FacebookPageFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: facebookFollowersPageData.seo.title,
  description: facebookFollowersPageData.seo.description,
  alternates: {
    canonical: facebookFollowersPageData.seo.canonical,
  },
};

export default function FacebookPageFollowersPage() {
  return (
    <>
      <FacebookPageFollowersHeroSection />
      <OrderFormSection />
      <FacebookFollowersWhyChooseSection />
      <FacebookFollowersWhoShouldBuySection />
      <FacebookPageFollowersWorkingProcessSection />
      <FacebookFollowersThingsToKnowSection />
      <FaqSection data={facebookFollowersPageData.faq} />
      <FacebookFollowersRelatedServicesSection />
      <FacebookPageFollowersCtaSection />
    </>
  );
}
