import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(home)/page-data';
import { signUpUrl } from '@/lib/auth-urls';

const { cta } = data;

export default function HomeCtaSection() {
  return (
    <CtaSection
      title={cta.title}
      description={cta.description}
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
