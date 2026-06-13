import Image from 'next/image';
import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  authorName: string;
  authorAvatarSrc: string;
  publishedAt: string;
  readTime: string;
};

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const blogHref = `/blog/${post.slug}`;

  return (
    <PrimaryCard className="flex h-full flex-col gap-6 rounded-[18px] border border-[#d181ff] bg-white p-[18px] pb-6 ring-0 dark:border-[rgba(133,37,207,0.36)] dark:bg-[#1c0926]">
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

      <div className="flex flex-1 flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4">
          <div className="border-b border-dashed border-[#b2b6bf] pb-[18px]">
            <h2 className="text-lg font-medium leading-normal text-[#13203b] sm:text-xl dark:text-white">
              <Link href={blogHref} className="hover:opacity-90">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-normal text-[#343e56] sm:mt-4 sm:text-base dark:text-[#dfe0e4]">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-[59px]">
                <Image
                  src={post.authorAvatarSrc}
                  alt={post.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <p className="text-base font-semibold leading-snug text-[#071431] sm:text-lg dark:text-white">
                  {post.authorName}
                </p>
                <p className="text-sm text-[#404a60] sm:text-base dark:text-[#dfe0e4]">
                  {post.publishedAt}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 pl-[60px] sm:shrink-0 sm:pl-0">
              <Image
                src="/images/icons/blog-read-time-icon.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
                className="size-5 dark:brightness-0 dark:invert"
              />
              <span className="text-sm font-medium whitespace-nowrap text-[#4f586d] sm:text-base dark:text-[#ebecef]">
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <Link
          href={blogHref}
          className="inline-flex w-fit items-center gap-2 text-base font-semibold text-gradient sm:text-lg"
        >
          Read More
          <Image
            src="/images/icons/blog-read-more-chevron.svg"
            alt=""
            width={22}
            height={22}
            className="size-4 sm:size-[22px]"
            aria-hidden
          />
        </Link>
      </div>
    </PrimaryCard>
  );
}
