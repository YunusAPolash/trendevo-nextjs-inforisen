import type { HeroTrustBadge } from '@/components/sections/hero-section';
import { formatUsersTrustLabel, getStats } from '@/lib/stats';

const facebookPageFollowersTrustBadgeBase = {
  avatarSrcs: [
    '/images/reviews/hero-avatar-1.png',
    '/images/reviews/hero-avatar-2.png',
    '/images/reviews/hero-avatar-3.png',
    '/images/reviews/hero-avatar-4.png',
    '/images/reviews/hero-avatar-5.png',
    '/images/reviews/hero-avatar-3.png',
  ],
  ratingIconSrc: '/images/icons/hero-star-rating.png',
  rating: '(4.8)',
} satisfies Omit<HeroTrustBadge, 'label'>;

export async function getFacebookPageFollowersTrustBadge(): Promise<HeroTrustBadge> {
  const { usersAll } = await getStats();

  return {
    ...facebookPageFollowersTrustBadgeBase,
    label: formatUsersTrustLabel(usersAll),
  };
}
