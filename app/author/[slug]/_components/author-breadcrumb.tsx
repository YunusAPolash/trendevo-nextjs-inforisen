import Link from 'next/link';

type AuthorBreadcrumbProps = {
  authorName: string;
};

export default function AuthorBreadcrumb({ authorName }: AuthorBreadcrumbProps) {
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
      <span className="text-[#8f2acd] dark:text-[#ae4de8]">{authorName}</span>
    </nav>
  );
}
