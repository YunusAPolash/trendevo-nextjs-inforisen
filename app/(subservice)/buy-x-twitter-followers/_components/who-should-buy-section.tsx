import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-x-twitter-followers/page-data';

export default function TwitterFollowersWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
