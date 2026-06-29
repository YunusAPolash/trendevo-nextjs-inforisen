import type { ReactNode } from 'react';

export type SocialServiceItem = {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export type SocialServiceDecorativeImage = {
  src: string;
  width: number;
  height: number;
  className: string;
};

export type SocialServiceContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  services: SocialServiceItem[];
  decorativeLeft?: SocialServiceDecorativeImage;
  decorativeRight?: SocialServiceDecorativeImage;
  titleClassName?: string;
  subtitleClassName?: string;
};

export type SocialServiceSlug =
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

export const socialServiceContent: Record<SocialServiceSlug, SocialServiceContent> = {
  'facebook-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Facebook SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your Facebook profile, page, or business. Here's what we provide through the best Facebook SMM panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/facebook-smm-panel-decorative-facebook-left-icon.webp',
      width: 183,
      height: 190,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] blur-[2px] lg:block xl:w-[183px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/facebook-smm-panel-decorative-facebook-right-icon.webp',
      width: 199,
      height: 207,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] -rotate-3 blur-[2px] lg:block xl:w-[199px]',
    },
    services: [
      {
        title: 'Facebook Page Follower',
        description:
          'Get more real followers for your Facebook page. Our solution also helps boost your audience and reach more people.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Page Like',
        description:
          'Raise the number of likes on your page. This step is ideal for small brands who want more visitors to check it out.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Profile Followers',
        description:
          'Attract more followers to your profile with ease. This also allows you to connect with a bigger audience and share your brand.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Monetization',
        description:
          'Our solution lets you get all the standards to select for monetization and turn your engagement into income.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Story Views',
        description:
          'Reach more views on your Facebook stories to keep your audience interested and updated on what you share.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Facebook Video Views',
        description:
          'Drive more views to your videos to get bigger followers and popularity with this service.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Post Like',
        description:
          'Get likes on your posts to show that people enjoy your content and want to see more.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Facebook Post React',
        description:
          'Find more raw reactions on your posts to make them more engaging and visible to your followers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Group Member',
        description:
          'Increase the number of members in your Facebook groups. Our service also creates an active community around your interests.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'instagram-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Instagram SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your Instagram profile or business. Here's what we provide through the best Instagram SMM panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/instagram-smm-panel/instagram-effect.svg',
      width: 221,
      height: 230,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] lg:block xl:w-[221px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/instagram-smm-panel/instagram-effect.svg',
      width: 221,
      height: 230,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] -scale-x-100 lg:block xl:w-[221px]',
    },
    services: [
      {
        title: 'Instagram Followers',
        description:
          'Get more real followers for your Instagram profile. Our solution helps boost your audience and reach more people organically.',
        icon: '/images/our-services/platforms/our-services-instagram-followers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Post Likes',
        description:
          'Raise the number of likes on your posts. This is ideal for brands who want more visibility and engagement on their content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Instagram Reel Views',
        description:
          'Drive more views to your reels to increase reach, discoverability, and follower growth on Instagram.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Instagram Story Views',
        description:
          'Reach more views on your Instagram stories to keep your audience interested and updated on what you share.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Instagram Comments',
        description:
          'Get more comments on your posts to make your content more engaging and visible to your followers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Profile Visits',
        description:
          'Increase profile visits to attract more potential followers and grow your Instagram presence faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-profile-followers-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Instagram Shares',
        description:
          'Get more shares on your posts to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Saves',
        description:
          'Boost saves on your posts to signal quality content and improve visibility in the Instagram algorithm.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Live Views',
        description:
          'Increase live stream views to build credibility and attract more real-time engagement during your broadcasts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'telegram-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Telegram SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your Telegram channel or group. Here's what we provide through the best Telegram SMM panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/telegram-smm-panel/telegram-effect.svg',
      width: 195,
      height: 192,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[130px] lg:block xl:w-[195px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/telegram-smm-panel/telegram-effect.svg',
      width: 195,
      height: 192,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[140px] -scale-x-100 lg:block xl:w-[195px]',
    },
    services: [
      {
        title: 'Telegram Channel Members',
        description:
          'Get more real members for your Telegram channel. Our solution helps boost your audience and reach more people.',
        icon: '/images/our-services/platforms/our-services-telegram-members-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Post Views',
        description:
          'Increase views on your channel posts to improve visibility and attract more subscribers to your content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Telegram Reactions',
        description:
          'Get more reactions on your posts to make your content more engaging and credible to new visitors.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Group Members',
        description:
          'Grow your Telegram group with more active members and build a stronger community around your brand.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Shares',
        description:
          'Increase shares on your posts to expand reach and bring more users to your channel or group.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Poll Votes',
        description:
          'Boost poll participation to gather more feedback and increase engagement with your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Telegram Story Views',
        description:
          'Reach more views on your Telegram stories to keep your audience interested and updated.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Telegram Post Forwards',
        description:
          'Get more forwards on your posts to spread your message across Telegram and attract new members.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Channel Subscribers',
        description:
          'Grow your subscriber base quickly and build a loyal audience for your Telegram channel.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'youtube-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">YouTube SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your YouTube channel or business. Here's what we provide through the best YouTube SMM panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/youtube-smm-panel/youtube-effect.svg',
      width: 232,
      height: 239,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] lg:block xl:w-[232px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/youtube-smm-panel/youtube-effect-top.svg',
      width: 232,
      height: 239,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[150px] lg:block xl:w-[232px]',
    },
    services: [
      {
        title: 'YouTube Subscribers',
        description:
          'Get more real subscribers for your YouTube channel. Our solution helps boost your audience and reach more viewers organically.',
        icon: '/images/our-services/platforms/our-services-youtube-subscribers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Views',
        description:
          'Drive more views to your videos to increase reach, discoverability, and channel growth on YouTube.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'YouTube Likes',
        description:
          'Raise the number of likes on your videos. This is ideal for creators who want more visibility and engagement on their content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'YouTube Comments',
        description:
          'Get more comments on your videos to make your content more engaging and visible to your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Watch Hours',
        description:
          'Boost watch hours on your channel to meet monetization requirements and grow your earning potential.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Shares',
        description:
          'Get more shares on your videos to expand your reach beyond your current subscriber base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'YouTube Shorts Views',
        description:
          'Increase views on your Shorts to improve discoverability and attract new subscribers to your channel.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'YouTube Live Views',
        description:
          'Boost live stream views to build credibility and attract more real-time engagement during your broadcasts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'YouTube Monetization',
        description:
          'Our solution helps you meet the standards for YouTube monetization and turn your engagement into income.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'tiktok-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">TikTok SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your TikTok profile. Here's what we provide through the best TikTok SMM Panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/tiktok-smm-panel/tiktok-effect.svg',
      width: 189,
      height: 205,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[130px] lg:block xl:w-[189px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/tiktok-smm-panel/tiktok-effect.svg',
      width: 189,
      height: 205,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[140px] -scale-x-100 lg:block xl:w-[189px]',
    },
    services: [
      {
        title: 'TikTok Followers',
        description:
          'Get more real followers for your TikTok profile. Our solution helps boost your audience and reach more people organically.',
        icon: '/images/our-services/platforms/our-services-tiktok-followers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Views',
        description:
          'Drive more views to your videos to increase reach, discoverability, and follower growth on TikTok.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'TikTok Likes',
        description:
          'Raise the number of likes on your videos. This is ideal for creators who want more visibility and engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'TikTok Comments',
        description:
          'Get more comments on your videos to make your content more engaging and visible to your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Shares',
        description:
          'Get more shares on your videos to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Live Views',
        description:
          'Increase live stream views to build credibility and attract more real-time engagement during your broadcasts.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'TikTok Saves',
        description:
          'Boost saves on your videos to signal quality content and improve visibility in the TikTok algorithm.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Profile Visits',
        description:
          'Increase profile visits to attract more potential followers and grow your TikTok presence faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'TikTok Engagement Packages',
        description:
          'Get bundled engagement services tailored to help your TikTok content perform better across the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'x-twitter-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">X (Twitter) SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your X (Twitter) profile. Here's what we provide through the best X (Twitter) SMM Panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/x-twitter-smm-panel/twitter-effect.svg',
      width: 199,
      height: 205,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[135px] lg:block xl:w-[199px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/x-twitter-smm-panel/twitter-effect.svg',
      width: 199,
      height: 205,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[145px] -scale-x-100 lg:block xl:w-[199px]',
    },
    services: [
      {
        title: 'X Followers',
        description:
          'Get more real followers for your X (Twitter) profile. Our solution helps boost your audience and reach more people organically.',
        icon: '/images/our-services/platforms/our-services-x-followers-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X Likes',
        description:
          'Raise the number of likes on your posts. This is ideal for brands who want more visibility and engagement on their content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'X Retweets',
        description:
          'Get more retweets on your posts to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'X Comments',
        description:
          'Get more comments on your posts to make your content more engaging and visible to your audience.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X Views',
        description:
          'Drive more views to your posts and videos to increase reach and discoverability on X (Twitter).',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X Impressions',
        description:
          'Boost impressions on your posts to improve visibility and attract more engagement from new audiences.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'X Bookmarks',
        description:
          'Increase bookmarks on your posts to signal valuable content and improve long-term visibility.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X Profile Visits',
        description:
          'Increase profile visits to attract more potential followers and grow your X (Twitter) presence faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'X Engagement Packages',
        description:
          'Get bundled engagement services tailored to help your X (Twitter) content perform better across the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'spotify-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Spotify SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your Spotify profile. Here's what we provide through the best Spotify SMM Panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/spotify-smm-panel/spotify-effectsvg.svg',
      width: 251,
      height: 251,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[251px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/spotify-smm-panel/spotify-effectsvg.svg',
      width: 251,
      height: 251,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[251px]',
    },
    services: [
      {
        title: 'Spotify Plays',
        description:
          'Get more plays on your tracks to increase reach, discoverability, and listener growth on Spotify.',
        icon: '/images/our-services/platforms/our-services-spotify-plays-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Followers',
        description:
          'Get more real followers for your Spotify artist profile. Our solution helps boost your audience organically.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Spotify Monthly Listeners',
        description:
          'Increase monthly listeners to improve your artist profile credibility and attract more fans.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Spotify Saves',
        description:
          'Boost saves on your tracks to signal quality music and improve visibility in Spotify recommendations.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Playlist Adds',
        description:
          'Get more playlist adds to expand your reach and bring new listeners to your music.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Album Plays',
        description:
          'Drive more plays to your albums to increase overall artist visibility and fan engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Spotify Track Likes',
        description:
          'Raise engagement on individual tracks to help your music perform better across the platform.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Pre-saves',
        description:
          'Boost pre-saves on upcoming releases to build momentum before your music goes live.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Spotify Engagement Packages',
        description:
          'Get bundled music marketing services tailored to help your Spotify content grow faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'soundcloud-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">SoundCloud SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your SoundCloud profile. Here's what we provide through the best SoundCloud SMM Panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/soundcloud-smm-panel/soundcloud-effect.svg',
      width: 255,
      height: 257,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[255px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/soundcloud-smm-panel/soundcloud-effect.svg',
      width: 255,
      height: 257,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[255px]',
    },
    services: [
      {
        title: 'SoundCloud Plays',
        description:
          'Get more plays on your tracks to increase reach, discoverability, and listener growth on SoundCloud.',
        icon: '/images/our-services/platforms/our-services-soundcloud-plays-platform-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Followers',
        description:
          'Get more real followers for your SoundCloud profile. Our solution helps boost your audience organically.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'SoundCloud Likes',
        description:
          'Raise the number of likes on your tracks. This is ideal for artists who want more visibility and engagement.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Reposts',
        description:
          'Get more reposts on your tracks to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Comments',
        description:
          'Get more comments on your tracks to make your content more engaging and visible to listeners.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Downloads',
        description:
          'Increase downloads on your tracks to build credibility and attract more long-term fans.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Playlist Adds',
        description:
          'Get more playlist adds to expand your reach and bring new listeners to your music.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Track Shares',
        description:
          'Boost shares on your tracks to help your music spread across SoundCloud and beyond.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'SoundCloud Engagement Packages',
        description:
          'Get bundled music marketing services tailored to help your SoundCloud content grow faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'twitch-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Twitch SMM Panel</span>
      </>
    ),
    subtitle:
      'lnk<TrendEvo|/about-us> gives Bangladeshi streamers, gaming creators, esports teams, agencies, and resellers a simple way to promote Twitch channels without handling every growth task manually. From live gaming streams to tournaments, podcast-style broadcasts, music sessions, and community streams, our Twitch SMM Panel in Bangladesh helps you build stronger activity around your content.',
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/twitch-smm-panel/twitch-effect.svg',
      width: 270,
      height: 269,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[160px] lg:block xl:w-[270px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/twitch-smm-panel/twitch-effect.svg',
      width: 270,
      height: 269,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[170px] -scale-x-100 lg:block xl:w-[270px]',
    },
    services: [
      {
        title: 'Twitch Followers',
        description:
          'Grow your channel with more lnk<Twitch followers|/buy-twitch-followers>. This service is useful for gamers, streamers, esports players, influencers, and content creators who want their channel to look more established to new visitors.',
        icon: '/images/our-services/platforms/our-services-discord-members-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Twitch Live Views',
        description:
          'Bring more activity to your live streams with lnk<Twitch viewers|/buy-twitch-viewers>. This helps gaming sessions, esports matches, Q&A streams, reaction streams, and community events look more active while they are running.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Twitch Channel Views',
        description:
          'Drive more views to your channel to increase reach, discoverability, and follower growth on Twitch.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Twitch Subscribers',
        description:
          'Grow your subscriber base quickly and build a loyal audience for your Twitch channel.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Twitch Clip Views',
        description:
          'Boost views on your clips to help your best moments reach more potential followers.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Twitch Chat Engagement',
        description:
          'Increase chat activity during streams to make your broadcasts more engaging and credible.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Twitch Raid Views',
        description:
          'Get more visibility when raiding or being raided to expand your reach across the Twitch community.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Twitch VOD Views',
        description:
          'Increase views on your past broadcasts to keep your content working for you after streams end.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Twitch Engagement Packages',
        description:
          'Get bundled streaming marketing services tailored to help your Twitch channel grow faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
  'snapchat-smm-panel': {
    badge: 'Our Services',
    title: (
      <>
        Our Available Services For{' '}
        <span className="text-gradient">Snapchat SMM Panel</span>
      </>
    ),
    subtitle:
      "At TrendEvo, we offer trusted and safe services to grow your Snapchat profile. Here's what we provide through the best Snapchat SMM Panel in Bangladesh",
    titleClassName:
      'text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] max-w-[1200px] lg:text-[48px]',
    subtitleClassName: 'max-w-[996px] text-base sm:text-lg',
    decorativeLeft: {
      src: '/images/service-smm-panel/snapchat-smm-panel/snapchat-effect.svg',
      width: 256,
      height: 258,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[150px] lg:block xl:w-[256px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/snapchat-smm-panel/snapchat-effect.svg',
      width: 256,
      height: 258,
      className:
        'pointer-events-none absolute -right-8 top-20 hidden h-auto w-[160px] -scale-x-100 lg:block xl:w-[256px]',
    },
    services: [
      {
        title: 'Snapchat Followers',
        description:
          'Get more real followers for your Snapchat profile. Our solution helps boost your audience and reach more people organically.',
        icon: '/images/our-services/platforms/our-services-snapchat-followers-platform-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Story Views',
        description:
          'Reach more views on your Snapchat stories to keep your audience interested and updated on what you share.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-like-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Snapchat Spotlight Views',
        description:
          'Increase Spotlight views to improve discoverability and attract new followers to your profile.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Subscribers',
        description:
          'Grow your subscriber base quickly and build a loyal audience for your Snapchat content.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Screenshots',
        description:
          'Boost screenshots on your stories to signal engaging content and improve visibility.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Replies',
        description:
          'Get more replies on your stories to make your content more engaging and interactive.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-monetization-icon.webp',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Profile Views',
        description:
          'Increase profile views to attract more potential followers and grow your Snapchat presence faster.',
        icon: '/images/service-smm-panel/facebook-smm-panel-fast-follower-and-page-growth-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Shares',
        description:
          'Get more shares on your content to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-follower-icon.webp',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Snapchat Engagement Packages',
        description:
          'Get bundled engagement services tailored to help your Snapchat content perform better.',
        icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
};

export function getSocialServiceContent(slug: SocialServiceSlug): SocialServiceContent {
  return socialServiceContent[slug];
}
