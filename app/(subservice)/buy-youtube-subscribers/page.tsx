import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as youtubeSubscribersPageData } from '@/app/(subservice)/buy-youtube-subscribers/page-data';
import YoutubeSubscribersCtaSection from '@/app/(subservice)/buy-youtube-subscribers/_components/cta-section';
import YoutubeSubscribersHeroSection from '@/app/(subservice)/buy-youtube-subscribers/_components/hero-section';
import YoutubeSubscribersOrderFormSection from '@/app/(subservice)/buy-youtube-subscribers/_components/order-form-section';
import YoutubeSubscribersWorkingProcessSection from '@/app/(subservice)/buy-youtube-subscribers/_components/working-process-section';

export const metadata: Metadata = {
  title: youtubeSubscribersPageData.seo.title,
  description: youtubeSubscribersPageData.seo.description,
};

export default function YoutubeSubscribersPage() {
  return (
    <>
      <YoutubeSubscribersHeroSection />
      <YoutubeSubscribersOrderFormSection />
      <TestimonialsSection data={youtubeSubscribersPageData.testimonials} />
      <YoutubeSubscribersWorkingProcessSection />
      {youtubeSubscribersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={youtubeSubscribersPageData.faq} />
      <YoutubeSubscribersCtaSection />
    </>
  );
}
