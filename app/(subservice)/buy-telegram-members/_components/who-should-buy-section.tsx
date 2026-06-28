import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-telegram-members/page-data';

export default function TelegramMembersWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
