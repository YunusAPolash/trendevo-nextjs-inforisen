import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-youtube-comments/page-data';

export default function YoutubeCommentsWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
