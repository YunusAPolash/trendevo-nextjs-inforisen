import BlogPostCard from '@/app/blog/_components/blog-post-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/(home)/page-data';
import { getBlogs } from '@/lib/blogs';

const { blog } = data;

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
          title={blog.heading.title}
          subtitle={blog.heading.subtitle}
          underlineSrc={blog.heading.underlineSrc}
          underlineWidth={blog.heading.underlineWidth}
          titleClassName={blog.heading.titleClassName}
          subtitleClassName={blog.heading.subtitleClassName}
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
