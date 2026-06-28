import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-facebook-comments/page-data';

export default function FacebookCommentsThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
