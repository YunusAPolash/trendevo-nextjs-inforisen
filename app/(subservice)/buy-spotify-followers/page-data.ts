import type { FaqSectionData } from '@/components/sections/faq-section';
import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';
import type { ThingsToKnowSectionData } from '@/components/sections/things-to-know-section';
import type { WhoShouldBuySectionData } from '@/components/sections/who-should-buy-section';
import type { ServiceLeadingContent } from '@/components/serviceSmmPanel/service-leading-content';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type SpotifyFollowersPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide';
    trustLabel: string;
    title: string;
    description: string;
    descriptionSecondary: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
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
  orderForm: {
    badge: string;
    serviceLabel: string;
    serviceTypeLabel: string;
    urlFieldLabel: string;
    urlPlaceholder: string;
    submitLabel: string;
  };
  whyChoose: ServiceLeadingContent;
  whoShouldBuy: WhoShouldBuySectionData;
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
  thingsToKnow: ThingsToKnowSectionData;
  faq: FaqSectionData;
  relatedServices: ServiceLeadingContent & {
    ctaLabel: string;
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: SpotifyFollowersPageData = {
  seo: {
    title: 'Buy Spotify Followers in Bangladesh | TrendEvo',
    description:
      'Buy Spotify followers in Bangladesh from TrendEvo. Grow artist credibility, profile authority, and music visibility with bKash, Nagad, and Rocket.',
    canonical: '/buy-spotify-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Artists, Musicians & Music Promoters',
    title: 'Buy gt<Spotify Followers> in Bangladesh for Stronger Artist Credibility',
    description:
      'Spotify listeners often check an artist profile before they decide to follow, stream, or explore more songs. A profile with a stronger follower count can look more trusted, active, and worth listening to. TrendEvo helps independent artists, singers, DJs, producers, labels, music brands, and promotion agencies buy Spotify followers in Bangladesh with easy ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Spotify follower service is made for artists who want better profile authority, stronger music discovery, and a more professional first impression. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Spotify artist profile without sharing any password.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Services',
    secondaryButtonHref: '/services',
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
      alt: 'Buy Spotify Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Spotify Services',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'Spotify Profile URL',
    urlPlaceholder: 'https://open.spotify.com/artist/yourartistid',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Spotify Followers> in Bangladesh',
    subtitle:
      'TrendEvo is built for Bangladeshi artists, musicians, labels, agencies, and creators who want a simple way to improve Spotify profile growth. From local payment options to clear order tracking, every part of the platform helps music professionals manage Spotify promotion with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Spotify followers order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for smooth and quick order handling.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Spotify followers in Bangladesh without needing a large music promotion budget. Our pricing works well for new artists, indie musicians, DJs, labels, producers, and music marketing agencies.',
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help before or after placing an order? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
        icon: '/images/facebook-page-followers/facebook-page-followers-24-7-support-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[167%] max-w-none object-cover -translate-x-[34%] -translate-y-[13%]',
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Local Payment Options',
        description:
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Spotify growth easier for Bangladeshi users who prefer local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Followers',
        description:
          'TrendEvo focuses on stable Spotify follower services that help improve artist profile presence and social proof. You can start small, test the service, and scale based on your music promotion goals.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Spotify Followers',
    title: 'Who Should Buy gt<Spotify Followers> in Bangladesh?',
    subtitle:
      'A strong follower count can help a Spotify artist profile look more serious when new listeners visit it for the first time. TrendEvo’s Spotify followers service is useful for Bangladeshi users who want better artist branding, stronger music credibility, and a smoother start before promoting songs, albums, playlists, or campaigns.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Independent Artists',
        description:
          'Independent artists in Bangladesh often promote music without big label support. Spotify followers can help new artist profiles look more active, making listeners more comfortable exploring songs, albums, and future releases.',
      },
      {
        title: 'Musicians, Singers, and Producers',
        description:
          'Singers, beat makers, composers, and producers need a strong profile image when sharing Spotify links on Facebook, Instagram, TikTok, YouTube, or WhatsApp. Buying Spotify followers in Bangladesh can support early credibility and make the profile look more professional.',
      },
      {
        title: 'DJs and Electronic Music Creators',
        description:
          'DJs and electronic music creators often depend on digital discovery, playlist sharing, and event branding. More Spotify followers can help their artist profile look stronger when promoting mixes, remixes, live sets, and new releases.',
      },
      {
        title: 'Record Labels and Music Brands',
        description:
          'Labels, studios, and music brands need artist profiles that look ready for promotion. Spotify followers can help support release campaigns, artist branding, playlist pitching, and digital music marketing.',
      },
      {
        title: 'Music Promotion Agencies',
        description:
          'Agencies and resellers need fast, simple, and affordable Spotify growth solutions for client projects. TrendEvo helps them manage Spotify follower orders from one dashboard with local payment support and clear pricing.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Spotify Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Spotify followers in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so artists, musicians, labels, agencies, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse Spotify growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Spotify followers order.',
      },
      {
        number: '03',
        title: 'Choose Spotify Followers Service',
        description:
          'Go to the Spotify services section and select the follower package that matches your goal. You can choose a small starter order, a larger artist growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Spotify Profile URL',
        description:
          'Paste your Spotify artist profile link, select the quantity, and submit the order. You do not need to share your Spotify password. TrendEvo processes the order using the public profile URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Spotify Followers>',
    paragraphs: [
      'Buying Spotify followers can help your artist profile look more credible, but the best results come when the order supports a real music promotion plan. Before placing an order on TrendEvo, make sure your Spotify profile is public, the profile link is correct, and your selected package fits your current artist size.',
      'You do not need to share your Spotify password to buy Spotify followers in Bangladesh. TrendEvo only needs your public Spotify artist profile URL to process the order. This keeps your account safer and makes the ordering process simple for artists, musicians, labels, agencies, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on a brand-new artist profile. Start with a suitable quantity, release quality music, and increase your follower count step by step. This helps your Spotify profile look more believable to Bangladeshi and global listeners.',
      'Spotify followers improve profile presence and artist authority, but they should work together with regular promotion. Share your songs on social media, pitch playlists, post behind-the-scenes content, run release campaigns, and guide listeners to follow your Spotify profile.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Spotify Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying Spotify followers in Bangladesh, payment options, delivery, safety, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Spotify followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Spotify artist profile link. We never ask for your Spotify password, so your login details stay private.',
      },
      {
        question: 'Can I buy Spotify followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Spotify followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for artists, musicians, agencies, labels, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Spotify password?',
        answer:
          'No, you do not need to share your password. To buy Spotify followers, you only need to provide the correct Spotify artist profile URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Spotify followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, order quantity, and current order volume.',
      },
      {
        question: 'Can I track my Spotify followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Spotify followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new Spotify artist profile?',
        answer:
          'Yes, new Spotify artist profiles can order followers. For a natural appearance, we suggest starting with a smaller package and increasing your follower count step by step.',
      },
      {
        question: 'Are Spotify followers and Spotify monthly listeners the same?',
        answer:
          'No, they are different. Spotify followers support artist profile growth, while monthly listeners show how many unique people listened to your music during a recent period. Many artists use both services for stronger music promotion.',
      },
      {
        question: 'Will buying Spotify followers increase my streams?',
        answer:
          'Spotify followers can improve profile authority and trust, but streams depend on song quality, playlist visibility, release strategy, and listener interest. For better growth, you can combine followers with Spotify plays and playlist promotion.',
      },
      {
        question: 'Who can use TrendEvo’s Spotify followers service?',
        answer:
          'TrendEvo is useful for Bangladeshi independent artists, singers, musicians, producers, DJs, record labels, music brands, creators, agencies, freelancers, and SMM resellers who want a stronger Spotify profile presence.',
      },
    ],
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please get in touch with our team.",
    ctaButtonLabel: 'Contact US',
    ctaButtonHref: '/contact-us',
  },

  relatedServices: {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: 'Related Services You gt<Might Also Need>',
    subtitle:
      'Spotify followers build artist profile trust, but better growth comes when your music also receives stronger listening activity. TrendEvo offers related Spotify SMM services in Bangladesh to support music discovery, visibility, and stronger artist branding.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Plays',
        description:
          'Increase the activity of your Spotify tracks with more plays. Spotify plays help your songs look more active, support music discovery, and make your releases appear stronger to new listeners.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Spotify Monthly Listeners',
        description:
          'Improve your artist profile activity with more monthly listeners. This service is useful for new releases, album campaigns, playlist exposure, artist branding, and music promotion projects that need stronger listener signals.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-comments-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
    ],
    bottomRowFeatures: [],
    ctaLabel: 'Sign Up Now',
  },

  cta: {
    title: 'Ready to Grow with a gt<Trusted SMM Panel> in Bangladesh?',
    description:
      'Join TrendEvo and manage your Spotify, Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Spotify Services',
    secondaryButtonHref: '/spotify-smm-panel',
  },
};
