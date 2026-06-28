import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-facebook-followers/page-data';

export default function FacebookFollowersWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
