import type { BlogPost } from '@/app/blog/_components/blog-post-card';

export const DEFAULT_AUTHOR_AVATAR =
  '/images/blog/blog-tiktok-marketing-complete-guide-for-businesses-avatar.webp';

export const DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR =
  '/images/blog-details/blog-details-author-seam-rahman-avatar.webp';

type BlogAuthorAttributes = {
  name: string;
  slug: string;
  avatar: string | null;
  designation: string;
  bio?: string;
};

type BlogCategoryAttributes = {
  name: string;
  slug: string;
};

type BlogSeoAttributes = {
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords?: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  ogImageAlt: string | null;
  ogType: string | null;
  ogLocale: string | null;
  ogSiteName: string | null;
};

type TableOfContentItem = {
  level: number;
  text: string;
  id: string;
};

type BlogApiItem = {
  type: string;
  id: number;
  attributes: {
    title: string;
    slug: string;
    summary: string;
    featuredImage: string;
    readingTime: number;
    publishedAt: string;
  };
  relationships: {
    author: {
      type: string;
      id: number;
      attributes: BlogAuthorAttributes;
    };
    category: {
      type: string;
      id: number;
      attributes: BlogCategoryAttributes;
    };
  };
};

type BlogDetailApiItem = {
  type: string;
  id: number;
  attributes: {
    title: string;
    coverImage: string;
    summary: string;
    htmlContent: string;
    tableOfContent: TableOfContentItem[];
    publishedAt: string;
  };
  relationships: {
    seo: {
      type: string;
      id: number;
      attributes: BlogSeoAttributes;
    };
    author: {
      type: string;
      id: number;
      attributes: BlogAuthorAttributes;
    };
    category: {
      type: string;
      id: number;
      attributes: BlogCategoryAttributes;
    };
  };
};

type BlogDetailApiResponse = {
  data: BlogDetailApiItem;
};

type BlogsApiResponse = {
  data: BlogApiItem[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

export type BlogTableOfContentLink = {
  label: string;
  href: string;
};

export type BlogShareLink = {
  label: 'Facebook' | 'Instagram' | 'X' | 'LinkedIn';
  href: string;
  iconSrc: string;
  action?: 'copy';
};

function getBlogShareUrl(slug: string, canonicalUrl: string | null): string {
  if (canonicalUrl) {
    return canonicalUrl;
  }

  const appUrl = process.env.NEXT_PUBLIC_PERFECT_APP_URL?.replace(/\/$/, '') ?? '';

  return `${appUrl}/blog/${slug}`;
}

export function parseBlogMetaKeywords(
  metaKeywords: string | null | undefined,
): string[] {
  if (metaKeywords == null || metaKeywords === '') {
    return [];
  }

  return String(metaKeywords)
    .split(',')
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

function mapBlogSeo(
  seoAttributes: BlogSeoAttributes | undefined,
  fallback: {
    title: string;
    summary: string;
    coverImage: string;
  },
): BlogSeo {
  return {
    metaTitle: seoAttributes?.metaTitle ?? fallback.title,
    metaDescription: seoAttributes?.metaDescription ?? fallback.summary,
    metaKeywords: seoAttributes?.metaKeywords ?? '',
    canonicalUrl: seoAttributes?.canonicalUrl ?? '',
    ogTitle: seoAttributes?.ogTitle ?? fallback.title,
    ogDescription: seoAttributes?.ogDescription ?? fallback.summary,
    ogImage: seoAttributes?.ogImage ?? fallback.coverImage,
    ogImageAlt: seoAttributes?.ogImageAlt ?? fallback.title,
    ogType: seoAttributes?.ogType ?? 'article',
    ogLocale: seoAttributes?.ogLocale ?? 'en_US',
    ogSiteName: seoAttributes?.ogSiteName ?? null,
  };
}

export function buildBlogShareLinks(blog: {
  slug: string;
  title: string;
  seo: BlogSeo;
}): BlogShareLink[] {
  const shareUrl = getBlogShareUrl(blog.slug, blog.seo.canonicalUrl);
  const shareTitle = blog.seo.ogTitle || blog.title;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  return [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      iconSrc: '/images/icons/blog-details-facebook-icon.webp',
    },
    {
      label: 'Instagram',
      href: shareUrl,
      iconSrc: '/images/icons/blog-details-instagram-icon.webp',
      action: 'copy',
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      iconSrc: '/images/icons/blog-details-x-icon.webp',
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      iconSrc: '/images/icons/blog-details-linkedin-icon.webp',
    },
  ];
}

export type BlogAuthor = {
  name: string;
  slug: string;
  avatar: string;
  designation: string;
  bio: string;
};

export type BlogSeo = BlogSeoAttributes;

export type BlogCategory = BlogCategoryAttributes;

export type BlogDetail = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  htmlContent: string;
  tableOfContents: BlogTableOfContentLink[];
  publishedAt: string;
  postedAtLabel: string;
  author: BlogAuthor;
  category: BlogCategory;
  seo: BlogSeo;
};

export type BlogsResult = {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  latestPublishedAt: string | null;
};

export type AuthorPageResult = {
  author: BlogAuthor;
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
};

function mapAuthorAttributes(
  attributes: BlogAuthorAttributes,
  bio = '',
): BlogAuthor {
  return {
    name: attributes.name,
    slug: attributes.slug,
    avatar: attributes.avatar ?? DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR,
    designation: attributes.designation,
    bio,
  };
}

export function formatBlogLastUpdated(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function formatBlogPublishedAt(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function formatBlogHeroPostedAt(isoDate: string): string {
  const date = new Date(isoDate);

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

function mapBlogItemToPost(item: BlogApiItem): BlogPost {
  const { attributes, relationships } = item;

  return {
    slug: attributes.slug,
    title: attributes.title,
    excerpt: attributes.summary,
    imageSrc: attributes.featuredImage,
    authorName: relationships.author.attributes.name,
    authorSlug: relationships.author.attributes.slug,
    authorAvatarSrc:
      relationships.author.attributes.avatar ?? DEFAULT_AUTHOR_AVATAR,
    authorDesignation: relationships.author.attributes.designation,
    categoryName: relationships.category.attributes.name,
    publishedAt: formatBlogPublishedAt(attributes.publishedAt),
    readTime: formatReadingTime(attributes.readingTime),
  };
}

export async function getBlogs(
  page = 1,
  perPage = 25,
): Promise<BlogsResult> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const emptyResult: BlogsResult = {
    posts: [],
    currentPage: page,
    totalPages: 1,
    latestPublishedAt: null,
  };

  if (!apiBase) {
    return emptyResult;
  }

  try {
    const response = await fetch(
      `${apiBase}/blogs?per_page=${perPage}&page=${page}`,
      { cache: 'no-store' },
    );

    if (!response.ok) {
      return emptyResult;
    }

    const json = (await response.json()) as BlogsApiResponse;

    if (!Array.isArray(json.data)) {
      return emptyResult;
    }

    return {
      posts: json.data.map(mapBlogItemToPost),
      currentPage: json.meta?.current_page ?? page,
      totalPages: Math.max(json.meta?.last_page ?? 1, 1),
      latestPublishedAt: json.data[0]?.attributes.publishedAt ?? null,
    };
  } catch {
    return emptyResult;
  }
}

function mapBlogDetailItem(item: BlogDetailApiItem, slug: string): BlogDetail {
  const { attributes, relationships } = item;
  const authorAttributes = relationships.author.attributes;

  return {
    id: item.id,
    title: attributes.title,
    slug,
    summary: attributes.summary,
    coverImage: attributes.coverImage,
    htmlContent: attributes.htmlContent,
    tableOfContents: (attributes.tableOfContent ?? []).map((entry) => ({
      label: entry.text,
      href: `#${entry.id}`,
    })),
    publishedAt: attributes.publishedAt,
    postedAtLabel: formatBlogHeroPostedAt(attributes.publishedAt),
    author: {
      name: authorAttributes.name,
      slug: authorAttributes.slug,
      avatar:
        authorAttributes.avatar ?? DEFAULT_BLOG_DETAIL_AUTHOR_AVATAR,
      designation: authorAttributes.designation,
      bio: authorAttributes.bio ?? '',
    },
    category: relationships.category.attributes,
    seo: mapBlogSeo(relationships.seo?.attributes, {
      title: attributes.title,
      summary: attributes.summary,
      coverImage: attributes.coverImage,
    }),
  };
}

export async function getBlogBySlug(slug: string): Promise<BlogDetail | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (!apiBase || !slug) {
    return null;
  }

  try {
    const response = await fetch(`${apiBase}/blogs/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as BlogDetailApiResponse;

    if (!json.data?.attributes) {
      return null;
    }

    return mapBlogDetailItem(json.data, slug);
  } catch {
    return null;
  }
}

export async function getAuthorPage(
  authorSlug: string,
  page = 1,
  perPage = 25,
): Promise<AuthorPageResult | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  if (!apiBase || !authorSlug) {
    return null;
  }

  try {
    const response = await fetch(
      `${apiBase}/blogs?author=${encodeURIComponent(authorSlug)}&per_page=${perPage}&page=${page}`,
      { cache: 'no-store' },
    );

    if (!response.ok) {
      return null;
    }

    const json = (await response.json()) as BlogsApiResponse;

    if (!Array.isArray(json.data) || json.data.length === 0) {
      return null;
    }

    const firstAuthor = json.data[0].relationships.author.attributes;

    if (firstAuthor.slug !== authorSlug) {
      return null;
    }

    let bio = firstAuthor.bio ?? '';
    const firstPostSlug = json.data[0].attributes.slug;
    const firstPostDetail = await getBlogBySlug(firstPostSlug);

    if (
      firstPostDetail &&
      firstPostDetail.author.slug === authorSlug &&
      firstPostDetail.author.bio
    ) {
      bio = firstPostDetail.author.bio;
    }

    return {
      author: mapAuthorAttributes(firstAuthor, bio),
      posts: json.data.map(mapBlogItemToPost),
      currentPage: json.meta?.current_page ?? page,
      totalPages: Math.max(json.meta?.last_page ?? 1, 1),
    };
  } catch {
    return null;
  }
}
