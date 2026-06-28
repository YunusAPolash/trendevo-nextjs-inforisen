import PrimaryButton from '@/components/buttons/primary-button';
import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import { data } from '@/app/(service)/x-twitter-smm-panel/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { workingProcess } = data;

export default function XTwitterSmmPanelWorkingProcessSection() {
  return (
    <div className="flex flex-col">
      <ServiceWorkingProcessSection
        badge={workingProcess.badge ?? ''}
        title={renderText(workingProcess.title)}
        subtitle={workingProcess.subtitle}
        titleClassName={workingProcess.titleClassName}
        subtitleClassName={workingProcess.subtitleClassName}
        steps={workingProcess.steps}
      />
      <div className="container -mt-6 flex justify-center pb-16 sm:-mt-8 sm:pb-20">
        <PrimaryButton href={signUpUrl} showArrow className="w-fit">
          {workingProcess.ctaLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}
