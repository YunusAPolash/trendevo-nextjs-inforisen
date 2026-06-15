import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelThailandPageData } from '@/app/(country)/smm-panel-thailand/page-data';
import SmmPanelThailandCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelThailandPageData.seo.title,
  description: smmPanelThailandPageData.seo.description,
};

export default function SmmPanelThailandPage() {
  return (
    <>
      <CountryHero slug={smmPanelThailandPageData.slug} />
      <CountryWhy slug={smmPanelThailandPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelThailandPageData.slug} />
      <AdvantagesSection slug={smmPanelThailandPageData.slug} />
      <CountryHowToBuy slug={smmPanelThailandPageData.slug} />
      <CountryTestimonial slug={smmPanelThailandPageData.slug} />
      <FaqSection data={smmPanelThailandPageData.faq} />
      <SmmPanelThailandCtaSection />
    </>
  );
}
