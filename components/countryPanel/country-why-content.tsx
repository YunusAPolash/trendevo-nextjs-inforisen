import type { ReactNode } from 'react';

export type CountryWhyFeature = {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export type CountryWhyContent = {
  badge: string;
  title: ReactNode;
  subtitle: string;
  centerFlag: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  leftFeatures: [CountryWhyFeature, CountryWhyFeature];
  rightFeatures: [CountryWhyFeature, CountryWhyFeature];
  underlineSrc: string;
  underlineWidth: number;
  titleClassName?: string;
  subtitleClassName?: string;
};

export type CountryWhySlug = 'smm-panel-uk';

export const countryWhyContent: Record<CountryWhySlug, CountryWhyContent> = {
  'smm-panel-uk': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in the UK?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the UK market.',
    underlineSrc: '/images/country/uk/why-underline.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/uk/why-uk-flag.png',
      alt: 'United Kingdom flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for the UK',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the UK market. Unlike international platforms that treat the UK as secondary, our services are designed around the needs and expectations of UK users.',
        icon: '/images/why-choose-us/cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for UK businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/affordable-pricing.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/fast-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist UK users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/customer-support-icon.png',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
};

export function getCountryWhyContent(slug: CountryWhySlug): CountryWhyContent {
  return countryWhyContent[slug];
}
