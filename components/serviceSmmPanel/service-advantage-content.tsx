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
  | 'telegram-smm-panel';

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
        icon: '/images/service-smm-panel/fast-follower-and-page-growth.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get millions of views with our Facebook SMM panel. This also makes it easier to meet targeted people.',
        icon: '/images/service-smm-panel/targeted-audience-expansion.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Facebook profiles or pages in one place using our service. It also makes it faster to expand the follower base with no real effort.',
        icon: '/images/service-smm-panel/time-saving-growth.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement with followers and likes using our Facebook SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/fast-likes-comments-and-shares.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your posts.',
        icon: '/images/service-smm-panel/social-proof-and-credibility.png',
      },
      {
        step: '06',
        title: 'Community Growth in Private Groups',
        description:
          'With our help, your community can grow in a private group. Your private group can get more visibility means more opportunities to attract new buyers and followers.',
        icon: '/images/service-smm-panel/community-growth-in-private-groups.png',
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
        icon: '/images/service-smm-panel/fast-follower-and-page-growth.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get millions of views with our Instagram SMM panel. This also makes it easier to reach your ideal audience.',
        icon: '/images/service-smm-panel/targeted-audience-expansion.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Instagram profiles in one place using our service. It also makes it faster to expand your follower base with minimal effort.',
        icon: '/images/service-smm-panel/time-saving-growth.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Likes, Comments & Shares',
        description:
          'You can make your brand get better engagement with followers and likes using our Instagram SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/fast-likes-comments-and-shares.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real likes, shares, or positive comments on your reels and posts.',
        icon: '/images/service-smm-panel/social-proof-and-credibility.png',
      },
      {
        step: '06',
        title: 'Reels and Story Growth',
        description:
          'With our help, your reels and stories can reach more people. Greater visibility means more opportunities to attract new followers and customers.',
        icon: '/images/service-smm-panel/community-growth-in-private-groups.png',
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
        icon: '/images/service-smm-panel/fast-follower-and-page-growth.png',
      },
      {
        step: '02',
        title: 'Targeted Audience Expansion',
        description:
          'You can do better with your content to get more views with our Telegram SMM panel. This also makes it easier to meet targeted people.',
        icon: '/images/service-smm-panel/targeted-audience-expansion.png',
      },
      {
        step: '03',
        title: 'Time-Saving Growth',
        description:
          'You can manage all your Telegram channels in one place using our service. It also makes it faster to expand your member base with no real effort.',
        icon: '/images/service-smm-panel/time-saving-growth.png',
      },
    ],
    rightAdvantages: [
      {
        step: '04',
        title: 'Fast Views, Reactions & Shares',
        description:
          'You can make your brand get better engagement with members and reactions using our Telegram SMM panel. This also makes your business look reliable among people.',
        icon: '/images/service-smm-panel/fast-likes-comments-and-shares.png',
      },
      {
        step: '05',
        title: 'Social Proof and Credibility',
        description:
          'With our service, you can build trust and reliability by getting real views, reactions, or positive engagement on your channel posts.',
        icon: '/images/service-smm-panel/social-proof-and-credibility.png',
      },
      {
        step: '06',
        title: 'Community Growth in Groups',
        description:
          'With our help, your community can grow in Telegram groups. More visibility means more opportunities to attract new buyers and members.',
        icon: '/images/service-smm-panel/community-growth-in-private-groups.png',
      },
    ],
  },
};

export function getServiceAdvantageContent(
  slug: ServiceAdvantageSlug,
): ServiceAdvantageContent {
  return serviceAdvantageContent[slug];
}
