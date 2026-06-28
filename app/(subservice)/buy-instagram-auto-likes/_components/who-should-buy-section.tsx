import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-instagram-auto-likes/page-data';

export default function InstagramAutoLikesWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
