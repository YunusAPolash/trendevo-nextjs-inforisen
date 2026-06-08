import type { Metadata } from 'next';
import BlogGridSection from '@/app/blog/_components/blog-grid-section';
import HeroSection from '@/app/blog/_components/hero-section';
import CtaSection from '@/components/sections/cta-section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog | TrendEvo',
  description:
    'Explore Trend Evo’s blog for the latest social media trends, digital marketing tips, and industry updates.',
};

export default function BlogPage() {
  return (
    <>
      <div className="bg-[#FCF8FF]">
        <HeroSection
          titlePrefix="Read Our"
          titleHighlight="Latest Blogs"
          description="Explore Trend Evo’s blog for the latest social media trends, digital marketing tips, and industry updates. Stay informed, improve your strategy, and grow your online presence effectively."
          lastUpdated="24/03/2026"
        />
        <BlogGridSection />
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
