import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as facebookPageLikesPageData } from '@/app/(subservice)/buy-facebook-page-likes/page-data';
import FacebookPageLikesCtaSection from '@/app/(subservice)/buy-facebook-page-likes/_components/cta-section';
import FacebookPageLikesHeroSection from '@/app/(subservice)/buy-facebook-page-likes/_components/hero-section';
import FacebookPageLikesOrderFormSection from '@/app/(subservice)/buy-facebook-page-likes/_components/order-form-section';
import FacebookPageLikesWorkingProcessSection from '@/app/(subservice)/buy-facebook-page-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: facebookPageLikesPageData.seo.title,
  description: facebookPageLikesPageData.seo.description,
};

export default function FacebookPageLikesPage() {
  return (
    <>
      <FacebookPageLikesHeroSection />
      <FacebookPageLikesOrderFormSection />
      <TestimonialsSection data={facebookPageLikesPageData.testimonials} />
      <FacebookPageLikesWorkingProcessSection />
      {facebookPageLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={facebookPageLikesPageData.faq} />
      <FacebookPageLikesCtaSection />
    </>
  );
}
