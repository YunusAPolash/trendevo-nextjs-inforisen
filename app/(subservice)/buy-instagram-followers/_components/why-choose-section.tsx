import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(subservice)/buy-instagram-followers/page-data';
import { renderText } from '@/lib/utils/renderText';

const { whyChoose } = data;

export default function InstagramFollowersWhyChooseSection() {
  return (
    <ServiceLeading
      content={{
        ...whyChoose,
        title: renderText(whyChoose.title as string),
      }}
    />
  );
}
