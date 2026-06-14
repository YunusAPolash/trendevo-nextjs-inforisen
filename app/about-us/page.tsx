import type { Metadata } from 'next';
import FaqSection from '@/components/sections/faq-section';
import { data as aboutUsPageData } from '@/app/about-us/page-data';
import AboutUsCtaSection from './_components/cta-section';
import AboutUsHeroSection from './_components/hero-section';
import MissionVisionSection from './_components/mission-vision-section';
import StatsMarqueeSection from './_components/stats-marquee-section';
import TrustSection from './_components/trust-section';
import TeamSection from './_components/team-section';

export const metadata: Metadata = {
  title: aboutUsPageData.seo.title,
  description: aboutUsPageData.seo.description,
};

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeroSection />
      <MissionVisionSection />
      <StatsMarqueeSection />
      <TrustSection />
      <TeamSection />
      <FaqSection data={aboutUsPageData.faq} />
      <AboutUsCtaSection />
    </>
  );
}
