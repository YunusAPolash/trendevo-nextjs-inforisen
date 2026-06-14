export const CARD_DESCRIPTION =
  'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.';

export const leftFeatures = [
  {
    title: 'Cheapest SMM Panel',
    icon: '/images/why-choose-us/why-choose-us-cheapest-smm-panel-icon.png',
    iconWidth: 43,
    iconHeight: 40,
  },
  {
    title: 'Fast & Reliable Delivery',
    icon: '/images/why-choose-us/why-choose-us-fast-and-reliable-delivery-icon.png',
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    title: 'Multitude of Services',
    icon: '/images/why-choose-us/why-choose-us-multitude-of-services-icon.webp',
    iconWidth: 57,
    iconHeight: 30,
  },
] as const;

export const rightFeatures = [
  {
    title: 'Real-time & Data',
    icon: '/images/why-choose-us/why-choose-us-real-time-and-data-icon.webp',
    iconWidth: 43,
    iconHeight: 40,
  },
  {
    title: 'Bulk Orders Provide',
    icon: '/images/why-choose-us/why-choose-us-bulk-orders-provide-icon.png',
    iconWidth: 46,
    iconHeight: 40,
  },
  {
    title: '24/7 Dedicated Customer Support',
    icon: '/images/why-choose-us/why-choose-us-24-7-dedicated-customer-support-icon.webp',
    iconWidth: 47,
    iconHeight: 40,
  },
] as const;

export const timelineSteps = ['01', '02', '03'] as const;

export type WhyChooseUsFeature = {
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};
