import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const templateDir = path.join(root, 'app/(subservice)/instagram-comments');

const LINKEDIN_ICON =
  '/images/platform-marquee/platform-marquee-linkedin-platform-icon.webp';

const services = [
  {
    slug: 'linkedin-followers',
    pascal: 'LinkedinFollowers',
    dataVar: 'linkedinFollowersPageData',
    title: 'LinkedIn Followers',
    serviceLabel: 'Followers',
    serviceKey: 'followers',
    serviceLower: 'followers',
    urlLabel: 'LinkedIn Profile URL',
    urlDefault: 'https://linkedin.com/in/yourprofile',
    urlPlaceholder: 'https://linkedin.com/in/yourprofile',
    step3: 'Find the LinkedIn Followers Service',
    step4: 'Enter Your LinkedIn Profile URL & Place the Order',
    heroEngagement: 'real followers and professional growth',
    qualityTitle: 'Real Followers from Quality Sources',
    qualityDesc:
      "We deliver genuine LinkedIn followers from active professionals, ensuring lasting growth. Our packages include a refill guarantee, so any drops are promptly replenished, maintaining your follower count and enhancing your profile's credibility.",
    qualityIcon:
      '/images/our-services/platforms/our-services-linkedin-followers-platform-icon.webp',
    sliderAria: 'Follower quantity',
    faqUrl: 'public profile URL',
    boostTarget: 'profile',
  },
  {
    slug: 'linkedin-likes',
    pascal: 'LinkedinLikes',
    dataVar: 'linkedinLikesPageData',
    title: 'LinkedIn Likes',
    serviceLabel: 'Likes',
    serviceKey: 'likes',
    serviceLower: 'likes',
    urlLabel: 'LinkedIn Post URL',
    urlDefault: 'https://linkedin.com/posts/username_activity-123456789',
    urlPlaceholder: 'https://linkedin.com/posts/username_activity-123456789',
    step3: 'Find the LinkedIn Likes Service',
    step4: 'Enter Your LinkedIn Post URL & Place the Order',
    heroEngagement: 'real likes and engagement',
    qualityTitle: 'Real Likes from Quality Sources',
    qualityDesc:
      "We deliver genuine LinkedIn likes from active professionals, improving your post's engagement rate. Our packages help boost visibility and enhance your content's credibility on the platform.",
    qualityIcon:
      '/images/service-smm-panel/facebook-smm-panel-facebook-page-like-icon.png',
    sliderAria: 'Like quantity',
    faqUrl: 'public post URL',
    boostTarget: 'post',
  },
];

const relatedMeta = {
  followers: {
    title: 'Buy LinkedIn Followers',
    desc: 'Grow your LinkedIn profile with real followers. TrendEvo offers affordable packages with fast delivery to help you build professional authority and reach more people.',
    icon: '/images/our-services/platforms/our-services-linkedin-followers-platform-icon.webp',
    w: 40,
    h: 40,
  },
  likes: {
    title: 'Buy LinkedIn Likes',
    desc: 'Increase likes on your LinkedIn posts to improve visibility and social proof. TrendEvo offers affordable packages with fast delivery for professionals and businesses.',
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
  return replaceAll(content, [
    ['instagram-comments', svc.slug],
    ['InstagramCommentsPageData', `${svc.pascal}PageData`],
    ['Instagram Comments', svc.title],
    ['Buy gt<Instagram Comments>', `Buy gt<${svc.title}>`],
    ['How to Buy Instagram Comments', `How to Buy ${svc.title}`],
    ['Growing an Instagram profile', 'Growing a LinkedIn profile'],
    ['Instagram profile growth', 'LinkedIn profile growth'],
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
    ['An Instagram SMM panel', 'A LinkedIn SMM panel'],
    ['Instagram comments', `LinkedIn ${svc.serviceLower}`],
    ['instagram comments', `linkedin ${svc.serviceLower}`],
    ['your Instagram comments', `your LinkedIn ${svc.serviceLower}`],
    ['deliver comments', `deliver ${svc.serviceLower}`],
    ['We deliver comments', `We deliver ${svc.serviceLower}`],
    ['Instagram comment delivery', `LinkedIn ${svc.serviceLower} delivery`],
    [
      'only your public post URL is required to deliver comments',
      `only your ${svc.faqUrl} is required to deliver ${svc.serviceLower}`,
    ],
    ['Comments can roll in', `${svc.serviceLabel} can roll in`],
    ['boosting your post now', `boosting your ${svc.boostTarget} now`],
    ['Instagram Panel', 'LinkedIn Panel'],
    ['your Instagram password', 'your LinkedIn password'],
    ['protect your account', 'protect your profile'],
    ["canonical: '/instagram-comments'", `canonical: '/${svc.slug}'`],
    [
      'Buy real Instagram comments at affordable prices',
      `Buy real LinkedIn ${svc.serviceLower} at affordable prices`,
    ],
  ]);
}

function patchOrderForm(content, svc) {
  return replaceAll(content, [
    ['InstagramCommentsOrderFormSection', `${svc.pascal}OrderFormSection`],
    ['INSTAGRAM_ICON', 'LINKEDIN_ICON'],
    ['TITLE_INSTAGRAM_ICON_SIZE', 'TITLE_LINKEDIN_ICON_SIZE'],
    ['FORM_INSTAGRAM_ICON_SIZE', 'FORM_LINKEDIN_ICON_SIZE'],
    ['InstagramIcon', 'LinkedinIcon'],
    ['Instagram Services', 'LinkedIn Services'],
    ['Order Instagram', 'Order LinkedIn'],
    ['alt="Instagram"', 'alt="LinkedIn"'],
    ['Instagram', 'LinkedIn'],
    ['Comments', svc.serviceLabel],
    ['Comment quantity', svc.sliderAria],
    ['postUrl', 'targetUrl'],
    ['setPostUrl', 'setTargetUrl'],
    ['Instagram Post URL', svc.urlLabel],
    [
      '/images/icons/pricing-instagram-platform-icon.webp',
      LINKEDIN_ICON,
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
  const relatedKeys = ['followers', 'likes'].filter((k) => k !== svc.serviceKey);

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

  const thirdRelated = `      {
        title: 'LinkedIn Engagement Packages',
        description:
          'Combine followers, likes, and connections to build a stronger professional presence. TrendEvo helps you grow your LinkedIn profile with affordable, reliable SMM services.',
        icon: '${LINKEDIN_ICON}',
        iconWidth: 40,
        iconHeight: 40,
        iconClassName: 'object-cover',
      }`;

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
      'TrendEvo delivers reliable LinkedIn SMM services with fast processing and real engagement. We help you grow reach, visibility, and performance with ease.',
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
      'TrendEvo offers top-tier LinkedIn SMM services, ensuring rapid delivery and authentic engagement. We empower you to effortlessly amplify your reach, enhance visibility, and boost overall performance.',
    titleClassName:
      'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
    subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
    topRowFeatures: [
${relatedFeatures},
${thirdRelated}
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
  "  | 'spotify-smm-panel'\n  | 'soundcloud-smm-panel'",
  `${slugUnionInsert}\n  | 'spotify-smm-panel'\n  | 'soundcloud-smm-panel'`,
);

const leadingBlocks = services.map(buildLeadingBlock).join('\n');
leading = leading.replace(
  "  'spotify-smm-panel': {",
  `${leadingBlocks}\n  'spotify-smm-panel': {`,
);

fs.writeFileSync(leadingPath, leading);

const footerPath = path.join(root, 'app/(home)/_components/footer-section.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
const footerLinks = services
  .map((s) => `  { label: '${s.title}', href: '/${s.slug}' },`)
  .join('\n');
footer = footer.replace(
  "  { label: 'TikTok Views', href: '/tiktok-views' },",
  `  { label: 'TikTok Views', href: '/tiktok-views' },\n${footerLinks}`,
);
fs.writeFileSync(footerPath, footer);

console.log('Updated service-leading-content and footer');
