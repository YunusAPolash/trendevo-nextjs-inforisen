import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramViewsPageData } from '@/app/(subservice)/buy-instagram-views/page-data';
import InstagramViewsCtaSection from '@/app/(subservice)/buy-instagram-views/_components/cta-section';
import InstagramViewsHeroSection from '@/app/(subservice)/buy-instagram-views/_components/hero-section';
import InstagramViewsOrderFormSection from '@/app/(subservice)/buy-instagram-views/_components/order-form-section';
import InstagramViewsWorkingProcessSection from '@/app/(subservice)/buy-instagram-views/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramViewsPageData.seo.title,
  description: instagramViewsPageData.seo.description,
};

export default function InstagramViewsPage() {
  return (
    <>
      <InstagramViewsHeroSection />
      <InstagramViewsOrderFormSection />
      <TestimonialsSection data={instagramViewsPageData.testimonials} />
      <InstagramViewsWorkingProcessSection />
      {instagramViewsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramViewsPageData.faq} />
      <InstagramViewsCtaSection />
    </>
  );
}
