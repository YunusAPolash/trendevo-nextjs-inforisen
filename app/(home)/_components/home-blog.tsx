import BlogPostCard, { type BlogPost } from '@/app/blog/_components/blog-post-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const homeBlogPosts: BlogPost[] = [
  {
    slug: 'tiktok-marketing-complete-guide',
    title: 'TikTok Marketing: Complete Guide for Businesses',
    excerpt:
      'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
    imageSrc: '/images/blog/blog-tiktok-marketing-studio.webp',
    authorName: 'SEAM RAHMAN',
    authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
    publishedAt: '20 Jan, 2026',
    readTime: '16 min read',
  },
  {
    slug: 'social-media-growth-strategies',
    title: 'TikTok Marketing: Complete Guide for Businesses',
    excerpt:
      'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
    imageSrc: '/images/blog/blog-marketing-chart-growth.webp',
    authorName: 'SEAM RAHMAN',
    authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
    publishedAt: '20 Jan, 2026',
    readTime: '16 min read',
  },
  {
    slug: 'building-brand-presence-online',
    title: 'TikTok Marketing: Complete Guide for Businesses',
    excerpt:
      'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
    imageSrc: '/images/blog/blog-social-media-team.webp',
    authorName: 'SEAM RAHMAN',
    authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
    publishedAt: '20 Jan, 2026',
    readTime: '16 min read',
  },
];

export default function HomeBlog() {
  return (
    <PrimarySection
      bg="section-1"
      darkBg="section-1-dark"
      className="py-12 sm:py-16 lg:py-20"
      id="blog"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          badge="BLOG"
          title={
            <>
              <span className="text-[#071431] dark:text-[#efedf1]">
                Our Recently Posted
              </span>
              <span className="text-gradient"> Blogs</span>
            </>
          }
          subtitle="Smart strategies and expert insights to help you grow faster on social media. Learn how to boost engagement, reach the right audience, and turn followers into customers."
          underlineSrc="/images/blog/underline.svg"
          underlineWidth={60}
          titleClassName="max-w-[961px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[996px] text-sm font-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg"
        />

        <div className="grid w-full gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeBlogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
