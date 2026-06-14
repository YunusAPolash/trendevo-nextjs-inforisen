import type { FaqSectionData } from '@/components/sections/faq-section';
import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
};

type SectionHeadingData = {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
  subtitleClassName?: string;
};

type AboutUsHeroData = {
  bg: 'section-1';
  variant: 'wide';
  decoration: 'contact';
  eyebrow: string;
  title: string;
  description: string;
  primaryButtonLabel: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
    maxWidthClassName: string;
  };
  socialIcons: HeroSocialIcon[];
};

type AboutUsTrustCard = {
  title: string;
  description: string;
  iconSrc: string;
  iconClassName: string;
};

type AboutUsPageData = {
  seo: SEO;
  hero: AboutUsHeroData;
  missionVision: {
    heading: SectionHeadingData;
    features: string[];
    platformDescription: string;
    ctaLabel: string;
    image: {
      src: string;
      alt: string;
    };
  };
  trust: {
    heading: SectionHeadingData;
    leftCards: [AboutUsTrustCard, AboutUsTrustCard];
    rightCards: [AboutUsTrustCard, AboutUsTrustCard];
  };
  team: {
    heading: SectionHeadingData;
    introParagraph: string;
    founderParagraph: string;
    checklistItems: string[];
    ctaLabel: string;
    ctaHref: string;
    image: {
      src: string;
      alt: string;
    };
  };
  faq: FaqSectionData;
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

const aboutUsFaqDefaultAnswer =
  'TrendEvo provides fast, secure SMM services with transparent pricing, multiple payment options, and 24/7 support to help you grow across all major social platforms.';

export const data: AboutUsPageData = {
  seo: {
    title: 'About Us | TrendEvo',
    description:
      'Learn about TrendEvo — a trusted SMM panel helping businesses and creators grow on Facebook, Instagram, TikTok, and YouTube with fast, reliable services.',
    canonical: '/about-us',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide',
    decoration: 'contact',
    eyebrow: 'Who We Are',
    title:
      'Trend Evo – gt<Trusted SMM Panel> for Growing Businesses & Creators',
    description:
      'Fast, reliable, and affordable gt<SMM services> to grow your social media presence. From Facebook and Instagram to TikTok and YouTube, Rendevo helps businesses and creators achieve real results. We provide trusted solutions and support to simplify social media marketing and boost growth.',
    primaryButtonLabel: 'Get Started Now',
    illustration: {
      src: '/images/about/about-us-trendevo-specialist-representing-trusted-smm-panel-services-illustration.webp',
      alt: 'TrendEvo specialist representing trusted SMM panel services',
      width: 547,
      height: 673,
      maxWidthClassName: 'max-w-[547px]',
    },
    socialIcons: heroSocialIcons,
  },

  missionVision: {
    heading: {
      badge: 'ABOUT US',
      title: 'Our gt<Mission & Vision>',
      subtitle:
        'A reliable SMM platform designed to deliver fast, secure, and high-quality social media growth for individuals, businesses, and resellers.',
      align: 'left',
      titleClassName:
        'max-w-2xl text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl',
      subtitleClassName: 'max-w-2xl text-xl font-medium',
    },
    features: [
      'Fast Delivery with Smooth and Reliable Performance',
      'Real & High-Quality Engagement to Build Strong Social Proof',
      'Safe, Secure & High Retention for Long-Term Growth',
    ],
    platformDescription:
      'A reliable SMM platform designed to deliver fast, secure, and high-quality social media growth for individuals, businesses, and resellers.',
    ctaLabel: 'Contact with Us',
    image: {
      src: '/images/about/about-us-our-mission-and-vision-illustration.png',
      alt: 'TrendEvo specialist highlighting mission and vision for social media growth',
    },
  },

  trust: {
    heading: {
      badge: 'WHY TRUST US',
      title: 'Why Businesss Owner gt<Trust us>',
      subtitle:
        'Business owners trust us for delivering measurable growth with transparent, reliable services. Our dedicated support and commitment to excellence give businesses the confidence to succeed.',
      titleClassName:
        'text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl',
      subtitleClassName: 'max-w-6xl text-xl font-medium',
    },
    leftCards: [
      {
        title: 'Built for Bangladesh',
        description:
          'While many SMM panels operate in Bangladesh, RendEvo stands out with a dedicated focus on the local market. Unlike international platforms that treat Bangladesh as secondary, our services are designed around the needs and expectations of Bangladeshi users.',
        iconSrc: '/images/about/about-us-built-for-bangladesh-icon.png',
        iconClassName: 'h-10 w-10 object-cover',
      },
      {
        title: 'Local Payment and Pricing',
        description:
          'RendEvo supports local payments like bKash, Nagad, and Rocket, with pricing in Bangladeshi Taka. Our Bangla-speaking team ensures smooth, hassle-free social media growth aligned with local business needs.',
        iconSrc: '/images/about/about-us-local-payment-and-pricing-icon.png',
        iconClassName: 'h-10 w-9 object-cover',
      },
    ],
    rightCards: [
      {
        title: 'Stable and High Quality Services',
        description:
          "RendEvo is more than just a transactional platform—we act as your long-term social media growth partner. Built with local expertise and insights, we are dedicated to supporting Bangladesh's dynamic digital economy while helping businesses achieve sustainable online growth.",
        iconSrc:
          '/images/about/about-us-stable-and-high-quality-services-icon.webp',
        iconClassName: 'h-10 w-10 object-cover',
      },
      {
        title: 'Local Support & Real Guidance',
        description:
          'We vet suppliers to ensure high-quality engagement and strong retention. Our system delivers orders accurately with minimal issues, while our guidance in English and Bangla helps you make smarter growth decisions.',
        iconSrc:
          '/images/about/about-us-local-support-and-real-guidance-icon.webp',
        iconClassName: 'h-10 w-8 object-cover',
      },
    ],
  },

  team: {
    heading: {
      badge: 'OUR TEAM',
      title: 'The Team Behind Tgt<RendEvo>',
      align: 'left',
      titleClassName:
        'text-4xl leading-snug tracking-wide text-[#13203b] lg:text-5xl',
    },
    introParagraph:
      'gt<RendEvo> is powered by a skilled team of digital marketing specialists, software engineers, social media strategists, and customer success experts. Each member shares a single mission: to help gt<Bangladeshi businesses> grow online with effective, results-driven social media solutions tailored to the local market.',
    founderParagraph:
      'Our founder, gt<Seam Rahman>, brings over gt<10 years of experience> guiding RendEvo\'s vision for impactful digital growth. The technical team ensures a secure, stable platform gt<24/7>, while our support staff offers personalized guidance in Bangla and English.',
    checklistItems: [
      'RendEvo makes digital marketing tools accessible to all Bangladeshi businesses.',
      'We keep refining our services for reliable platform performance.',
      'Client success drives us to maintain top social media growth standards.',
      'RendEvo provides Bangladeshi businesses with reliable tools for online growth.',
    ],
    ctaLabel: 'Our Services',
    ctaHref: '/services',
    image: {
      src: '/images/about/about-us-trendevo-specialist-representing-trusted-smm-panel-services-illustration.webp',
      alt: 'TrendEvo team specialist representing digital marketing expertise',
    },
  },

  faq: {
    label: 'FAQ',
    title: 'gt<Frequently> Asked Questions',
    subtitle:
      'Find clear and simple explanations to the most common questions about our services, payments, orders, and account management.',
    bg: 'section-7',
    items: [
      {
        question: 'What is an SMM panel and how does TrendEvo work?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'How fast will my order be delivered?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'Are the followers and engagement real?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'What payment methods do you accept?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'Do you offer reseller or API access?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'Is my account information safe?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'What happens if an order drops?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'How can I contact support?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'Can I place bulk orders?',
        answer: aboutUsFaqDefaultAnswer,
      },
      {
        question: 'Do you offer refunds?',
        answer: aboutUsFaqDefaultAnswer,
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
  },
};
