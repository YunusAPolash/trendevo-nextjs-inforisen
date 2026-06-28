import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-spotify-monthly-listeners/page-data';

export default function SpotifyMonthlyListenersThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
