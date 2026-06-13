import type { Metadata } from 'next';

import ServiceHero from '@/components/sections/serviceHero';
import ServiceAdvantage from '@/components/sections/service-advantage';
import ServiceLeading from '@/components/sections/service-leading';
import ServiceWorkingProcessSection from '@/components/sections/service-working-process-section';
import {
  facebookSmmPanelWorkingProcessHeading,
  facebookSmmPanelWorkingProcessSteps,
} from './_components/working-process-content';
import SocialService from '@/components/sections/social-service';
import StatsMarqueeSection from '@/app/about-us/_components/stats-marquee-section';
import { facebookFaqData } from '@/components/serviceSmmPanel/service-faq-content';
import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';
import CtaSection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq-section';
import { getCtaServiceContent } from '@/components/serviceSmmPanel/cta-service-content';
import { signUpUrl } from '@/lib/auth-urls';

export const metadata: Metadata = {
  title: 'Facebook SMM Panel | TrendEvo',
  description:
    'TrendEvo helps Bangladeshi businesses grow their Facebook presence with real engagement, reliable results, and locally optimized strategies.',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Facebook SMM Panel',
  description:
    'TrendEvo helps Bangladeshi businesses grow their Facebook presence with real engagement, reliable results, and locally optimized strategies.',
  provider: {
    '@type': 'Organization',
    name: 'TrendEvo',
    url: 'https://trendevo.com',
  },
  areaServed: 'Bangladesh',
  url: 'https://trendevo.com/facebook-smm-panel',
};

const facebookCtaContent = getCtaServiceContent('facebook-smm-panel');

export default function FacebookSmmPanelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero slug="facebook-smm-panel" />
      <SocialService slug="facebook-smm-panel" />
      <StatsMarqueeSection />
      <ServiceAdvantage slug="facebook-smm-panel" />
      <ServiceWorkingProcessSection
        badge={facebookSmmPanelWorkingProcessHeading.badge}
        title={facebookSmmPanelWorkingProcessHeading.title}
        subtitle={facebookSmmPanelWorkingProcessHeading.subtitle}
        titleClassName={facebookSmmPanelWorkingProcessHeading.titleClassName}
        subtitleClassName={
          facebookSmmPanelWorkingProcessHeading.subtitleClassName
        }
        steps={facebookSmmPanelWorkingProcessSteps}
      />
      <ServiceLeading slug="facebook-smm-panel" />
      <FaqSection data={facebookFaqData} />
      <CtaSection
        title={facebookCtaContent.title}
        description={facebookCtaContent.description}
        imageSrc={facebookCtaContent.imageSrc}
        imageAlt={facebookCtaContent.imageAlt}
        className={facebookCtaContent.className}
        buttonsOutlet={
          <>
            <PrimaryButton
              href={signUpUrl}
              className="w-full min-w-0 sm:w-auto sm:min-w-[160px]"
            >
              {facebookCtaContent.primaryButtonLabel}
            </PrimaryButton>
            <SecondaryButton href="/services" className="w-full min-w-0 sm:w-auto sm:min-w-[180px]">
              {facebookCtaContent.secondaryButtonLabel}
            </SecondaryButton>
          </>
        }
      />
    </>
  );
}
