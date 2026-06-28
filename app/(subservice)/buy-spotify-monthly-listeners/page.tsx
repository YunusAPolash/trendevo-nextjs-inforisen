import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as spotifyMonthlyListenersPageData } from '@/app/(subservice)/buy-spotify-monthly-listeners/page-data';
import SpotifyMonthlyListenersCtaSection from './_components/cta-section';
import SpotifyMonthlyListenersHeroSection from './_components/hero-section';
import SpotifyMonthlyListenersOrderFormSection from './_components/order-form-section';
import SpotifyMonthlyListenersRelatedServicesSection from './_components/related-services-section';
import SpotifyMonthlyListenersThingsToKnowSection from './_components/things-to-know-section';
import SpotifyMonthlyListenersWhoShouldBuySection from './_components/who-should-buy-section';
import SpotifyMonthlyListenersWhyChooseSection from './_components/why-choose-section';
import SpotifyMonthlyListenersWorkingProcessSection from './_components/working-process-section';

export const metadata: Metadata = {
  title: spotifyMonthlyListenersPageData.seo.title,
  description: spotifyMonthlyListenersPageData.seo.description,
  alternates: {
    canonical: spotifyMonthlyListenersPageData.seo.canonical,
  },
};

export default function SpotifyMonthlyListenersPage() {
  return (
    <>
      <SpotifyMonthlyListenersHeroSection />
      <SpotifyMonthlyListenersOrderFormSection />
      <SpotifyMonthlyListenersWhyChooseSection />
      <SpotifyMonthlyListenersWhoShouldBuySection />
      <SpotifyMonthlyListenersWorkingProcessSection />
      <SpotifyMonthlyListenersThingsToKnowSection />
      <FaqSection data={spotifyMonthlyListenersPageData.faq} />
      <SpotifyMonthlyListenersRelatedServicesSection />
      <SpotifyMonthlyListenersCtaSection />
    </>
  );
}
