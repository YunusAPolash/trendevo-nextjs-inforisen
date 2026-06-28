import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-youtube-comments/page-data';

export default function YoutubeCommentsThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
