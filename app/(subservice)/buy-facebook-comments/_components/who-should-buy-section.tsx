import WhoShouldBuySection from '@/components/sections/who-should-buy-section';
import { data } from '@/app/(subservice)/buy-facebook-comments/page-data';

export default function FacebookCommentsWhoShouldBuySection() {
  return <WhoShouldBuySection data={data.whoShouldBuy} />;
}
