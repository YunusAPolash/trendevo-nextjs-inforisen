import type { Metadata } from 'next';
import BlogGridSection from '@/app/blog/_components/blog-grid-section';
import HeroSection from '@/app/blog/_components/hero-section';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';

export const metadata: Metadata = {
  title: 'Blog | TrendEvo',
  description:
    'Explore Trend Evo’s blog for the latest social media trends, digital marketing tips, and industry updates.',
};

export default function BlogPage() {
  return (
    <>
      <div className="relative isolate bg-[#FCF8FF] dark:bg-[#120619]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden bg-[url('/images/backgrounds/blog-page-bg-dark.svg')] bg-cover bg-top bg-no-repeat dark:block"
        />
        <div className="relative z-10">
          <HeroSection
            titlePrefix="Read Our"
            titleHighlight="Latest Blogs"
            description="Explore Trend Evo’s blog for the latest social media trends, digital marketing tips, and industry updates. Stay informed, improve your strategy, and grow your online presence effectively."
            lastUpdated="24/03/2026"
          />
          <BlogGridSection />
        </div>
      </div>
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
