export type ServicesNavLink = {
  label: string;
  href: string;
};

export type ServicesNavGroup = {
  id: string;
  label: string;
  iconSrc?: string;
  /** Panel overview page — used as the category row link */
  href?: string;
  children?: ServicesNavLink[];
};

export const servicesNavGroups: ServicesNavGroup[] = [
  {
    id: 'all',
    label: 'All Services',
    href: '/services',
  },
  {
    id: 'instagram',
    label: 'Instagram Services',
    iconSrc: '/images/our-services/platforms/instagram-platform-icon.webp',
    href: '/instagram-smm-panel',
    children: [
      { label: 'Instagram Followers', href: '/buy-instagram-followers' },
      { label: 'Instagram Views', href: '/buy-instagram-views' },
      { label: 'Instagram Likes', href: '/buy-instagram-likes' },
      { label: 'Instagram Comments', href: '/buy-instagram-comments' },
      { label: 'Instagram Shares', href: '/buy-instagram-shares' },
      { label: 'Instagram Auto-Likes', href: '/buy-instagram-auto-likes' },
      { label: 'Instagram Story Views', href: '/buy-instagram-story-views' },
    ],
  },
  {
    id: 'facebook',
    label: 'Facebook Services',
    iconSrc: '/images/our-services/platforms/facebook-platform-icon.webp',
    href: '/facebook-smm-panel',
    children: [
      { label: 'Facebook Page Followers', href: '/buy-facebook-followers' },
      { label: 'Facebook Page Likes', href: '/buy-facebook-page-likes' },
      { label: 'Facebook Page Comments', href: '/buy-facebook-comments' },
    ],
  },
  {
    id: 'youtube',
    label: 'YouTube Services',
    iconSrc: '/images/our-services/platforms/youtube-platform-icon.webp',
    href: '/youtube-smm-panel',
    children: [
      { label: 'YouTube Subscribers', href: '/buy-youtube-subscribers' },
      { label: 'YouTube Views', href: '/buy-youtube-views' },
      { label: 'YouTube Comments', href: '/buy-youtube-comments' },
      { label: 'YouTube Likes', href: '/buy-youtube-likes' },
    ],
  },
  {
    id: 'tiktok',
    label: 'TikTok Services',
    iconSrc: '/images/our-services/platforms/tiktok-platform-icon.webp',
    href: '/tiktok-smm-panel',
    children: [
      { label: 'TikTok Followers', href: '/buy-tiktok-followers' },
      { label: 'TikTok Likes', href: '/buy-tiktok-likes' },
      { label: 'TikTok Views', href: '/buy-tiktok-views' },
    ],
  },
  {
    id: 'telegram',
    label: 'Telegram Services',
    iconSrc: '/images/our-services/platforms/telegram-platform-icon.webp',
    href: '/telegram-smm-panel',
    children: [
      { label: 'Telegram Members', href: '/buy-telegram-members' },
    ],
  },
  {
    id: 'twitter',
    label: 'Twitter Services',
    iconSrc: '/images/our-services/platforms/x-twitter-platform-icon.png',
    href: '/x-twitter-smm-panel',
    children: [
      { label: 'Twitter Followers', href: '/buy-x-twitter-followers' },
      { label: 'Twitter Likes', href: '/buy-x-twitter-likes' },
    ],
  },
  {
    id: 'threads',
    label: 'Threads Services',
    children: [{ label: 'Threads Followers', href: '/buy-threads-followers' }],
  },
  {
    id: 'spotify',
    label: 'Spotify Services',
    iconSrc: '/images/our-services/platforms/spotify-platform-icon.webp',
    href: '/spotify-smm-panel',
    children: [
      { label: 'Spotify Followers', href: '/buy-spotify-followers' },
      { label: 'Spotify Monthly Listeners', href: '/buy-spotify-monthly-listeners' },
      { label: 'Spotify Plays', href: '/buy-spotify-plays' },
    ],
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Services',
    iconSrc: '/images/our-services/platforms/linkedin-platform-icon.webp',
    children: [
      { label: 'LinkedIn Followers', href: '/buy-linkedin-followers' },
      { label: 'LinkedIn Likes', href: '/buy-linkedin-likes' },
    ],
  },
  {
    id: 'others',
    label: 'Others',
    children: [
      { label: 'Soundcloud Services', href: '/soundcloud-smm-panel' },
      { label: 'SoundCloud Followers', href: '/buy-soundcloud-followers' },
      { label: 'SoundCloud Plays', href: '/buy-soundcloud-plays' },
      { label: 'Twitch Services', href: '/twitch-smm-panel' },
      { label: 'Twitch Followers', href: '/buy-twitch-followers' },
      { label: 'Twitch Viewers', href: '/buy-twitch-viewers' },
      { label: 'Snapchat Services', href: '/snapchat-smm-panel' },
      { label: 'Snapchat Followers', href: '/buy-snapchat-followers' },
      { label: 'Discord Members', href: '/buy-discord-members' },
      { label: 'Discord Account', href: '/buy-discord-account' },
      { label: 'Kick Followers', href: '/buy-kick-followers' },
      { label: 'Kick Viewers', href: '/buy-kick-viewers' },
      { label: 'Reddit Account', href: '/buy-reddit-accounts' },
      { label: 'Reddit Upvotes', href: '/buy-reddit-upvotes' },
      { label: 'Quora Followers', href: '/buy-quora-followers' },
      { label: 'Quora Upvotes', href: '/buy-quora-upvotes' },
      { label: 'Vimeo Followers', href: '/buy-vimeo-followers' },
    ],
  },
];

export function isServicesNavActive(pathname: string) {
  if (pathname === '/services' || pathname.startsWith('/services/')) return true;
  if (pathname.startsWith('/buy-')) return true;
  if (pathname.includes('-smm-panel')) return true;
  if (pathname.startsWith('/smm-panel-')) return true;
  return false;
}
