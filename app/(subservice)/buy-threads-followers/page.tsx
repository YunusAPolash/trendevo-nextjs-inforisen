import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as threadsFollowersPageData } from '@/app/(subservice)/buy-threads-followers/page-data';
import ThreadsFollowersCtaSection from '@/app/(subservice)/buy-threads-followers/_components/cta-section';
import ThreadsFollowersHeroSection from '@/app/(subservice)/buy-threads-followers/_components/hero-section';
import ThreadsFollowersOrderFormSection from '@/app/(subservice)/buy-threads-followers/_components/order-form-section';
import ThreadsFollowersWorkingProcessSection from '@/app/(subservice)/buy-threads-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: threadsFollowersPageData.seo.title,
  description: threadsFollowersPageData.seo.description,
};

export default function ThreadsFollowersPage() {
  return (
    <>
      <ThreadsFollowersHeroSection />
      <ThreadsFollowersOrderFormSection />
      <TestimonialsSection data={threadsFollowersPageData.testimonials} />
      <ThreadsFollowersWorkingProcessSection />
      {threadsFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={threadsFollowersPageData.faq} />
      <ThreadsFollowersCtaSection />
    </>
  );
}
