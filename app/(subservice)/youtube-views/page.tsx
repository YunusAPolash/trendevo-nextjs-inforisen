import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as youtubeViewsPageData } from '@/app/(subservice)/youtube-views/page-data';
import YoutubeViewsCtaSection from '@/app/(subservice)/youtube-views/_components/cta-section';
import YoutubeViewsHeroSection from '@/app/(subservice)/youtube-views/_components/hero-section';
import YoutubeViewsOrderFormSection from '@/app/(subservice)/youtube-views/_components/order-form-section';
import YoutubeViewsWorkingProcessSection from '@/app/(subservice)/youtube-views/_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeViewsPageData.seo.title,
  description: youtubeViewsPageData.seo.description,
};

export default function YoutubeViewsPage() {
  return (
    <>
      <YoutubeViewsHeroSection />
      <YoutubeViewsOrderFormSection />
      <TestimonialsSection data={youtubeViewsPageData.testimonials} />
      <YoutubeViewsWorkingProcessSection />
      {youtubeViewsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={youtubeViewsPageData.faq} />
      <YoutubeViewsCtaSection />
    </>
  );
}
