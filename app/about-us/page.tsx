import type { Metadata } from 'next';
import {
  homeFaqHeading,
  homeFaqItems,
} from '@/app/_components/home-faq-content';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button';
import HeroSection from './_components/hero-section';
import MissionVisionSection from './_components/mission-vision-section';
import StatsMarqueeSection from './_components/stats-marquee-section';
import TrustSection from './_components/trust-section';
import TeamSection from './_components/team-section';

export const metadata: Metadata = {
  title: 'About Us | TrendEvo',
  description:
    'Learn about TrendEvo — a trusted SMM panel helping businesses and creators grow on Facebook, Instagram, TikTok, and YouTube with fast, reliable services.',
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <MissionVisionSection />
      <StatsMarqueeSection />
      <TrustSection />
      <TeamSection />
      <FaqSection
        label={homeFaqHeading.label}
        title={homeFaqHeading.title}
        subtitle={homeFaqHeading.subtitle}
        items={homeFaqItems}
      />
      <CtaSection
        title={
          <>
            Ready to{' '}
            <span className="text-gradient">Grow your Social Media</span> in
            Bangladesh
          </>
        }
        description="Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly."
        buttonsOutlet={
          <>
            <Button className="bg-brand-gradient h-[50px] rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] font-semibold text-white hover:opacity-90">
              Register Now
            </Button>
            <Button
              variant="outline"
              className="h-[50px] rounded-[10px] border-[#d181ff] bg-white/25 px-6 font-semibold text-gradient hover:bg-white/40"
            >
              See all Services
            </Button>
          </>
        }
      />
    </>
  );
}
