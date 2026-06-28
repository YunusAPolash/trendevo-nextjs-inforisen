import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-linkedin-followers/page-data';

export default function LinkedinFollowersWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
