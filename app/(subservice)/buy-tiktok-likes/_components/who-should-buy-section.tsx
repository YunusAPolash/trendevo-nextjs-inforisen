import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-tiktok-likes/page-data';

export default function TiktokLikesWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
