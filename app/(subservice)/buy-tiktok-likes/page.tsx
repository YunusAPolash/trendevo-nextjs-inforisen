import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as tiktokLikesPageData } from '@/app/(subservice)/buy-tiktok-likes/page-data';
import TiktokLikesCtaSection from '@/app/(subservice)/buy-tiktok-likes/_components/cta-section';
import TiktokLikesHeroSection from '@/app/(subservice)/buy-tiktok-likes/_components/hero-section';
import TiktokLikesOrderFormSection from '@/app/(subservice)/buy-tiktok-likes/_components/order-form-section';
import TiktokLikesWorkingProcessSection from '@/app/(subservice)/buy-tiktok-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: tiktokLikesPageData.seo.title,
  description: tiktokLikesPageData.seo.description,
};

export default function TiktokLikesPage() {
  return (
    <>
      <TiktokLikesHeroSection />
      <TiktokLikesOrderFormSection />
      <TestimonialsSection data={tiktokLikesPageData.testimonials} />
      <TiktokLikesWorkingProcessSection />
      {tiktokLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={tiktokLikesPageData.faq} />
      <TiktokLikesCtaSection />
    </>
  );
}
