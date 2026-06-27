import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as twitterLikesPageData } from '@/app/(subservice)/buy-x-twitter-likes/page-data';
import TwitterLikesCtaSection from '@/app/(subservice)/buy-x-twitter-likes/_components/cta-section';
import TwitterLikesHeroSection from '@/app/(subservice)/buy-x-twitter-likes/_components/hero-section';
import TwitterLikesOrderFormSection from '@/app/(subservice)/buy-x-twitter-likes/_components/order-form-section';
import TwitterLikesWorkingProcessSection from '@/app/(subservice)/buy-x-twitter-likes/_components/working-process-section';

export const metadata: Metadata = {
  title: twitterLikesPageData.seo.title,
  description: twitterLikesPageData.seo.description,
};

export default function TwitterLikesPage() {
  return (
    <>
      <TwitterLikesHeroSection />
      <TwitterLikesOrderFormSection />
      <TestimonialsSection data={twitterLikesPageData.testimonials} />
      <TwitterLikesWorkingProcessSection />
      {twitterLikesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={twitterLikesPageData.faq} />
      <TwitterLikesCtaSection />
    </>
  );
}
