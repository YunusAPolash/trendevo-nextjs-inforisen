import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleBodySection from './_components/article-body-section';
import ArticleHeroSection from './_components/article-hero-section';
import ArticleLayoutSection from './_components/article-layout-section';
import RelatedBlogsSection from './_components/related-blogs-section';
import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import JsonLdScript from '@/components/seo/json-ld-script';
import { signUpUrl } from '@/lib/auth-urls';
import { buildBlogShareLinks, getBlogBySlug, getBlogs, parseBlogMetaKeywords } from '@/lib/blogs';
import { buildBlogPostingSchema } from '@/lib/seo/json-ld';
import { absoluteUrl } from '@/lib/site-url';

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

  const { seo, title, summary } = blog;
  const keywords = parseBlogMetaKeywords(seo.metaKeywords);
  const canonical = seo.canonicalUrl || absoluteUrl(`/blog/${slug}`);

  return {
    title: seo.metaTitle || `${title} | TrendEvo Blog`,
    description:
      seo.metaDescription ||
      summary ||
      'Read the latest insights on social media marketing and SMM panel strategies from TrendEvo.',
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: { canonical },
    openGraph: {
      title: seo.ogTitle || title,
      description: seo.ogDescription || summary,
      url: canonical,
      type: seo.ogType === 'article' ? 'article' : 'website',
      locale: seo.ogLocale || undefined,
      siteName: seo.ogSiteName || undefined,
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              alt: seo.ogImageAlt ?? seo.ogTitle ?? title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.ogTitle || title,
      description: seo.ogDescription || summary,
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
  const shareLinks = buildBlogShareLinks(blog);

  return (
    <>
      <JsonLdScript data={buildBlogPostingSchema(blog)} />
      <ArticleLayoutSection
        breadcrumbLabel={blog.title}
        tableOfContents={blog.tableOfContents}
        shareLinks={shareLinks}
        authorName={blog.author.name}
        authorSlug={blog.author.slug}
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
          <ArticleBodySection
            htmlContent={blog.htmlContent}
            contentEditor={blog.contentEditor}
            editorCss={blog.editorCss}
          />
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
