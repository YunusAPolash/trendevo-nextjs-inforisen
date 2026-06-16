import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const templateDir = path.join(root, 'app/(subservice)/instagram-comments');

const FALLBACK_LIKE =
  '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png';
const FALLBACK_VIEWS =
  '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png';
const FALLBACK_FOLLOWERS =
  '/images/our-services/platforms/our-services-discord-members-platform-icon.webp';

const services = [
  {
    slug: 'telegram-members',
    pascal: 'TelegramMembers',
    dataVar: 'telegramMembersPageData',
    platform: 'Telegram',
    platformKey: 'telegram',
    panelSlug: 'telegram-smm-panel',
    panelTitle: 'Telegram SMM Panel',
    panelIcon: '/images/services/services-telegram-smm-panel-icon.png',
    platformIcon:
      '/images/platform-marquee/platform-marquee-telegram-platform-icon.webp',
    title: 'Telegram Members',
    serviceLabel: 'Members',
    serviceKey: 'members',
    serviceLower: 'members',
    growText: 'Growing a Telegram channel',
    thriveText: 'help your channel thrive with real members and engagement',
    urlLabel: 'Telegram Channel URL',
    urlDefault: 'https://t.me/yourchannel',
    urlPlaceholder: 'https://t.me/yourchannel',
    step3: 'Find the Telegram Members Service',
    step4: 'Enter Your Telegram Channel URL & Place the Order',
    qualityTitle: 'Real Members from Quality Sources',
    qualityDesc:
      'We deliver genuine Telegram members from active users, helping your channel or group grow faster. Our packages boost credibility and attract more organic subscribers.',
    qualityIcon:
      '/images/our-services/platforms/our-services-telegram-members-platform-icon.webp',
    sliderAria: 'Member quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
    passwordPlatform: 'Telegram',
    protectTarget: 'channel',
    footerAfter: 'Telegram Services',
  },
  {
    slug: 'snapchat-followers',
    pascal: 'SnapchatFollowers',
    dataVar: 'snapchatFollowersPageData',
    platform: 'Snapchat',
    platformKey: 'snapchat',
    panelSlug: 'snapchat-smm-panel',
    panelTitle: 'Snapchat SMM Panel',
    panelIcon:
      '/images/our-services/platforms/our-services-snapchat-followers-platform-icon.webp',
    platformIcon:
      '/images/platform-marquee/platform-marquee-snapchat-platform-icon.webp',
    title: 'Snapchat Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Snapchat profile',
    thriveText: 'help your profile thrive with real followers and engagement',
    urlLabel: 'Snapchat Profile URL',
    urlDefault: 'https://snapchat.com/add/yourprofile',
    urlPlaceholder: 'https://snapchat.com/add/yourprofile',
    step3: 'Find the Snapchat Followers Service',
    step4: 'Enter Your Snapchat Profile URL & Place the Order',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Snapchat followers from active users, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's credibility.",
    qualityIcon:
      '/images/our-services/platforms/our-services-snapchat-followers-platform-icon.webp',
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    boostTarget: 'profile',
    passwordPlatform: 'Snapchat',
    protectTarget: 'profile',
    footerAfter: 'Snapchat Services',
  },
  {
    slug: 'soundcloud-followers',
    pascal: 'SoundcloudFollowers',
    dataVar: 'soundcloudFollowersPageData',
    platform: 'SoundCloud',
    platformKey: 'soundcloud',
    panelSlug: 'soundcloud-smm-panel',
    panelTitle: 'SoundCloud SMM Panel',
    panelIcon:
      '/images/our-services/platforms/our-services-soundcloud-plays-platform-icon.png',
    platformIcon:
      '/images/platform-marquee/platform-marquee-soundcloud-platform-icon.svg',
    title: 'SoundCloud Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a SoundCloud profile',
    thriveText: 'help your profile thrive with real followers and engagement',
    urlLabel: 'SoundCloud Profile URL',
    urlDefault: 'https://soundcloud.com/yourprofile',
    urlPlaceholder: 'https://soundcloud.com/yourprofile',
    step3: 'Find the SoundCloud Followers Service',
    step4: 'Enter Your SoundCloud Profile URL & Place the Order',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine SoundCloud followers from active listeners, ensuring lasting growth. Our packages help maintain your follower count and enhance your artist profile's credibility.",
    qualityIcon: FALLBACK_LIKE,
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    boostTarget: 'profile',
    passwordPlatform: 'SoundCloud',
    protectTarget: 'profile',
    footerAfter: 'Soundcloud Services',
  },
  {
    slug: 'soundcloud-plays',
    pascal: 'SoundcloudPlays',
    dataVar: 'soundcloudPlaysPageData',
    platform: 'SoundCloud',
    platformKey: 'soundcloud',
    panelSlug: 'soundcloud-smm-panel',
    panelTitle: 'SoundCloud SMM Panel',
    panelIcon:
      '/images/our-services/platforms/our-services-soundcloud-plays-platform-icon.png',
    platformIcon:
      '/images/platform-marquee/platform-marquee-soundcloud-platform-icon.svg',
    title: 'SoundCloud Plays',
    serviceLabel: 'Plays',
    serviceKey: 'plays',
    serviceLower: 'plays',
    growText: 'Growing a SoundCloud profile',
    thriveText: 'help your music thrive with real plays and listener growth',
    urlLabel: 'SoundCloud Track URL',
    urlDefault: 'https://soundcloud.com/artist/track',
    urlPlaceholder: 'https://soundcloud.com/artist/track',
    step3: 'Find the SoundCloud Plays Service',
    step4: 'Enter Your SoundCloud Track URL & Place the Order',
    qualityTitle: 'Real Plays from Quality Sources',
    qualityDesc:
      "We deliver genuine SoundCloud plays from active listeners, helping your tracks reach more people. Our packages boost discoverability and enhance your music's credibility.",
    qualityIcon:
      '/images/our-services/platforms/our-services-soundcloud-plays-platform-icon.png',
    sliderAria: 'Play quantity',
    faqUrl: 'public track URL',
    boostTarget: 'track',
    passwordPlatform: 'SoundCloud',
    protectTarget: 'profile',
    footerAfter: 'Soundcloud Services',
  },
  {
    slug: 'discord-members',
    pascal: 'DiscordMembers',
    dataVar: 'discordMembersPageData',
    platform: 'Discord',
    platformKey: 'discord',
    panelSlug: null,
    panelTitle: 'Discord Growth Services',
    panelIcon:
      '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
    platformIcon:
      '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
    title: 'Discord Members',
    serviceLabel: 'Members',
    serviceKey: 'members',
    serviceLower: 'members',
    growText: 'Growing a Discord server',
    thriveText: 'help your server thrive with real members and engagement',
    urlLabel: 'Discord Server Invite URL',
    urlDefault: 'https://discord.gg/yourinvite',
    urlPlaceholder: 'https://discord.gg/yourinvite',
    step3: 'Find the Discord Members Service',
    step4: 'Enter Your Discord Server Invite URL & Place the Order',
    qualityTitle: 'Real Members from Quality Sources',
    qualityDesc:
      'We deliver genuine Discord members from active users, helping your server grow faster. Our packages boost community credibility and keep your channels active.',
    qualityIcon:
      '/images/our-services/platforms/our-services-discord-members-platform-icon.webp',
    sliderAria: 'Member quantity',
    faqUrl: 'public server invite URL',
    boostTarget: 'server',
    passwordPlatform: 'Discord',
    protectTarget: 'server',
    footerAfter: 'Snapchat Services',
  },
  {
    slug: 'discord-account',
    pascal: 'DiscordAccount',
    dataVar: 'discordAccountPageData',
    platform: 'Discord',
    platformKey: 'discord',
    panelSlug: null,
    panelTitle: 'Discord Growth Services',
    panelIcon:
      '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
    platformIcon:
      '/images/platform-marquee/platform-marquee-discord-platform-icon.webp',
    title: 'Discord Account',
    serviceLabel: 'Account',
    serviceKey: 'account',
    serviceLower: 'accounts',
    growText: 'Getting started on Discord',
    thriveText: 'help you get quality Discord accounts quickly and securely',
    urlLabel: 'Discord Username',
    urlDefault: 'yourusername',
    urlPlaceholder: 'yourusername',
    step3: 'Find the Discord Account Service',
    step4: 'Enter Your Discord Username & Place the Order',
    qualityTitle: 'Quality Discord Accounts',
    qualityDesc:
      'We provide reliable Discord accounts suited to your needs. TrendEvo ensures secure delivery and support so you can get started on Discord without hassle.',
    qualityIcon:
      '/images/our-services/platforms/our-services-discord-members-platform-icon.webp',
    sliderAria: 'Account quantity',
    faqUrl: 'order details',
    boostTarget: 'account',
    passwordPlatform: 'Discord',
    protectTarget: 'account',
    footerAfter: 'Snapchat Services',
    urlInputType: 'text',
  },
  {
    slug: 'twitch-followers',
    pascal: 'TwitchFollowers',
    dataVar: 'twitchFollowersPageData',
    platform: 'Twitch',
    platformKey: 'twitch',
    panelSlug: 'twitch-smm-panel',
    panelTitle: 'Twitch SMM Panel',
    panelIcon: FALLBACK_FOLLOWERS,
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Twitch Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Twitch channel',
    thriveText: 'help your channel thrive with real followers and engagement',
    urlLabel: 'Twitch Channel URL',
    urlDefault: 'https://twitch.tv/yourchannel',
    urlPlaceholder: 'https://twitch.tv/yourchannel',
    step3: 'Find the Twitch Followers Service',
    step4: 'Enter Your Twitch Channel URL & Place the Order',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Twitch followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
    qualityIcon: FALLBACK_FOLLOWERS,
    sliderAria: 'Follower quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
    passwordPlatform: 'Twitch',
    protectTarget: 'channel',
    footerAfter: 'Twitch Services',
  },
  {
    slug: 'twitch-viewers',
    pascal: 'TwitchViewers',
    dataVar: 'twitchViewersPageData',
    platform: 'Twitch',
    platformKey: 'twitch',
    panelSlug: 'twitch-smm-panel',
    panelTitle: 'Twitch SMM Panel',
    panelIcon: FALLBACK_FOLLOWERS,
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Twitch Viewers',
    serviceLabel: 'Viewers',
    serviceKey: 'viewers',
    serviceLower: 'viewers',
    growText: 'Growing a Twitch channel',
    thriveText: 'help your streams thrive with real viewers and engagement',
    urlLabel: 'Twitch Channel URL',
    urlDefault: 'https://twitch.tv/yourchannel',
    urlPlaceholder: 'https://twitch.tv/yourchannel',
    step3: 'Find the Twitch Viewers Service',
    step4: 'Enter Your Twitch Channel URL & Place the Order',
    qualityTitle: 'Real Viewers from Quality Sources',
    qualityDesc:
      'We deliver genuine Twitch viewers for your live streams, helping you build credibility and attract more real-time engagement during broadcasts.',
    qualityIcon: FALLBACK_VIEWS,
    sliderAria: 'Viewer quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
    passwordPlatform: 'Twitch',
    protectTarget: 'channel',
    footerAfter: 'Twitch Services',
  },
  {
    slug: 'kick-followers',
    pascal: 'KickFollowers',
    dataVar: 'kickFollowersPageData',
    platform: 'Kick',
    platformKey: 'kick',
    panelSlug: null,
    panelTitle: 'Kick Growth Services',
    panelIcon: FALLBACK_FOLLOWERS,
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Kick Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Kick channel',
    thriveText: 'help your channel thrive with real followers and engagement',
    urlLabel: 'Kick Channel URL',
    urlDefault: 'https://kick.com/yourchannel',
    urlPlaceholder: 'https://kick.com/yourchannel',
    step3: 'Find the Kick Followers Service',
    step4: 'Enter Your Kick Channel URL & Place the Order',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Kick followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
    qualityIcon: FALLBACK_FOLLOWERS,
    sliderAria: 'Follower quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
    passwordPlatform: 'Kick',
    protectTarget: 'channel',
    footerAfter: 'Twitch Services',
  },
  {
    slug: 'kick-viewers',
    pascal: 'KickViewers',
    dataVar: 'kickViewersPageData',
    platform: 'Kick',
    platformKey: 'kick',
    panelSlug: null,
    panelTitle: 'Kick Growth Services',
    panelIcon: FALLBACK_FOLLOWERS,
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Kick Viewers',
    serviceLabel: 'Viewers',
    serviceKey: 'viewers',
    serviceLower: 'viewers',
    growText: 'Growing a Kick channel',
    thriveText: 'help your streams thrive with real viewers and engagement',
    urlLabel: 'Kick Channel URL',
    urlDefault: 'https://kick.com/yourchannel',
    urlPlaceholder: 'https://kick.com/yourchannel',
    step3: 'Find the Kick Viewers Service',
    step4: 'Enter Your Kick Channel URL & Place the Order',
    qualityTitle: 'Real Viewers from Quality Sources',
    qualityDesc:
      'We deliver genuine Kick viewers for your live streams, helping you build credibility and attract more real-time engagement during broadcasts.',
    qualityIcon: FALLBACK_VIEWS,
    sliderAria: 'Viewer quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
    passwordPlatform: 'Kick',
    protectTarget: 'channel',
    footerAfter: 'Twitch Services',
  },
  {
    slug: 'reddit-upvotes',
    pascal: 'RedditUpvotes',
    dataVar: 'redditUpvotesPageData',
    platform: 'Reddit',
    platformKey: 'reddit',
    panelSlug: null,
    panelTitle: 'Reddit Growth Services',
    panelIcon: FALLBACK_LIKE,
    platformIcon: FALLBACK_LIKE,
    title: 'Reddit Upvotes',
    serviceLabel: 'Upvotes',
    serviceKey: 'upvotes',
    serviceLower: 'upvotes',
    growText: 'Growing on Reddit',
    thriveText: 'help your posts thrive with real upvotes and visibility',
    urlLabel: 'Reddit Post URL',
    urlDefault: 'https://reddit.com/r/subreddit/comments/postid',
    urlPlaceholder: 'https://reddit.com/r/subreddit/comments/postid',
    step3: 'Find the Reddit Upvotes Service',
    step4: 'Enter Your Reddit Post URL & Place the Order',
    qualityTitle: 'Real Upvotes from Quality Sources',
    qualityDesc:
      "We deliver genuine Reddit upvotes from active users, helping your posts gain visibility. Our packages boost engagement signals and enhance your post's reach.",
    qualityIcon: FALLBACK_LIKE,
    sliderAria: 'Upvote quantity',
    faqUrl: 'public post URL',
    boostTarget: 'post',
    passwordPlatform: 'Reddit',
    protectTarget: 'account',
    footerAfter: 'Twitch Services',
  },
  {
    slug: 'reddit-account',
    pascal: 'RedditAccount',
    dataVar: 'redditAccountPageData',
    platform: 'Reddit',
    platformKey: 'reddit',
    panelSlug: null,
    panelTitle: 'Reddit Growth Services',
    panelIcon: FALLBACK_LIKE,
    platformIcon: FALLBACK_LIKE,
    title: 'Reddit Account',
    serviceLabel: 'Account',
    serviceKey: 'account',
    serviceLower: 'accounts',
    growText: 'Getting started on Reddit',
    thriveText: 'help you get quality Reddit accounts quickly and securely',
    urlLabel: 'Reddit Username',
    urlDefault: 'u/yourusername',
    urlPlaceholder: 'u/yourusername',
    step3: 'Find the Reddit Account Service',
    step4: 'Enter Your Reddit Username & Place the Order',
    qualityTitle: 'Quality Reddit Accounts',
    qualityDesc:
      'We provide reliable Reddit accounts suited to your needs. TrendEvo ensures secure delivery and support so you can get started on Reddit without hassle.',
    qualityIcon: FALLBACK_LIKE,
    sliderAria: 'Account quantity',
    faqUrl: 'order details',
    boostTarget: 'account',
    passwordPlatform: 'Reddit',
    protectTarget: 'account',
    footerAfter: 'Twitch Services',
    urlInputType: 'text',
  },
];

const relatedCopy = {
  members: (p) => ({
    title: `Buy ${p} Members`,
    desc: `Grow your ${p} channel or community with real members. TrendEvo offers affordable packages with fast delivery.`,
  }),
  followers: (p) => ({
    title: `Buy ${p} Followers`,
    desc: `Grow your ${p} profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.`,
  }),
  plays: (p) => ({
    title: `Buy ${p} Plays`,
    desc: `Get more plays on your ${p} tracks to increase reach, discoverability, and listener growth.`,
  }),
  viewers: (p) => ({
    title: `Buy ${p} Viewers`,
    desc: `Boost live stream viewers on ${p} to improve credibility and attract more real-time engagement.`,
  }),
  upvotes: (p) => ({
    title: `Buy ${p} Upvotes`,
    desc: `Increase upvotes on your ${p} posts to improve visibility and engagement on the platform.`,
  }),
  account: (p) => ({
    title: `Buy ${p} Account`,
    desc: `Get quality ${p} accounts with secure delivery and support from TrendEvo.`,
  }),
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function replaceAll(content, replacements) {
  let result = content;
  for (const [from, to] of replacements) {
    result = result.split(from).join(to);
  }
  return result;
}

function patchPageData(content, svc) {
  let result = replaceAll(content, [
    ['instagram-comments', svc.slug],
    ['InstagramCommentsPageData', `${svc.pascal}PageData`],
    ['Instagram Comments', svc.title],
    ['Buy gt<Instagram Comments>', `Buy gt<${svc.title}>`],
    ['How to Buy Instagram Comments', `How to Buy ${svc.title}`],
    ['Growing an Instagram profile', svc.growText],
    ['help your profile thrive with real comments and engagement', svc.thriveText],
    ['Instagram profile growth', `${svc.platform} growth`],
    ['Find the Instagram Comments Service', svc.step3],
    [
      'Enter Your Instagram Post URL & Place the Order',
      svc.step4,
    ],
    [
      "['instagram-comments', 'instagram-comments-related-services']",
      `['${svc.slug}', '${svc.slug}-related-services']`,
    ],
    ['An Instagram SMM panel', `A ${svc.platform} SMM panel`],
    ['Instagram comments', `${svc.platform} ${svc.serviceLower}`],
    ['instagram comments', `${svc.platform.toLowerCase()} ${svc.serviceLower}`],
    ['your Instagram comments', `your ${svc.platform} ${svc.serviceLower}`],
    ['deliver comments', `deliver ${svc.serviceLower}`],
    ['We deliver comments', `We deliver ${svc.serviceLower}`],
    ['Instagram comment delivery', `${svc.platform} ${svc.serviceLower} delivery`],
    ['Comments can roll in', `${svc.serviceLabel} can roll in`],
    ['boosting your post now', `boosting your ${svc.boostTarget} now`],
    ['Instagram Panel', `${svc.platform} Panel`],
    ['your Instagram password', `your ${svc.passwordPlatform} password`],
    ['protect your account', `protect your ${svc.protectTarget}`],
    ["canonical: '/instagram-comments'", `canonical: '/${svc.slug}'`],
    [
      'Buy real Instagram comments at affordable prices',
      `Buy real ${svc.platform} ${svc.serviceLower} at affordable prices`,
    ],
  ]);

  result = result.replace(
    /only your [^']+ is required to deliver [^']+'/,
    `only your ${svc.faqUrl} is required to deliver ${svc.serviceLower}'`,
  );

  return result;
}

function patchOrderForm(content, svc) {
  const iconConst = `${svc.platform.replace(/[^a-zA-Z]/g, '')}_ICON`.toUpperCase();
  let result = replaceAll(content, [
    ['InstagramCommentsOrderFormSection', `${svc.pascal}OrderFormSection`],
    ['INSTAGRAM_ICON', iconConst],
    ['TITLE_INSTAGRAM_ICON_SIZE', 'TITLE_PLATFORM_ICON_SIZE'],
    ['FORM_INSTAGRAM_ICON_SIZE', 'FORM_PLATFORM_ICON_SIZE'],
    ['InstagramIcon', `${svc.pascal.replace(/(Followers|Likes|Members|Plays|Viewers|Upvotes|Account)/, '')}Icon`],
    ['Instagram Services', `${svc.platform} Services`],
    ['Order Instagram', `Order ${svc.platform}`],
    ['alt="Instagram"', `alt="${svc.platform}"`],
    ['Instagram', svc.platform],
    ['Comments', svc.serviceLabel],
    ['Comment quantity', svc.sliderAria],
    ['postUrl', 'targetUrl'],
    ['setPostUrl', 'setTargetUrl'],
    ['Instagram Post URL', svc.urlLabel],
    [
      '/images/icons/pricing-instagram-platform-icon.webp',
      svc.platformIcon,
    ],
  ]);

  result = result.replace(
    /useState\('https:\/\/[^']+'\)/,
    svc.urlDefault.startsWith('http')
      ? `useState('${svc.urlDefault}')`
      : `useState('${svc.urlDefault}')`,
  );
  result = result.replace(
    /useState\('[^']+'\)/,
    `useState('${svc.urlDefault}')`,
  );
  result = result.replace(
    /placeholder="[^"]+"/,
    `placeholder="${svc.urlPlaceholder}"`,
  );

  if (svc.urlInputType === 'text') {
    result = result.replace('type="url"', 'type="text"');
  }

  const iconFnName = `${svc.platform.replace(/[^a-zA-Z]/g, '')}Icon`;
  result = result.replace(
    /function \w+Icon\(/,
    `function ${iconFnName}(`,
  );

  return result;
}

function getRelatedFeatures(svc) {
  const siblings = services.filter(
    (s) => s.platformKey === svc.platformKey && s.slug !== svc.slug,
  );

  const features = siblings.slice(0, 2).map((s) => {
    const copy = relatedCopy[s.serviceKey]?.(s.platform) ?? {
      title: `Buy ${s.title}`,
      desc: `Explore ${s.title} from TrendEvo with fast delivery and affordable pricing.`,
    };
    return `      {
        title: '${copy.title}',
        description:
          '${copy.desc}',
        icon: '${s.qualityIcon}',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }`;
  });

  const panelFeature = `      {
        title: '${svc.panelTitle}',
        description:
          'Access more ${svc.platform} growth services from TrendEvo — fast delivery, secure checkout, and 24/7 support to help you scale your presence.',
        icon: '${svc.panelIcon}',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      }`;

  if (features.length < 2) {
    features.push(panelFeature);
  } else if (svc.panelSlug) {
    features.push(panelFeature);
  }

  return features.join(',\n');
}

function buildLeadingBlock(svc) {
  return `  '${svc.slug}': {
    badge: 'WHY CHOOSE US',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 190,
    title: (
      <>
        Why Choose TrendEvo To Buy{' '}
        <span className="text-gradient">${svc.title}</span>
      </>
    ),
    subtitle:
      'TrendEvo delivers reliable ${svc.platform} SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. ${svc.serviceLabel} can roll in slowly, like real growth. Or, they can surge fast, boosting your ${svc.boostTarget} now.",
        icon: '/images/facebook-page-followers/facebook-page-followers-instant-start-fast-delivery-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: '-scale-y-100 rotate-180 object-cover',
      },
      {
        title: 'Affordable Prices',
        description:
          "We price in your money, so it's easy on wallets. Budding bosses, freelancers, students, and creators, take note. Big wins don't need big money spent. Start small to test, then go big later.",
        icon: '/images/facebook-page-followers/facebook-page-followers-affordable-prices-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      },
      {
        title: '24/7 Support',
        description:
          "Our team's here for you all day, every day. Reach out on WhatsApp or email anytime. Got questions on your order or need package advice? Expect quick help in your language.",
        icon: '/images/facebook-page-followers/facebook-page-followers-24-7-support-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[167%] max-w-none object-cover -translate-x-[34%] -translate-y-[13%]',
      },
    ],
    bottomRowFeatures: [
      {
        title: 'Local Payment — bKash, Nagad, Rocket, and More',
        description:
          'Pay with ease using your preferred local method. We accept bKash, Nagad, Upay, and Rocket, ensuring instant crediting of your TrendEvo balance. Enjoy hassle-free transactions without the need for credit cards or international payment gateways.',
        icon: '/images/facebook-page-followers/facebook-page-followers-local-payment-bkash-nagad-rocket-and-more-icon.webp',
        iconWidth: 40,
        iconHeight: 40,
        iconWrapperClassName: 'overflow-hidden',
        iconClassName:
          'size-[125%] max-w-none object-cover -translate-x-[11%] -translate-y-[12%]',
      },
      {
        title: '${svc.qualityTitle}',
        description:
          "${svc.qualityDesc}",
        icon: '${svc.qualityIcon}',
        iconWidth: 54,
        iconHeight: 54,
        iconClassName: 'object-cover',
      },
    ],
  },
  '${svc.slug}-related-services': {
    badge: 'RELATED SERVICE',
    underlineSrc: '/images/why-choose-us/why-choose-us-section-underline.svg',
    underlineWidth: 198,
    title: (
      <>
        Related Services You{' '}
        <span className="text-gradient">Might Also Need</span>
      </>
    ),
    subtitle:
      'TrendEvo offers top-tier ${svc.platform} SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
${getRelatedFeatures(svc)}
    ],
    bottomRowFeatures: [],
  },`;
}

for (const svc of services) {
  const destDir = path.join(root, 'app/(subservice)', svc.slug);
  if (fs.existsSync(destDir)) fs.rmSync(destDir, { recursive: true });
  copyDir(templateDir, destDir);

  const commonReplacements = [
    ['instagram-comments', svc.slug],
    ['InstagramComments', svc.pascal],
    ['instagramCommentsPageData', svc.dataVar],
  ];

  for (const rel of [
    'page.tsx',
    '_components/cta-section.tsx',
    '_components/hero-section.tsx',
    '_components/working-process-section.tsx',
  ]) {
    const filePath = path.join(destDir, rel);
    fs.writeFileSync(
      filePath,
      replaceAll(fs.readFileSync(filePath, 'utf8'), commonReplacements),
    );
  }

  fs.writeFileSync(
    path.join(destDir, 'page-data.ts'),
    patchPageData(fs.readFileSync(path.join(destDir, 'page-data.ts'), 'utf8'), svc),
  );

  let orderForm = fs.readFileSync(
    path.join(destDir, '_components/order-form-section.tsx'),
    'utf8',
  );
  orderForm = patchOrderForm(orderForm, svc);
  const iconFn = `function ${svc.platform.replace(/[^a-zA-Z]/g, '')}Icon`;
  if (!orderForm.includes(iconFn)) {
    orderForm = orderForm.replace(
      /function \w+Icon\(/,
      `function ${svc.platform.replace(/[^a-zA-Z]/g, '')}Icon(`,
    );
  }
  fs.writeFileSync(
    path.join(destDir, '_components/order-form-section.tsx'),
    orderForm,
  );

  console.log(`Generated ${svc.slug}`);
}

const leadingPath = path.join(
  root,
  'components/serviceSmmPanel/service-leading-content.tsx',
);
let leading = fs.readFileSync(leadingPath, 'utf8');

const slugUnionInsert = services
  .flatMap((s) => [`  | '${s.slug}'`, `  | '${s.slug}-related-services'`])
  .join('\n');

leading = leading.replace(
  "  | 'soundcloud-smm-panel'\n  | 'twitch-smm-panel'",
  `${slugUnionInsert}\n  | 'soundcloud-smm-panel'\n  | 'twitch-smm-panel'`,
);

const leadingBlocks = services.map(buildLeadingBlock).join('\n');
leading = leading.replace(
  "  'soundcloud-smm-panel': {",
  `${leadingBlocks}\n  'soundcloud-smm-panel': {`,
);

fs.writeFileSync(leadingPath, leading);

const footerPath = path.join(root, 'app/(home)/_components/footer-section.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');

const footerGroups = new Map();
for (const svc of services) {
  if (!footerGroups.has(svc.footerAfter)) footerGroups.set(svc.footerAfter, []);
  footerGroups.get(svc.footerAfter).push(svc);
}

for (const [anchor, group] of footerGroups) {
  const links = group
    .map((s) => `  { label: '${s.title}', href: '/${s.slug}' },`)
    .join('\n');
  footer = footer.replace(
    `  { label: '${anchor}', href:`,
    (match) => `${match}`,
  );
  const anchorLine = footer.match(
    new RegExp(`  \\{ label: '${anchor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}', href: '[^']+' \\},`),
  );
  if (anchorLine) {
    footer = footer.replace(
      anchorLine[0],
      `${anchorLine[0]}\n${links}`,
    );
  }
}

fs.writeFileSync(footerPath, footer);

console.log('Updated service-leading-content and footer');
