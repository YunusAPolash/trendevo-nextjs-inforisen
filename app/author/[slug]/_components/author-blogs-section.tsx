import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BlogPostCard, { type BlogPost } from '@/app/blog/_components/blog-post-card';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

type AuthorBlogsSectionProps = {
  authorSlug: string;
  posts: BlogPost[];
  currentPage?: number;
  totalPages?: number;
};

export default function AuthorBlogsSection({
  authorSlug,
  posts,
  currentPage = 1,
  totalPages = 1,
}: AuthorBlogsSectionProps) {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <PrimarySection  className="py-10">
      <div className="container flex flex-col items-center gap-10">
        <h2 className="text-center text-[28px] font-semibold sm:text-[32px]">
          <span className="text-gradient">Recently Posted</span>{' '}
          <span className="text-[#313131] dark:text-white">Blogs</span>
        </h2>

        {posts.length > 0 ? (
          <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {posts.map((post, index) => (
              <BlogPostCard
                key={post.slug}
                post={post}
                priority={currentPage === 1 && index < 3}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-base text-[#404a60] dark:text-[#c1c4cc]">
            No blog posts found for this author yet.
          </p>
        )}

        {totalPages > 1 ? (
          <nav
            aria-label="Author blogs pagination"
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {hasPrevPage ? (
              <Link
                href={`/author/${authorSlug}?page=${currentPage - 1}`}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#a6aab5] px-4 text-sm font-medium text-[#5a5a5a] dark:border-white/40 dark:bg-[#1c0926] dark:text-[#ebecef]"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Prev.
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#a6aab5] px-4 text-sm font-medium text-[#5a5a5a] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/40 dark:bg-[#1c0926] dark:text-[#ebecef] dark:disabled:opacity-40"
              >
                <ArrowLeft className="size-4" aria-hidden />
                Prev.
              </button>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <Link
                  key={page}
                  href={`/author/${authorSlug}?page=${page}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex size-10 items-center justify-center rounded-lg border border-[#a6aab5] text-sm text-[#5a5a5a] dark:border-white/40 dark:bg-[#1c0926] dark:text-[#ebecef]',
                    isActive &&
                      'border-[#cc7aff] bg-brand-gradient font-medium text-white dark:border-white/40 dark:bg-brand-gradient dark:text-white',
                  )}
                >
                  {page}
                </Link>
              );
            })}

            {hasNextPage ? (
              <Link
                href={`/author/${authorSlug}?page=${currentPage + 1}`}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-transparent bg-brand-gradient px-4 text-sm font-medium text-white dark:border-white/40"
              >
                Next
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-transparent bg-brand-gradient px-4 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/40 dark:disabled:opacity-40"
              >
                Next
                <ArrowRight className="size-4" aria-hidden />
              </button>
            )}
          </nav>
        ) : null}
      </div>
    </PrimarySection>
  );
}
