import type { ReactNode } from 'react';
import PrimarySection from '@/components/sections/primary-section';
import ArticleBreadcrumb from './article-breadcrumb';
import ArticleSidebar from './article-sidebar';

type ArticleLayoutSectionProps = {
  breadcrumbLabel?: string;
  children?: ReactNode;
};

export default function ArticleLayoutSection({
  breadcrumbLabel,
  children,
}: ArticleLayoutSectionProps) {
  return (
    <PrimarySection bg='section-6' className="pt-28 pb-8 lg:pb-12">
      <div className="container">
        <ArticleBreadcrumb currentLabel={breadcrumbLabel} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[341px_minmax(0,1fr)] lg:gap-6">
          <ArticleSidebar />
          {children}
        </div>
      </div>
    </PrimarySection>
  );
}
