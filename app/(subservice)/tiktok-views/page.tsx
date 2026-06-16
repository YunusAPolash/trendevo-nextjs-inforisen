import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as tiktokViewsPageData } from '@/app/(subservice)/tiktok-views/page-data';
import TiktokViewsCtaSection from '@/app/(subservice)/tiktok-views/_components/cta-section';
import TiktokViewsHeroSection from '@/app/(subservice)/tiktok-views/_components/hero-section';
import TiktokViewsOrderFormSection from '@/app/(subservice)/tiktok-views/_components/order-form-section';
import TiktokViewsWorkingProcessSection from '@/app/(subservice)/tiktok-views/_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokViewsPageData.seo.title,
  description: tiktokViewsPageData.seo.description,
};

export default function TiktokViewsPage() {
  return (
    <>
      <TiktokViewsHeroSection />
      <TiktokViewsOrderFormSection />
      <TestimonialsSection data={tiktokViewsPageData.testimonials} />
      <TiktokViewsWorkingProcessSection />
      {tiktokViewsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={tiktokViewsPageData.faq} />
      <TiktokViewsCtaSection />
    </>
  );
}
