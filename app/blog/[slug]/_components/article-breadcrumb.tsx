import Link from 'next/link';

type ArticleBreadcrumbProps = {
  currentLabel?: string;
};

export default function ArticleBreadcrumb({
  currentLabel = 'Blog Details page',
}: ArticleBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-base font-semibold leading-relaxed">
      <Link href="/" className="text-[#222e48] hover:underline dark:text-[#ebecef]">
        Home
      </Link>
      <span className="text-[#222e48] dark:text-[#ebecef]"> / </span>
      <Link href="/blog" className="text-[#222e48] hover:underline dark:text-[#ebecef]">
        Blog
      </Link>
      <span className="text-[#222e48] dark:text-[#ebecef]"> / </span>
      <span className="text-[#8f2acd] dark:text-[#ae4de8]">{currentLabel}</span>
    </nav>
  );
}
