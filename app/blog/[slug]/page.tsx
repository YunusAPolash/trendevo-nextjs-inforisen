import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleBodySection from './_components/article-body-section';
import ArticleHeroSection from './_components/article-hero-section';
import ArticleLayoutSection from './_components/article-layout-section';
import RelatedBlogsSection from './_components/related-blogs-section';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { signUpUrl } from '@/lib/auth-urls';
import { getBlogBySlug, getBlogs } from '@/lib/blogs';

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog | TrendEvo',
      description:
        'Read the latest insights on social media marketing and SMM panel strategies from TrendEvo.',
    };
  }

  const { seo } = blog;
  const keywords = seo.metaKeywords
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords,
    alternates: seo.canonicalUrl
      ? { canonical: seo.canonicalUrl }
      : undefined,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonicalUrl || undefined,
      type: seo.ogType === 'article' ? 'article' : 'website',
      locale: seo.ogLocale,
      siteName: seo.ogSiteName || undefined,
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              alt: seo.ogImageAlt ?? seo.ogTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { posts } = await getBlogs(1, 25);
  const relatedPosts = posts.filter((post) => post.slug !== slug).slice(0, 3);

  return (
    <>
      <ArticleLayoutSection
        breadcrumbLabel={blog.title}
        tableOfContents={blog.tableOfContents}
        authorName={blog.author.name}
        authorAvatarSrc={blog.author.avatar}
        authorDesignation={blog.author.designation}
      >
        <div className="space-y-16">
          <ArticleHeroSection
            postedAt={blog.postedAtLabel}
            title={blog.title}
            featuredImageSrc={blog.coverImage}
            featuredImageAlt={blog.title}
          />
          <ArticleBodySection htmlContent={blog.htmlContent} />
        </div>
      </ArticleLayoutSection>
      <RelatedBlogsSection posts={relatedPosts} />
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
