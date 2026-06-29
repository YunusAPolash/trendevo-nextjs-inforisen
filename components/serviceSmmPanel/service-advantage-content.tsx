import type { ReactNode } from 'react';

export type ServiceAdvantageItem = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type ServiceAdvantageContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  leftAdvantages: ServiceAdvantageItem[];
  rightAdvantages: ServiceAdvantageItem[];
  titleClassName?: string;
  subtitleClassName?: string;
};

export type ServiceAdvantageSlug =
  | 'facebook-smm-panel'
  | 'instagram-smm-panel'
  | 'telegram-smm-panel'
  | 'youtube-smm-panel'
  | 'tiktok-smm-panel'
  | 'x-twitter-smm-panel'
  | 'spotify-smm-panel'
  | 'soundcloud-smm-panel'
  | 'twitch-smm-panel'
  | 'snapchat-smm-panel';

export const serviceAdvantageContent: Record<
  ServiceAdvantageSlug,
  ServiceAdvantageContent
> = {
  'facebook-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Facebook SMM Panel</span>
      </>
    ),
    subtitle:
      'A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Page Growth',
        description:
          'We help to bring potential followers to your profile or page via targeted marketing on Facebook. It also boosts your visits and reaches.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get millions of views with our Facebook SMM panel. This also makes it easier to meet targeted people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Facebook profiles or pages in one place using our service. It also makes it faster to expand the follower base with no real effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement with followers and likes using our Facebook SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your posts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Community Growth in Private Groups',
        description:
          'With our help, your community can grow in a private group. Your private group can get more visibility means more opportunities to attract new buyers and followers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'instagram-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Instagram SMM Panel</span>
      </>
    ),
    subtitle:
      'An Instagram SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Profile Growth',
        description:
          'We help bring potential followers to your Instagram profile via targeted marketing. It also boosts your reach, visibility, and profile visits.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get millions of views with our Instagram SMM panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Instagram profiles in one place using our service. It also makes it faster to expand your follower base with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement with followers and likes using our Instagram SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your reels and posts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Reels and Story Growth',
        description:
          'With our help, your reels and stories can reach more people. Greater visibility means more opportunities to attract new followers and customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'telegram-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Telegram SMM Panel</span>
      </>
    ),
    subtitle:
      'A Telegram SMM panel helps businesses grow members, views, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Member and Channel Growth',
        description:
          'We help bring potential members to your Telegram channel via targeted marketing. It also boosts your visits, reach, and channel visibility.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our Telegram SMM panel. This also makes it easier to meet targeted people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Telegram channels in one place using our service. It also makes it faster to expand your member base with no real effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Views, Reactions & Shares',
        description:
          'You can make your brand get better engagement with members and reactions using our Telegram SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real views, reactions, or positive engagement on your channel posts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Community Growth in Groups',
        description:
          'With our help, your community can grow in Telegram groups. More visibility means more opportunities to attract new buyers and members.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'youtube-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">YouTube SMM Panel</span>
      </>
    ),
    subtitle:
      'A YouTube SMM panel helps businesses grow subscribers, views, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Subscriber and Channel Growth',
        description:
          'We help bring potential subscribers to your YouTube channel via targeted marketing. It also boosts your reach, visibility, and video views.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get millions of views with our YouTube SMM panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your YouTube channels in one place using our service. It also makes it faster to expand your subscriber base with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement with subscribers and likes using our YouTube SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your videos.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Monetization and Watch Hours',
        description:
          'With our help, your channel can meet monetization requirements faster. Greater watch hours and engagement mean more opportunities to earn from your content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'tiktok-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">TikTok SMM Panel</span>
      </>
    ),
    subtitle:
      'A TikTok SMM panel helps businesses grow followers, views, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Profile Growth',
        description:
          'We help bring potential followers to your TikTok profile via targeted marketing. It also boosts your reach, visibility, and video views.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our TikTok SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your TikTok profiles in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our TikTok SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on TikTok.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'For You Page Visibility',
        description:
          'With our help, your videos can reach more people on the For You feed. Greater visibility means more opportunities to attract new followers and customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'x-twitter-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">X (Twitter) SMM Panel</span>
      </>
    ),
    subtitle:
      'An X (Twitter) SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Profile Growth',
        description:
          'We help bring potential followers to your X (Twitter) profile via targeted marketing. It also boosts your reach, visibility, and post engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our X (Twitter) SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your X (Twitter) profiles in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our X (Twitter) SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on X (Twitter).',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Trend and Post Visibility',
        description:
          'With our help, your posts can reach more people across X (Twitter). Greater visibility means more opportunities to attract new followers and customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'spotify-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Spotify SMM Panel</span>
      </>
    ),
    subtitle:
      'A Spotify SMM panel helps artists grow plays, followers, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Plays and Follower Growth',
        description:
          'We help bring more plays and followers to your Spotify profile via targeted promotion. It also boosts your reach, visibility, and listener count.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our Spotify SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Spotify profiles in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our Spotify SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on Spotify.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Playlist and Track Visibility',
        description:
          'With our help, your tracks can reach more listeners on Spotify. Greater visibility means more opportunities to attract new fans and grow your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'soundcloud-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">SoundCloud SMM Panel</span>
      </>
    ),
    subtitle:
      'A SoundCloud SMM panel helps artists grow plays, followers, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Plays and Follower Growth',
        description:
          'We help bring more plays and followers to your SoundCloud profile via targeted promotion. It also boosts your reach, visibility, and listener count.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our SoundCloud SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your SoundCloud profiles in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our SoundCloud SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on SoundCloud.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Track and Repost Visibility',
        description:
          'With our help, your tracks can reach more listeners on SoundCloud. Greater visibility means more opportunities to attract new fans and grow your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'twitch-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Twitch SMM Panel</span>
      </>
    ),
    subtitle:
      'Twitch growth is different from regular social media because live activity matters a lot. A channel may have good content, but if the stream looks empty, new viewers may leave quickly. The lnk<best smm panel bd|/> helps Bangladeshi streamers, gamers, esports creators, agencies, and resellers build stronger activity around live content and channel visibility.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Channel Growth',
        description:
          'We help bring potential followers to your Twitch channel via targeted promotion. It also boosts your reach, visibility, and stream views.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our Twitch SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Twitch channels in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our Twitch SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on Twitch.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Live Stream Visibility',
        description:
          'With our help, your live streams can reach more viewers on Twitch. Greater visibility means more opportunities to attract new followers and subscribers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
  'snapchat-smm-panel': {
    badge: 'Advantages',
    title: (
      <>
        Advantages of Using{' '}
        <span className="text-gradient">Snapchat SMM Panel</span>
      </>
    ),
    subtitle:
      'A Snapchat SMM panel helps businesses grow followers, views, and engagement quickly and efficiently, saving time and boosting online presence.',
    titleClassName:
      'whitespace-normal text-2xl tracking-[0.48px] max-w-[1200px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    leftAdvantages: [
      {
        step: '01',
        title: 'Fast Follower and Profile Growth',
        description:
          'We help bring potential followers to your Snapchat profile via targeted marketing. It also boosts your reach, visibility, and story views.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our Snapchat SMM Panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-targeted-audience-expansion-icon.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Snapchat profiles in one place using our service. It also makes it faster to expand your audience with minimal effort.',
        icon: '/images/service-smm-panel/facebook-smm-panel-time-saving-growth-icon.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement using our Snapchat SMM Panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-likes-comments-and-shares-icon.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real engagement that supports long-term growth on Snapchat.',
        icon: '/images/service-smm-panel/facebook-smm-panel-social-proof-and-credibility-icon.png',
      },
      {
        step: '06',
        title: 'Story and Spotlight Growth',
        description:
          'With our help, your stories and Spotlight content can reach more people. Greater visibility means more opportunities to attract new followers and customers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-community-growth-in-private-groups-icon.png',
      },
    ],
  },
};

export function getServiceAdvantageContent(
  slug: ServiceAdvantageSlug,
): ServiceAdvantageContent {
  return serviceAdvantageContent[slug];
}
