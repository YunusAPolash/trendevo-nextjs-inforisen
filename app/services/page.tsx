import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import ServicesGridSection from './_components/services-grid-section';

export const metadata: Metadata = {
  title: 'Services | TrendEvo',
  description:
    'Boost your social media growth with TrendEvo services for Instagram, Facebook, YouTube, TikTok, Telegram, and X.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        bg="section-1"
        variant="wide"
        decoration="contact"
        title={
          <>
            Boost Your Social Media Growth with{' '}
            <span className="text-gradient">Trend Evo Services</span>
          </>
        }
        titleClassName="text-4xl font-semibold leading-[1.35] tracking-wide text-[#313131] sm:text-5xl lg:text-[48px]"
        description={
          <>
            Boost your social media growth with Trend Evo. Reach more followers on{' '}
            <span className="text-gradient">
              Instagram, Facebook, YouTube, and TikTok
            </span>
            . Engage your audience like never before with reliable, fast services.
            Take your online presence to the next level and grow confidently.
          </>
        }
        descriptionClassName="max-w-[762px] text-lg font-medium leading-relaxed text-[#343e56]"
        actions={
          <PrimaryButton showArrow className='w-fit'>Get Started Now</PrimaryButton>
        }
        illustration={{
          src: '/images/services/service-hero-character.png',
          alt: 'TrendEvo specialist presenting social media growth services',
          width: 468,
          height: 581,
          maxWidthClassName: 'max-w-[468px]',
        }}
        socialIcons={heroSocialIcons}
      />
      <ServicesGridSection />
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
            <PrimaryButton className="border-[1.5px] border-[#cc7aff]">
              Register Now
            </PrimaryButton>
            <SecondaryButton type="button">
              See all Services
            </SecondaryButton>
          </>
        }
      />
    </>
  );
}
