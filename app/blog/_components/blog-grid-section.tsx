'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';
import BlogPostCard, { type BlogPost } from './blog-post-card';

const blogPosts: BlogPost[] = [
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
  {
    slug: 'tiktok-marketing-complete-guide-2',
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
    slug: 'social-media-growth-strategies-2',
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
    slug: 'building-brand-presence-online-2',
    title: 'TikTok Marketing: Complete Guide for Businesses',
    excerpt:
      'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
    imageSrc: '/images/blog/blog-social-media-team.webp',
    authorName: 'SEAM RAHMAN',
    authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
    publishedAt: '20 Jan, 2026',
    readTime: '16 min read',
  },
  {
    slug: 'tiktok-marketing-complete-guide-3',
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
    slug: 'social-media-growth-strategies-3',
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
    slug: 'building-brand-presence-online-3',
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

const TOTAL_PAGES = 4;

type BlogGridSectionProps = {
  currentPage?: number;
};

export default function BlogGridSection({
  currentPage = 1,
}: BlogGridSectionProps) {
  return (
    <PrimarySection className="py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-10">
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <nav
          aria-label="Blog pagination"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={currentPage <= 1}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#a6aab5] px-4 text-sm font-medium text-[#5a5a5a] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/40 dark:bg-[#1c0926] dark:text-[#ebecef] dark:disabled:opacity-40"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Prev.
          </button>

          {Array.from({ length: TOTAL_PAGES }, (_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex size-10 items-center justify-center rounded-lg border border-[#a6aab5] text-sm text-[#5a5a5a] dark:border-white/40 dark:bg-[#1c0926] dark:text-[#ebecef]',
                  isActive &&
                    'border-[#cc7aff] bg-brand-gradient font-medium text-white dark:border-white/40 dark:bg-brand-gradient dark:text-white',
                )}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            disabled={currentPage >= TOTAL_PAGES}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-transparent bg-brand-gradient px-4 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/40 dark:disabled:opacity-40"
          >
            Next
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </nav>
      </div>
    </PrimarySection>
  );
}
