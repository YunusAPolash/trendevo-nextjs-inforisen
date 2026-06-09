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
  return (
    <PrimaryCard className="flex h-full flex-col gap-4 rounded-[18px] border border-[#d181ff] bg-white p-3 pb-5 ring-0 sm:gap-6 sm:p-[18px] sm:pb-6">
      <div className="relative h-[180px] w-full overflow-hidden rounded-[14px] sm:h-[220px] md:h-[244px]">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 sm:gap-5">
        <div className="border-b border-dashed border-[#b2b6bf] pb-4 sm:pb-[18px]">
          <h2 className="text-lg font-medium leading-snug text-[#13203b] sm:text-xl sm:leading-normal">
            {post.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#343e56] sm:mt-4 sm:text-base">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-start gap-2.5 sm:gap-3">
          <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-[59px]">
            <Image
              src={post.authorAvatarSrc}
              alt={post.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <p className="text-base font-semibold text-[#071431] sm:text-lg">
              {post.authorName}
            </p>
            <p className="text-sm text-[#404a60] sm:text-base">{post.publishedAt}</p>
            <div className="flex items-center gap-1">
              <Image
                src="/images/icons/blog-read-time-icon.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span className="text-sm font-medium text-[#4f586d] sm:text-base">
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
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
