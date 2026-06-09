import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import { Button } from '@/components/ui/button';
import ServicesGridSection from './_components/services-grid-section';
import PrimaryButton from '@/components/buttons/primary-button';

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
        variant="wide-responsive"
        decoration="services"
        leftColumnClassName="gap-6 lg:gap-8 lg:self-center"
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
