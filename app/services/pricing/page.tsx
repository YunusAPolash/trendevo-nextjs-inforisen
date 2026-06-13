import type { Metadata } from 'next';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
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
