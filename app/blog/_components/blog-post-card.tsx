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
    <PrimaryCard className="flex h-full flex-col gap-6 rounded-[18px] border border-[#d181ff] bg-white p-[18px] pb-6 ring-0">
      <div className="relative h-[244px] w-full overflow-hidden rounded-[14px]">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="border-b border-dashed border-[#b2b6bf] pb-[18px]">
            <h2 className="text-xl font-medium leading-normal text-[#13203b]">
              {post.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#343e56]">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative size-[59px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={post.authorAvatarSrc}
                  alt={post.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-[#071431]">
                  {post.authorName}
                </p>
                <p className="text-base text-[#404a60]">{post.publishedAt}</p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <Image
                src="/images/icons/blog-read-time-icon.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <span className="text-base font-medium text-[#4f586d]">
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-lg font-semibold text-gradient"
        >
          Read More
          <Image
            src="/images/icons/blog-read-more-chevron.svg"
            alt=""
            width={22}
            height={22}
            aria-hidden
          />
        </Link>
      </div>
    </PrimaryCard>
  );
}
