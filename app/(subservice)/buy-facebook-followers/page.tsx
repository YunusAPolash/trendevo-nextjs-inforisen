import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as facebookPageFollowersPageData } from '@/app/(subservice)/buy-facebook-followers/page-data';
import FacebookPageFollowersCtaSection from './_components/cta-section';
import FacebookPageFollowersHeroSection from './_components/hero-section';
import FacebookPageFollowersWorkingProcessSection from './_components/working-process-section';
import OrderFormSection from './_components/order-form-section';

export const metadata: Metadata = {
  title: facebookPageFollowersPageData.seo.title,
  description: facebookPageFollowersPageData.seo.description,
};

export default function FacebookPageFollowersPage() {
  return (
    <>
      <FacebookPageFollowersHeroSection />
      <OrderFormSection />
      <TestimonialsSection data={facebookPageFollowersPageData.testimonials} />
      <FacebookPageFollowersWorkingProcessSection />
      {facebookPageFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={facebookPageFollowersPageData.faq} />
      <FacebookPageFollowersCtaSection />
    </>
  );
}
