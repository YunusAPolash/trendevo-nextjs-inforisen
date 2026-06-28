import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-soundcloud-plays/page-data';

export default function SoundcloudPlaysThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
