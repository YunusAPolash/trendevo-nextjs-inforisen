type ArticleBodySectionProps = {
  htmlContent: string;
};

export default function ArticleBodySection({
  htmlContent,
}: ArticleBodySectionProps) {
  return (
    <section className="space-y-8">
      <div
        className="blog-article-content space-y-4 text-lg leading-relaxed text-[#313131] dark:text-white [&_[id]]:scroll-mt-28 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-gradient [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gradient [&_h3]:text-xl [&_h3]:font-semibold [&_li]:leading-relaxed [&_ol]:list-decimal [&_ol]:space-y-0 [&_ol]:pl-7 [&_p]:text-lg [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-0 [&_ul]:pl-7"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </section>
  );
}
