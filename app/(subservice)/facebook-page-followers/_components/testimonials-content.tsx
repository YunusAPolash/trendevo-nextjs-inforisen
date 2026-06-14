import type {
  TestimonialAssets,
  TestimonialFeaturedReview,
  TestimonialTextReview,
  TestimonialVideoReview,
  TestimonialsSectionData,
} from '@/components/sections/testimonials-section';

const facebookPageFollowersTestimonialsSectionBackground =
  'linear-gradient(64.26deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)';

const facebookPageFollowersTestimonialsAssets: TestimonialAssets = {
  starIconSrc: '/images/testimonials/testimonials-star-rating-icon.svg',
  verifyBadgeSrc: '/images/testimonials/testimonials-verified-badge.svg',
  customerReviewTabIconSrc: '/images/testimonials/testimonials-customer-review-icon.svg',
  videoReviewTabIconSrc: '/images/testimonials/testimonials-clapperboard-icon.svg',
  quoteOpenSrc: '/images/testimonials/testimonials-quote-mark-2.svg',
  quoteCloseSrc: '/images/testimonials/testimonials-quote-mark.svg',
  playIconSrc: '/images/testimonials/testimonials-video-play-icon.svg',
  playOrbSrc: '/images/testimonials/testimonials-video-play-orb.webp',
};

const facebookReviewQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const facebookYoutubeReelVideoId = 'LXb3EKWsInQ';

const facebookPageFollowersTestimonialsVideoReviews: TestimonialVideoReview[] =
  [
    {
      id: 'video-1',
      name: 'Seam Rahman',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
      avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
    {
      id: 'video-2',
      name: 'Ariyan Khan',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail-2.webp',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
    {
      id: 'video-3',
      name: 'Lisa',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail-3.webp',
      avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
    {
      id: 'video-4',
      name: 'Tamanna',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail-4.webp',
      avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
    {
      id: 'video-5',
      name: 'Rafi Islam',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
      avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
    {
      id: 'video-6',
      name: 'Nadia Ahmed',
      role: 'Business Owner',
      thumbnail: '/images/testimonials/testimonials-video-review-thumbnail-2.webp',
      avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
      youtubeVideoId: facebookYoutubeReelVideoId,
    },
  ];

const facebookPageFollowersTestimonialsLeftTextReviews: TestimonialTextReview[] =
  [
    {
      id: 'left-1',
      name: 'Seam Rahman',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'left-2',
      name: 'Seam Rahman',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'left-3',
      name: 'Rafi Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'left-4',
      name: 'Nadia Ahmed',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
      quote: facebookReviewQuote,
    },
  ];

const facebookPageFollowersTestimonialsRightTextReviews: TestimonialTextReview[] =
  [
    {
      id: 'right-1',
      name: 'Seam Rahman',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'right-2',
      name: 'Ariyan Khan',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'right-3',
      name: 'Lisa',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
      quote: facebookReviewQuote,
    },
    {
      id: 'right-4',
      name: 'Tamanna',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
      quote: facebookReviewQuote,
    },
  ];

const facebookPageFollowersTestimonialsFeaturedReview: TestimonialFeaturedReview =
  {
    name: 'Ariyena Islam',
    role: 'Business Owner',
    avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
    image: '/images/testimonials/testimonials-featured-review-photo.webp',
    quote: facebookReviewQuote,
    youtubeVideoId: facebookYoutubeReelVideoId,
  };

const facebookPageFollowersTestimonialsTabLabels = {
  customer: 'Customer Reviews',
  video: 'Video Reviews',
} as const;

const facebookPageFollowersTestimonialsHeading = {
  badge: 'TESTIMONIALS',
  underlineSrc: '/images/testimonials/testimonials-section-underline.svg',
  underlineWidth: 169,
  title: 'Facebook Panel gt<Reviews>',
  subtitle:
    'Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
  titleClassName:
    'max-w-none whitespace-normal text-center text-2xl tracking-[0.36px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[36px] lg:text-[36px]',
  subtitleClassName:
    'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
};

export const facebookPageFollowersTestimonialsData: TestimonialsSectionData = {
  sectionBackground: facebookPageFollowersTestimonialsSectionBackground,
  badge: facebookPageFollowersTestimonialsHeading.badge,
  underlineSrc: facebookPageFollowersTestimonialsHeading.underlineSrc,
  underlineWidth: facebookPageFollowersTestimonialsHeading.underlineWidth,
  title: facebookPageFollowersTestimonialsHeading.title,
  subtitle: facebookPageFollowersTestimonialsHeading.subtitle,
  titleClassName: facebookPageFollowersTestimonialsHeading.titleClassName,
  subtitleClassName: facebookPageFollowersTestimonialsHeading.subtitleClassName,
  customerTabLabel: facebookPageFollowersTestimonialsTabLabels.customer,
  videoTabLabel: facebookPageFollowersTestimonialsTabLabels.video,
  assets: facebookPageFollowersTestimonialsAssets,
  leftTextReviews: facebookPageFollowersTestimonialsLeftTextReviews,
  rightTextReviews: facebookPageFollowersTestimonialsRightTextReviews,
  featuredReview: facebookPageFollowersTestimonialsFeaturedReview,
  videoReviews: facebookPageFollowersTestimonialsVideoReviews,
  defaultTab: 'video',
};
