import type { Metadata } from 'next';
import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'SMM Panel UK | TrendEvo',
  description:
    'TrendEvo is a trusted SMM panel for UK businesses and creators. Get fast, reliable, and affordable social media marketing services across Facebook, Instagram, TikTok, and YouTube.',
};

export default function SmmPanelUkPage() {
  return (
    <HeroSection
      bg="section-1"
      variant="wide-responsive"
      eyebrow="The Best Panel For UK"
      title={
        <>
          Trend Evo –{' '}
          <span className="text-gradient">Trusted SMM Panel</span> for Growing
          Businesses &amp; Creators
        </>
      }
      description={
        <>
          Fast, reliable, and affordable{' '}
          <span className="text-gradient">SMM services</span> to grow your
          social media presence. From Facebook and Instagram to TikTok and
          YouTube, TrendEvo helps businesses and creators achieve real results.
          We provide trusted solutions and support to simplify social media
          marketing and boost growth.
        </>
      }
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="h-10 shrink-0 rounded-[10px] border-[#cb7ef7] bg-white/25 px-4 text-sm font-semibold text-gradient hover:bg-white/40 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:w-[180px] md:px-[18px]"
          >
            Sign In
          </Button>
          <Button className="bg-brand-gradient h-10 shrink-0 rounded-[10px] border-[1.5px] border-[#cc7aff] px-4 text-sm font-semibold text-white hover:opacity-90 sm:h-11 sm:px-5 sm:text-base md:h-[50px] md:px-[18px]">
            Create an Account
          </Button>
        </div>
      }
      illustration={{
        src: '/images/country/uk/hero-illustration.png',
        alt: 'TrendEvo user holding the UK flag with a rocket representing social media growth',
        width: 952,
        height: 1062,
      }}
    />
  );
}
