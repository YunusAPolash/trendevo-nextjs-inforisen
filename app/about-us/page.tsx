import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { signUpUrl } from '@/lib/auth-urls';
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
      <HeroSection
        bg="section-1"
        variant="wide"
        decoration="contact"
        eyebrow="Who We Are"
        title={
          <>
            Trend Evo –{' '}
            <span className="text-gradient">Trusted SMM Panel</span> for
            Growing Businesses & Creators
          </>
        }
        description={
          <>
            Fast, reliable, and affordable{' '}
            <span className="text-gradient">SMM services</span> to grow your
            social media presence. From Facebook and Instagram to TikTok and
            YouTube, Rendevo helps businesses and creators achieve real
            results. We provide trusted solutions and support to simplify
            social media marketing and boost growth.
          </>
        }
        actions={
          <PrimaryButton
            href={signUpUrl}
            showArrow
            className="w-fit border-[1.5px] border-[#cc7aff]"
          >
            Get Started Now
          </PrimaryButton>
        }
        illustration={{
          src: '/images/about/about-us-trendevo-specialist-representing-trusted-smm-panel-services-illustration.webp',
          alt: 'TrendEvo specialist representing trusted SMM panel services',
          width: 547,
          height: 673,
          maxWidthClassName: 'max-w-[547px]',
        }}
        socialIcons={heroSocialIcons}
      />
      <MissionVisionSection />
      <StatsMarqueeSection />
      <TrustSection />
      <TeamSection />
      <FaqSection />
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
            <PrimaryButton href={signUpUrl} className="border-[1.5px] border-[#cc7aff]">
              Register Now
            </PrimaryButton>
            <SecondaryButton href="/services">
              See all Services
            </SecondaryButton>
          </>
        }
      />
    </>
  );
}
