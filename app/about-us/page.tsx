import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  homeFaqHeading,
  homeFaqItems,
} from '@/app/(home)/_components/home-faq-content';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import HeroSection from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';
import { Button } from '@/components/ui/button';
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
          <Button
            asChild
            className="bg-brand-gradient h-[50px] w-fit rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] text-base font-semibold text-white hover:opacity-90"
          >
            <Link href={signUpUrl}>
              Get Started Now
              <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          </Button>
        }
        illustration={{
          src: '/images/about/about-team-character.png',
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
      <FaqSection
        label={homeFaqHeading.label}
        title={homeFaqHeading.title}
        subtitle={homeFaqHeading.subtitle}
        items={homeFaqItems}
        bg="section-7"
        darkBg="section-21-dark"
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
            <Button
              asChild
              className="bg-brand-gradient h-[50px] rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] font-semibold text-white hover:opacity-90"
            >
              <Link href={signUpUrl}>Register Now</Link>
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
