import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import type { BlogAuthor } from '@/lib/blogs';

type AuthorHeroSectionProps = {
  author: BlogAuthor;
};

export default function AuthorHeroSection({ author }: AuthorHeroSectionProps) {
  return (
    <PrimarySection className="overflow-hidden pb-10 pt-8 lg:pb-12">
      <div className="container">
        <PrimaryCard
          bg="blog-hero"
          darkBg="blog-hero-dark"
          className="flex w-full flex-col items-center gap-6 overflow-hidden rounded-xl px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-14 [&>div[aria-hidden]]:bg-[length:100%_100%] [&>div[aria-hidden]]:bg-center [&>div[aria-hidden]]:bg-no-repeat"
        >
          <div className="relative size-[120px] overflow-hidden rounded-full border-2 border-[#d181ff] bg-white sm:size-[140px] dark:bg-[#1c0926]">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              priority
              sizes="140px"
              className="object-cover"
            />
          </div>

          <div className="flex max-w-3xl flex-col items-center gap-3">
            <h1 className="text-3xl font-bold leading-tight text-[#071431] sm:text-4xl dark:text-white">
              {author.name}
            </h1>
            <p className="text-lg font-semibold text-gradient sm:text-xl">
              {author.designation}
            </p>
            {author.bio ? (
              <p className="text-base leading-relaxed text-[#343e56] sm:text-lg dark:text-[#c1c4cc]">
                {author.bio}
              </p>
            ) : null}

            {author.socialLinks.length > 0 ? (
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
                {author.socialLinks.map((link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on ${link.label}`}
                    className="flex size-[42px] items-center justify-center rounded-[10px] border border-[#ebecef] bg-white transition-opacity hover:opacity-80 dark:border-transparent dark:bg-white/10"
                  >
                    <Image
                      src={link.iconSrc}
                      alt=""
                      width={22}
                      height={22}
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </PrimaryCard>
      </div>
    </PrimarySection>
  );
}
