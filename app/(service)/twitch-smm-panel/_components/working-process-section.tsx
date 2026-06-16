import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import { data } from '@/app/(service)/twitch-smm-panel/page-data';
import { renderText } from '@/lib/utils/renderText';

const { workingProcess } = data;

export default function TwitchSmmPanelWorkingProcessSection() {
  return (
    <ServiceWorkingProcessSection
      badge={workingProcess.badge}
      title={renderText(workingProcess.title)}
      subtitle={workingProcess.subtitle}
      titleClassName={workingProcess.titleClassName}
      subtitleClassName={workingProcess.subtitleClassName}
      steps={workingProcess.steps}
    />
  );
}
