import type { ReactNode } from 'react';
import Image from 'next/image';

const bodyParagraph =
  'One of the strongest marketing channels in Bangladesh is social media. Brands and startups of e-commerce, influencers, and local businesses are all competing to capture attention on platforms such as Facebook, Instagram, YouTube, and TikTok. When social media grows, two prominent approaches take over, growth of SMM panel and organic social media growth. GetmyFollow is here to let you know the comprehensive answer of SMM Panel vs. Organic Social Media Growth! Answer is it is dependent upon your objectives, schedule, and budget. Let’s start!';

const contentSections = [
  { id: 'digital-marketing-agencies', title: 'Digital marketing agencies' },
  { id: 'audience-engagement', title: 'Audience engagement' },
  { id: 'seo-optimization', title: 'SEO optimization' },
  { id: 'e-commerce-businesses', title: 'E-commerce businesses' },
] as const;

function ArticleContentBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-semibold text-gradient">{title}</h2>
      {children}
    </div>
  );
}

export default function ArticleBodySection() {
  return (
    <section className="space-y-8">
      <ArticleContentBlock id="social-media" title="Overview">
        <p className="text-lg leading-relaxed text-[#313131] dark:text-white">{bodyParagraph}</p>
        <p className="text-lg leading-relaxed text-[#313131] dark:text-white">{bodyParagraph}</p>
      </ArticleContentBlock>

      <ArticleContentBlock id="smm-panel" title="Understanding SMM Panel of social media">
        <div className="space-y-4 text-lg leading-relaxed text-[#313131] dark:text-white">
          <ul className="list-disc space-y-0 pl-7">
            <li>Followers</li>
            <li>Likes</li>
            <li>Comments</li>
            <li>Views</li>
            <li>Shares</li>
            <li>Subscribers</li>
          </ul>
          <div className="space-y-0">
            <p>
              These services are useful to promote the visibility, credibility, as well as
              perceived popularity within a short period.
            </p>
            <p>The SMM panels used in Bangladesh include:</p>
          </div>
          <ul className="list-disc space-y-0 pl-7">
            <li>Digital marketing agencies</li>
            <li>Freelancers</li>
            <li>E-commerce businesses</li>
            <li>Influencers</li>
            <li>Startup brands</li>
          </ul>
        </div>
      </ArticleContentBlock>

      <div className="relative h-[280px] w-full overflow-hidden rounded-3xl sm:h-[320px] lg:h-[374px]">
        <Image
          src="/images/blog-details/blog-details-inline-analytics-chart.webp"
          alt="Marketer reviewing analytics charts on a laptop"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 1075px"
        />
      </div>

      {contentSections.map((section) => (
        <ArticleContentBlock key={section.id} id={section.id} title={section.title}>
          <p className="text-lg leading-relaxed text-[#313131] dark:text-white">{bodyParagraph}</p>
          <p className="text-lg leading-relaxed text-[#313131] dark:text-white">{bodyParagraph}</p>
        </ArticleContentBlock>
      ))}
    </section>
  );
}
