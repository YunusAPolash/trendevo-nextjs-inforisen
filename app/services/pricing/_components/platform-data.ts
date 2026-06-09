export type PricingPlatform = {
  id: string;
  label: string;
  icon: string;
  iconClassName?: string;
  composedIcon?: boolean;
};

export const pricingPlatforms: PricingPlatform[] = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: '/images/our-services/platforms/facebook.png',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: '/images/our-services/platforms/instagram.png',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    icon: '/images/our-services/platforms/twitter.png',
    iconClassName: 'scale-150',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: '/images/our-services/platforms/youtube.png',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: '/images/our-services/platforms/tiktok.png',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: '/images/our-services/platforms/linkedin.png',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: '/images/our-services/platforms/telegram.png',
  },
  {
    id: 'discord',
    label: 'Discord',
    icon: '/images/our-services/platforms/discord.png',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    icon: '/images/our-services/platforms/spotify.png',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    icon: '/images/our-services/platforms/soundcloud.png',
    composedIcon: true,
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    icon: '/images/our-services/platforms/snapchat.png',
  },
  {
    id: 'website-traffic',
    label: 'Website Traffic',
    icon: '/images/our-services/platforms/website-traffic.png',
    composedIcon: true,
  },
];
