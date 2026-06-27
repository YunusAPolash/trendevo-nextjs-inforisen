import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import { data } from '@/app/(subservice)/buy-twitch-viewers/page-data';
import { signUpUrl } from '@/lib/auth-urls';
import { renderText } from '@/lib/utils/renderText';

const { cta } = data;

export default function TwitchViewersCtaSection() {
  return (
    <CtaSection
      title={renderText(cta.title)}
      description={cta.description}
      buttonsOutlet={
        <>
          <PrimaryButton
            href={signUpUrl}
            className="w-full border-[1.5px] border-[#cc7aff] sm:w-auto sm:min-w-[160px]"
          >
            {cta.primaryButtonLabel}
          </PrimaryButton>
          <SecondaryButton
            href={cta.secondaryButtonHref}
            className="w-full sm:w-auto sm:min-w-[180px]"
          >
            {cta.secondaryButtonLabel}
          </SecondaryButton>
        </>
      }
    />
  );
}
