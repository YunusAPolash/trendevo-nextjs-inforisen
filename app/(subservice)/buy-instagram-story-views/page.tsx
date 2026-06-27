import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as instagramStoryViewsPageData } from '@/app/(subservice)/buy-instagram-story-views/page-data';
import InstagramStoryViewsCtaSection from '@/app/(subservice)/buy-instagram-story-views/_components/cta-section';
import InstagramStoryViewsHeroSection from '@/app/(subservice)/buy-instagram-story-views/_components/hero-section';
import InstagramStoryViewsOrderFormSection from '@/app/(subservice)/buy-instagram-story-views/_components/order-form-section';
import InstagramStoryViewsWorkingProcessSection from '@/app/(subservice)/buy-instagram-story-views/_components/working-process-section';

export const metadata: Metadata = {
  title: instagramStoryViewsPageData.seo.title,
  description: instagramStoryViewsPageData.seo.description,
};

export default function InstagramStoryViewsPage() {
  return (
    <>
      <InstagramStoryViewsHeroSection />
      <InstagramStoryViewsOrderFormSection />
      <TestimonialsSection data={instagramStoryViewsPageData.testimonials} />
      <InstagramStoryViewsWorkingProcessSection />
      {instagramStoryViewsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={instagramStoryViewsPageData.faq} />
      <InstagramStoryViewsCtaSection />
    </>
  );
}
