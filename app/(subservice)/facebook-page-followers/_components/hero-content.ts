import type { HeroTrustBadge } from '@/components/sections/hero-section';
import { formatUsersTrustLabel, getStats } from '@/lib/stats';

const facebookPageFollowersTrustBadgeBase = {
  avatarSrcs: [
    '/images/reviews/home-hero-hero-1-avatar.png',
    '/images/reviews/home-hero-hero-2-avatar.png',
    '/images/reviews/home-hero-hero-3-avatar.png',
    '/images/reviews/home-hero-hero-4-avatar.png',
    '/images/reviews/home-hero-hero-5-avatar.png',
    '/images/reviews/home-hero-hero-3-avatar.png',
  ],
  ratingIconSrc: '/images/icons/home-hero-trust-star-rating-icon.png',
  rating: '(4.8)',
} satisfies Omit<HeroTrustBadge, 'label'>;

export async function getFacebookPageFollowersTrustBadge(): Promise<HeroTrustBadge> {
  const { usersAll } = await getStats();

  return {
    ...facebookPageFollowersTrustBadgeBase,
    label: formatUsersTrustLabel(usersAll),
  };
}
