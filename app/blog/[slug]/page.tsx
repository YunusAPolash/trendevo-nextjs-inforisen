import type { Metadata } from 'next';
import ArticleBodySection from './_components/article-body-section';
import ArticleHeroSection from './_components/article-hero-section';
import ArticleLayoutSection from './_components/article-layout-section';
import RelatedBlogsSection from './_components/related-blogs-section';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, ' ')} | TrendEvo Blog`,
    description:
      'Read the latest insights on social media marketing and SMM panel strategies from TrendEvo.',
  };
}

export default function BlogDetailsPage() {
  return (
    <>
      <ArticleLayoutSection breadcrumbLabel="Blog Details page">
        <div className="space-y-16">
          <ArticleHeroSection />
          <ArticleBodySection />
        </div>
      </ArticleLayoutSection>
      <RelatedBlogsSection />
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
