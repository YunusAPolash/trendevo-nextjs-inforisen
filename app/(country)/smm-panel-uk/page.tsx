import type { Metadata } from 'next';

import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import CountryHero from '@/components/sections/country-hero';
import CountryService from '@/components/sections/country-service';
import CountryWhy from '@/components/sections/country-why';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';

export const metadata: Metadata = {
  title: 'SMM Panel UK | TrendEvo',
  description:
    'TrendEvo is a trusted SMM panel for UK businesses and creators. Get fast, reliable, and affordable social media marketing services across Facebook, Instagram, TikTok, and YouTube.',
};

export default function SmmPanelUkPage() {
  return (
    <>
      <CountryHero slug="smm-panel-uk" />
      <CountryWhy slug="smm-panel-uk" />
      <CountryService slug="smm-panel-uk" />
      <AdvantagesSection slug="smm-panel-uk" />
      <StatsMarqueeSection />
    </>
  );
}
