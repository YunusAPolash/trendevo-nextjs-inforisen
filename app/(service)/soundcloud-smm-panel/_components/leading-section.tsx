import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(service)/soundcloud-smm-panel/page-data';
import { renderText } from '@/lib/utils/renderText';

const { leading } = data;

export default function SoundcloudSmmPanelLeadingSection() {
  return (
    <ServiceLeading
      variant="smm-panel"
      content={{
        badge: leading.badge ?? '',
        title: renderText(leading.title),
        subtitle: leading.subtitle,
        topRowFeatures: leading.topRowFeatures,
        bottomRowFeatures: leading.bottomRowFeatures,
        titleClassName: leading.titleClassName,
        subtitleClassName: leading.subtitleClassName,
      }}
    />
  );
}
