import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as youtubeLikesPageData } from '@/app/(subservice)/buy-youtube-likes/page-data';
import YoutubeLikesCtaSection from '@/app/(subservice)/buy-youtube-likes/_components/cta-section';
import YoutubeLikesHeroSection from '@/app/(subservice)/buy-youtube-likes/_components/hero-section';
import YoutubeLikesOrderFormSection from '@/app/(subservice)/buy-youtube-likes/_components/order-form-section';
import YoutubeLikesWorkingProcessSection from '@/app/(subservice)/buy-youtube-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeLikesPageData.seo.title,
  description: youtubeLikesPageData.seo.description,
};

export default function YoutubeLikesPage() {
  return (
    <>
      <YoutubeLikesHeroSection />
      <YoutubeLikesOrderFormSection />
      <TestimonialsSection data={youtubeLikesPageData.testimonials} />
      <YoutubeLikesWorkingProcessSection />
      {youtubeLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={youtubeLikesPageData.faq} />
      <YoutubeLikesCtaSection />
    </>
  );
}
