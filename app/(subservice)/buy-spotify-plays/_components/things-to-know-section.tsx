import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-spotify-plays/page-data';

export default function SpotifyPlaysThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
