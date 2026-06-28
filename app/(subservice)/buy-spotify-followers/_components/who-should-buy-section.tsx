import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-spotify-followers/page-data';

export default function SpotifyFollowersWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
