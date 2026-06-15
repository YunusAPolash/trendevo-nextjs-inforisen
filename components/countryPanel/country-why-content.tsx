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

export type CountryWhySlug = 'smm-panel-uk' | 'smm-panel-vietnam' | 'smm-panel-thailand' | 'smm-panel-pakistan' | 'smm-panel-nigeria' | 'smm-panel-brazil' | 'smm-panel-egypt' | 'smm-panel-india' | 'smm-panel-indonesia';

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
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/uk/uk-united-kingdom-flag-icon.webp',
      alt: 'United Kingdom flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for the UK',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the UK market. Unlike international platforms that treat the UK as secondary, our services are designed around the needs and expectations of UK users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for UK businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist UK users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-vietnam': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Vietnam?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Vietnamese market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/vietnam/vietnam.png',
      alt: 'Vietnam flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Vietnam',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Vietnamese market. Unlike international platforms that treat Vietnam as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Vietnamese businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Vietnamese users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-thailand': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Thailand?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Thai market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/thailand/thailand.png',
      alt: 'Thailand flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Thailand',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Thai market. Unlike international platforms that treat Thailand as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Thai businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Thai users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-pakistan': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Pakistan?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Pakistani market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/pakistan/pakistan.png',
      alt: 'Pakistan flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Pakistan',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Pakistani market. Unlike international platforms that treat Pakistan as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Pakistani businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Pakistani users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-nigeria': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Nigeria?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Nigerian market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/nigeria/nigeria.png',
      alt: 'Nigeria flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Nigeria',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Nigerian market. Unlike international platforms that treat Nigeria as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Nigerian businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Nigerian users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-brazil': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Brazil?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Brazilian market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/brazil/brazil.png',
      alt: 'Brazil flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Brazil',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Brazilian market. Unlike international platforms that treat Brazil as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Brazilian businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Brazilian users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-egypt': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Egypt?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Egyptian market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/egypt/egypt.png',
      alt: 'Egypt flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Egypt',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Egyptian market. Unlike international platforms that treat Egypt as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Egyptian businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Egyptian users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-india': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in India?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Indian market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/india/india.png',
      alt: 'India flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for India',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Indian market. Unlike international platforms that treat India as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Indian businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Indian users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
  'smm-panel-indonesia': {
    badge: 'Why Choose Us',
    title: (
      <>
        Why Choose <span className="text-gradient">TrendEvo in Indonesia?</span>
      </>
    ),
    subtitle:
      'Get high-quality engagement, instant delivery, and trusted performance for your brand. Grow faster with smart, affordable solutions designed for the Indonesian market.',
    underlineSrc: '/images/country/uk/uk-section-underline-2.svg',
    underlineWidth: 190,
    titleClassName:
      'text-2xl tracking-[0.36px] text-[#13203b] sm:text-[32px] lg:text-[36px]',
    subtitleClassName: 'max-w-[1176px] text-base font-medium sm:text-lg',
    centerFlag: {
      src: '/images/country/indonesia/indonesia.png',
      alt: 'Indonesia flag',
      width: 150,
      height: 126,
    },
    leftFeatures: [
      {
        title: 'Built for Indonesia',
        description:
          'While many SMM panels operate globally, TrendEvo stands out with a dedicated focus on the Indonesian market. Unlike international platforms that treat Indonesia as secondary, our services are designed around the needs and expectations of local users.',
        icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
      {
        title: 'Affordable Pricing',
        description:
          'TrendEvo offers competitive pricing tailored for Indonesian businesses and creators, helping you grow your social presence without overspending on marketing.',
        icon: '/images/country/uk/uk-affordable-pricing-icon.png',
        iconWidth: 43,
        iconHeight: 40,
      },
    ],
    rightFeatures: [
      {
        title: 'Fast & Reliable Delivery',
        description:
          'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
        icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
        iconWidth: 40,
        iconHeight: 40,
      },
      {
        title: '24/7 Dedicated Customer Support',
        description:
          'Our support team is available around the clock to assist Indonesian users with orders, delivery questions, and account guidance whenever you need help.',
        icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
        iconWidth: 47,
        iconHeight: 40,
      },
    ],
  },
};

export function getCountryWhyContent(slug: CountryWhySlug): CountryWhyContent {
  return countryWhyContent[slug];
}
