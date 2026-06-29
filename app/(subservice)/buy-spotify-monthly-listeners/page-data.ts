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

type SpotifyMonthlyListenersPageData = {
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

export const data: SpotifyMonthlyListenersPageData = {
  seo: {
    title: 'Buy Spotify Monthly Listeners in Bangladesh | TrendEvo',
    description:
      'Buy Spotify monthly listeners in Bangladesh from TrendEvo. Improve artist profile reach, audience signals, and music visibility with bKash, Nagad, and Rocket.',
    canonical: '/buy-spotify-monthly-listeners',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Artists, Musicians & Music Promoters',
    title: 'Buy gt<Spotify Monthly Listeners> in Bangladesh for Stronger Artist Profile Growth',
    description:
      'Spotify monthly listeners can shape how people judge an artist profile. When an artist has an active listener base, the profile looks more relevant, more trusted, and more ready for discovery. TrendEvo helps independent artists, musicians, singers, producers, DJs, record labels, music creators, and promotion agencies buy Spotify monthly listeners in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our Spotify monthly listeners service is made for artists who want better audience reach, stronger streaming presence, and a more professional profile image. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your Spotify listener activity without sharing your password.',
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
      alt: 'Buy Spotify Monthly Listeners in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Spotify Services',
    serviceLabel: 'Monthly Listeners',
    serviceTypeLabel: 'Monthly Listeners',
    urlFieldLabel: 'Spotify Artist Profile URL',
    urlPlaceholder: 'https://open.spotify.com/artist/yourartistid',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Spotify Monthly Listeners> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is a trusted lnk<Spotify SMM Panel|/spotify-smm-panel> built for Bangladeshi artists, musicians, labels, agencies, and creators who want a simple way to improve Spotify listener growth. As a user-friendly lnk<SMM Panel BD|/>, it offers local payment options, easy order tracking, and smooth support so music professionals can manage Spotify audience development with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Spotify monthly listeners order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for quick and smooth order handling.',
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Spotify monthly listeners in Bangladesh without spending a large music marketing budget. Our pricing works well for new artists, indie musicians, producers, DJs, small labels, and music promotion agencies.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Spotify listener growth easier for Bangladeshi users who prefer local payment systems.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Listeners',
        description:
          'TrendEvo focuses on stable Spotify monthly listener services that help improve artist profile activity and audience signals. You can start small, test the service, and scale based on your release goals.',
        iconFrameSrc:
          '/images/facebook-page-followers/facebook-page-followers-real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Spotify Monthly Listeners',
    title: 'Who Should Buy gt<Spotify Monthly Listeners> in Bangladesh?',
    subtitle:
      'A strong monthly listener count can help a Spotify artist profile look more active when new visitors check it for the first time. TrendEvo’s Spotify monthly listeners service is useful for Bangladeshi users who want better music discovery, stronger audience reach, and a smoother start before promoting songs, pitching playlists, or launching new releases.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Independent Artists',
        description:
          'Independent artists in Bangladesh often need visible audience activity to support their music journey. Spotify monthly listeners can help their artist profiles look more active, making new listeners more likely to explore songs, albums, and future releases.',
      },
      {
        title: 'Musicians, Singers, and Producers',
        description:
          'Singers, composers, beat makers, and producers need a stronger profile signal when they share Spotify links online. Buying Spotify monthly listeners in Bangladesh can support singles, EPs, collaborations, and album campaigns.',
      },
      {
        title: 'DJs and Electronic Music Creators',
        description:
          'DJs, remix artists, and electronic music creators often depend on online discovery and repeat exposure. Spotify monthly listeners can help their profiles look stronger when promoting remixes, mixes, festival sets, and club-style releases.',
      },
      {
        title: 'Record Labels and Music Brands',
        description:
          'Labels, studios, and music brands need active listener signals for artist campaigns. Spotify monthly listeners can support release planning, profile authority, playlist visibility, and digital music marketing.',
      },
      {
        title: 'Music Promotion Agencies',
        description:
          'Agencies and resellers need simple and affordable Spotify growth solutions for client projects. TrendEvo helps them manage Spotify monthly listener orders from one dashboard with local payment support, clear pricing, and services suitable for Bangladesh-based music campaigns.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/working-process-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Spotify Monthly Listeners on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Spotify monthly listeners in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so artists, musicians, labels, agencies, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Spotify monthly listeners order.',
      },
      {
        number: '03',
        title: 'Choose Spotify Monthly Listeners Service',
        description:
          'Go to the Spotify services section and select the monthly listener package that matches your goal. You can choose a small starter order, a larger artist growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Spotify Artist Profile URL',
        description:
          'Paste your Spotify artist profile link, select the quantity, and submit the order. You do not need to share your Spotify password. TrendEvo processes the order using the public artist profile URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Spotify Monthly Listeners>',
    paragraphs: [
      'Buying Spotify monthly listeners can help your artist profile look more active, but the best results come when the order supports a real music promotion plan. Before placing an order on TrendEvo, make sure your Spotify artist profile is public, the profile link is correct, and your selected package fits your current audience size.',
      'You do not need to share your Spotify password to buy Spotify monthly listeners in Bangladesh. TrendEvo only needs your public Spotify artist profile URL to process the order. This keeps your account safer and makes the ordering process simple for artists, musicians, labels, agencies, and resellers.',
      'For a natural profile appearance, avoid sudden oversized orders on a brand-new artist profile. Start with a suitable quantity, promote your music regularly, and grow your listener count step by step. This helps your profile look more believable to Bangladeshi and global listeners.',
      'Spotify monthly listeners improve profile activity and audience signals, but they should work together with consistent music promotion. Share your tracks on Facebook, TikTok, Instagram, YouTube Shorts, fan groups, music communities, and playlist networks so more people have a reason to discover your songs.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Spotify Monthly Listeners> in Bangladesh',
    subtitle:
      'Find clear answers about buying Spotify monthly listeners in Bangladesh, payment options, delivery, safety, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Spotify monthly listeners from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Spotify artist profile link. We never ask for your Spotify password, so your login details stay private.',
      },
      {
        question: 'Can I buy Spotify monthly listeners in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Spotify monthly listeners order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for artists, musicians, labels, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Spotify password?',
        answer:
          'No, you do not need to share your password. To buy Spotify monthly listeners, you only need to provide the correct Spotify artist profile URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Spotify monthly listeners order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, order quantity, and current order volume.',
      },
      {
        question: 'Can I track my Spotify monthly listeners order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Spotify monthly listeners order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy monthly listeners for a new Spotify artist profile?',
        answer:
          'Yes, new Spotify artist profiles can order monthly listeners. For a natural appearance, we suggest starting with a smaller package and increasing your listener count step by step.',
      },
      {
        question: 'Are Spotify monthly listeners and Spotify plays the same?',
        answer:
          'No, they are different. Spotify plays show streaming activity on tracks, while monthly listeners show unique listener activity around an artist profile during a monthly period. Many artists use both services for stronger Spotify marketing.',
      },
      {
        question: 'Will buying Spotify monthly listeners increase my followers?',
        answer:
          'Spotify monthly listeners can improve artist profile activity and visibility, but followers depend on listener interest, music quality, profile branding, and promotion. For better results, you can combine monthly listeners with Spotify followers.',
      },
      {
        question: 'Who can use TrendEvo’s Spotify monthly listeners service?',
        answer:
          'TrendEvo is useful for Bangladeshi independent artists, singers, musicians, producers, DJs, record labels, music creators, agencies, freelancers, and SMM resellers who want stronger Spotify audience activity.',
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
      'Spotify monthly listeners improve audience activity, but better music growth comes when your songs and artist profile also look strong. TrendEvo offers related Spotify SMM services in Bangladesh to support visibility, credibility, and stronger music promotion.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Plays',
        description:
          'Increase streaming activity on your Spotify tracks with more plays. Spotify plays help your songs look more active, support music discovery, and make new releases appear stronger to listeners.',
        icon: '/images/facebook-page-followers/facebook-page-followers-buy-facebook-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Spotify Followers',
        description:
          'Grow your artist profile with more Spotify followers. This service is useful for artist branding, profile authority, fanbase building, and long-term music promotion.',
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
