import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-x-twitter-likes/page-data';

export default function TwitterLikesThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
