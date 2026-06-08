'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import PrimarySection from '@/components/sections/primary-section';
import BlogPostCard, { type BlogPost } from '@/app/blog/_components/blog-post-card';

const relatedPosts: BlogPost[] = [
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

export default function RelatedBlogsSection() {
  return (
    <PrimarySection bg="section-5" className="py-16 lg:py-20">
      <div className="container">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 className="text-[28px] font-semibold text-[#313131]">
            Related Blogs
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous related blogs"
              className="flex size-[38px] items-center justify-center rounded-full border border-[#d181ff] bg-white text-[#d181ff]"
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next related blogs"
              className="flex size-[38px] items-center justify-center rounded-full bg-brand-gradient text-white shadow-[0_2px_3px_rgba(18,50,98,0.12)]"
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
