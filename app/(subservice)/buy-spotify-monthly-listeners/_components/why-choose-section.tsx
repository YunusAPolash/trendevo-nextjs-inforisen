import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(subservice)/buy-spotify-monthly-listeners/page-data';
import { renderText } from '@/lib/utils/renderText';

const { whyChoose } = data;

export default function SpotifyMonthlyListenersWhyChooseSection() {
  return (
    <ServiceLeading
      content={{
        ...whyChoose,
        title: renderText(whyChoose.title as string),
      }}
    />
  );
}
