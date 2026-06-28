import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-instagram-views/page-data';

export default function InstagramViewsWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
