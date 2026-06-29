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

type SoundcloudFollowersPageData = {
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

export const data: SoundcloudFollowersPageData = {
  seo: {
    title: 'Buy SoundCloud Followers in Bangladesh | TrendEvo',
    description:
      'Buy SoundCloud Followers in Bangladesh from TrendEvo. Grow your artist profile, build music credibility, and reach more listeners with bKash, Nagad, Rocket, and secure order tracking.',
    canonical: '/buy-soundcloud-followers',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    trustLabel: '⭐ 4.8 Rating | Trusted by Bangladeshi Artists, Creators & Agencies',
    title: 'Buy gt<SoundCloud Followers> in Bangladesh for Stronger Artist Growth',
    description:
      'SoundCloud is a powerful platform for independent artists, musicians, DJs, producers, beat makers, singers, and music creators who want their tracks to reach more listeners. A SoundCloud profile with more followers often looks more active, trusted, and worth checking. TrendEvo helps users buy SoundCloud followers in Bangladesh with simple ordering, local payment support, and smooth delivery.',
    descriptionSecondary:
      'Our SoundCloud followers service is made for artists and music brands that need better profile credibility, stronger listener community, and improved music discovery. You can start with a small package, pay through bKash, Nagad, Rocket, or other supported methods, and grow your SoundCloud profile without sharing your password.',
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
      src: '/images/subservice/buy-soundcloud-followers/buy-soundcloud-followers-in-bangladesh-for-stronger-artist-growth.webp',
      alt: 'Buy SoundCloud Followers in Bangladesh with TrendEvo',
      width: 558,
      height: 621,
      maxWidthClassName: 'max-w-[558px]',
      unoptimized: true,
    },
  },

  orderForm: {
    badge: 'SoundCloud Followers',
    serviceLabel: 'Followers',
    serviceTypeLabel: 'Followers',
    urlFieldLabel: 'SoundCloud Profile Link',
    urlPlaceholder: 'https://soundcloud.com/yourprofile',
    submitLabel: 'Pay Now With bKash / Nagad',
  },

  whyChoose: {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: 'Why Choose TrendEvo to Buy gt<SoundCloud Followers> in Bangladesh',
    subtitle:
      'lnk<TrendEvo|/about-us> is a trusted lnk<SoundCloud SMM Panel|/soundcloud-smm-panel> made for Bangladeshi artists, creators, agencies, and music marketers who want an easier way to grow SoundCloud profiles. As a reliable lnk<SMM Panel BD|/>, TrendEvo offers local payment support, simple order tracking, and smooth service management so musicians, producers, DJs, labels, and resellers can build SoundCloud growth with more confidence.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          'Your SoundCloud followers order starts processing after submission. Delivery speed may depend on the selected package and order size, but TrendEvo is designed for quick handling and smooth order progress.',
        icon: '/images/subservice/shared/instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          'You can buy SoundCloud followers in Bangladesh without a large music promotion budget. Our pricing works well for new artists, solo musicians, producers, beat makers, DJs, indie labels, agencies, and SMM resellers.',
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
          'Pay easily through bKash, Nagad, Rocket, and other supported methods. TrendEvo makes SoundCloud growth easier for Bangladeshi users who prefer fast and familiar local payment systems.',
        icon: '/images/subservice/shared/local-payment-options-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: 'Quality-Focused Followers',
        description:
          'TrendEvo focuses on stable SoundCloud follower services that help improve artist profile presence and music credibility. You can start small, test the service, and scale based on your release plan or promotion goal.',
        iconFrameSrc:
          '/images/subservice/shared/real-followers-from-quality-sources-decoration.png',
      },
    ],
  },

  whoShouldBuy: {
    badge: 'Buy SoundCloud Followers',
    title: 'Who Should Buy gt<SoundCloud Followers> in Bangladesh?',
    subtitle:
      'A strong follower count can help a SoundCloud profile look more serious when someone discovers your music for the first time. TrendEvo’s SoundCloud followers service is useful for Bangladeshi artists, creators, labels, and music marketers who want better artist authority, stronger fanbase growth, and a smoother start before promoting tracks, albums, or playlists.',
    titleClassName:
      'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    items: [
      {
        title: 'Independent Artists and New Musicians',
        description:
          'New artists often struggle to get attention because their profiles look empty or inactive. Buying SoundCloud followers in Bangladesh can help singers, rappers, instrumental artists, and indie musicians build an early trust signal before sharing new tracks or music links.',
      },
      {
        title: 'Producers, DJs, and Beat Makers',
        description:
          'Producers and beat makers need a strong profile to attract rappers, singers, labels, and collaborators. More SoundCloud followers can support music branding for EDM DJs, hip-hop producers, remix creators, lo-fi artists, and beat sellers who want their work to look more established.',
      },
      {
        title: 'Singers and Music Creators',
        description:
          'Singers, cover artists, vocalists, and music creators use SoundCloud to publish demos, covers, original songs, and experimental tracks. A stronger follower count can help their profile look more active when listeners, fans, or industry contacts visit after hearing a song.',
      },
      {
        title: 'Record Labels and Music Promotion Agencies',
        description:
          'Record labels, artist managers, and music promotion agencies need simple growth solutions for multiple artists. TrendEvo helps them manage SoundCloud follower orders from one dashboard with clear pricing, local payment support, and reseller-friendly access for Bangladesh-based campaigns.',
      },
      {
        title: 'Artists Before a New Release',
        description:
          'Before releasing a new song, EP, mixtape, remix, or album, an artist profile should not look inactive. A starter SoundCloud follower package can help create a stronger first impression, making listeners more likely to explore tracks, playlists, and future releases.',
      },
    ],
  },

  workingProcess: {
    badge: 'WORKING PROCESS',
    underlineSrc: '/images/working-process/how-to-buy-facebook-followers-on-trendevo-step-by-step-section-underline.svg',
    underlineWidth: 216,
    title: 'How to Buy SoundCloud Followers on TrendEvo — gt<Step by Step>',
    subtitle:
      'Buying SoundCloud followers in Bangladesh should not feel confusing. TrendEvo keeps the full process simple, so artists, producers, DJs, labels, agencies, and resellers can place orders without technical knowledge.',
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
          'Add money to your account using supported payment methods in Bangladesh. You can fund your balance through bKash, Nagad, Rocket, or other available options before placing your SoundCloud followers order.',
      },
      {
        number: '03',
        title: 'Choose SoundCloud Followers Service',
        description:
          'Go to the SoundCloud services section and select the follower package that matches your goal. You can choose a small starter order, a larger artist growth package, or a reseller-friendly quantity.',
      },
      {
        number: '04',
        title: 'Enter Your SoundCloud Profile Link',
        description:
          'Paste your SoundCloud profile link, select the quantity, and submit the order. You do not need to share your SoundCloud password. TrendEvo processes the order using your public profile URL only.',
      },
    ],
  },

  thingsToKnow: {
    badge: 'Things to Know',
    title: 'Things to Know Before You Buy gt<SoundCloud Followers>',
    paragraphs: [
      'Buying SoundCloud followers can help your artist profile look more active, but the best results come when the order matches your real music growth plan. Before placing an order on TrendEvo, make sure your SoundCloud profile is public, your profile link is correct, and your selected package fits your current artist presence.',
      'You do not need to share your SoundCloud password to buy SoundCloud followers in Bangladesh. TrendEvo only needs your public profile URL to process the order. This keeps your account safer and makes the ordering process simple for artists, producers, labels, agencies, and resellers.',
      'For a natural artist profile appearance, avoid sudden oversized orders on a brand-new SoundCloud account. Start with a suitable quantity, upload strong tracks, and increase your follower count step by step. This helps your profile look more believable to Bangladeshi listeners and music communities.',
      'SoundCloud followers improve artist credibility and profile presence, but they should work together with regular music activity. Upload new tracks, share playlists, promote releases, update your bio, add cover art, and connect your SoundCloud profile with Facebook, Instagram, YouTube, TikTok, and Spotify for better music branding.',
    ],
    ctaLabel: 'Create an Account Now',
  },

  faq: {
    label: 'Frequently Asked Questions',
    title: 'Frequently Asked Questions — gt<Buy SoundCloud Followers> in Bangladesh',
    subtitle:
      'Find clear answers about buying SoundCloud followers in Bangladesh, payment options, delivery, safety, order tracking, and artist profile growth on TrendEvo.',
    bg: 'section-7',
    items: [
      {
        question: 'Is it safe to buy SoundCloud followers from TrendEvo?',
        answer:
          'Yes, TrendEvo uses a simple order process where you only need to submit your public SoundCloud profile link. We do not ask for your SoundCloud password, so your login details stay private.',
      },
      {
        question: 'Can I buy SoundCloud followers in Bangladesh with bKash?',
        answer:
          'Yes, you can add funds using bKash and then place your SoundCloud followers order from the TrendEvo dashboard. We also support other local payment options for Bangladeshi users.',
      },
      {
        question: 'Do you accept Nagad or Rocket payments?',
        answer:
          'Yes, TrendEvo supports local payment methods such as Nagad, Rocket, and other available options. This makes it easier for artists, musicians, producers, DJs, agencies, labels, and resellers in Bangladesh.',
      },
      {
        question: 'Do I need to share my SoundCloud password?',
        answer:
          'No, you do not need to share your password. To buy SoundCloud followers, you only need to provide the correct SoundCloud profile URL and choose your preferred quantity.',
      },
      {
        question: 'How fast will my SoundCloud followers order start?',
        answer:
          'Most orders start after submission and payment confirmation. Delivery time can vary based on service type, quantity, profile status, and current order volume.',
      },
      {
        question: 'Can I track my SoundCloud followers order?',
        answer:
          'Yes, you can track your order status from the TrendEvo dashboard. The order panel helps you check whether your SoundCloud followers order is pending, processing, completed, or partially completed.',
      },
      {
        question: 'Can I buy followers for a new SoundCloud profile?',
        answer:
          'Yes, new SoundCloud profiles can order followers. For a natural appearance, we suggest starting with a smaller package and increasing your follower count step by step.',
      },
      {
        question: 'Are SoundCloud followers useful for music promotion?',
        answer:
          'Yes, SoundCloud followers can support music promotion by improving artist profile credibility. A stronger follower count can make your profile look more active when listeners discover your songs, beats, playlists, or remixes.',
      },
      {
        question: 'Will buying SoundCloud followers increase my track plays?',
        answer:
          'SoundCloud followers can improve profile presence and trust, but track plays also depend on your music, sharing strategy, and promotion. For better results, combine followers with regular uploads, track promotion, playlist sharing, and audience engagement.',
      },
      {
        question: 'Who can use TrendEvo’s SoundCloud followers service?',
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
      'SoundCloud followers build artist profile trust, but better music growth comes when your tracks also look active. TrendEvo offers related SoundCloud SMM services in Bangladesh to support music discovery, audience reach, and stronger social proof.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Buy SoundCloud Plays',
        description:
          'Increase the play count of your SoundCloud tracks and make your music look more active. SoundCloud plays are useful for new releases, remixes, beats, demos, playlists, and promotional campaigns that need stronger listener attention.',
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
