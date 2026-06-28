import ServiceAdvantage from '@/components/sections/service-advantage';
import { data } from '@/app/(service)/soundcloud-smm-panel/page-data';
import { renderText } from '@/lib/utils/renderText';

const { advantages } = data;

export default function SoundcloudSmmPanelAdvantageSection() {
  return (
    <ServiceAdvantage
      content={{
        badge: advantages.badge ?? '',
        title: renderText(advantages.title),
        subtitle: advantages.subtitle,
        leftAdvantages: advantages.leftAdvantages,
        rightAdvantages: advantages.rightAdvantages,
        titleClassName: advantages.titleClassName,
        subtitleClassName: advantages.subtitleClassName,
      }}
    />
  );
}
