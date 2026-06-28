import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-instagram-shares/page-data';

export default function InstagramSharesWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
