import type { Metadata } from 'next';
import AdvantagesSection from '@/app/(home)/_components/advantages-section';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import CountryHero from '@/components/sections/country-hero';
import CountryHowToBuy from '@/components/sections/country-how-to-buy';
import CountryService from '@/components/sections/country-service';
import CountryTestimonial from '@/components/sections/country-testimonial';
import CountryWhy from '@/components/sections/country-why';
import FaqSection from '@/components/sections/faq-section';
import { data as smmPanelPakistanPageData } from '@/app/(country)/smm-panel-pakistan/page-data';
import SmmPanelPakistanCtaSection from './_components/cta-section';

export const metadata: Metadata = {
  title: smmPanelPakistanPageData.seo.title,
  description: smmPanelPakistanPageData.seo.description,
};

export default function SmmPanelPakistanPage() {
  return (
    <>
      <CountryHero slug={smmPanelPakistanPageData.slug} />
      <CountryWhy slug={smmPanelPakistanPageData.slug} />
      <StatsMarqueeSection />
      <CountryService slug={smmPanelPakistanPageData.slug} />
      <AdvantagesSection slug={smmPanelPakistanPageData.slug} />
      <CountryHowToBuy slug={smmPanelPakistanPageData.slug} />
      <CountryTestimonial slug={smmPanelPakistanPageData.slug} />
      <FaqSection data={smmPanelPakistanPageData.faq} />
      <SmmPanelPakistanCtaSection />
    </>
  );
}
