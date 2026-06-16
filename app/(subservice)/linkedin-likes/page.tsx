import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as linkedinLikesPageData } from '@/app/(subservice)/linkedin-likes/page-data';
import LinkedinLikesCtaSection from '@/app/(subservice)/linkedin-likes/_components/cta-section';
import LinkedinLikesHeroSection from '@/app/(subservice)/linkedin-likes/_components/hero-section';
import LinkedinLikesOrderFormSection from '@/app/(subservice)/linkedin-likes/_components/order-form-section';
import LinkedinLikesWorkingProcessSection from '@/app/(subservice)/linkedin-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: linkedinLikesPageData.seo.title,
  description: linkedinLikesPageData.seo.description,
};

export default function LinkedinLikesPage() {
  return (
    <>
      <LinkedinLikesHeroSection />
      <LinkedinLikesOrderFormSection />
      <TestimonialsSection data={linkedinLikesPageData.testimonials} />
      <LinkedinLikesWorkingProcessSection />
      {linkedinLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={linkedinLikesPageData.faq} />
      <LinkedinLikesCtaSection />
    </>
  );
}
