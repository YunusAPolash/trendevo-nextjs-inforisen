import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';
import BlogPostCard, { type BlogPost } from './blog-post-card';

type BlogGridSectionProps = {
  posts: BlogPost[];
  currentPage?: number;
  totalPages?: number;
};

export default function BlogGridSection({
  posts,
  currentPage = 1,
  totalPages = 1,
}: BlogGridSectionProps) {
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <PrimarySection className="py-16 lg:py-20">
      <div className="container flex flex-col items-center gap-10">
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <nav
          aria-label="Blog pagination"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {hasPrevPage ? (
            <Link
              href={`/blog?page=${currentPage - 1}`}
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
                href={`/blog?page=${page}`}
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
              href={`/blog?page=${currentPage + 1}`}
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
      </div>
    </PrimarySection>
  );
}
