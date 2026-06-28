import ThingsToKnowSection from '@/components/sections/things-to-know-section';
import { data } from '@/app/(subservice)/buy-telegram-members/page-data';

export default function TelegramMembersThingsToKnowSection() {
  return <ThingsToKnowSection data={data.thingsToKnow} />;
}
