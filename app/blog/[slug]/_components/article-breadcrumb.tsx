import Link from 'next/link';

type ArticleBreadcrumbProps = {
  currentLabel?: string;
};

export default function ArticleBreadcrumb({
  currentLabel = 'Blog Details page',
}: ArticleBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-base font-semibold leading-relaxed">
      <Link href="/" className="text-[#222e48] hover:underline">
        Home
      </Link>
      <span className="text-[#222e48]"> / </span>
      <Link href="/blog" className="text-[#222e48] hover:underline">
        Blog
      </Link>
      <span className="text-[#222e48]"> / </span>
      <span className="text-[#8f2acd]">{currentLabel}</span>
    </nav>
  );
}
