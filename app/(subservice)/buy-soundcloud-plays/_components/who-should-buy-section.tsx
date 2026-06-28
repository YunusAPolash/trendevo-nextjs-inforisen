import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-soundcloud-plays/page-data';

export default function SoundcloudPlaysWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
