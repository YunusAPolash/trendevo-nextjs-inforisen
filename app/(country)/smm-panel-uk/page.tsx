import type { Metadata } from 'next';
import CountryHero from '@/components/country/country-hero';

export const metadata: Metadata = {
  title: 'SMM Panel UK | TrendEvo',
  description:
    'TrendEvo is a trusted SMM panel for UK businesses and creators. Get fast, reliable, and affordable social media marketing services across Facebook, Instagram, TikTok, and YouTube.',
};

export default function SmmPanelUkPage() {
  return (
    <CountryHero
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
      illustrationSrc="/images/country/uk/hero-illustration.png"
      illustrationAlt="TrendEvo user holding the UK flag with a rocket representing social media growth"
      illustrationWidth={952}
      illustrationHeight={1062}
    />
  );
}
