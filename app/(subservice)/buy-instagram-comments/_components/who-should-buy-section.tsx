import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-instagram-comments/page-data';

export default function InstagramCommentsWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
