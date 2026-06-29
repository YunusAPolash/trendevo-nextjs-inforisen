import Image from 'next/image';
import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';
import type { BlogPost } from '@/app/blog/_components/blog-post-card';

type AuthorBlogCardProps = {
  post: BlogPost;
};

export default function AuthorBlogCard({ post }: AuthorBlogCardProps) {
  const blogHref = `/blog/${post.slug}`;

  return (
    <PrimaryCard className="flex h-full flex-col gap-5 rounded-[18px] border border-[#d181ff] bg-white p-[18px] pb-6 ring-0 dark:border-[rgba(133,37,207,0.36)] dark:bg-[#1c0926]">
      {post.categoryName ? (
        <span className="inline-flex w-fit rounded-md bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white sm:text-sm">
          {post.categoryName}
        </span>
      ) : null}

      <h2 className="text-lg font-semibold leading-snug text-[#13203b] sm:text-xl dark:text-white">
        <Link href={blogHref} className="hover:opacity-90">
          {post.title}
        </Link>
      </h2>

      <Link
        href={blogHref}
        className="relative block h-[180px] w-full overflow-hidden rounded-[14px] sm:h-[220px] md:h-[244px]"
      >
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover"
        />
      </Link>

      <div className="flex flex-wrap items-center gap-4 text-sm text-[#404a60] sm:text-base dark:text-[#dfe0e4]">
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/blog-details-posted-at-clock-icon.webp"
            alt="Blog post published date icon"
            width={18}
            height={18}
            aria-hidden
            className="size-[18px] dark:brightness-0 dark:invert"
          />
          <span>{post.publishedAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/site-blog-read-time-icon.svg"
            alt="Blog post read time icon"
            width={18}
            height={18}
            aria-hidden
            className="size-[18px] dark:brightness-0 dark:invert"
          />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-dashed border-[#b2b6bf] pt-4">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full sm:size-11">
          <Image
            src={post.authorAvatarSrc}
            alt={post.authorName}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#071431] sm:text-base dark:text-white">
            {post.authorName}
          </p>
          {post.authorDesignation ? (
            <p className="truncate text-xs text-[#404a60] sm:text-sm dark:text-[#dfe0e4]">
              {post.authorDesignation}
            </p>
          ) : null}
        </div>
      </div>
    </PrimaryCard>
  );
}
