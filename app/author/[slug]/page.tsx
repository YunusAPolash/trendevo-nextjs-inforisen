import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { signUpUrl } from '@/lib/auth-urls';
import { getAuthorPage } from '@/lib/blogs';
import AuthorBlogsSection from './_components/author-blogs-section';
import AuthorBreadcrumb from './_components/author-breadcrumb';
import AuthorHeroSection from './_components/author-hero-section';

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const authorPage = await getAuthorPage(slug, 1, 1);

  if (!authorPage) {
    return {
      title: 'Author | TrendEvo',
      description: 'Read articles from TrendEvo blog authors.',
    };
  }

  const { author } = authorPage;

  return {
    title: `${author.name} | TrendEvo Blog Author`,
    description:
      author.bio ||
      `Read recently posted blogs by ${author.name}, ${author.designation} at TrendEvo.`,
  };
}

export default async function AuthorPage({
  params,
  searchParams,
}: AuthorPageProps) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, Number(pageParam) || 1);
  const authorPage = await getAuthorPage(slug, currentPage, 25);

  if (!authorPage) {
    notFound();
  }

  const { author, posts, currentPage: activePage, totalPages } = authorPage;

  return (
    <>
      <div className="relative isolate bg-[#FCF8FF] dark:bg-[#120619]">
        <div className="container pb-4 pt-28">
          <AuthorBreadcrumb authorName={author.name} />
        </div>
        <AuthorHeroSection author={author} />
        <AuthorBlogsSection
          authorSlug={slug}
          posts={posts}
          currentPage={activePage}
          totalPages={totalPages}
        />
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
