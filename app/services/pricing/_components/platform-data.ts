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
    icon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: '/images/our-services/platforms/our-services-instagram-followers-platform-icon.webp',
  },
  {
    id: 'twitter',
    label: 'X (Twitter)',
    icon: '/images/our-services/platforms/our-services-x-followers-platform-icon.png',
    iconClassName: 'scale-150',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: '/images/our-services/platforms/our-services-youtube-subscribers-platform-icon.webp',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: '/images/our-services/platforms/our-services-tiktok-followers-platform-icon.webp',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: '/images/our-services/platforms/our-services-linkedin-followers-platform-icon.webp',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: '/images/our-services/platforms/our-services-telegram-members-platform-icon.webp',
  },
  {
    id: 'discord',
    label: 'Discord',
    icon: '/images/our-services/platforms/our-services-discord-members-platform-icon.webp',
  },
  {
    id: 'spotify',
    label: 'Spotify',
    icon: '/images/our-services/platforms/our-services-spotify-plays-platform-icon.webp',
  },
  {
    id: 'soundcloud',
    label: 'SoundCloud',
    icon: '/images/our-services/platforms/our-services-soundcloud-plays-platform-icon.png',
    composedIcon: true,
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    icon: '/images/our-services/platforms/our-services-snapchat-followers-platform-icon.webp',
  },
  {
    id: 'website-traffic',
    label: 'Website Traffic',
    icon: '/images/our-services/platforms/our-services-website-traffic-platform-icon.png',
    composedIcon: true,
  },
];
