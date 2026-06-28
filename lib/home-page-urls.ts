/** Internal routes referenced by home page CTAs and service links. */
export const homePageRoutes = {
  services: '/services',
  aboutUs: '/about-us',
} as const;

/** SMM panel landing pages keyed by platform id. */
export const platformPanelUrls: Record<string, string> = {
  facebook: '/facebook-smm-panel',
  instagram: '/instagram-smm-panel',
  twitter: '/x-twitter-smm-panel',
  youtube: '/youtube-smm-panel',
  tiktok: '/tiktok-smm-panel',
  linkedin: '/buy-linkedin-followers',
  telegram: '/telegram-smm-panel',
  discord: '/buy-discord-members',
  spotify: '/spotify-smm-panel',
  soundcloud: '/soundcloud-smm-panel',
  snapchat: '/snapchat-smm-panel',
  twitch: '/twitch-smm-panel',
  'website-traffic': '/services',
};

/** Maps "Buy X" labels from the doc to existing buy-* routes. */
export const buyServiceUrls: Record<string, string> = {
  'Buy Facebook Followers': '/buy-facebook-followers',
  'Buy Facebook Likes': '/buy-facebook-page-likes',
  'Buy Facebook Reels Views': '/services',
  'Buy Instagram Followers': '/buy-instagram-followers',
  'Buy Instagram Likes': '/buy-instagram-likes',
  'Buy Instagram Views': '/buy-instagram-views',
  'Buy YouTube Views': '/buy-youtube-views',
  'Buy YouTube Likes': '/buy-youtube-likes',
  'Buy YouTube Subscribers': '/buy-youtube-subscribers',
  'Buy Twitter Followers': '/buy-x-twitter-followers',
  'Buy Twitter Likes': '/buy-x-twitter-likes',
  'Buy X (Twitter) Tweet Views': '/services',
  'Buy LinkedIn Page Followers': '/buy-linkedin-followers',
  'Buy LinkedIn Post Likes': '/buy-linkedin-likes',
  'Buy LinkedIn Views': '/buy-linkedin-likes',
  'Buy Telegram Members': '/buy-telegram-members',
  'Buy Telegram Mix Reaction': '/buy-telegram-members',
  'Buy Telegram Post Views': '/buy-telegram-members',
  'Buy Spotify Plays': '/buy-spotify-plays',
  'Buy Spotify Premium Plays': '/buy-spotify-plays',
  'Buy Spotify Premium Playlist Plays': '/buy-spotify-plays',
  'Buy Twitch Followers': '/buy-twitch-followers',
  'Buy Twitch Video Views': '/buy-twitch-viewers',
  'Buy Twitch Clip Views': '/buy-twitch-viewers',
  'Buy SoundCloud Followers': '/buy-soundcloud-followers',
  'Buy SoundCloud Plays': '/buy-soundcloud-plays',
  'Buy SoundCloud Playlist Likes': '/buy-soundcloud-plays',
  'Buy Discord Send Reactions': '/buy-discord-members',
  'Buy Discord Add Reactions': '/buy-discord-members',
  'Buy Discord Online Members': '/buy-discord-members',
  'Buy TikTok Followers': '/buy-tiktok-followers',
  'Buy TikTok Likes': '/buy-tiktok-likes',
  'Buy TikTok Views': '/buy-tiktok-views',
  'Buy Website Traffic': '/services',
  'Buy Mix Website Traffic': '/services',
  'Buy USA Website Traffic': '/services',
};

export function getPlatformPanelUrl(platformId: string): string {
  return platformPanelUrls[platformId] ?? homePageRoutes.services;
}

export function getBuyServiceUrl(label: string): string {
  return buyServiceUrls[label] ?? homePageRoutes.services;
}
