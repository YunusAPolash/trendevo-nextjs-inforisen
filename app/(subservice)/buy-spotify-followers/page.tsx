import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as spotifyFollowersPageData } from '@/app/(subservice)/buy-spotify-followers/page-data';
import SpotifyFollowersCtaSection from '@/app/(subservice)/buy-spotify-followers/_components/cta-section';
import SpotifyFollowersHeroSection from '@/app/(subservice)/buy-spotify-followers/_components/hero-section';
import SpotifyFollowersOrderFormSection from '@/app/(subservice)/buy-spotify-followers/_components/order-form-section';
import SpotifyFollowersWorkingProcessSection from '@/app/(subservice)/buy-spotify-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyFollowersPageData.seo.title,
  description: spotifyFollowersPageData.seo.description,
};

export default function SpotifyFollowersPage() {
  return (
    <>
      <SpotifyFollowersHeroSection />
      <SpotifyFollowersOrderFormSection />
      <TestimonialsSection data={spotifyFollowersPageData.testimonials} />
      <SpotifyFollowersWorkingProcessSection />
      {spotifyFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={spotifyFollowersPageData.faq} />
      <SpotifyFollowersCtaSection />
    </>
  );
}
