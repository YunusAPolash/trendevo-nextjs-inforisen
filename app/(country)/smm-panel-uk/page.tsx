import type { Metadata } from 'next';

import CountryHero from '@/components/sections/country-hero';
import CountryWhy from '@/components/sections/country-why';

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
    </>
  );
}
