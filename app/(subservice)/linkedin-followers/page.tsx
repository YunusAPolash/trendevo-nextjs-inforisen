import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as linkedinFollowersPageData } from '@/app/(subservice)/linkedin-followers/page-data';
import LinkedinFollowersCtaSection from '@/app/(subservice)/linkedin-followers/_components/cta-section';
import LinkedinFollowersHeroSection from '@/app/(subservice)/linkedin-followers/_components/hero-section';
import LinkedinFollowersOrderFormSection from '@/app/(subservice)/linkedin-followers/_components/order-form-section';
import LinkedinFollowersWorkingProcessSection from '@/app/(subservice)/linkedin-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: linkedinFollowersPageData.seo.title,
  description: linkedinFollowersPageData.seo.description,
};

export default function LinkedinFollowersPage() {
  return (
    <>
      <LinkedinFollowersHeroSection />
      <LinkedinFollowersOrderFormSection />
      <TestimonialsSection data={linkedinFollowersPageData.testimonials} />
      <LinkedinFollowersWorkingProcessSection />
      {linkedinFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={linkedinFollowersPageData.faq} />
      <LinkedinFollowersCtaSection />
    </>
  );
}
