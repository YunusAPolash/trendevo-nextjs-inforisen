import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as twitterFollowersPageData } from '@/app/(subservice)/buy-x-twitter-followers/page-data';
import TwitterFollowersCtaSection from '@/app/(subservice)/buy-x-twitter-followers/_components/cta-section';
import TwitterFollowersHeroSection from '@/app/(subservice)/buy-x-twitter-followers/_components/hero-section';
import TwitterFollowersOrderFormSection from '@/app/(subservice)/buy-x-twitter-followers/_components/order-form-section';
import TwitterFollowersWorkingProcessSection from '@/app/(subservice)/buy-x-twitter-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: twitterFollowersPageData.seo.title,
  description: twitterFollowersPageData.seo.description,
};

export default function TwitterFollowersPage() {
  return (
    <>
      <TwitterFollowersHeroSection />
      <TwitterFollowersOrderFormSection />
      <TestimonialsSection data={twitterFollowersPageData.testimonials} />
      <TwitterFollowersWorkingProcessSection />
      {twitterFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={twitterFollowersPageData.faq} />
      <TwitterFollowersCtaSection />
    </>
  );
}
