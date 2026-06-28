import ServiceAdvantage from '@/components/sections/service-advantage';
import { data } from '@/app/(service)/snapchat-smm-panel/page-data';
import { renderText } from '@/lib/utils/renderText';

const { advantages } = data;

export default function SnapchatSmmPanelAdvantageSection() {
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
