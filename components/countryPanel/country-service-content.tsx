import type { ReactNode } from 'react';

import type { SectionBgKey } from '@/components/sections/primary-section';

export type CountryServiceItem = {
  number: string;
  title: string;
  description: string;
};

export type CountryServicePlatform = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  decorationImage: string;
  marketingTitle: string;
  description: string;
  services: CountryServiceItem[];
  buttonLabel: string;
};

export type CountryServiceContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  defaultPlatformId: string;
  platforms: CountryServicePlatform[];
  sectionBg?: SectionBgKey;
};

export type CountryServiceSlug = 'smm-panel-uk' | 'smm-panel-bangladesh';

export const countryServiceContent: Record<
  CountryServiceSlug,
  CountryServiceContent
> = {
  'smm-panel-uk': {
    badge: 'Our Services',
    title: (
      <>
        Powerful <span className="text-gradient">SMM Services</span> for UK
        Growth
      </>
    ),
    subtitle:
      'Explore TrendEvo services built for UK businesses and creators. Grow faster on Facebook, Instagram, TikTok, YouTube, and more with reliable delivery and local support.',
    titleClassName: 'text-2xl sm:text-[28px] lg:text-[36px]',
    subtitleClassName: 'text-sm sm:text-base md:text-lg',
    defaultPlatformId: 'facebook',
    sectionBg: 'section-2',
    platforms: [
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/our-services/platforms/facebook.webp',
        decorationImage: '/images/our-services/decorations/facebook-right.webp',
        marketingTitle: 'Facebook Marketing Services in the UK',
        description:
          'Boost your UK brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.',
        buttonLabel: 'View Facebook Services',
        services: [
          {
            number: '01',
            title: 'Facebook Post Likes-',
            description: 'Boost post engagement and credibility with real likes.',
          },
          {
            number: '02',
            title: 'Facebook Page Likes-',
            description: 'Grow your UK page popularity with high-quality likes.',
          },
          {
            number: '03',
            title: 'Facebook Comments-',
            description: 'Increase interaction with engaging comments.',
          },
          {
            number: '04',
            title: 'Facebook Shares-',
            description: 'Expand your reach across UK audiences.',
          },
          {
            number: '05',
            title: 'Facebook Video Views-',
            description: 'Get more visibility with high-retention video views.',
          },
          {
            number: '06',
            title: 'Facebook Reactions-',
            description: 'Make your posts more engaging with diverse reactions.',
          },
        ],
      },
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/our-services/platforms/instagram.webp',
        decorationImage: '/images/our-services/decorations/instagram-service.png',
        marketingTitle: 'Instagram Marketing Services in the UK',
        description:
          'Grow your Instagram presence in the UK with targeted followers, likes, and engagement that builds authentic brand authority.',
        buttonLabel: 'View Instagram Services',
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
        decorationImage: '/images/our-services/decorations/twitter-service.png',
        marketingTitle: 'X (Twitter) Marketing Services in the UK',
        description:
          'Amplify your voice on X with followers, retweets, and engagement that positions your UK brand at the center of trending conversations.',
        buttonLabel: 'View X Services',
        services: [
          {
            number: '01',
            title: 'X Followers-',
            description: 'Build a credible UK profile with real followers.',
          },
          {
            number: '02',
            title: 'X Likes-',
            description: 'Increase tweet engagement and visibility.',
          },
          {
            number: '03',
            title: 'X Retweets-',
            description: 'Spread your message across wider UK networks.',
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
        icon: '/images/our-services/platforms/youtube.webp',
        decorationImage: '/images/our-services/decorations/youtube-service.png',
        marketingTitle: 'YouTube Marketing Services in the UK',
        description:
          'Accelerate UK channel growth with views, subscribers, and engagement that helps your videos rank higher and reach more viewers.',
        buttonLabel: 'View YouTube Services',
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
        icon: '/images/our-services/platforms/tiktok.webp',
        decorationImage: '/images/our-services/decorations/tiktok-service.png',
        marketingTitle: 'TikTok Marketing Services in the UK',
        description:
          'Go viral faster in the UK with TikTok followers, views, and engagement designed to boost your content in the For You feed.',
        buttonLabel: 'View TikTok Services',
        services: [
          {
            number: '01',
            title: 'TikTok Followers-',
            description: 'Build a loyal UK audience on TikTok.',
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
        icon: '/images/our-services/platforms/linkedin.webp',
        decorationImage: '/images/our-services/decorations/lindein-service.png',
        marketingTitle: 'LinkedIn Marketing Services in the UK',
        description:
          'Strengthen your UK professional brand with LinkedIn connections, followers, and engagement that opens doors to new opportunities.',
        buttonLabel: 'View LinkedIn Services',
        services: [
          {
            number: '01',
            title: 'LinkedIn Followers-',
            description: 'Grow your company or personal page.',
          },
          {
            number: '02',
            title: 'LinkedIn Connections-',
            description: 'Expand your professional UK network.',
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
    ],
  },
  'smm-panel-bangladesh': {
    badge: 'Our Services',
    title: (
      <>
        Powerful <span className="text-gradient">SMM Services</span> for
        Bangladesh
      </>
    ),
    subtitle:
      'Explore TrendEvo services tailored for Bangladeshi businesses and creators. Grow faster with affordable pricing, local payment support, and reliable delivery across all major platforms.',
    titleClassName: 'text-2xl sm:text-[28px] lg:text-[36px]',
    subtitleClassName: 'text-sm sm:text-base md:text-lg',
    defaultPlatformId: 'facebook',
    sectionBg: 'section-2',
    platforms: [
      {
        id: 'facebook',
        label: 'Facebook',
        icon: '/images/our-services/platforms/facebook.webp',
        decorationImage: '/images/our-services/decorations/facebook-right.webp',
        marketingTitle: 'Facebook Marketing Services in Bangladesh',
        description:
          'Boost your Bangladeshi brand visibility and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns built for the local market.',
        buttonLabel: 'View Facebook Services',
        services: [
          {
            number: '01',
            title: 'Facebook Post Likes-',
            description: 'Boost post engagement with real likes for BD pages.',
          },
          {
            number: '02',
            title: 'Facebook Page Likes-',
            description: 'Grow your page popularity across Bangladesh.',
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
            description: 'Make your posts more engaging with diverse reactions.',
          },
        ],
      },
      {
        id: 'instagram',
        label: 'Instagram',
        icon: '/images/our-services/platforms/instagram.webp',
        decorationImage: '/images/our-services/decorations/instagram-service.png',
        marketingTitle: 'Instagram Marketing Services in Bangladesh',
        description:
          'Grow your Instagram presence in Bangladesh with targeted followers, likes, and engagement that builds authentic brand authority.',
        buttonLabel: 'View Instagram Services',
        services: [
          {
            number: '01',
            title: 'Instagram Followers-',
            description: 'Increase followers with real, active Bangladeshi users.',
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
        id: 'youtube',
        label: 'YouTube',
        icon: '/images/our-services/platforms/youtube.webp',
        decorationImage: '/images/our-services/decorations/youtube-service.png',
        marketingTitle: 'YouTube Marketing Services in Bangladesh',
        description:
          'Accelerate channel growth in Bangladesh with views, subscribers, and engagement that helps your videos rank higher.',
        buttonLabel: 'View YouTube Services',
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
        icon: '/images/our-services/platforms/tiktok.webp',
        decorationImage: '/images/our-services/decorations/tiktok-service.png',
        marketingTitle: 'TikTok Marketing Services in Bangladesh',
        description:
          'Go viral faster in Bangladesh with TikTok followers, views, and engagement designed to boost your content in the For You feed.',
        buttonLabel: 'View TikTok Services',
        services: [
          {
            number: '01',
            title: 'TikTok Followers-',
            description: 'Build a loyal Bangladeshi audience on TikTok.',
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
        id: 'telegram',
        label: 'Telegram',
        icon: '/images/our-services/platforms/telegram.webp',
        decorationImage: '/images/our-services/decorations/telegram-service.png',
        marketingTitle: 'Telegram Marketing Services in Bangladesh',
        description:
          'Grow your Telegram channel or group in Bangladesh with members and engagement that builds an active, responsive community.',
        buttonLabel: 'View Telegram Services',
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
        id: 'website-traffic',
        label: 'Website Traffic',
        icon: '/images/our-services/platforms/web.png',
        decorationImage:
          '/images/our-services/decorations/website-traffic-service.png',
        marketingTitle: 'Website Traffic Services in Bangladesh',
        description:
          'Drive targeted visitors to your Bangladeshi website with high-quality traffic that improves rankings, conversions, and online visibility.',
        buttonLabel: 'View Website Traffic Services',
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
            description: 'Reach visitors in Bangladesh and nearby regions.',
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
};

export function getCountryServiceContent(
  slug: CountryServiceSlug,
): CountryServiceContent {
  return countryServiceContent[slug];
}
