import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as quoraFollowersPageData } from '@/app/(subservice)/quora-followers/page-data';
import QuoraFollowersCtaSection from '@/app/(subservice)/quora-followers/_components/cta-section';
import QuoraFollowersHeroSection from '@/app/(subservice)/quora-followers/_components/hero-section';
import QuoraFollowersOrderFormSection from '@/app/(subservice)/quora-followers/_components/order-form-section';
import QuoraFollowersWorkingProcessSection from '@/app/(subservice)/quora-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: quoraFollowersPageData.seo.title,
  description: quoraFollowersPageData.seo.description,
};

export default function QuoraFollowersPage() {
  return (
    <>
      <QuoraFollowersHeroSection />
      <QuoraFollowersOrderFormSection />
      <TestimonialsSection data={quoraFollowersPageData.testimonials} />
      <QuoraFollowersWorkingProcessSection />
      {quoraFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={quoraFollowersPageData.faq} />
      <QuoraFollowersCtaSection />
    </>
  );
}
