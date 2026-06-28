import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(subservice)/buy-youtube-likes/page-data';
import { renderText } from '@/lib/utils/renderText';

const { whyChoose } = data;

export default function YoutubeLikesWhyChooseSection() {
  return (
    <ServiceLeading
      content={{
        ...whyChoose,
        title: renderText(whyChoose.title as string),
      }}
    />
  );
}
