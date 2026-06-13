'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { BlogShareLink, BlogTableOfContentLink } from '@/lib/blogs';
import { cn } from '@/lib/utils';

const HEADER_SCROLL_OFFSET = 112;

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    HEADER_SCROLL_OFFSET;

  window.scrollTo({ top, behavior: 'smooth' });
  window.history.replaceState(null, '', `#${sectionId}`);
}

const shareLinkClassName =
  'flex size-[38px] items-center justify-center rounded-[7px] border border-[#ebecef] bg-white backdrop-blur-sm dark:border-transparent dark:bg-white/10';

type ArticleSidebarProps = {
  tableOfContents?: BlogTableOfContentLink[];
  shareLinks?: BlogShareLink[];
  authorName?: string;
  authorSlug?: string;
  authorAvatarSrc?: string;
  authorDesignation?: string;
};

async function copyShareUrl(url: string) {
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    window.prompt('Copy this blog link:', url);
  }
}

export default function ArticleSidebar({
  tableOfContents = [],
  shareLinks = [],
  authorName = 'Seam Rahman',
  authorSlug,
  authorAvatarSrc = '/images/blog-details/blog-details-author-seam-rahman-avatar.webp',
  authorDesignation = 'CEO,Trend Evo',
}: ArticleSidebarProps) {
  return (
    <aside className="flex w-full max-w-[341px] flex-col gap-12">
      <div className="flex h-[318px] items-center gap-3">
        <div
          aria-hidden
          className="flex h-full w-1 shrink-0 overflow-hidden rounded-full bg-[#ebecef] backdrop-blur-[10px] dark:bg-[rgba(235,236,239,0.25)]"
        >
          <div className="h-11 w-full rounded-full bg-brand-gradient" />
        </div>

        <nav aria-label="Table of contents" className="min-w-0 flex-1">
          <div className="rounded-lg bg-brand-gradient p-3">
            <p className="text-lg font-medium leading-[1.45] text-white">
              Table of content
            </p>
          </div>

          <ul>
            {tableOfContents.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  'px-3 pt-2 pb-3',
                  index < tableOfContents.length - 1 &&
                    'border-b border-dashed border-[#dfe0e4] dark:border-[#6a7283]',
                )}
              >
                <a
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.href.replace('#', ''));
                  }}
                  className="block text-base font-medium leading-normal text-[#404a60] hover:text-[#13203b] dark:text-[#dfe0e4] dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <div className="rounded-xl border border-[rgba(42,42,42,0.14)] bg-[linear-gradient(36.37deg,rgb(251,245,255)_10.39%,rgb(255,250,252)_58.1%,rgb(255,137,198)_126.5%)] p-6 dark:border-[0.5px] dark:border-[rgba(42,42,42,0.14)] dark:bg-[rgba(255,255,255,0.12)] dark:bg-none dark:backdrop-blur-[250px]">
          <div className="flex flex-col items-center gap-[13px] text-center">
            <div className="relative size-[109px] overflow-hidden rounded-lg border border-[rgba(188,188,188,0.21)] bg-[rgba(255,255,255,0.93)] backdrop-blur-[2px]">
              <Image
                src={authorAvatarSrc}
                alt={authorName}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-base font-semibold text-[#13203b] dark:text-white">
                Author :{' '}
                {authorSlug ? (
                  <Link
                    href={`/author/${authorSlug}`}
                    className="text-gradient hover:opacity-90"
                  >
                    {authorName}
                  </Link>
                ) : (
                  authorName
                )}
              </p>
              <p className="text-sm font-medium text-[#6a7283] dark:text-[#dfe0e4]">
                {authorDesignation}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base font-medium text-[#4f586d] dark:text-[#f5f6f7]">
            Share this blog
          </p>
          <div className="flex flex-wrap gap-2">
            {shareLinks.map((link) =>
              link.action === 'copy' ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => copyShareUrl(link.href)}
                  aria-label={`Copy blog link to share on ${link.label}`}
                  className={shareLinkClassName}
                >
                  <Image
                    src={link.iconSrc}
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden
                  />
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${link.label}`}
                  className={shareLinkClassName}
                >
                  <Image
                    src={link.iconSrc}
                    alt=""
                    width={22}
                    height={22}
                    aria-hidden
                  />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
