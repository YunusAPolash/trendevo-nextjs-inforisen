import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as linkedinFollowersPageData } from '@/app/(subservice)/buy-linkedin-followers/page-data';
import LinkedinFollowersCtaSection from './_components/cta-section';
import LinkedinFollowersHeroSection from './_components/hero-section';
import LinkedinFollowersOrderFormSection from './_components/order-form-section';
import LinkedinFollowersRelatedServicesSection from './_components/related-services-section';
import LinkedinFollowersThingsToKnowSection from './_components/things-to-know-section';
import LinkedinFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import LinkedinFollowersWhyChooseSection from './_components/why-choose-section';
import LinkedinFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: linkedinFollowersPageData.seo.title,
  description: linkedinFollowersPageData.seo.description,
  alternates: {
    canonical: linkedinFollowersPageData.seo.canonical,
  },
};

export default function LinkedinFollowersPage() {
  return (
    <>
      <LinkedinFollowersHeroSection />
      <LinkedinFollowersOrderFormSection />
      <LinkedinFollowersWhyChooseSection />
      <LinkedinFollowersWhoShouldBuySection />
      <LinkedinFollowersWorkingProcessSection />
      <LinkedinFollowersThingsToKnowSection />
      <FaqSection data={linkedinFollowersPageData.faq} />
      <LinkedinFollowersRelatedServicesSection />
      <LinkedinFollowersCtaSection />
    </>
  );
}
