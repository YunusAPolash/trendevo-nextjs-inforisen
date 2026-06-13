import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '@/components/sections/cta-section';
import { Button } from '@/components/ui/button';
import { signUpUrl } from '@/lib/auth-urls';
import HeadingSection from './_components/heading-section';
import PlatformFiltersSection from './_components/platform-filters-section';
import ServicesPricingTablesSection from './_components/services-pricing-tables-section';

export const metadata: Metadata = {
  title: 'Services & Pricing | TrendEvo',
  description:
    'Discover TrendEvo full social media services and pricing guide across Facebook, Instagram, YouTube, TikTok, and more.',
};

export default function ServicesPricingPage() {
  return (
    <>
      <HeadingSection />
      <PlatformFiltersSection />
      <ServicesPricingTablesSection />
      <CtaSection
        title={
          <>
            Ready to{' '}
            <span className="text-gradient">Grow your Social Media</span> in
            Bangladesh
          </>
        }
        description="Join thousands of users growing faster with Rend Evo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds.We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly."
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
