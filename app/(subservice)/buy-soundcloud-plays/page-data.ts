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

type SoundcloudPlaysPageData = {
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

export const data: SoundcloudPlaysPageData = {
  seo: {
    title: 'Buy SoundCloud Plays in Bangladesh | TrendEvo',
    description:
      'Buy SoundCloud Plays in Bangladesh from TrendEvo. Boost track visibility, improve music reach, and grow listener activity with bKash, Nagad, Rocket, and secure order tracking.',
    canonical: '/buy-soundcloud-plays',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Artists, Producers & Music Agencies',
    title: 'Buy gt<SoundCloud Plays> in Bangladesh for Better Track Visibility',
    description:
      'SoundCloud is one of the most useful platforms for independent artists, singers, producers, DJs, beat makers, and music creators who want their songs to reach more listeners. A track with more plays can look more active, trusted, and worth listening to. TrendEvo helps users buy SoundCloud plays in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our SoundCloud plays service is useful for artists and music promoters who want stronger track reach, better listener response, and a more active music profile. With TrendEvo’s lnk<SoundCloud SMM Panel|/soundcloud-smm-panel>, you can choose a small package, pay through bKash, Nagad, Rocket, or other supported methods, and promote your tracks safely without sharing your password.',
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
      src: '/images/subservice/buy-soundcloud-plays/buy-soundcloud-plays-in-bangladesh-for-better-track-visibility.webp',
      alt: 'Buy SoundCloud Plays in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'SoundCloud Plays',
    serviceLabel: 'Plays',
    serviceTypeLabel: 'Plays',
    urlFieldLabel: 'SoundCloud Track Link',
    urlPlaceholder: 'https://soundcloud.com/artist/track',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<SoundCloud Plays> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> helps Bangladeshi artists, producers, DJs, agencies, and music marketers boost SoundCloud track activity without making the process complicated. As a lnk<cheap SMM panel|/>, it supports local payments, simple order tracking, and easy service management so musicians, labels, creators, and resellers can run SoundCloud promotion with better control and confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your SoundCloud plays order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for quick handling and smooth order progress.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy SoundCloud plays in Bangladesh without a large music promotion budget. Our pricing works well for new artists, producers, singers, DJs, beat makers, record labels, agencies, and SMM resellers.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help before or after placing an order? TrendEvo support is available to guide you with service selection, order status, payment issues, and dashboard use.',
        icon: '/images/subservice/shared/24-7-support-icon.webp',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes SoundCloud promotion easier for Bangladeshi users who prefer fast and familiar local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Plays',
        description:
          'TrendEvo focuses on stable SoundCloud plays services that help improve track presence and music credibility. You can start small, test the service, and scale based on your release plan, campaign size, or promotion goal.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy SoundCloud Plays',
    title: 'Who Should Buy gt<SoundCloud Plays> in Bangladesh?',
    subtitle:
      'A strong play count can help a SoundCloud track look more popular when someone discovers it for the first time. TrendEvo’s SoundCloud plays service is useful for Bangladeshi artists, creators, labels, and music promoters who want better song visibility, stronger track authority, and a smoother start before sharing music across social media.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Independent Artists and New Musicians',
        description:
          'New artists often struggle because their songs do not get enough early attention. Buying SoundCloud plays in Bangladesh can help singers, rappers, indie musicians, and instrumental artists create an early activity signal before promoting a new track.',
      },
      {
        title: 'Producers, DJs, and Beat Makers',
        description:
          'Producers and beat makers need strong track numbers to attract artists, listeners, collaborators, and clients. More SoundCloud plays can support music branding for hip-hop producers, EDM DJs, remix creators, lo-fi beat makers, and instrumental sellers.',
      },
      {
        title: 'Singers and Music Creators',
        description:
          'Singers, vocalists, cover artists, and music creators use SoundCloud to share original songs, demos, covers, mashups, and experimental tracks. A stronger play count can help their music look more active when listeners visit from Facebook, Instagram, TikTok, YouTube, or Spotify links.',
      },
      {
        title: 'Record Labels and Music Promotion Agencies',
        description:
          'Record labels, artist managers, and music promotion agencies need simple growth tools for artist campaigns. TrendEvo helps them manage SoundCloud plays orders from one dashboard with clear pricing, local payment support, and reseller-friendly access for Bangladesh-based promotions.',
      },
      {
        title: 'Artists Before a New Release Campaign',
        description:
          'Before pushing a new song, remix, beat pack, EP, or mixtape, the track should not look ignored. A starter SoundCloud plays package can help create stronger first impressions, making listeners more likely to press play, explore the profile, and check future releases.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy SoundCloud Plays on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying SoundCloud plays in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so artists, producers, DJs, labels, agencies, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse SoundCloud growth services, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your SoundCloud plays order.',
      },
      {
        number: '03',
        title: 'Choose SoundCloud Plays Service',
        description:
          'Go to the SoundCloud services section and select the plays package that matches your goal. You can choose a small starter order, a larger track promotion package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your SoundCloud Track Link',
        description:
          'Paste your SoundCloud track link, select the quantity, and submit the order. You do not need to share your SoundCloud password. TrendEvo processes the order using your public track URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<SoundCloud Plays>',
    paragraphs: [
      'Buying SoundCloud plays can help your track look more active, but the best results come when the order matches your real music promotion plan. Before placing an order on TrendEvo, make sure your SoundCloud track is public, the track link is correct, and your selected package fits your current release stage.',
      'You do not need to share your SoundCloud password to buy SoundCloud plays in Bangladesh. TrendEvo only needs your public track URL to process the order. This keeps your account safer and makes the ordering process simple for artists, producers, labels, agencies, and resellers.',
      'For a natural track appearance, avoid sudden oversized orders on a brand-new song with no profile activity. Start with a suitable quantity, promote your music across social platforms, and increase your play count step by step. This helps your track look more believable to Bangladeshi listeners and music communities.',
      'SoundCloud plays improve track visibility and social proof, but they should work together with strong music branding. Use proper cover art, write a clear track description, add useful tags, organize playlists, and share your SoundCloud link on Facebook, Instagram, YouTube, TikTok, and Spotify for better reach.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy SoundCloud Plays> in Bangladesh',
    subtitle:
      'Find clear answers about buying SoundCloud plays in Bangladesh, payment options, delivery, safety, order tracking, and track promotion on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy SoundCloud plays from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public SoundCloud track link. We do not ask for your SoundCloud password, so your login details stay private.',
      },
      {
        question: 'Can I buy SoundCloud plays in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your SoundCloud plays order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for artists, musicians, producers, DJs, agencies, labels, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my SoundCloud password?',
        answer:
          'No, you do not need to share your password. To buy SoundCloud plays, you only need to provide the correct SoundCloud track URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my SoundCloud plays order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, track status, and current order volume.',
      },
      {
        question: 'Can I track my SoundCloud plays order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your SoundCloud plays order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy plays for a new SoundCloud track?',
        answer:
          'Yes, new SoundCloud tracks can order plays. For a natural appearance, we suggest starting with a smaller package and increasing your play count step by step.',
      },
      {
        question: 'Are SoundCloud plays useful for music promotion?',
        answer:
          'Yes, SoundCloud plays can support music promotion by improving track activity and listener perception. A higher play count can make your song look more active when new listeners discover it.',
      },
      {
        question: 'Will buying SoundCloud plays increase my followers?',
        answer:
          'SoundCloud plays can improve track visibility, but follower growth also depends on your profile quality, music style, content consistency, and promotion strategy. For better results, combine plays with SoundCloud followers, likes, reposts, and regular releases.',
      },
      {
        question: 'Who can use TrendEvo’s SoundCloud plays service?',
        answer:
          'TrendEvo is useful for Bangladeshi independent artists, musicians, singers, producers, DJs, beat makers, record labels, new artists, music creators, promotion agencies, and SMM resellers.',
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
      'SoundCloud plays build track visibility, but better music growth comes when your profile also looks active. TrendEvo offers related SoundCloud SMM services in Bangladesh to support audience discovery, music credibility, and stronger social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy SoundCloud Followers',
        description:
          'Grow your SoundCloud profile with more followers and improve your artist credibility. SoundCloud followers are useful for musicians, producers, DJs, beat makers, singers, labels, and creators who want a stronger music presence.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy SoundCloud Likes',
        description:
          'Add more trust signals to your SoundCloud tracks with more likes. SoundCloud likes help your songs look more appreciated and can support stronger credibility when new listeners visit your music profile.',
        icon: '/images/subservice/shared/buy-facebook-comments-icon.webp',
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
      'Join TrendEvo and manage your Facebook, Instagram, YouTube, TikTok, Telegram, Snapchat, SoundCloud, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All SoundCloud Services',
    secondaryButtonHref: '/soundcloud-smm-panel',
  },
};
