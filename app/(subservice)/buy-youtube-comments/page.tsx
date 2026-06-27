import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as youtubeCommentsPageData } from '@/app/(subservice)/buy-youtube-comments/page-data';
import YoutubeCommentsCtaSection from '@/app/(subservice)/buy-youtube-comments/_components/cta-section';
import YoutubeCommentsHeroSection from '@/app/(subservice)/buy-youtube-comments/_components/hero-section';
import YoutubeCommentsOrderFormSection from '@/app/(subservice)/buy-youtube-comments/_components/order-form-section';
import YoutubeCommentsWorkingProcessSection from '@/app/(subservice)/buy-youtube-comments/_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeCommentsPageData.seo.title,
  description: youtubeCommentsPageData.seo.description,
};

export default function YoutubeCommentsPage() {
  return (
    <>
      <YoutubeCommentsHeroSection />
      <YoutubeCommentsOrderFormSection />
      <TestimonialsSection data={youtubeCommentsPageData.testimonials} />
      <YoutubeCommentsWorkingProcessSection />
      {youtubeCommentsPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={youtubeCommentsPageData.faq} />
      <YoutubeCommentsCtaSection />
    </>
  );
}
