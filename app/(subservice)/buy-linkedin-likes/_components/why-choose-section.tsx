import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(subservice)/buy-linkedin-likes/page-data';
import { renderText } from '@/lib/utils/renderText';

const { whyChoose } = data;

export default function LinkedinLikesWhyChooseSection() {
  return (
    <ServiceLeading
      content={{
        ...whyChoose,
        title: renderText(whyChoose.title as string),
      }}
    />
  );
}
