import type { FaqItem, FaqSectionData } from '@/components/sections/faq-section';
import type { TestimonialsSectionData } from '@/components/sections/testimonials-section';

type SEO = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge: string;
  title: string;
  subtitle: string;
  underlineSrc?: string;
  underlineWidth?: number;
  align?: 'left' | 'center';
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
};

type HomeHeroTrustBadge = {
  avatarSrcs: string[];
  ratingIconSrc: string;
  rating: string;
  label: string;
};

type HomeHeroData = {
  trustBadge: HomeHeroTrustBadge;
  heading: string;
  description: string;
  promo: {
    before: string;
    highlight: string;
    after: string;
  };
  signInLabel: string;
  createAccountLabel: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type HomeStatItem = {
  value: string;
  label: string;
  icon: string;
  width: number;
  height: number;
  displayWidth: number;
  mobileDisplayWidth: number;
  tabletDisplayWidth: number;
};

type HomeServiceItem = {
  number: string;
  title: string;
  description: string;
};

type HomePlatformService = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  marketingTitle: string;
  description: string;
  services: HomeServiceItem[];
};

type HomeAboutMetric = {
  value: string;
  label: string;
  labelClassName?: string;
  splitLabel?: boolean;
};

type HomeWorkingProcessStep = {
  number: string;
  title: string;
  description: string;
  highlighted: boolean;
  corner?: 'tl' | 'br';
};

type HomeWhyChooseUsFeature = {
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

type HomePlatformMarqueeItem = {
  name: string;
  icon: string;
  iconSize?: number;
  fullFrame?: boolean;
};

type HomeAdvantageItem = {
  title: string;
  description: string;
};

type HomePricingPlatform = {
  id: string;
  label: string;
  icon: string;
};

type HomePricingFeature = {
  label: string;
  icon: string;
  size?: number;
};

type HomePricingPlan = {
  name: string;
  planType: 'basic' | 'professional';
  price: string;
  description: string;
  featured: boolean;
  featureCount: number;
};

type HomeBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  authorName: string;
  authorAvatarSrc: string;
  publishedAt: string;
  readTime: string;
};

type HomeTestimonialsData = TestimonialsSectionData;

type HomePageData = {
  seo: SEO;
  hero: HomeHeroData;
  stats: {
    items: HomeStatItem[];
  };
  ourServices: {
    heading: SectionHeadingData;
    platforms: HomePlatformService[];
    ctaButtonLabel: string;
  };
  about: {
    heading: SectionHeadingData;
    features: string[];
    metricRows: [HomeAboutMetric, HomeAboutMetric][];
    ctaLabel: string;
    image: {
      src: string;
      alt: string;
    };
  };
  workingProcess: {
    heading: SectionHeadingData;
    steps: HomeWorkingProcessStep[];
  };
  whyChooseUs: {
    heading: SectionHeadingData;
    cardDescription: string;
    leftFeatures: HomeWhyChooseUsFeature[];
    rightFeatures: HomeWhyChooseUsFeature[];
    timelineSteps: string[];
  };
  paymentMethods: {
    heading: SectionHeadingData;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  platformMarquee: {
    platforms: HomePlatformMarqueeItem[];
  };
  advantages: {
    heading: SectionHeadingData;
    leftItems: HomeAdvantageItem[];
    rightItems: HomeAdvantageItem[];
    image: {
      src: string;
      alt: string;
    };
  };
  pricing: {
    heading: SectionHeadingData;
    platforms: HomePricingPlatform[];
    features: HomePricingFeature[];
    plans: HomePricingPlan[];
    planCtaLabel: string;
    priceSuffix: string;
  };
  testimonials: HomeTestimonialsData;
  faq: FaqSectionData;
  blog: {
    heading: SectionHeadingData;
    posts: HomeBlogPost[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
  };
};

const homeFaqDefaultAnswer =
  'TrendEvo provides fast, secure SMM services with transparent pricing, multiple payment options, and 24/7 support to help you grow across all major social platforms.';

const homeTestimonialQuote =
  'This platform helped us boost our brand visibility significantly. The results are real and the process is super easy. Five stars!';

const homeYoutubeReelVideoId = 'LXb3EKWsInQ';

export const pageData: HomePageData = {
  seo: {
    title: 'TrendEvo | Trusted SMM Panel',
    description:
      'TrendEvo is a next-generation SMM panel delivering fast, secure social media growth for brands, creators, and agencies in Bangladesh.',
    canonical: '/',
  },

  hero: {
    trustBadge: {
      avatarSrcs: [
        '/images/reviews/hero-avatar-1.png',
        '/images/reviews/hero-avatar-2.png',
        '/images/reviews/hero-avatar-3.png',
        '/images/reviews/hero-avatar-4.png',
        '/images/reviews/hero-avatar-5.png',
        '/images/reviews/hero-avatar-3.png',
      ],
      ratingIconSrc: '/images/icons/hero-star-rating.png',
      rating: '(4.8)',
      label: 'Trusted by 50,000+ Users in Bangladesh',
    },
    heading:
      'Trusted gt<SMM Panel>\nHigh-Speed Delivery With gt<Secure Services>',
    description:
      'gt<TrendEvo> is a next-generation viral growth platform crafted to help brands, creators, and agencies unlock their full digital potential. We combine speed, reliability, and scalable infrastructure to deliver measurable growth in reach, engagement, and online visibility across global markets.',
    promo: {
      before: 'Enjoy up to ',
      highlight: '30%',
      after: ' bonus on every deposit, starting at only $1.',
    },
    signInLabel: 'Sign In',
    createAccountLabel: 'Create an Account',
    illustration: {
      src: '/images/hero/hero-illustration.png',
      alt: 'TrendEvo platform user with social media icons and analytics',
      width: 669,
      height: 728,
    },
  },

  stats: {
    items: [
      {
        value: '1.2M+',
        label: 'Total Completed Orders',
        icon: '/images/stats/stats-orders-icon.png',
        width: 167,
        height: 150,
        displayWidth: 111,
        mobileDisplayWidth: 80,
        tabletDisplayWidth: 96,
      },
      {
        value: '2,500+',
        label: 'Total Services Available',
        icon: '/images/stats/stats-services-icon.png',
        width: 152,
        height: 150,
        displayWidth: 101,
        mobileDisplayWidth: 73,
        tabletDisplayWidth: 87,
      },
      {
        value: '50K+',
        label: 'Total Users',
        icon: '/images/stats/stats-users-icon.png',
        width: 188,
        height: 150,
        displayWidth: 125,
        mobileDisplayWidth: 90,
        tabletDisplayWidth: 108,
      },
      {
        value: '75%',
        label: 'Customer Satisfaction Rate',
        icon: '/images/stats/stats-satisfaction-icon.png',
        width: 144,
        height: 150,
        displayWidth: 96,
        mobileDisplayWidth: 69,
        tabletDisplayWidth: 83,
      },
    ],
  },

  ourServices: {
    heading: {
      badge: 'our services',
      title: 'Powerful gt<SMM Services> for Fast Growth',
      subtitle:
        "Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered.",
      titleClassName: 'text-2xl sm:text-[28px] lg:text-[36px]',
      subtitleClassName: 'text-sm sm:text-base md:text-lg',
    },
    ctaButtonLabel: 'View {label} Services',
    platforms: [
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/our-services/platforms/facebook.png',
        marketingTitle: 'Facebook Marketing Services',
        description:
          'Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.',
        services: [
          {
            number: '01',
            title: 'Facebook Post Likes-',
            description: 'Boost post engagement and credibility with real likes.',
          },
          {
            number: '02',
            title: 'Facebook Likes-',
            description: 'Grow your page popularity with high-quality likes.',
          },
          {
            number: '03',
            title: 'Facebook Comments-',
            description: 'Increase interaction with engaging comments.',
          },
          {
            number: '04',
            title: 'Facebook Shares-',
            description: 'Expand your reach with powerful shares.',
          },
          {
            number: '05',
            title: 'Facebook Video Views-',
            description: 'Get more visibility with high-retention video views.',
          },
          {
            number: '06',
            title: 'Facebook Reactions-',
            description:
              'Make your posts more engaging with diverse reactions..',
          },
        ],
      },
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/our-services/platforms/instagram.png',
        marketingTitle: 'Instagram Marketing Services',
        description:
          'Grow your Instagram presence with targeted followers, likes, and engagement that builds authentic brand authority.',
        services: [
          {
            number: '01',
            title: 'Instagram Followers-',
            description: 'Increase your follower count with real, active users.',
          },
          {
            number: '02',
            title: 'Instagram Likes-',
            description: 'Boost post visibility with high-quality likes.',
          },
          {
            number: '03',
            title: 'Instagram Comments-',
            description: 'Drive meaningful conversations on your posts.',
          },
          {
            number: '04',
            title: 'Instagram Views-',
            description: 'Maximize reach for reels and story content.',
          },
          {
            number: '05',
            title: 'Instagram Saves-',
            description: 'Improve algorithm ranking with post saves.',
          },
          {
            number: '06',
            title: 'Instagram Shares-',
            description: 'Expand discovery through content sharing.',
          },
        ],
      },
      {
        id: 'twitter',
        label: 'X (Twitter)',
        icon: '/images/our-services/platforms/twitter.png',
        iconClassName: 'scale-150',
        marketingTitle: 'X (Twitter) Marketing Services',
        description:
          'Amplify your voice on X with followers, retweets, and engagement that positions your brand at the center of trending conversations.',
        services: [
          {
            number: '01',
            title: 'X Followers-',
            description: 'Build a credible profile with real followers.',
          },
          {
            number: '02',
            title: 'X Likes-',
            description: 'Increase tweet engagement and visibility.',
          },
          {
            number: '03',
            title: 'X Retweets-',
            description: 'Spread your message across wider networks.',
          },
          {
            number: '04',
            title: 'X Comments-',
            description: 'Spark discussions around your content.',
          },
          {
            number: '05',
            title: 'X Impressions-',
            description: 'Boost overall tweet reach and exposure.',
          },
          {
            number: '06',
            title: 'X Bookmarks-',
            description: 'Encourage saves for long-term visibility.',
          },
        ],
      },
      {
        id: 'youtube',
        label: 'YouTube',
        icon: '/images/our-services/platforms/youtube.png',
        marketingTitle: 'YouTube Marketing Services',
        description:
          'Accelerate channel growth with views, subscribers, and engagement that helps your videos rank higher and reach more viewers.',
        services: [
          {
            number: '01',
            title: 'YouTube Subscribers-',
            description: 'Grow your channel with active subscribers.',
          },
          {
            number: '02',
            title: 'YouTube Views-',
            description: 'Increase watch counts on your videos.',
          },
          {
            number: '03',
            title: 'YouTube Likes-',
            description: 'Improve video credibility with likes.',
          },
          {
            number: '04',
            title: 'YouTube Comments-',
            description: 'Drive community interaction on videos.',
          },
          {
            number: '05',
            title: 'YouTube Watch Hours-',
            description: 'Meet monetization thresholds faster.',
          },
          {
            number: '06',
            title: 'YouTube Shares-',
            description: 'Expand video discovery through sharing.',
          },
        ],
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        icon: '/images/our-services/platforms/tiktok.png',
        marketingTitle: 'TikTok Marketing Services',
        description:
          'Go viral faster with TikTok followers, views, and engagement designed to boost your content in the For You feed.',
        services: [
          {
            number: '01',
            title: 'TikTok Followers-',
            description: 'Build a loyal audience on TikTok.',
          },
          {
            number: '02',
            title: 'TikTok Likes-',
            description: 'Increase engagement on your videos.',
          },
          {
            number: '03',
            title: 'TikTok Views-',
            description: 'Boost video watch counts rapidly.',
          },
          {
            number: '04',
            title: 'TikTok Shares-',
            description: 'Amplify reach through content sharing.',
          },
          {
            number: '05',
            title: 'TikTok Comments-',
            description: 'Encourage community interaction.',
          },
          {
            number: '06',
            title: 'TikTok Saves-',
            description: 'Improve algorithm performance with saves.',
          },
        ],
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        icon: '/images/our-services/platforms/linkedin.png',
        marketingTitle: 'LinkedIn Marketing Services',
        description:
          'Strengthen your professional brand with LinkedIn connections, followers, and engagement that opens doors to new opportunities.',
        services: [
          {
            number: '01',
            title: 'LinkedIn Followers-',
            description: 'Grow your company or personal page.',
          },
          {
            number: '02',
            title: 'LinkedIn Connections-',
            description: 'Expand your professional network.',
          },
          {
            number: '03',
            title: 'LinkedIn Likes-',
            description: 'Boost post engagement and reach.',
          },
          {
            number: '04',
            title: 'LinkedIn Comments-',
            description: 'Spark professional discussions.',
          },
          {
            number: '05',
            title: 'LinkedIn Shares-',
            description: 'Increase content distribution.',
          },
          {
            number: '06',
            title: 'LinkedIn Endorsements-',
            description: 'Build credibility with skill endorsements.',
          },
        ],
      },
      {
        id: 'telegram',
        label: 'Telegram',
        icon: '/images/our-services/platforms/telegram.png',
        marketingTitle: 'Telegram Marketing Services',
        description:
          'Grow your Telegram channel or group with members and engagement that builds an active, responsive community.',
        services: [
          {
            number: '01',
            title: 'Telegram Members-',
            description: 'Increase channel or group membership.',
          },
          {
            number: '02',
            title: 'Telegram Views-',
            description: 'Boost post view counts.',
          },
          {
            number: '03',
            title: 'Telegram Reactions-',
            description: 'Drive engagement on channel posts.',
          },
          {
            number: '04',
            title: 'Telegram Shares-',
            description: 'Expand message reach organically.',
          },
          {
            number: '05',
            title: 'Telegram Poll Votes-',
            description: 'Increase participation in polls.',
          },
          {
            number: '06',
            title: 'Telegram Comments-',
            description: 'Build active discussion threads.',
          },
        ],
      },
      {
        id: 'discord',
        label: 'Discord',
        icon: '/images/our-services/platforms/discord.png',
        marketingTitle: 'Discord Marketing Services',
        description:
          'Build thriving Discord communities with members, online activity, and engagement that keeps your server active.',
        services: [
          {
            number: '01',
            title: 'Discord Members-',
            description: 'Grow your server membership.',
          },
          {
            number: '02',
            title: 'Discord Online Members-',
            description: 'Boost active online presence.',
          },
          {
            number: '03',
            title: 'Discord Reactions-',
            description: 'Increase message engagement.',
          },
          {
            number: '04',
            title: 'Discord Invites-',
            description: 'Drive new member acquisition.',
          },
          {
            number: '05',
            title: 'Discord Boosts-',
            description: 'Unlock premium server perks.',
          },
          {
            number: '06',
            title: 'Discord Messages-',
            description: 'Keep channels active and lively.',
          },
        ],
      },
      {
        id: 'spotify',
        label: 'Spotify',
        icon: '/images/our-services/platforms/spotify.png',
        marketingTitle: 'Spotify Marketing Services',
        description:
          'Increase your music reach with Spotify plays, followers, and playlist placements that grow your listener base.',
        services: [
          {
            number: '01',
            title: 'Spotify Plays-',
            description: 'Boost track and album play counts.',
          },
          {
            number: '02',
            title: 'Spotify Followers-',
            description: 'Grow your artist profile following.',
          },
          {
            number: '03',
            title: 'Spotify Saves-',
            description: 'Increase track library saves.',
          },
          {
            number: '04',
            title: 'Spotify Monthly Listeners-',
            description: 'Expand your active listener base.',
          },
          {
            number: '05',
            title: 'Spotify Playlist Adds-',
            description: 'Get featured on popular playlists.',
          },
          {
            number: '06',
            title: 'Spotify Pre-saves-',
            description: 'Build anticipation for new releases.',
          },
        ],
      },
      {
        id: 'soundcloud',
        label: 'SoundCloud',
        icon: '/images/our-services/platforms/soundcloud.png',
        marketingTitle: 'SoundCloud Marketing Services',
        description:
          'Elevate your SoundCloud profile with plays, followers, and reposts that help your tracks gain traction.',
        services: [
          {
            number: '01',
            title: 'SoundCloud Plays-',
            description: 'Increase track play counts.',
          },
          {
            number: '02',
            title: 'SoundCloud Followers-',
            description: 'Grow your artist following.',
          },
          {
            number: '03',
            title: 'SoundCloud Likes-',
            description: 'Boost track engagement metrics.',
          },
          {
            number: '04',
            title: 'SoundCloud Reposts-',
            description: 'Expand track reach through sharing.',
          },
          {
            number: '05',
            title: 'SoundCloud Comments-',
            description: 'Drive listener interaction.',
          },
          {
            number: '06',
            title: 'SoundCloud Downloads-',
            description: 'Increase offline track saves.',
          },
        ],
      },
      {
        id: 'snapchat',
        label: 'Snapchat',
        icon: '/images/our-services/platforms/snapchat.png',
        marketingTitle: 'Snapchat Marketing Services',
        description:
          'Grow your Snapchat presence with followers, views, and story engagement that connects you with a younger audience.',
        services: [
          {
            number: '01',
            title: 'Snapchat Followers-',
            description: 'Increase your Snapchat following.',
          },
          {
            number: '02',
            title: 'Snapchat Views-',
            description: 'Boost story and snap views.',
          },
          {
            number: '03',
            title: 'Snapchat Screenshots-',
            description: 'Encourage content sharing.',
          },
          {
            number: '04',
            title: 'Snapchat Replies-',
            description: 'Drive direct engagement.',
          },
          {
            number: '05',
            title: 'Snapchat Spotlight Views-',
            description: 'Increase spotlight content reach.',
          },
          {
            number: '06',
            title: 'Snapchat Story Views-',
            description: 'Maximize story visibility.',
          },
        ],
      },
      {
        id: 'website-traffic',
        label: 'Website Traffic',
        icon: '/images/our-services/platforms/web.png',
        marketingTitle: 'Website Traffic Services',
        description:
          'Drive targeted visitors to your website with high-quality traffic that improves rankings, conversions, and online visibility.',
        services: [
          {
            number: '01',
            title: 'Organic Traffic-',
            description: 'Increase natural search engine visits.',
          },
          {
            number: '02',
            title: 'Direct Traffic-',
            description: 'Boost direct URL visits.',
          },
          {
            number: '03',
            title: 'Referral Traffic-',
            description: 'Gain visitors from external sources.',
          },
          {
            number: '04',
            title: 'Social Traffic-',
            description: 'Drive visitors from social platforms.',
          },
          {
            number: '05',
            title: 'Geo-Targeted Traffic-',
            description: 'Reach visitors in specific regions.',
          },
          {
            number: '06',
            title: 'Mobile Traffic-',
            description: 'Increase mobile device visits.',
          },
        ],
      },
    ],
  },

  about: {
    heading: {
      badge: 'ABOUT US',
      title: 'Your Trusted gt<Social Media>\nGrowth Partner',
      subtitle:
        'A reliable SMM platform designed to deliver fast, secure, and high-quality social media growth for individuals, businesses, and resellers.',
      align: 'left',
      underlineWidth: 114,
      titleClassName:
        'max-w-[642px] text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[642px] text-sm font-medium sm:text-base md:text-lg lg:text-[22px] lg:leading-[1.5]',
    },
    features: [
      'Fast Delivery with Smooth and Reliable Performance',
      'Real & High-Quality Engagement to Build Strong Social Proof',
      'Safe, Secure & High Retention for Long-Term Growth',
    ],
    metricRows: [
      [
        {
          value: '06+',
          label: 'Years of Digital Marketing Experience',
          labelClassName: 'w-auto sm:w-[164px]',
        },
        {
          value: '100k+',
          label: 'Orders Delivered Successfully',
          labelClassName: 'w-auto sm:w-[130px]',
        },
      ],
      [
        {
          value: '50K+',
          label: 'Active Users & Businesses Served',
          labelClassName: 'w-auto sm:w-[164px]',
        },
        {
          value: '98%',
          label: 'Customer Satisfaction Rate',
          labelClassName: 'whitespace-normal',
          splitLabel: true,
        },
      ],
    ],
    ctaLabel: 'Discover More',
    image: {
      src: '/images/about/your-trusted-social-media-growth-partner.png',
      alt: 'TrendEvo growth partner',
    },
  },

  workingProcess: {
    heading: {
      badge: 'WORKING PROCESS',
      title: 'Grow Your gt<Socials in 4 Simple> Steps',
      subtitle:
        'A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.',
      underlineSrc: '/images/working-process/underline.svg',
      underlineWidth: 216,
      titleClassName:
        'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[868px] px-1 text-center text-sm text-[#4f586d] sm:px-0 sm:text-base md:text-lg',
      className: 'gap-3 sm:gap-4',
    },
    steps: [
      {
        number: '01',
        title: 'Create Account',
        description:
          'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
        highlighted: true,
        corner: 'tl',
      },
      {
        number: '02',
        title: 'Add Funds',
        description:
          'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
        highlighted: false,
      },
      {
        number: '03',
        title: 'Select Service',
        description:
          'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
        highlighted: false,
      },
      {
        number: '04',
        title: 'Place your order',
        description:
          'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
        highlighted: true,
        corner: 'br',
      },
    ],
  },

  whyChooseUs: {
    heading: {
      badge: 'Why Choose Us',
      title: 'Why gt<Choose Us>',
      subtitle:
        'Boost your social media growth with our fast, reliable, and high-quality SMM services. We provide secure delivery, competitive pricing, and trusted support to help your brand grow faster.',
      underlineSrc: '/images/why-choose-us/underline.svg',
      underlineWidth: 169,
      titleClassName:
        'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[924px] text-sm font-medium leading-normal text-[#4f586d] sm:text-base md:text-lg',
    },
    cardDescription:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
    leftFeatures: [
      {
        title: 'Cheapest SMM Panel',
        icon: '/images/why-choose-us/cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Fast & Reliable Delivery',
        icon: '/images/why-choose-us/fast-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Multitude of Services',
        icon: '/images/why-choose-us/multitude-services-icon.png',
        iconWidth: 57,
        iconHeight: 30,
      },
    ],
    rightFeatures: [
      {
        title: 'Real-time & Data',
        icon: '/images/why-choose-us/realtime-data-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Bulk Orders Provide',
        icon: '/images/why-choose-us/bulk-orders-icon.png',
        iconWidth: 46,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        icon: '/images/why-choose-us/customer-support-icon.png',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
    timelineSteps: ['01', '02', '03'],
  },

  paymentMethods: {
    heading: {
      badge: 'Payment Methods',
      title: '10+ Payment Methods gt<Available For Users>',
      subtitle:
        'Choose from 10+ secure and convenient payment methods to pay your way. Enjoy fast, hassle-free transactions and get instant access to all our services.',
      underlineSrc: '/images/payment-methods/underline.svg',
      underlineWidth: 193,
      titleClassName:
        'max-w-[1000px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[924px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    },
    image: {
      src: '/images/payment-methods/payment-methods.png',
      alt: 'Supported payment methods including Visa, bKash, Nagad, Bitcoin, Mastercard, and more',
      width: 1920,
      height: 470,
    },
  },

  platformMarquee: {
    platforms: [
      {
        name: 'Instagram',
        icon: '/images/platform-marquee/platform-facebook-icon.png',
        iconSize: 20,
      },
      {
        name: 'Instagram',
        icon: '/images/platform-marquee/platform-instagram-icon.png',
        iconSize: 25,
      },
      {
        name: 'X (Twitter)',
        icon: '/images/platform-marquee/platform-twitter-icon.png',
        iconSize: 25,
      },
      {
        name: 'YouTube',
        icon: '/images/platform-marquee/platform-youtube-icon.png',
        iconSize: 25,
      },
      {
        name: 'TikTok',
        icon: '/images/platform-marquee/platform-tiktok-icon.png',
        iconSize: 25,
      },
      {
        name: 'LinkedIn',
        icon: '/images/platform-marquee/platform-linkedin-icon.png',
        iconSize: 25,
      },
      {
        name: 'Telegram',
        icon: '/images/platform-marquee/platform-telegram-icon.png',
        iconSize: 25,
      },
      {
        name: 'Discord',
        icon: '/images/platform-marquee/platform-discord-icon.png',
        iconSize: 25,
      },
      {
        name: 'Spotify',
        icon: '/images/platform-marquee/platform-spotify-icon.png',
        iconSize: 25,
      },
      {
        name: 'Snapchat',
        icon: '/images/platform-marquee/platform-snapchat-icon.png',
        iconSize: 25,
      },
      {
        name: 'SoundCloud',
        icon: '/images/platform-marquee/platform-soundcloud-icon.svg',
        fullFrame: true,
      },
    ],
  },

  advantages: {
    heading: {
      badge: 'ADVANTAGES',
      title: 'Advantages of using gt<our panel services>',
      subtitle:
        'We provide SMM services on almost every social media platform. We have everything you would need to increase engagement. Check out our range of services. Choose the one you need!',
      underlineSrc: '/images/advantages/underline.svg',
      underlineWidth: 150,
      titleClassName:
        'whitespace-normal text-2xl tracking-[0.48px] text-[#13203b] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[868px] text-sm font-medium text-[#4f586d] sm:text-base md:text-lg',
    },
    leftItems: [
      {
        title:
          'Lowest-Cost gt<SMM> and gt<Social Media> Marketing Services',
        description:
          'Affordable SMM services let businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and Twitter. Start small, test, and scale campaigns while boosting reach and visibility—maximizing results without overspending.',
      },
      {
        title:
          'Reliable gt<SMM> Reseller Support for Growing gt<Your Business>',
        description:
          'SMM reseller support lets entrepreneurs, agencies, and freelancers grow fast without building from scratch. Deliver ready-made services under your brand, customize packages, and scale confidently while maintaining quality and boosting revenue.',
      },
    ],
    rightItems: [
      {
        title:
          'Multiple gt<Safe Payment> Options for gt<SMM> Orders',
        description:
          'Enjoy multiple safe payment options, including cards, PayPal, and cryptocurrencies.All transactions are secure, encrypted, and fraud-protected for peace of mind.\n\nFocus on growing your social media presence without any payment worries.',
      },
      {
        title:
          '24/7 Live Support for All gt<SMM Services> What You Needs',
        description:
          'Get 24/7 live support for all your SMM and Instagram panel needs.Instant help ensures smooth campaigns, quick issue resolution, and peace of mind.Focus on growth while experts are always ready to assist.',
      },
    ],
    image: {
      src: '/images/advantages/advantage.png',
      alt: 'SMM panel advantages illustration',
    },
  },

  pricing: {
    heading: {
      badge: 'PRICING',
      title: 'Pricing Preview of Our gt<SMM Panel Services>',
      subtitle:
        'Simple, Clear, and Affordable for Everyone. We make social media growth easy without high costs. Our prices are clear, fair, and fit every budget.',
      underlineSrc: '/images/pricing/underline.svg',
      underlineWidth: 90,
      titleClassName:
        'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[1090px] text-center text-sm leading-normal text-[#404a60] sm:text-base md:text-lg',
    },
    platforms: [
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/icons/platform-instagram.png',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/icons/platform-facebook.png',
      },
      {
        id: 'youtube',
        label: 'YouTube',
        icon: '/images/icons/platform-youtube.png',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        icon: '/images/icons/platform-tiktok.png',
      },
    ],
    features: [
      {
        label: 'Guarantee Fast Delivery',
        icon: '/images/pricing/feature-security.svg',
      },
      {
        label: 'Instant Start',
        icon: '/images/pricing/feature-instant.svg',
      },
      {
        label: 'Never Drop',
        icon: '/images/pricing/feature-never-drop.svg',
      },
      {
        label: 'No Password Required',
        icon: '/images/pricing/feature-password.svg',
        size: 24,
      },
      {
        label: 'Geo: Global',
        icon: '/images/pricing/feature-global.svg',
      },
    ],
    plans: [
      {
        name: 'Basic',
        planType: 'basic',
        price: '$45.00',
        description: 'Instagram High Quality Followers',
        featured: false,
        featureCount: 5,
      },
      {
        name: 'Professional',
        planType: 'professional',
        price: '$45.00',
        description: 'Instagram High Quality Followers',
        featured: true,
        featureCount: 6,
      },
      {
        name: 'Basic',
        planType: 'basic',
        price: '$45.00',
        description: 'Instagram High Quality Followers',
        featured: false,
        featureCount: 5,
      },
    ],
    planCtaLabel: 'Get Started',
    priceSuffix: '/month',
  },

  testimonials: {
    sectionBackground:
      'linear-gradient(68.23deg, rgb(241, 219, 255) 3.62%, rgb(255, 255, 255) 28.7%, rgb(255, 242, 251) 53.08%, rgb(255, 255, 255) 73.06%, rgb(250, 232, 255) 98.62%)',
    badge: 'TESTIMONIALS',
    title: 'What Our gt<Client Say>',
    subtitle:
      'Discover what our clients say about working with us. From increased engagement to faster social media growth, their real experiences highlight the trust, quality, and results our SMM platform consistently delivers.',
    underlineSrc: '/images/testimonials/underline.svg',
    underlineWidth: 169,
    titleClassName:
      'max-w-none whitespace-normal text-center text-2xl tracking-[0.48px] text-[#071431] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName:
      'max-w-[996px] text-center text-sm leading-normal text-[#404a60] sm:text-base md:text-lg',
    customerTabLabel: 'Customer Reviews',
    videoTabLabel: 'Video Reviews',
    assets: {
      starIconSrc: '/images/testimonials/star-icon.svg',
      verifyBadgeSrc: '/images/testimonials/verify-badge.svg',
      customerReviewTabIconSrc: '/images/testimonials/customer-review-icon.svg',
      videoReviewTabIconSrc: '/images/testimonials/clapperboard-icon.svg',
      quoteOpenSrc: '/images/testimonials/quote-open.svg',
      quoteCloseSrc: '/images/testimonials/quote-close.svg',
      playIconSrc: '/images/testimonials/play-icon.svg',
      playOrbSrc: '/images/testimonials/play-orb.png',
    },
    leftTextReviews: [
      {
        id: 'left-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'left-2',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'left-3',
        name: 'Rafi Islam',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-3.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'left-4',
        name: 'Nadia Ahmed',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-4.png',
        quote: homeTestimonialQuote,
      },
    ],
    rightTextReviews: [
      {
        id: 'right-1',
        name: 'Seam Rahman',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-1.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'right-2',
        name: 'Ariyan Khan',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-2.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'right-3',
        name: 'Lisa',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-3.png',
        quote: homeTestimonialQuote,
      },
      {
        id: 'right-4',
        name: 'Tamanna',
        role: 'Business Owner',
        avatar: '/images/testimonials/avatar-4.png',
        quote: homeTestimonialQuote,
      },
    ],
    featuredReview: {
      name: 'Ariyena Islam',
      role: 'Business Owner',
      avatar: '/images/testimonials/avatar-2.png',
      image: '/images/testimonials/featured-review.png',
      quote: homeTestimonialQuote,
      youtubeVideoId: homeYoutubeReelVideoId,
    },
    videoReviews: [
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
    ],
    defaultTab: 'video',
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
    bg: 'section-7',
    ctaTitle: 'Still have questions?',
    ctaSubtitle:
      "Can't find the answer you're looking for? Please gt<get in touch> with our team.",
    ctaButtonLabel: 'Get in Touch',
    ctaButtonHref: '#contact',
    items: [
      {
        question: 'What is an SMM panel and how does TrendEvo work?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'How fast will my order be delivered?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'Are the followers and engagement real?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'What payment methods do you accept?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'Do you offer reseller or API access?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'Is my account information safe?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'What happens if an order drops?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'How can I contact support?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'Can I place bulk orders?',
        answer: homeFaqDefaultAnswer,
      },
      {
        question: 'Do you offer refunds?',
        answer: homeFaqDefaultAnswer,
      },
    ],
  },

  blog: {
    heading: {
      badge: 'BLOG',
      title: 'Our Recently Posted gt< Blogs>',
      subtitle:
        'Smart strategies and expert insights to help you grow faster on social media. Learn how to boost engagement, reach the right audience, and turn followers into customers.',
      underlineSrc: '/images/blog/underline.svg',
      underlineWidth: 60,
      titleClassName:
        'max-w-[961px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
      subtitleClassName:
        'max-w-[996px] text-sm font-normal text-[#404a60] sm:text-base md:text-lg',
    },
    posts: [
      {
        slug: 'tiktok-marketing-complete-guide',
        title: 'TikTok Marketing: Complete Guide for Businesses',
        excerpt:
          'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
        imageSrc: '/images/blog/blog-tiktok-marketing-studio.webp',
        authorName: 'SEAM RAHMAN',
        authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
        publishedAt: '20 Jan, 2026',
        readTime: '16 min read',
      },
      {
        slug: 'social-media-growth-strategies',
        title: 'TikTok Marketing: Complete Guide for Businesses',
        excerpt:
          'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
        imageSrc: '/images/blog/blog-marketing-chart-growth.webp',
        authorName: 'SEAM RAHMAN',
        authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
        publishedAt: '20 Jan, 2026',
        readTime: '16 min read',
      },
      {
        slug: 'building-brand-presence-online',
        title: 'TikTok Marketing: Complete Guide for Businesses',
        excerpt:
          'Master TikTok marketing with our comprehensive guide covering content strategy, trends, and growth tactics for brands.',
        imageSrc: '/images/blog/blog-social-media-team.webp',
        authorName: 'SEAM RAHMAN',
        authorAvatarSrc: '/images/blog/blog-author-seam-rahman-avatar.webp',
        publishedAt: '20 Jan, 2026',
        readTime: '16 min read',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
  },
};
