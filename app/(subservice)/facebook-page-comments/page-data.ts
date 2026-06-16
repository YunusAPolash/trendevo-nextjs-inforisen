import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { TestimonialsSectionData } from '@/components/sections/testimonials-section';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type FacebookPageCommentsPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    title: string;
    description: string;
    signInLabel: string;
    createAccountLabel: string;
    trustBadgeBase: {
      avatarSrcs: string[];
      ratingIconSrc: string;
      rating: string;
    };
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
      unoptimized: boolean;
    };
  };
  workingProcess: {
    badge: string;
    underlineSrc: string;
    underlineWidth: number;
    title: string;
    subtitle: string;
    titleClassName: string;
    subtitleClassName: string;
    steps: ServiceWorkingProcessStep[];
  };
  serviceLeadingSlugs: ['facebook-page-comments', 'facebook-page-comments-related-services'];
  testimonials: TestimonialsSectionData;
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

const reviewQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const youtubeReelVideoId = 'LXb3EKWsInQ';

export const data: FacebookPageCommentsPageData = {
  seo: {
    title: 'Buy Facebook Page Comments | TrendEvo',
    description:
      'Buy real Facebook page comments at affordable prices. Fast delivery, secure checkout, and 24/7 support from TrendEvo in Bangladesh.',
    canonical: '/facebook-page-comments',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    title: 'Buy gt<Facebook Page Comments> in Real, Fast & Affordable price.',
    description:
      'Growing a Facebook page can be tough. Consistent content and smart promotion are key, but results can be slow. At TrendEvo, we provide solutions to help your Facebook page thrive with real comments and engagement.',
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    trustBadgeBase: {
      avatarSrcs: [
        '/images/reviews/home-hero-hero-1-avatar.png',
        '/images/reviews/home-hero-hero-2-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
        '/images/reviews/home-hero-hero-4-avatar.png',
        '/images/reviews/home-hero-hero-5-avatar.png',
        '/images/reviews/home-hero-hero-3-avatar.png',
      ],
      ratingIconSrc: '/images/icons/home-hero-trust-star-rating-icon.png',
      rating: '(4.8)',
    },
    illustration: {
      src: '/images/facebook-page-followers/facebook-page-followers-excited-user-celebrating-facebook-page-growth-with-analytics-chart-illustration.webp',
      alt: 'Excited user celebrating Facebook page growth with analytics chart',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Facebook Page Comments gt<on TrendEvo>',
    subtitle:
      'A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'You’ll need to sign up quickly with just a few steps to start using our SMM panel.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Single out the features and services that fit your needs or budget.',
      },
      {
        number: '03',
        title: 'Find the Facebook Page Comments Service',
        description:
          'Make payments safely via trusted methods to protect your information.',
      },
      {
        number: '04',
        title: 'Enter Your Facebook Page URL & Place the Order',
        description:
          'Monitor your progress easily and see how your social media improves.',
      },
    ],
  },

  serviceLeadingSlugs: ['facebook-page-comments', 'facebook-page-comments-related-services'],

  testimonials: {
    sectionBackground:
      'linear-gradient(64.26deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)',
    badge: 'TESTIMONIALS',
    title: 'Facebook Panel gt<Reviews>',
    subtitle:
      'Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    underlineSrc: '/images/testimonials/testimonials-section-underline.svg',
    underlineWidth: 169,
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.36px] text-[#071431] dark:text-[#efedf1] sm:text-[32px] md:text-[36px] lg:text-[36px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] dark:text-[#c1c4cc] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: {
      starIconSrc: '/images/testimonials/testimonials-star-rating-icon.svg',
      verifyBadgeSrc: '/images/testimonials/testimonials-verified-badge.svg',
      customerReviewTabIconSrc:
        '/images/testimonials/testimonials-customer-review-icon.svg',
      videoReviewTabIconSrc:
        '/images/testimonials/testimonials-clapperboard-icon.svg',
      quoteOpenSrc: '/images/testimonials/testimonials-quote-mark-2.svg',
      quoteCloseSrc: '/images/testimonials/testimonials-quote-mark.svg',
      playIconSrc: '/images/testimonials/testimonials-video-play-icon.svg',
      playOrbSrc: '/images/testimonials/testimonials-video-play-orb.webp',
    },
    leftTextReviews: [
      {
        id: 'left-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'left-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'left-3',
        name: 'Rafi Islam',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'left-4',
        name: 'Nadia Ahmed',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: reviewQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'right-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'right-2',
        name: 'Ariyan Khan',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'right-3',
        name: 'Lisa',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        quote: reviewQuote,
      },
      {
        id: 'right-4',
        name: 'Tamanna',
        role: 'Business Owner',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        quote: reviewQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
      image: '/images/testimonials/testimonials-featured-review-photo.webp',
      quote: reviewQuote,
      youtubeVideoId: youtubeReelVideoId,
    },
    videoReviews: [
      {
        id: 'video-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-seam-rahman-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
      {
        id: 'video-2',
        name: 'Ariyan Khan',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail-2.webp',
        avatar: '/images/testimonials/testimonials-ariyan-khan-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
      {
        id: 'video-3',
        name: 'Lisa',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail-3.webp',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
      {
        id: 'video-4',
        name: 'Tamanna',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail-4.webp',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
      {
        id: 'video-5',
        name: 'Rafi Islam',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail.webp',
        avatar: '/images/testimonials/testimonials-rafi-islam-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
      {
        id: 'video-6',
        name: 'Nadia Ahmed',
        role: 'Business Owner',
        thumbnail:
          '/images/testimonials/testimonials-video-review-thumbnail-2.webp',
        avatar: '/images/testimonials/testimonials-nadia-ahmed-avatar.png',
        youtubeVideoId: youtubeReelVideoId,
      },
    ],
    defaultTab: 'video',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
    bg: 'section-7',
    items: [
      {
        question: 'What is an SMM Panel?',
        answer:
          'An SMM panel is an online platform where you can buy social media marketing services such as Facebook page comments, followers, and engagement. TrendEvo lets you place orders, track delivery, and manage your growth from one dashboard.',
      },
      {
        question: 'Can the SMM Panel target a specific group?',
        answer:
          'Yes. Depending on the service you choose, TrendEvo offers targeting options so your Facebook page comments can align with your preferred audience type, region, or niche when available for that package.',
      },
      {
        question: 'Is Using an SMM Panel Safe?',
        answer:
          'TrendEvo uses secure checkout, encrypted payments, and privacy-focused order handling. We never ask for your Facebook password — only your public page URL is required to deliver comments.',
      },
      {
        question: 'Does using an SMM Panel risk banning my account?',
        answer:
          'We deliver comments gradually using methods designed to look natural. While no service can guarantee zero platform risk, TrendEvo focuses on quality delivery and safe pacing to help protect your Facebook page.',
      },
      {
        question: 'Can I track the progress of my orders?',
        answer:
          'Yes. After placing an order, you can monitor its status in real time from your TrendEvo dashboard and see updates as your Facebook page comment delivery progresses.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'TrendEvo supports multiple trusted payment options including local and international methods. Available gateways are shown at checkout when you add funds or pay for your order.',
      },
      {
        question: 'Can I cancel my order instantly?',
        answer:
          'Orders that have not started processing can often be cancelled from your account. Once delivery is in progress, cancellation may not be possible — contact our support team and we will review your request promptly.',
      },
      {
        question: 'Do you have customer support?',
        answer:
          'Yes. TrendEvo offers 24/7 customer support to help with orders, payments, and account questions. Reach out anytime through live chat or our contact channels if you need assistance.',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
  },
};
