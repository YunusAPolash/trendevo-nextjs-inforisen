export type ServicePricingRow = {
  id: string;
  serviceName: string;
  ratePer1000: string;
  minOrder: string;
  maxOrder: string;
  averageTime: string;
};

export type ServicePricingGroup = {
  id: string;
  title: string;
  platformIcon: string;
  rows: ServicePricingRow[];
};

const sampleRow: Omit<ServicePricingRow, 'id'> = {
  serviceName: 'Facebook Views /Plays for video/Reel -Mixed Regions...',
  ratePer1000: '$0.05',
  minOrder: '100',
  maxOrder: '5,000',
  averageTime: '1 hr 45 min',
};

const premiumRows: ServicePricingRow[] = Array.from({ length: 5 }, (_, index) => ({
  id: `premium-${index + 1}`,
  ...sampleRow,
}));

export const facebookPricingGroups: ServicePricingGroup[] = [
  {
    id: 'premium-mixed-regions',
    title: 'Premium Facebook Video Views | Mixed Regions',
    platformIcon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
    rows: premiumRows,
  },
  {
    id: 'premium-mixed-regions-2',
    title: 'Premium Facebook Video Views | Mixed Regions',
    platformIcon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
    rows: premiumRows,
  },
  {
    id: 'standard-global',
    title: 'Standard Facebook Video Views | Global',
    platformIcon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
    rows: premiumRows,
  },
  {
    id: 'economy-local',
    title: 'Economy Facebook Video Views | Local',
    platformIcon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
    rows: premiumRows,
  },
  {
    id: 'economy-local-2',
    title: 'Economy Facebook Video Views | Local',
    platformIcon: '/images/our-services/platforms/our-services-facebook-post-likes-platform-icon.webp',
    rows: premiumRows,
  },
];
