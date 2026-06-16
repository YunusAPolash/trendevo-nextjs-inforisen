import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const templateDir = path.join(root, 'app/(subservice)/instagram-comments');

const services = [
  {
    slug: 'youtube-subscribers',
    pascal: 'YoutubeSubscribers',
    dataVar: 'youtubeSubscribersPageData',
    title: 'YouTube Subscribers',
    serviceLabel: 'Subscribers',
    serviceKey: 'subscribers',
    serviceLower: 'subscribers',
    urlLabel: 'YouTube Channel URL',
    urlDefault: 'https://youtube.com/@yourchannel',
    urlPlaceholder: 'https://youtube.com/@yourchannel',
    step3: 'Find the YouTube Subscribers Service',
    step4: 'Enter Your YouTube Channel URL & Place the Order',
    heroEngagement: 'real subscribers and channel growth',
    qualityTitle: 'Real Subscribers from Quality Sources',
    qualityDesc:
      "We deliver genuine YouTube subscribers from active users, ensuring lasting channel growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your subscriber count and enhancing your channel's credibility.",
    qualityIcon:
      '/images/our-services/platforms/our-services-youtube-subscribers-platform-icon.webp',
    sliderAria: 'Subscriber quantity',
    faqUrl: 'public channel URL',
    boostTarget: 'channel',
  },
  {
    slug: 'youtube-views',
    pascal: 'YoutubeViews',
    dataVar: 'youtubeViewsPageData',
    title: 'YouTube Views',
    serviceLabel: 'Views',
    serviceKey: 'views',
    serviceLower: 'views',
    urlLabel: 'YouTube Video URL',
    urlDefault: 'https://youtube.com/watch?v=yourvideo',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    step3: 'Find the YouTube Views Service',
    step4: 'Enter Your YouTube Video URL & Place the Order',
    heroEngagement: 'real views and watch-time growth',
    qualityTitle: 'Real Views from Quality Sources',
    qualityDesc:
      "We deliver genuine YouTube views from active users, helping your videos rank better and reach more audiences. Our packages boost visibility and enhance your video's credibility on the platform.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
    sliderAria: 'View quantity',
    faqUrl: 'public video URL',
    boostTarget: 'video',
  },
  {
    slug: 'youtube-comments',
    pascal: 'YoutubeComments',
    dataVar: 'youtubeCommentsPageData',
    title: 'YouTube Comments',
    serviceLabel: 'Comments',
    serviceKey: 'comments',
    serviceLower: 'comments',
    urlLabel: 'YouTube Video URL',
    urlDefault: 'https://youtube.com/watch?v=yourvideo',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    step3: 'Find the YouTube Comments Service',
    step4: 'Enter Your YouTube Video URL & Place the Order',
    heroEngagement: 'real comments and engagement',
    qualityTitle: 'Real Comments from Quality Sources',
    qualityDesc:
      "We deliver genuine YouTube comments from active users, sparking conversation on your videos. Our packages help boost engagement signals and enhance your video's social proof.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
    sliderAria: 'Comment quantity',
    faqUrl: 'public video URL',
    boostTarget: 'video',
  },
  {
    slug: 'youtube-likes',
    pascal: 'YoutubeLikes',
    dataVar: 'youtubeLikesPageData',
    title: 'YouTube Likes',
    serviceLabel: 'Likes',
    serviceKey: 'likes',
    serviceLower: 'likes',
    urlLabel: 'YouTube Video URL',
    urlDefault: 'https://youtube.com/watch?v=yourvideo',
    urlPlaceholder: 'https://youtube.com/watch?v=yourvideo',
    step3: 'Find the YouTube Likes Service',
    step4: 'Enter Your YouTube Video URL & Place the Order',
    heroEngagement: 'real likes and engagement',
    qualityTitle: 'Real Likes from Quality Sources',
    qualityDesc:
      "We deliver genuine YouTube likes from active users, improving your video's engagement rate. Our packages include a refill guarantee to help maintain your like count and video credibility.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    sliderAria: 'Like quantity',
    faqUrl: 'public video URL',
    boostTarget: 'video',
  },
];

const relatedMeta = {
  subscribers: {
    title: 'Buy YouTube Subscribers',
    desc: 'Grow your YouTube channel with real subscribers. TrendEvo offers affordable packages with fast delivery to help you reach monetization and build authority faster.',
    icon: '/images/our-services/platforms/our-services-youtube-subscribers-platform-icon.webp',
    w: 40,
    h: 40,
  },
  views: {
    title: 'Buy YouTube Views',
    desc: 'Boost views on your YouTube videos to improve reach and ranking. TrendEvo delivers fast, affordable view packages for creators and businesses.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
    w: 54,
    h: 54,
  },
  comments: {
    title: 'Buy YouTube Comments',
    desc: 'Get more comments on your videos to spark discussion and improve engagement signals for the YouTube algorithm.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
    w: 54,
    h: 54,
  },
  likes: {
    title: 'Buy YouTube Likes',
    desc: 'Increase likes on your YouTube videos to improve social proof and engagement rate. TrendEvo offers affordable packages with fast delivery.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    w: 54,
    h: 54,
  },
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
  const boostWord = svc.boostTarget === 'channel' ? 'channel' : 'video';

  return replaceAll(content, [
    ['instagram-comments', svc.slug],
    ['InstagramCommentsPageData', `${svc.pascal}PageData`],
    ['Instagram Comments', svc.title],
    ['Buy gt<Instagram Comments>', `Buy gt<${svc.title}>`],
    ['How to Buy Instagram Comments', `How to Buy ${svc.title}`],
    ['Growing an Instagram profile', 'Growing a YouTube channel'],
    ['help your profile thrive', 'help your channel thrive'],
    ['Instagram profile growth', 'YouTube channel growth'],
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
    ['An Instagram SMM panel', 'A YouTube SMM panel'],
    ['Instagram comments', `YouTube ${svc.serviceLower}`],
    ['instagram comments', `youtube ${svc.serviceLower}`],
    ['your Instagram comments', `your YouTube ${svc.serviceLower}`],
    ['deliver comments', `deliver ${svc.serviceLower}`],
    ['We deliver comments', `We deliver ${svc.serviceLower}`],
    ['Instagram comment delivery', `YouTube ${svc.serviceLower} delivery`],
    [
      'only your public post URL is required to deliver comments',
      `only your ${svc.faqUrl} is required to deliver ${svc.serviceLower}`,
    ],
    ['Comments can roll in', `${svc.serviceLabel} can roll in`],
    ['boosting your post now', `boosting your ${boostWord} now`],
    ['Instagram Panel', 'YouTube Panel'],
    ['your Instagram password', 'your YouTube password'],
    ['protect your account', 'protect your channel'],
    ["enhancing your post's credibility", `enhancing your ${boostWord}'s credibility`],
    ["canonical: '/instagram-comments'", `canonical: '/${svc.slug}'`],
    [
      'Buy real Instagram comments at affordable prices',
      `Buy real YouTube ${svc.serviceLower} at affordable prices`,
    ],
  ]);
}

function patchOrderForm(content, svc) {
  return replaceAll(content, [
    ['InstagramCommentsOrderFormSection', `${svc.pascal}OrderFormSection`],
    ['INSTAGRAM_ICON', 'YOUTUBE_ICON'],
    ['TITLE_INSTAGRAM_ICON_SIZE', 'TITLE_YOUTUBE_ICON_SIZE'],
    ['FORM_INSTAGRAM_ICON_SIZE', 'FORM_YOUTUBE_ICON_SIZE'],
    ['InstagramIcon', 'YoutubeIcon'],
    ['Instagram Services', 'YouTube Services'],
    ['Order Instagram', 'Order YouTube'],
    ['alt="Instagram"', 'alt="YouTube"'],
    ['Instagram', 'YouTube'],
    ['Comments', svc.serviceLabel],
    ['Comment quantity', svc.sliderAria],
    ['postUrl', 'targetUrl'],
    ['setPostUrl', 'setTargetUrl'],
    ['Instagram Post URL', svc.urlLabel],
    [
      '/images/icons/pricing-instagram-platform-icon.webp',
      '/images/icons/pricing-youtube-platform-icon.webp',
    ],
  ])
    .replace(
      /useState\('https:\/\/[^']+'\)/,
      `useState('${svc.urlDefault}')`,
    )
    .replace(
      /placeholder="https:\/\/[^"]+"/,
      `placeholder="${svc.urlPlaceholder}"`,
    );
}

function buildLeadingBlock(svc) {
  const relatedKeys = ['subscribers', 'views', 'comments', 'likes']
    .filter((k) => k !== svc.serviceKey)
    .slice(0, 3);

  const relatedFeatures = relatedKeys
    .map((k) => {
      const m = relatedMeta[k];
      return `      {
        title: '${m.title}',
        description:
          '${m.desc}',
        icon: '${m.icon}',
        iconWidth: ${m.w},
        iconHeight: ${m.h},
        iconClassName: 'object-cover',
      }`;
    })
    .join(',\n');

  const boostWord = svc.boostTarget === 'channel' ? 'channel' : 'video';

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
      'TrendEvo delivers reliable YouTube SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. ${svc.serviceLabel} can roll in slowly, like real growth. Or, they can surge fast, boosting your ${boostWord} now.",
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
      'TrendEvo offers top-tier YouTube SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
${relatedFeatures}
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
  "  | 'instagram-smm-panel'\n  | 'telegram-smm-panel'",
  `  | 'instagram-smm-panel'\n${slugUnionInsert}\n  | 'telegram-smm-panel'`,
);

const leadingBlocks = services.map(buildLeadingBlock).join('\n');
leading = leading.replace(
  "  'youtube-smm-panel': {",
  `${leadingBlocks}\n  'youtube-smm-panel': {`,
);

fs.writeFileSync(leadingPath, leading);

const footerPath = path.join(root, 'app/(home)/_components/footer-section.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
const footerLinks = services
  .map((s) => `  { label: '${s.title}', href: '/${s.slug}' },`)
  .join('\n');
footer = footer.replace(
  "  { label: 'Youtube Services', href: '/youtube-smm-panel' },",
  `  { label: 'Youtube Services', href: '/youtube-smm-panel' },\n${footerLinks}`,
);
fs.writeFileSync(footerPath, footer);

console.log('Updated service-leading-content and footer');
