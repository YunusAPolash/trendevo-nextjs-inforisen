import type {
  TestimonialAssets,
  TestimonialFeaturedReview,
  TestimonialTextReview,
  TestimonialVideoReview,
} from '@/components/sections/testimonials-section';

export const homeTestimonialsSectionBackground =
  'linear-gradient(68.23deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)';

export const homeTestimonialsAssets: TestimonialAssets = {
  starIconSrc: '/images/testimonials/star-icon.svg',
  verifyBadgeSrc: '/images/testimonials/verify-badge.svg',
  customerReviewTabIconSrc: '/images/testimonials/customer-review-icon.svg',
  videoReviewTabIconSrc: '/images/testimonials/clapperboard-icon.svg',
  quoteOpenSrc: '/images/testimonials/quote-open.svg',
  quoteCloseSrc: '/images/testimonials/quote-close.svg',
  playIconSrc: '/images/testimonials/play-icon.svg',
  playOrbSrc: '/images/testimonials/play-orb.png',
};

const homeReviewQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const homeYoutubeReelVideoId = 'LXb3EKWsInQ';

export const homeTestimonialsVideoReviews: TestimonialVideoReview[] = [
  {
    id: 'video-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-1.png',
    avatar: '/images/testimonials/avatar-1.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
  {
    id: 'video-2',
    name: 'Ariyan Khan',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-2.png',
    avatar: '/images/testimonials/avatar-2.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
  {
    id: 'video-3',
    name: 'Lisa',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-3.png',
    avatar: '/images/testimonials/avatar-3.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
  {
    id: 'video-4',
    name: 'Tamanna',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-4.png',
    avatar: '/images/testimonials/avatar-4.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
  {
    id: 'video-5',
    name: 'Rafi Islam',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-1.png',
    avatar: '/images/testimonials/avatar-3.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
  {
    id: 'video-6',
    name: 'Nadia Ahmed',
    role: 'Business Owner',
    thumbnail: '/images/testimonials/video-thumb-2.png',
    avatar: '/images/testimonials/avatar-4.png',
    youtubeVideoId: homeYoutubeReelVideoId,
  },
];

export const homeTestimonialsLeftTextReviews: TestimonialTextReview[] = [
  {
    id: 'left-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: homeReviewQuote,
  },
  {
    id: 'left-2',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: homeReviewQuote,
  },
  {
    id: 'left-3',
    name: 'Rafi Islam',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-3.png',
    quote: homeReviewQuote,
  },
  {
    id: 'left-4',
    name: 'Nadia Ahmed',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-4.png',
    quote: homeReviewQuote,
  },
];

export const homeTestimonialsRightTextReviews: TestimonialTextReview[] = [
  {
    id: 'right-1',
    name: 'Seam Rahman',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-1.png',
    quote: homeReviewQuote,
  },
  {
    id: 'right-2',
    name: 'Ariyan Khan',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-2.png',
    quote: homeReviewQuote,
  },
  {
    id: 'right-3',
    name: 'Lisa',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-3.png',
    quote: homeReviewQuote,
  },
  {
    id: 'right-4',
    name: 'Tamanna',
    role: 'Business Owner',
    avatar: '/images/testimonials/avatar-4.png',
    quote: homeReviewQuote,
  },
];

export const homeTestimonialsFeaturedReview: TestimonialFeaturedReview = {
  name: 'Ariyena Islam',
  role: 'Business Owner',
  avatar: '/images/testimonials/avatar-2.png',
  image: '/images/testimonials/featured-review.png',
  quote: homeReviewQuote,
  youtubeVideoId: homeYoutubeReelVideoId,
};

export const homeTestimonialsTabLabels = {
  customer: 'Customer Reviews',
  video: 'Video Reviews',
} as const;

export const homeTestimonialsHeading = {
  badge: 'TESTIMONIALS',
  underlineSrc: '/images/testimonials/underline.svg',
  underlineWidth: 169,
  title: (
    <>
      What Our <span className="text-gradient">Clients Say</span>
    </>
  ),
  subtitle:
    'Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
  titleClassName:
    'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
  subtitleClassName:
    'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
};
