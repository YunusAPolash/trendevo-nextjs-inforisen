import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-spotify-plays/page-data';

export default function SpotifyPlaysWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
