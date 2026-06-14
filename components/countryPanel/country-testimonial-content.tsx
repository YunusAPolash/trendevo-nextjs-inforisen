import type { ReactNode } from 'react';

import type { SectionBgKey } from '@/components/sections/primary-section';
import type {
  TestimonialAssets,
  TestimonialFeaturedReview,
  TestimonialTextReview,
  TestimonialVideoReview,
} from '@/components/sections/testimonials-section';

export type CountryTestimonialContent = {
  sectionBg: SectionBgKey;
  badge: string;
  underlineSrc: string;
  underlineWidth: number;
  title: ReactNode;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  customerTabLabel: string;
  videoTabLabel: string;
  assets: TestimonialAssets;
  leftTextReviews: TestimonialTextReview[];
  rightTextReviews: TestimonialTextReview[];
  featuredReview: TestimonialFeaturedReview;
  videoReviews: TestimonialVideoReview[];
  showTabSwitcher?: boolean;
  showSectionDecorations?: boolean;
  className?: string;
};

export type CountryTestimonialSlug = 'smm-panel-uk' | 'smm-panel-bangladesh';

const ukReviewQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const ukYoutubeVideoId = 'LXb3EKWsInQ';

const ukTestimonialAssets: TestimonialAssets = {
  starIconSrc: '/images/testimonials/star-icon.svg',
  verifyBadgeSrc: '/images/testimonials/verify-badge.svg',
  customerReviewTabIconSrc: '/images/testimonials/customer-review-icon.svg',
  videoReviewTabIconSrc: '/images/testimonials/clapperboard-icon.svg',
  quoteOpenSrc: '/images/testimonials/quote-open.svg',
  quoteCloseSrc: '/images/testimonials/quote-close.svg',
  playIconSrc: '/images/testimonials/play-icon.svg',
  playOrbSrc: '/images/testimonials/play-orb.webp',
};

export const countryTestimonialContent: Record<
  CountryTestimonialSlug,
  CountryTestimonialContent
> = {
  'smm-panel-uk': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in UK</span>
      </>
    ),
    subtitle:
      'Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'uk-left-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: ukReviewQuote,
      },
      {
        id: 'uk-left-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'uk-right-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: ukReviewQuote,
      },
      {
        id: 'uk-right-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/avatar-2.png',
      image: '/images/testimonials/featured-review.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'uk-video-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/video-thumb-1.webp',
        avatar: '/images/testimonials/avatar-1.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-bangladesh': {
    sectionBg: 'section-10',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our{' '}
        <span className="text-gradient">Clients Say in Bangladesh</span>
      </>
    ),
    subtitle:
      'Discover what our Bangladeshi clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'bd-left-1',
        name: 'Rafi Islam',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-3.png',
        quote: ukReviewQuote,
      },
      {
        id: 'bd-left-2',
        name: 'Nadia Ahmed',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-4.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'bd-right-1',
        name: 'Tamanna',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-4.png',
        quote: ukReviewQuote,
      },
      {
        id: 'bd-right-2',
        name: 'Ariyan Khan',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-2.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/avatar-2.png',
      image: '/images/testimonials/featured-review.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'bd-video-1',
        name: 'Rafi Islam',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/video-thumb-1.webp',
        avatar: '/images/testimonials/avatar-3.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
};

export function getCountryTestimonialContent(
  slug: CountryTestimonialSlug,
): CountryTestimonialContent {
  return countryTestimonialContent[slug];
}
