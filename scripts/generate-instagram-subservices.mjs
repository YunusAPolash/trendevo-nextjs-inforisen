import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const templateDir = path.join(root, 'app/(subservice)/instagram-comments');

const services = [
  {
    slug: 'instagram-likes',
    pascal: 'InstagramLikes',
    dataVar: 'instagramLikesPageData',
    title: 'Instagram Likes',
    serviceLabel: 'Likes',
    serviceLower: 'likes',
    urlLabel: 'Instagram Post URL',
    urlDefault: 'https://instagram.com/p/yourpost',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    step3: 'Find the Instagram Likes Service',
    step4: 'Enter Your Instagram Post URL & Place the Order',
    heroEngagement: 'real likes and engagement',
    deliveryWord: 'likes',
    qualityTitle: 'Real Likes from Quality Sources',
    qualityDesc:
      "We deliver genuine Instagram likes from active profiles, ensuring lasting engagement. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your like count and enhancing your post's credibility.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    sliderAria: 'Like quantity',
    faqUrl: 'public post URL',
    faqDeliver: 'likes',
  },
  {
    slug: 'instagram-followers',
    pascal: 'InstagramFollowers',
    dataVar: 'instagramFollowersPageData',
    title: 'Instagram Followers',
    serviceLabel: 'Followers',
    serviceLower: 'followers',
    urlLabel: 'Instagram Profile URL',
    urlDefault: 'https://instagram.com/yourprofile',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    step3: 'Find the Instagram Followers Service',
    step4: 'Enter Your Instagram Profile URL & Place the Order',
    heroEngagement: 'real followers and engagement',
    deliveryWord: 'followers',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine Instagram followers from active profiles, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
    qualityIcon:
      '/images/our-services/platforms/our-services-instagram-followers-platform-icon.webp',
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    faqDeliver: 'followers',
  },
  {
    slug: 'instagram-views',
    pascal: 'InstagramViews',
    dataVar: 'instagramViewsPageData',
    title: 'Instagram Views',
    serviceLabel: 'Views',
    serviceLower: 'views',
    urlLabel: 'Instagram Post/Reel URL',
    urlDefault: 'https://instagram.com/p/yourpost',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    step3: 'Find the Instagram Views Service',
    step4: 'Enter Your Instagram Post/Reel URL & Place the Order',
    heroEngagement: 'real views and engagement',
    deliveryWord: 'views',
    qualityTitle: 'Real Views from Quality Sources',
    qualityDesc:
      "We deliver genuine Instagram views from active users, ensuring lasting reach. Our packages help boost your content visibility and enhance your post's credibility across posts and reels.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
    sliderAria: 'View quantity',
    faqUrl: 'public post or reel URL',
    faqDeliver: 'views',
  },
  {
    slug: 'instagram-shares',
    pascal: 'InstagramShares',
    dataVar: 'instagramSharesPageData',
    title: 'Instagram Shares',
    serviceLabel: 'Shares',
    serviceLower: 'shares',
    urlLabel: 'Instagram Post URL',
    urlDefault: 'https://instagram.com/p/yourpost',
    urlPlaceholder: 'https://instagram.com/p/yourpost',
    step3: 'Find the Instagram Shares Service',
    step4: 'Enter Your Instagram Post URL & Place the Order',
    heroEngagement: 'real shares and engagement',
    deliveryWord: 'shares',
    qualityTitle: 'Real Shares from Quality Sources',
    qualityDesc:
      "We deliver genuine Instagram shares from active profiles, helping your content reach new audiences. Our packages boost visibility and enhance your post's reach beyond your current followers.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
    sliderAria: 'Share quantity',
    faqUrl: 'public post URL',
    faqDeliver: 'shares',
  },
  {
    slug: 'instagram-auto-likes',
    pascal: 'InstagramAutoLikes',
    dataVar: 'instagramAutoLikesPageData',
    title: 'Instagram Auto-Likes',
    serviceLabel: 'Auto-Likes',
    serviceLower: 'auto-likes',
    urlLabel: 'Instagram Profile URL',
    urlDefault: 'https://instagram.com/yourprofile',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    step3: 'Find the Instagram Auto-Likes Service',
    step4: 'Enter Your Instagram Profile URL & Place the Order',
    heroEngagement: 'automatic likes on new posts',
    deliveryWord: 'auto-likes',
    qualityTitle: 'Automatic Likes on New Posts',
    qualityDesc:
      'Set up auto-likes once and let TrendEvo automatically deliver likes to your new Instagram posts. Enjoy consistent engagement without placing a separate order every time you publish.',
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    sliderAria: 'Auto-like quantity',
    faqUrl: 'public profile URL',
    faqDeliver: 'auto-likes',
  },
  {
    slug: 'instagram-story-views',
    pascal: 'InstagramStoryViews',
    dataVar: 'instagramStoryViewsPageData',
    title: 'Instagram Story Views',
    serviceLabel: 'Story Views',
    serviceLower: 'story views',
    urlLabel: 'Instagram Profile URL',
    urlDefault: 'https://instagram.com/yourprofile',
    urlPlaceholder: 'https://instagram.com/yourprofile',
    step3: 'Find the Instagram Story Views Service',
    step4: 'Enter Your Instagram Profile URL & Place the Order',
    heroEngagement: 'real story views and engagement',
    deliveryWord: 'story views',
    qualityTitle: 'Real Story Views from Quality Sources',
    qualityDesc:
      "We deliver genuine Instagram story views from active users, helping your stories reach more people. Boost visibility and keep your audience engaged with every story you post.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
    sliderAria: 'Story view quantity',
    faqUrl: 'public profile URL',
    faqDeliver: 'story views',
  },
];

const relatedMeta = {
  likes: {
    title: 'Buy Instagram Likes',
    desc: 'Increase likes on your posts and reels to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery so your content gets the engagement it deserves.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    w: 54,
    h: 54,
  },
  followers: {
    title: 'Buy Instagram Followers',
    desc: "We provide real Instagram followers sourced from engaged users, ensuring sustained activity on your profile. Our packages come with a drop protection policy to secure your growth.",
    icon: '/images/our-services/platforms/our-services-instagram-followers-platform-icon.webp',
    w: 40,
    h: 40,
  },
  views: {
    title: 'Buy Instagram Views',
    desc: 'Boost views on your Instagram posts and reels to improve reach and algorithm performance. TrendEvo delivers fast, affordable view packages for creators and businesses.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-video-views-icon.png',
    w: 54,
    h: 54,
  },
  shares: {
    title: 'Buy Instagram Shares',
    desc: 'Get more shares on your posts to expand your reach beyond your current follower base and attract new audiences organically.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-group-member-icon.webp',
    w: 54,
    h: 54,
  },
  'auto-likes': {
    title: 'Buy Instagram Auto-Likes',
    desc: 'Automatically receive likes on every new post you publish. Set it up once and enjoy consistent engagement without manual orders.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    w: 54,
    h: 54,
  },
  'story-views': {
    title: 'Buy Instagram Story Views',
    desc: 'Increase views on your Instagram stories to boost visibility and keep your audience engaged with every update you share.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-story-views-icon.png',
    w: 70,
    h: 54,
  },
  comments: {
    title: 'Buy Instagram Comments',
    desc: 'Get more comments on your posts to make your content more engaging and visible to your followers and the Instagram algorithm.',
    icon: '/images/service-smm-panel/facebook-smm-panel-facebook-post-react-icon.png',
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
  let result = replaceAll(content, [
    ['instagram-comments', svc.slug],
    ['InstagramCommentsPageData', `${svc.pascal}PageData`],
    ['Instagram Comments', svc.title],
    [
      'real comments and engagement',
      svc.heroEngagement,
    ],
    ['Find the Instagram Comments Service', svc.step3],
    [
      'Enter Your Instagram Post URL & Place the Order',
      svc.step4,
    ],
    [
      "['instagram-comments', 'instagram-comments-related-services']",
      `['${svc.slug}', '${svc.slug}-related-services']`,
    ],
    ['Instagram comments', `Instagram ${svc.serviceLower}`],
    ['instagram comments', `instagram ${svc.serviceLower}`],
    ['your Instagram comments', `your Instagram ${svc.serviceLower}`],
    ['deliver comments', `deliver ${svc.serviceLower}`],
    ['We deliver comments', `We deliver ${svc.serviceLower}`],
    ['Instagram comment delivery', `Instagram ${svc.serviceLower} delivery`],
    [
      'only your public post URL is required to deliver comments',
      `only your ${svc.faqUrl} is required to deliver ${svc.serviceLower}`,
    ],
    ['Comments can roll in', `${svc.serviceLabel} can roll in`],
    ['boosting your post now', 'boosting your profile now'],
  ]);

  result = result.replace(
    /canonical: '\/instagram-[^']+'/,
    `canonical: '/${svc.slug.replace('instagram-', 'instagram-')}'`,
  );

  return result;
}

function patchOrderForm(content, svc) {
  return replaceAll(content, [
    ['InstagramCommentsOrderFormSection', `${svc.pascal}OrderFormSection`],
    ['Comments', svc.serviceLabel],
    ['Comment quantity', svc.sliderAria],
    ['postUrl', 'targetUrl'],
    ['setPostUrl', 'setTargetUrl'],
    [svc.urlDefault, svc.urlDefault],
    ['Instagram Post URL', svc.urlLabel],
    [svc.urlDefault, svc.urlDefault],
  ]).replace(
    /useState\('https:\/\/instagram\.com\/[^']+'\)/,
    `useState('${svc.urlDefault}')`,
  ).replace(
    /placeholder="https:\/\/instagram\.com\/[^"]+"/,
    `placeholder="${svc.urlPlaceholder}"`,
  );
}

function buildLeadingBlock(svc) {
  const key = svc.slug;
  const relatedKey = `${svc.slug}-related-services`;
  const relatedKeys = ['likes', 'followers', 'views', 'shares', 'auto-likes', 'story-views', 'comments']
    .filter((k) => k !== svc.serviceLower && k !== svc.slug.replace('instagram-', ''))
    .slice(0, 3);

  const relatedFeatures = relatedKeys.map((k) => {
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
  }).join(',\n');

  return `  '${key}': {
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
      'TrendEvo delivers reliable Instagram SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
      {
        title: 'Instant Start, Fast Delivery',
        description:
          "Once your payment clears, we're on it. Delivery speed hinges on your chosen plan. ${svc.serviceLabel} can roll in slowly, like real growth. Or, they can surge fast, boosting your profile now.",
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
  '${relatedKey}': {
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
      'TrendEvo offers top-tier Instagram SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
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
  "  | 'instagram-comments-related-services'\n  | 'instagram-smm-panel'",
  `  | 'instagram-comments-related-services'\n${slugUnionInsert}\n  | 'instagram-smm-panel'`,
);

const leadingBlocks = services.map(buildLeadingBlock).join('\n');
leading = leading.replace(
  "  'instagram-smm-panel': {",
  `${leadingBlocks}\n  'instagram-smm-panel': {`,
);

fs.writeFileSync(leadingPath, leading);

const footerPath = path.join(root, 'app/(home)/_components/footer-section.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
const footerLinks = services
  .map((s) => `  { label: '${s.title}', href: '/${s.slug}' },`)
  .join('\n');
footer = footer.replace(
  "  { label: 'Instagram Comments', href: '/instagram-comments' },",
  `  { label: 'Instagram Comments', href: '/instagram-comments' },\n${footerLinks}`,
);
fs.writeFileSync(footerPath, footer);

console.log('Updated service-leading-content and footer');
