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

export type CountryTestimonialSlug =
  | 'smm-panel-uk'
  | 'smm-panel-bangladesh'
  | 'smm-panel-vietnam'
  | 'smm-panel-thailand'
  | 'smm-panel-pakistan'
  | 'smm-panel-nigeria'
  | 'smm-panel-brazil'
  | 'smm-panel-egypt'
  | 'smm-panel-india'
  | 'smm-panel-indonesia';

const ukReviewQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const ukYoutubeVideoId = 'LXb3EKWsInQ';

const ukTestimonialAssets: TestimonialAssets = {
  starIconSrc: '/images/testimonials/testimonials-star-rating-icon.svg',
  verifyBadgeSrc: '/images/testimonials/testimonials-verified-badge.svg',
  customerReviewTabIconSrc: '/images/testimonials/testimonials-customer-review-icon.svg',
  videoReviewTabIconSrc: '/images/testimonials/testimonials-clapperboard-icon.svg',
  quoteOpenSrc: '/images/testimonials/testimonials-quote-mark-2.svg',
  quoteCloseSrc: '/images/testimonials/testimonials-quote-mark.svg',
  playIconSrc: '/images/testimonials/testimonials-video-play-icon.svg',
  playOrbSrc: '/images/testimonials/testimonials-video-play-orb.webp',
};

export const countryTestimonialContent: Record<
  CountryTestimonialSlug,
  CountryTestimonialContent
> = {
  'smm-panel-uk': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
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
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'uk-left-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'uk-right-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'uk-right-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'uk-video-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-bangladesh': {
    sectionBg: 'section-10',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
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
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'bd-left-2',
        name: 'Nadia Ahmed',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'bd-right-1',
        name: 'Tamanna',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'bd-right-2',
        name: 'Ariyan Khan',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'bd-video-1',
        name: 'Rafi Islam',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-vietnam': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Vietnam</span>
      </>
    ),
    subtitle:
      'Discover what our Vietnamese clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'vn-left-1',
        name: 'Minh Nguyen',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'vn-left-2',
        name: 'Lan Tran',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'vn-right-1',
        name: 'Hoang Le',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'vn-right-2',
        name: 'Thao Pham',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Duc Vo',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'vn-video-1',
        name: 'Minh Nguyen',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-thailand': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Thailand</span>
      </>
    ),
    subtitle:
      'Discover what our Thai clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'th-left-1',
        name: 'Somchai P.',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'th-left-2',
        name: 'Nattaya K.',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'th-right-1',
        name: 'Arthit W.',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'th-right-2',
        name: 'Pim S.',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Krit V.',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'th-video-1',
        name: 'Somchai P.',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-pakistan': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Pakistan</span>
      </>
    ),
    subtitle:
      'Discover what our Pakistani clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'pk-left-1',
        name: 'Ali Khan',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'pk-left-2',
        name: 'Fatima Ahmed',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'pk-right-1',
        name: 'Hassan Raza',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'pk-right-2',
        name: 'Ayesha Malik',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Usman Ali',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'pk-video-1',
        name: 'Ali Khan',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-nigeria': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Nigeria</span>
      </>
    ),
    subtitle:
      'Discover what our Nigerian clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'ng-left-1',
        name: 'Chidi Okafor',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'ng-left-2',
        name: 'Amara Nwosu',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'ng-right-1',
        name: 'Tunde Adeyemi',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'ng-right-2',
        name: 'Blessing Eze',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Emeka Johnson',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'ng-video-1',
        name: 'Chidi Okafor',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-brazil': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Brazil</span>
      </>
    ),
    subtitle:
      'Discover what our Brazilian clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'br-left-1',
        name: 'Lucas Silva',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'br-left-2',
        name: 'Ana Costa',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'br-right-1',
        name: 'Pedro Santos',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'br-right-2',
        name: 'Mariana Lima',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Rafael Oliveira',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'br-video-1',
        name: 'Lucas Silva',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-egypt': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Egypt</span>
      </>
    ),
    subtitle:
      'Discover what our Egyptian clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'eg-left-1',
        name: 'Omar Hassan',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'eg-left-2',
        name: 'Nour Ibrahim',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'eg-right-1',
        name: 'Youssef Ali',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'eg-right-2',
        name: 'Layla Mahmoud',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Karim Farouk',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'eg-video-1',
        name: 'Omar Hassan',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-india': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in India</span>
      </>
    ),
    subtitle:
      'Discover what our Indian clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'in-left-1',
        name: 'Rahul Sharma',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'in-left-2',
        name: 'Priya Patel',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'in-right-1',
        name: 'Amit Kumar',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'in-right-2',
        name: 'Sneha Reddy',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Vikram Singh',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'in-video-1',
        name: 'Rahul Sharma',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: ukYoutubeVideoId,
      },
    ],
    showTabSwitcher: false,
    showSectionDecorations: false,
  },
  'smm-panel-indonesia': {
    sectionBg: 'section-17',
    badge: 'TESTIMONIALS',
    underlineSrc: '/images/testimonials/customer-reviews-section-underline.svg',
    underlineWidth: 169,
    title: (
      <>
        What Our <span className="text-gradient">Clients Say in Indonesia</span>
      </>
    ),
    subtitle:
      'Discover what our Indonesian clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: ukTestimonialAssets,
    leftTextReviews: [
      {
        id: 'id-left-1',
        name: 'Budi Santoso',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'id-left-2',
        name: 'Siti Rahayu',
        role: 'Content Creator',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'id-right-1',
        name: 'Andi Pratama',
        role: 'Marketing Manager',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: ukReviewQuote,
      },
      {
        id: 'id-right-2',
        name: 'Dewi Lestari',
        role: 'Agency Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: ukReviewQuote,
      },
    ],
    featuredReview: {
      name: 'Rizki Hidayat',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/over-11-604-users-across-bangladesh-trust-trendevo-featured-photo.webp',
      quote: ukReviewQuote,
      youtubeVideoId: ukYoutubeVideoId,
    },
    videoReviews: [
      {
        id: 'id-video-1',
        name: 'Budi Santoso',
        role: 'Business Owner',
        thumbnail: '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
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
