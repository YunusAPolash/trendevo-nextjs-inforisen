import BlogPostCard from '@/app/blog/_components/blog-post-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { getBlogs } from '@/lib/blogs';

export default async function HomeBlog() {
  const { posts } = await getBlogs(1, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <PrimarySection
      bg="section-1"
      darkBg="section-1-dark"
      className="py-12 sm:py-16 lg:py-20"
      id="blog"
    >
      <div className="container flex flex-col items-center gap-8 sm:gap-12">
        <SectionHeading
          badge="BLOG"
          title={
            <>
              <span className="text-[#071431] dark:text-[#efedf1]">
                Our Recently Posted
              </span>
              <span className="text-gradient"> Blogs</span>
            </>
          }
          subtitle="Smart strategies and expert insights to help you grow faster on social media. Learn how to boost engagement, reach the right audience, and turn followers into customers."
          underlineSrc="/images/blog/blog-section-underline.svg"
          underlineWidth={60}
          titleClassName="max-w-[961px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[996px] text-sm font-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg"
        />

        <div className="grid w-full gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} priority={index < 3} />
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
