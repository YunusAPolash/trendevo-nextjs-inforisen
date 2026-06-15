import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelEgyptPageData } from '@/app/(country)/smm-panel-egypt/page-data';
import SmmPanelEgyptCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelEgyptPageData.seo.title,
  description: smmPanelEgyptPageData.seo.description,
};

export default function SmmPanelEgyptPage() {
  return (
    <>
      <CountryHero slug={smmPanelEgyptPageData.slug} />
      <CountryWhy slug={smmPanelEgyptPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelEgyptPageData.slug} />
      <AdvantagesSection slug={smmPanelEgyptPageData.slug} />
      <CountryHowToBuy slug={smmPanelEgyptPageData.slug} />
      <CountryTestimonial slug={smmPanelEgyptPageData.slug} />
      <FaqSection data={smmPanelEgyptPageData.faq} />
      <SmmPanelEgyptCtaSection />
    </>
  );
}
