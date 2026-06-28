import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-youtube-likes/page-data';

export default function YoutubeLikesWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
