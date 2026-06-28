import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as spotifyFollowersPageData } from '@/app/(subservice)/buy-spotify-followers/page-data';
import SpotifyFollowersCtaSection from './_components/cta-section';
import SpotifyFollowersHeroSection from './_components/hero-section';
import SpotifyFollowersOrderFormSection from './_components/order-form-section';
import SpotifyFollowersRelatedServicesSection from './_components/related-services-section';
import SpotifyFollowersThingsToKnowSection from './_components/things-to-know-section';
import SpotifyFollowersWhoShouldBuySection from './_components/who-should-buy-section';
import SpotifyFollowersWhyChooseSection from './_components/why-choose-section';
import SpotifyFollowersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyFollowersPageData.seo.title,
  description: spotifyFollowersPageData.seo.description,
  alternates: {
    canonical: spotifyFollowersPageData.seo.canonical,
  },
};

export default function SpotifyFollowersPage() {
  return (
    <>
      <SpotifyFollowersHeroSection />
      <SpotifyFollowersOrderFormSection />
      <SpotifyFollowersWhyChooseSection />
      <SpotifyFollowersWhoShouldBuySection />
      <SpotifyFollowersWorkingProcessSection />
      <SpotifyFollowersThingsToKnowSection />
      <FaqSection data={spotifyFollowersPageData.faq} />
      <SpotifyFollowersRelatedServicesSection />
      <SpotifyFollowersCtaSection />
    </>
  );
}
