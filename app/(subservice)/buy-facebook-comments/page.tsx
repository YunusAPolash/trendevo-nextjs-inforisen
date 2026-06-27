import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as facebookPageCommentsPageData } from '@/app/(subservice)/buy-facebook-comments/page-data';
import FacebookPageCommentsCtaSection from '@/app/(subservice)/buy-facebook-comments/_components/cta-section';
import FacebookPageCommentsHeroSection from '@/app/(subservice)/buy-facebook-comments/_components/hero-section';
import FacebookPageCommentsOrderFormSection from '@/app/(subservice)/buy-facebook-comments/_components/order-form-section';
import FacebookPageCommentsWorkingProcessSection from '@/app/(subservice)/buy-facebook-comments/_components/working-process-section';

export const metadata: Metadata = {
  title: facebookPageCommentsPageData.seo.title,
  description: facebookPageCommentsPageData.seo.description,
};

export default function FacebookPageCommentsPage() {
  return (
    <>
      <FacebookPageCommentsHeroSection />
      <FacebookPageCommentsOrderFormSection />
      <TestimonialsSection data={facebookPageCommentsPageData.testimonials} />
      <FacebookPageCommentsWorkingProcessSection />
      {facebookPageCommentsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={facebookPageCommentsPageData.faq} />
      <FacebookPageCommentsCtaSection />
    </>
  );
}
