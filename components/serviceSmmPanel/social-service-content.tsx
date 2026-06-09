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
  | 'telegram-smm-panel';

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
      src: '/images/service-smm-panel/decorative-facebook-left.png',
      width: 183,
      height: 190,
      className:
        'pointer-events-none absolute -left-12 bottom-16 hidden h-auto w-[140px] blur-[2px] lg:block xl:w-[183px]',
    },
    decorativeRight: {
      src: '/images/service-smm-panel/decorative-facebook-right.png',
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
        icon: '/images/service-smm-panel/facebook-page-follower.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Page Like',
        description:
          'Raise the number of likes on your page. This step is ideal for small brands who want more visitors to check it out.',
        icon: '/images/service-smm-panel/facebook-page-like.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Profile Followers',
        description:
          'Attract more followers to your profile with ease. This also allows you to connect with a bigger audience and share your brand.',
        icon: '/images/service-smm-panel/facebook-profile-followers.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Monetization',
        description:
          'Our solution lets you get all the standards to select for monetization and turn your engagement into income.',
        icon: '/images/service-smm-panel/facebook-monetization.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Story Views',
        description:
          'Reach more views on your Facebook stories to keep your audience interested and updated on what you share.',
        icon: '/images/service-smm-panel/facebook-story-views.png',
        iconWidth: 70,
        iconHeight: 54,
      },
      {
        title: 'Facebook Video Views',
        description:
          'Drive more views to your videos to get bigger followers and popularity with this service.',
        icon: '/images/service-smm-panel/facebook-video-views.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: 'Facebook Post Like',
        description:
          'Get likes on your posts to show that people enjoy your content and want to see more.',
        icon: '/images/service-smm-panel/facebook-post-like.png',
        iconWidth: 60,
        iconHeight: 54,
      },
      {
        title: 'Facebook Post React',
        description:
          'Find more raw reactions on your posts to make them more engaging and visible to your followers.',
        icon: '/images/service-smm-panel/facebook-post-react.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Facebook Group Member',
        description:
          'Increase the number of members in your Facebook groups. Our service also creates an active community around your interests.',
        icon: '/images/service-smm-panel/facebook-group-member.png',
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
    services: [
      {
        title: 'Instagram Followers',
        description:
          'Get more real followers for your Instagram profile. Our solution helps boost your audience and reach more people organically.',
        icon: '/images/service-smm-panel/instagram-followers.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Post Likes',
        description:
          'Raise the number of likes on your posts. This is ideal for brands who want more visibility and engagement on their content.',
        icon: '/images/service-smm-panel/instagram-post-likes.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Reel Views',
        description:
          'Drive more views to your reels to increase reach, discoverability, and follower growth on Instagram.',
        icon: '/images/service-smm-panel/instagram-reel-views.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Story Views',
        description:
          'Reach more views on your Instagram stories to keep your audience interested and updated on what you share.',
        icon: '/images/service-smm-panel/instagram-story-views.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Comments',
        description:
          'Get more comments on your posts to make your content more engaging and visible to your followers.',
        icon: '/images/service-smm-panel/instagram-comments.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Profile Visits',
        description:
          'Increase profile visits to attract more potential followers and grow your Instagram presence faster.',
        icon: '/images/service-smm-panel/instagram-profile-visits.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Shares',
        description:
          'Get more shares on your posts to expand your reach beyond your current follower base.',
        icon: '/images/service-smm-panel/instagram-shares.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Saves',
        description:
          'Boost saves on your posts to signal quality content and improve visibility in the Instagram algorithm.',
        icon: '/images/service-smm-panel/instagram-saves.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Instagram Live Views',
        description:
          'Increase live stream views to build credibility and attract more real-time engagement during your broadcasts.',
        icon: '/images/service-smm-panel/instagram-live-views.png',
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
    services: [
      {
        title: 'Telegram Channel Members',
        description:
          'Get more real members for your Telegram channel. Our solution helps boost your audience and reach more people.',
        icon: '/images/service-smm-panel/telegram-channel-members.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Post Views',
        description:
          'Increase views on your channel posts to improve visibility and attract more subscribers to your content.',
        icon: '/images/service-smm-panel/telegram-post-views.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Reactions',
        description:
          'Get more reactions on your posts to make your content more engaging and credible to new visitors.',
        icon: '/images/service-smm-panel/telegram-reactions.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Group Members',
        description:
          'Grow your Telegram group with more active members and build a stronger community around your brand.',
        icon: '/images/service-smm-panel/telegram-group-members.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Shares',
        description:
          'Increase shares on your posts to expand reach and bring more users to your channel or group.',
        icon: '/images/service-smm-panel/telegram-shares.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Poll Votes',
        description:
          'Boost poll participation to gather more feedback and increase engagement with your audience.',
        icon: '/images/service-smm-panel/telegram-poll-votes.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Story Views',
        description:
          'Reach more views on your Telegram stories to keep your audience interested and updated.',
        icon: '/images/service-smm-panel/telegram-story-views.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Post Forwards',
        description:
          'Get more forwards on your posts to spread your message across Telegram and attract new members.',
        icon: '/images/service-smm-panel/telegram-post-forwards.png',
        iconWidth: 54,
        iconHeight: 54,
      },
      {
        title: 'Telegram Channel Subscribers',
        description:
          'Grow your subscriber base quickly and build a loyal audience for your Telegram channel.',
        icon: '/images/service-smm-panel/telegram-channel-subscribers.png',
        iconWidth: 54,
        iconHeight: 54,
      },
    ],
  },
};

export function getSocialServiceContent(slug: SocialServiceSlug): SocialServiceContent {
  return socialServiceContent[slug];
}
