import ServiceLeading from '@/components/sections/service-leading';
import { data } from '@/app/(service)/snapchat-smm-panel/page-data';
import { renderText } from '@/lib/utils/renderText';

const { leading } = data;

export default function SnapchatSmmPanelLeadingSection() {
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
