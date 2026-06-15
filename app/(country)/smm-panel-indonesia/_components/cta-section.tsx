import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(country)/smm-panel-indonesia/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { cta } = data;

export default function SmmPanelIndonesiaCtaSection() {
  return (
    <CtaSection
      title={renderText(cta.title)}
      description={cta.description}
      imageSrc={cta.imageSrc}
      imageAlt={cta.imageAlt}
      buttonsOutlet={
        <>
          <PrimaryButton
            href={signUpUrl}
            className="w-full min-w-0 sm:w-auto sm:min-w-[160px]"
          >
            {cta.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton
            href={cta.secondaryButtonHref}
            className="w-full min-w-0 sm:w-auto sm:min-w-[180px]"
          >
            {cta.secondaryButtonLabel}
          </SecondaryButton>
        </>
      }
    />
  );
}
