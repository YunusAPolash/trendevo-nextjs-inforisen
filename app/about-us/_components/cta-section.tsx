import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/about-us/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { cta } = data;

export default function AboutUsCtaSection() {
  return (
    <CtaSection
      title={renderText(cta.title)}
      description={cta.description}
      buttonsOutlet={
        <>
          <PrimaryButton
            href={signUpUrl}
            className="border-[1.5px] border-[#cc7aff]"
          >
            {cta.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton href={cta.secondaryButtonHref}>
            {cta.secondaryButtonLabel}
          </SecondaryButton>
        </>
      }
    />
  );
}
