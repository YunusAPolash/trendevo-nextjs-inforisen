import Image from 'next/image';
import Link from 'next/link';
import PrimaryCard from '@/components/cards/primary-card';
import { cn } from '@/lib/utils';

const tableOfContentsItems = [
  'Social media',
  'SMM Panel',
  'Digital marketing agencies',
  'Audience engagement',
  'SEO optimization',
  'E-commerce businesses',
] as const;

const shareLinks = [
  {
    label: 'Facebook',
    href: '#',
    iconSrc: '/images/icons/blog-details-share-facebook.webp',
  },
  {
    label: 'Instagram',
    href: '#',
    iconSrc: '/images/icons/blog-details-share-instagram.webp',
  },
  {
    label: 'X',
    href: '#',
    iconSrc: '/images/icons/blog-details-share-x.webp',
  },
  {
    label: 'LinkedIn',
    href: '#',
    iconSrc: '/images/icons/blog-details-share-linkedin.webp',
  },
] as const;

export default function ArticleSidebar() {
  return (
    <aside className="flex w-full max-w-[341px] flex-col gap-12">
      <div className="flex gap-3">
        <div
          aria-hidden
          className="flex h-[318px] w-1 shrink-0 overflow-hidden rounded-full bg-[#ebecef]"
        >
          <div className="h-11 w-full rounded-full bg-brand-gradient" />
        </div>

        <nav aria-label="Table of contents" className="min-w-0 flex-1">
          <div className="rounded-lg bg-brand-gradient px-3 py-3">
            <p className="text-lg font-medium leading-[1.45] text-white">
              Table of content
            </p>
          </div>

          <ul className="mt-0">
            {tableOfContentsItems.map((item, index) => (
              <li
                key={item}
                className={cn(
                  'border-b border-dashed border-[#dfe0e4] px-3 py-2 last:border-b-0',
                  index === 0 && 'pt-2',
                )}
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-base font-medium leading-relaxed text-[#404a60] hover:text-[#13203b]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <PrimaryCard
          className="rounded-xl border border-[rgba(42,42,42,0.14)] bg-[linear-gradient(36.37deg,rgb(251,245,255)_10.39%,rgb(255,250,252)_58.1%,rgb(255,137,198)_126.5%)] p-6 ring-0"
        >
          <div className="flex flex-col items-center gap-[13px] text-center">
            <div className="relative size-[109px] overflow-hidden rounded-lg border border-[rgba(188,188,188,0.21)] bg-white">
              <Image
                src="/images/blog-details/blog-details-author-seam-rahman-avatar.webp"
                alt="Seam Rahman"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-base font-semibold text-[#13203b]">
                Author : Seam Rahman
              </p>
              <p className="text-sm font-medium text-[#6a7283]">
                CEO,Trend Evo
              </p>
            </div>
          </div>
        </PrimaryCard>

        <div className="space-y-3">
          <p className="text-base font-medium text-[#4f586d]">
            Share this blog
          </p>
          <div className="flex flex-wrap gap-2">
            {shareLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={`Share on ${link.label}`}
                className="flex size-[38px] items-center justify-center rounded-[7px] border border-[#ebecef] bg-white backdrop-blur-sm"
              >
                <Image
                  src={link.iconSrc}
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
