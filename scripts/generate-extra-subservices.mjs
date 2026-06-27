import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const templateDir = path.join(root, 'app/(subservice)/buy-instagram-comments');

const FALLBACK_LIKE =
  '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png';
const FALLBACK_FOLLOWERS =
  '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp';

const services = [
  {
    slug: 'buy-quora-followers',
    pascal: 'QuoraFollowers',
    dataVar: 'quoraFollowersPageData',
    platform: 'Quora',
    iconFn: 'QuoraIcon',
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Quora Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Quora profile',
    thriveText: 'help your profile thrive with real followers and credibility',
    urlLabel: 'Quora Profile URL',
    urlDefault: 'https://quora.com/profile/YourName',
    urlPlaceholder: 'https://quora.com/profile/YourName',
    step3: 'Find the Quora Followers Service',
    step4: 'Enter Your Quora Profile URL & Place the Order',
    heroEngagement: 'real followers and profile growth',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Quora followers from active users, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's authority.",
    qualityIcon: FALLBACK_FOLLOWERS,
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    boostTarget: 'profile',
  },
  {
    slug: 'buy-quora-upvotes',
    pascal: 'QuoraUpvotes',
    dataVar: 'quoraUpvotesPageData',
    platform: 'Quora',
    iconFn: 'QuoraIcon',
    platformIcon: FALLBACK_FOLLOWERS,
    title: 'Quora Upvotes',
    serviceLabel: 'Upvotes',
    serviceKey: 'upvotes',
    serviceLower: 'upvotes',
    growText: 'Growing on Quora',
    thriveText: 'help your answers thrive with real upvotes and visibility',
    urlLabel: 'Quora Answer URL',
    urlDefault: 'https://quora.com/Your-Answer-Link',
    urlPlaceholder: 'https://quora.com/Your-Answer-Link',
    step3: 'Find the Quora Upvotes Service',
    step4: 'Enter Your Quora Answer URL & Place the Order',
    heroEngagement: 'real upvotes and answer visibility',
    qualityTitle: 'Real Upvotes from Quality Sources',
    qualityDesc:
      "We deliver genuine Quora upvotes from active users, helping your answers gain visibility. Our packages boost engagement signals and enhance your answer's reach.",
    qualityIcon: FALLBACK_LIKE,
    sliderAria: 'Upvote quantity',
    faqUrl: 'public answer URL',
    boostTarget: 'answer',
  },
  {
    slug: 'buy-vimeo-followers',
    pascal: 'VimeoFollowers',
    dataVar: 'vimeoFollowersPageData',
    platform: 'Vimeo',
    iconFn: 'VimeoIcon',
    platformIcon:
      '/images/platform-marquee/platform-marquee-youtube-platform-icon.webp',
    title: 'Vimeo Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Vimeo channel',
    thriveText: 'help your channel thrive with real followers and engagement',
    urlLabel: 'Vimeo Channel URL',
    urlDefault: 'https://vimeo.com/yourchannel',
    urlPlaceholder: 'https://vimeo.com/yourchannel',
    step3: 'Find the Vimeo Followers Service',
    step4: 'Enter Your Vimeo Channel URL & Place the Order',
    heroEngagement: 'real followers and channel growth',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Vimeo followers from active viewers, ensuring lasting growth. Our packages help maintain your follower count and enhance your channel's credibility.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
    sliderAria: 'Follower quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
  },
  {
    slug: 'buy-threads-followers',
    pascal: 'ThreadsFollowers',
    dataVar: 'threadsFollowersPageData',
    platform: 'Threads',
    iconFn: 'ThreadsIcon',
    platformIcon: '/images/icons/pricing-instagram-platform-icon.webp',
    title: 'Threads Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    growText: 'Growing a Threads profile',
    thriveText: 'help your profile thrive with real followers and engagement',
    urlLabel: 'Threads Profile URL',
    urlDefault: 'https://threads.net/@yourprofile',
    urlPlaceholder: 'https://threads.net/@yourprofile',
    step3: 'Find the Threads Followers Service',
    step4: 'Enter Your Threads Profile URL & Place the Order',
    heroEngagement: 'real followers and profile growth',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Threads followers from active profiles, ensuring lasting growth. Our packages help maintain your follower count and enhance your profile's credibility.",
    qualityIcon: '/images/icons/pricing-instagram-platform-icon.webp',
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    boostTarget: 'profile',
  },
];

const relatedMeta = {
  followers: (platform) => ({
    title: `Buy ${platform} Followers`,
    desc: `Grow your ${platform} profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build authority.`,
    icon:
      platform === 'Vimeo'
        ? '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png'
        : platform === 'Threads'
          ? '/images/icons/pricing-instagram-platform-icon.webp'
          : FALLBACK_FOLLOWERS,
    w: 54,
    h: 54,
  }),
  upvotes: (platform) => ({
    title: `Buy ${platform} Upvotes`,
    desc: `Increase upvotes on your ${platform} answers to improve visibility and engagement on the platform.`,
    icon: FALLBACK_LIKE,
    w: 54,
    h: 54,
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
    ['real comments and engagement', svc.heroEngagement],
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
    ['your Instagram password', `your ${svc.platform} password`],
    ['protect your account', `protect your ${svc.boostTarget === 'channel' ? 'channel' : 'profile'}`],
    ["canonical: '/buy-instagram-comments'", `canonical: '/${svc.slug}'`],
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
  let result = replaceAll(content, [
    ['InstagramCommentsOrderFormSection', `${svc.pascal}OrderFormSection`],
    ['InstagramIcon', svc.iconFn],
    ['INSTAGRAM_ICON', 'PLATFORM_ICON'],
    ['TITLE_INSTAGRAM_ICON_SIZE', 'TITLE_PLATFORM_ICON_SIZE'],
    ['FORM_INSTAGRAM_ICON_SIZE', 'FORM_PLATFORM_ICON_SIZE'],
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
    /function InstagramIcon\(/,
    `function ${svc.iconFn}(`,
  );
  result = result.replace(
    /useState\('https:\/\/[^']+'\)/,
    `useState('${svc.urlDefault}')`,
  );
  result = result.replace(
    /placeholder="https:\/\/[^"]+"/,
    `placeholder="${svc.urlPlaceholder}"`,
  );

  return result;
}

function getRelatedFeatures(svc) {
  const siblings = services.filter(
    (s) => s.platform === svc.platform && s.slug !== svc.slug,
  );

  const features = siblings.map((s) => {
    const meta = relatedMeta[s.serviceKey](s.platform);
    return `      {
        title: '${meta.title}',
        description:
          '${meta.desc}',
        icon: '${meta.icon}',
        iconWidth: ${meta.w},
        iconHeight: ${meta.h},
        iconClassName: 'object-cover',
      }`;
  });

  const crossPlatform = services
    .filter((s) => s.platform !== svc.platform)
    .slice(0, 3 - features.length)
    .map((s) => {
      const meta = relatedMeta[s.serviceKey](s.platform);
      return `      {
        title: '${meta.title}',
        description:
          '${meta.desc}',
        icon: '${meta.icon}',
        iconWidth: ${meta.w},
        iconHeight: ${meta.h},
        iconClassName: 'object-cover',
      }`;
    });

  return [...features, ...crossPlatform].join(',\n');
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

  fs.writeFileSync(
    path.join(destDir, '_components/order-form-section.tsx'),
    patchOrderForm(
      fs.readFileSync(path.join(destDir, '_components/order-form-section.tsx'), 'utf8'),
      svc,
    ),
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
  "  | 'reddit-account-related-services'\n  | 'soundcloud-smm-panel'",
  `  | 'reddit-account-related-services'\n${slugUnionInsert}\n  | 'soundcloud-smm-panel'`,
);

const leadingBlocks = services.map(buildLeadingBlock).join('\n');
leading = leading.replace(
  "  'soundcloud-smm-panel': {",
  `${leadingBlocks}\n  'soundcloud-smm-panel': {`,
);

fs.writeFileSync(leadingPath, leading);

const footerPath = path.join(root, 'app/(home)/_components/footer-section.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
const footerLinks = services
  .map((s) => `  { label: '${s.title}', href: '/${s.slug}' },`)
  .join('\n');
footer = footer.replace(
  "  { label: 'Reddit Account', href: '/buy-reddit-accounts' },",
  `  { label: 'Reddit Account', href: '/buy-reddit-accounts' },\n${footerLinks}`,
);
fs.writeFileSync(footerPath, footer);

console.log('Updated service-leading-content and footer');
