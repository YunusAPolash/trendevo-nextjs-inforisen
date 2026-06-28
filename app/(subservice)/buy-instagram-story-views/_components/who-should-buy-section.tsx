import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-instagram-story-views/page-data';

export default function InstagramStoryViewsWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
