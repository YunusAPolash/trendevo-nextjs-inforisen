import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import ServiceLeading from '@/components/sections/service-leading';
import TestimonialsSection from '@/components/sections/testimonials-section';
import { data as twitchFollowersPageData } from '@/app/(subservice)/twitch-followers/page-data';
import TwitchFollowersCtaSection from '@/app/(subservice)/twitch-followers/_components/cta-section';
import TwitchFollowersHeroSection from '@/app/(subservice)/twitch-followers/_components/hero-section';
import TwitchFollowersOrderFormSection from '@/app/(subservice)/twitch-followers/_components/order-form-section';
import TwitchFollowersWorkingProcessSection from '@/app/(subservice)/twitch-followers/_components/working-process-section';

export const metadata: Metadata = {
  title: twitchFollowersPageData.seo.title,
  description: twitchFollowersPageData.seo.description,
};

export default function TwitchFollowersPage() {
  return (
    <>
      <TwitchFollowersHeroSection />
      <TwitchFollowersOrderFormSection />
      <TestimonialsSection data={twitchFollowersPageData.testimonials} />
      <TwitchFollowersWorkingProcessSection />
      {twitchFollowersPageData.serviceLeadingSlugs.map((slug) => (
        <ServiceLeading key={slug} slug={slug} />
      ))}
      <FaqSection data={twitchFollowersPageData.faq} />
      <TwitchFollowersCtaSection />
    </>
  );
}
