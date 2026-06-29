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

type SpotifyPlaysPageData = {
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

export const data: SpotifyPlaysPageData = {
  seo: {
    title: 'Buy Spotify Plays in Bangladesh | TrendEvo',
    description:
      'Buy Spotify plays in Bangladesh from TrendEvo. Increase track visibility, streaming activity, and music reach with bKash, Nagad, and Rocket.',
    canonical: '/buy-spotify-plays',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Artists, Musicians & Music Promoters',
    title: 'Buy gt<Spotify Plays> in Bangladesh for Better Music Streaming Growth',
    description:
      'If you want more people to notice your music, strong play counts can make a real difference. Songs with higher streaming numbers often create a better first impression and encourage more listeners to hit play. TrendEvo helps independent artists, musicians, singers, DJs, producers, record labels, music creators, and digital promotion agencies buy Spotify plays in Bangladesh through our trusted lnk<Spotify SMM Panel|/spotify-smm-panel>. With a simple ordering process, secure local payment options, and reliable delivery, promoting your music becomes easier than ever.',
    descriptionSecondary:
      'Our Spotify plays service is designed for Bangladeshi artists who want to increase track visibility, strengthen streaming performance, and build a more professional music presence. As the lnk<best SMM panel in Bangladesh|/>, TrendEvo supports convenient payments through bKash, Nagad, Rocket, and other available methods. You can start with a package that matches your budget and grow your Spotify streams safely without ever sharing your account password.',
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
      src: '/images/subservice/buy-spotify-plays/buy-spotify-plays-in-bangladesh-for-better-music-streaming-growth.webp',
      alt: 'Buy Spotify Plays in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'Spotify Services',
    serviceLabel: 'Plays',
    serviceTypeLabel: 'Plays',
    urlFieldLabel: 'Spotify Track URL',
    urlPlaceholder: 'https://open.spotify.com/track/yourtrackid',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<Spotify Plays> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is built for Bangladeshi artists, musicians, labels, agencies, and creators who want a simple way to improve Spotify track activity. From local payment options to easy order tracking, every part of the platform helps music professionals manage Spotify streaming growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your Spotify plays order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for quick and smooth order handling.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy Spotify plays in Bangladesh without spending a large music promotion budget. Our pricing works well for new songs, indie artists, producers, DJs, small labels, and music marketing agencies.',
        icon: '/images/subservice/shared/affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          'Need help before or after placing an order? TrendEvo support can guide you with service selection, order status, payment issues, and dashboard use.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes Spotify streaming promotion easier for Bangladeshi users who prefer local payment systems.',
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
          'TrendEvo focuses on stable Spotify plays services that help improve song presence and streaming signals. You can start small, test the service, and scale based on your release goals.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy Spotify Plays',
    title: 'Who Should Buy gt<Spotify Plays> in Bangladesh?',
    subtitle:
      'A strong play count can help a Spotify track look more active when new listeners open it for the first time. TrendEvo’s Spotify plays service is useful for Bangladeshi users who want better music promotion, stronger release presentation, and a smoother start before sharing songs, pitching playlists, or running social media campaigns.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Independent Artists',
        description:
          'Independent artists in Bangladesh often need early streaming activity to support new releases. Spotify plays can help their songs look more active, making listeners more likely to press play, explore the artist profile, and follow future releases.',
      },
      {
        title: 'Musicians, Singers, and Producers',
        description:
          'Singers, composers, beat makers, and producers need better track visibility when sharing songs online. Buying Spotify plays in Bangladesh can support new singles, collaborations, EPs, and album campaigns.',
      },
      {
        title: 'DJs and Remix Creators',
        description:
          'DJs and remix creators often promote tracks through Facebook, YouTube, TikTok, Instagram, and local music communities. Spotify plays can help their tracks look stronger when they share mixes, remixes, edits, and electronic releases.',
      },
      {
        title: 'Record Labels and Music Brands',
        description:
          'Labels, studios, and music brands need strong streaming activity for new artist campaigns. Spotify plays can support release marketing, artist branding, playlist pitching, and digital music promotion.',
      },
      {
        title: 'Music Promotion Agencies',
        description:
          'Agencies and resellers need fast, simple, and affordable Spotify growth solutions for client projects. TrendEvo helps them manage Spotify plays orders from one dashboard with local payment support, clear pricing, and services suitable for Bangladesh-based music campaigns.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy Spotify Plays on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying Spotify plays in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so artists, musicians, labels, agencies, and resellers can place orders without technical knowledge.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    steps: [
      {
        number: '01',
        title: 'Simple Registration',
        description:
          'Create your TrendEvo account with basic details and get access to the dashboard. From there, you can browse our lnk<smm growth services|/services>, check prices, and manage your orders from one place.',
      },
      {
        number: '02',
        title: 'Add Funds to Your Balance',
        description:
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your Spotify plays order.',
      },
      {
        number: '03',
        title: 'Choose Spotify Plays Service',
        description:
          'Go to the Spotify services section and select the plays package that matches your goal. You can choose a small starter order, a larger release campaign package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your Spotify Track URL',
        description:
          'Paste your Spotify song link, select the quantity, and submit the order. You do not need to share your Spotify password. TrendEvo processes the order using the public track URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<Spotify Plays>',
    paragraphs: [
      'Buying Spotify plays can help your song look more active, but the best results come when the order supports a clear music promotion plan. Before placing an order on TrendEvo, make sure your Spotify track is public, the song link is correct, and your selected package fits your current release stage.',
      'You do not need to share your Spotify password to buy Spotify plays in Bangladesh. TrendEvo only needs your public Spotify track URL to process the order. This keeps your account safer and makes the ordering process simple for artists, musicians, labels, agencies, and resellers.',
      'For a natural streaming pattern, avoid sudden oversized orders on a brand-new track. Start with a suitable quantity, promote your release across social media, and increase your play count step by step. This helps your song look more believable to Bangladeshi and global listeners.',
      'Spotify plays improve track activity and streaming presence, but they should work together with real music promotion. Share your song on Facebook, TikTok, Instagram, YouTube Shorts, fan groups, music communities, and playlists so listeners have more reasons to discover your track.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy Spotify Plays> in Bangladesh',
    subtitle:
      'Find clear answers about buying Spotify plays in Bangladesh, payment options, delivery, safety, and order management on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy Spotify plays from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public Spotify track link. We never ask for your Spotify password, so your login details stay private.',
      },
      {
        question: 'Can I buy Spotify plays in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your Spotify plays order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for artists, musicians, labels, agencies, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my Spotify password?',
        answer:
          'No, you do not need to share your password. To buy Spotify plays, you only need to provide the correct Spotify track URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my Spotify plays order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, order quantity, and current order volume.',
      },
      {
        question: 'Can I track my Spotify plays order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your Spotify plays order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy plays for a new Spotify song?',
        answer:
          'Yes, new Spotify tracks can order plays. For a natural appearance, we suggest starting with a smaller package and increasing your play count step by step.',
      },
      {
        question: 'Are Spotify plays and Spotify followers the same?',
        answer:
          'No, they are different. Spotify plays increase streaming activity on a track, while Spotify followers support artist profile growth. Many artists use both services for stronger Spotify marketing.',
      },
      {
        question: 'Will buying Spotify plays help my song get more attention?',
        answer:
          'Spotify plays can improve track activity and make your song look more active, but long-term attention also depends on music quality, playlist exposure, social sharing, and release strategy.',
      },
      {
        question: 'Who can use TrendEvo’s Spotify plays service?',
        answer:
          'TrendEvo is useful for Bangladeshi independent artists, singers, musicians, producers, DJs, record labels, music creators, agencies, freelancers, and SMM resellers who want stronger Spotify track activity.',
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
      'Spotify plays build track activity, but better music growth comes when your artist profile also looks trusted. TrendEvo offers related Spotify SMM services in Bangladesh to support visibility, credibility, and stronger music promotion.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy Spotify Followers',
        description:
          'Grow your Spotify artist profile with more followers. Spotify followers help your profile look more established, support artist branding, and make new listeners more comfortable exploring your music.',
        icon: '/images/subservice/shared/buy-facebook-page-likes-icon.webp',
        iconWidth: 39,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'h-[128.12%] w-[120.8%] object-cover -translate-x-[10.27%] -translate-y-[9.29%]',
      },
      {
        title: 'Buy Spotify Monthly Listeners',
        description:
          'Increase listener activity around your Spotify profile with more monthly listeners. This service is useful for new releases, playlist campaigns, album promotion, and artist visibility projects that need stronger audience signals.',
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
      'Join TrendEvo and manage your Spotify, Facebook, Instagram, YouTube, TikTok, Telegram, and website traffic orders from one simple dashboard. Add funds with bKash, Nagad, or Rocket, choose your service, and start growing with secure order tracking.',
    primaryButtonLabel: 'Get Started Free',
    secondaryButtonLabel: 'See All Spotify Services',
    secondaryButtonHref: '/spotify-smm-panel',
  },
};
