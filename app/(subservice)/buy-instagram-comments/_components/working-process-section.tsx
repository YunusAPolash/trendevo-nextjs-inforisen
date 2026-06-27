import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import { data } from '@/app/(subservice)/buy-instagram-comments/page-data';
import { renderText } from '@/lib/utils/renderText';

const { workingProcess } = data;

export default function InstagramCommentsWorkingProcessSection() {
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
