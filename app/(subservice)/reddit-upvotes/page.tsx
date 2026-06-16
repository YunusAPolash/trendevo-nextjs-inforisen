import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as redditUpvotesPageData } from '@/app/(subservice)/reddit-upvotes/page-data';
import RedditUpvotesCtaSection from '@/app/(subservice)/reddit-upvotes/_components/cta-section';
import RedditUpvotesHeroSection from '@/app/(subservice)/reddit-upvotes/_components/hero-section';
import RedditUpvotesOrderFormSection from '@/app/(subservice)/reddit-upvotes/_components/order-form-section';
import RedditUpvotesWorkingProcessSection from '@/app/(subservice)/reddit-upvotes/_components/working-process-section';

export const metadata: Metadata = {
  title: redditUpvotesPageData.seo.title,
  description: redditUpvotesPageData.seo.description,
};

export default function RedditUpvotesPage() {
  return (
    <>
      <RedditUpvotesHeroSection />
      <RedditUpvotesOrderFormSection />
      <TestimonialsSection data={redditUpvotesPageData.testimonials} />
      <RedditUpvotesWorkingProcessSection />
      {redditUpvotesPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={redditUpvotesPageData.faq} />
      <RedditUpvotesCtaSection />
    </>
  );
}
