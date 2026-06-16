import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import { data } from '@/app/(subservice)/kick-viewers/page-data';
import { renderText } from '@/lib/utils/renderText';

const { workingProcess } = data;

export default function KickViewersWorkingProcessSection() {
  return (
    <ServiceWorkingProcessSection
      badge={workingProcess.badge}
      underlineSrc={workingProcess.underlineSrc}
      underlineWidth={workingProcess.underlineWidth}
      title={renderText(workingProcess.title)}
      subtitle={workingProcess.subtitle}
      titleClassName={workingProcess.titleClassName}
      subtitleClassName={workingProcess.subtitleClassName}
      steps={workingProcess.steps}
    />
  );
}
