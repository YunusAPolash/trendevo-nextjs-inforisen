import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as vimeoFollowersPageData } from '@/app/(subservice)/buy-vimeo-followers/page-data';
import VimeoFollowersCtaSection from '@/app/(subservice)/buy-vimeo-followers/_components/cta-section';
import VimeoFollowersHeroSection from '@/app/(subservice)/buy-vimeo-followers/_components/hero-section';
import VimeoFollowersOrderFormSection from '@/app/(subservice)/buy-vimeo-followers/_components/order-form-section';
import VimeoFollowersWorkingProcessSection from '@/app/(subservice)/buy-vimeo-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: vimeoFollowersPageData.seo.title,
  description: vimeoFollowersPageData.seo.description,
};

export default function VimeoFollowersPage() {
  return (
    <>
      <VimeoFollowersHeroSection />
      <VimeoFollowersOrderFormSection />
      <TestimonialsSection data={vimeoFollowersPageData.testimonials} />
      <VimeoFollowersWorkingProcessSection />
      {vimeoFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={vimeoFollowersPageData.faq} />
      <VimeoFollowersCtaSection />
    </>
  );
}
