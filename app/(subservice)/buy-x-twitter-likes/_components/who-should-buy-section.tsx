import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-x-twitter-likes/page-data';

export default function TwitterLikesWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
