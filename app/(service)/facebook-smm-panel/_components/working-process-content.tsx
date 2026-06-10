import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

export const facebookSmmPanelWorkingProcessSteps: ServiceWorkingProcessStep[] = [
  {
    number: '01',
    title: 'Simple Registration',
    description:
      'You’ll need to sign up quickly with just a few steps to start using our SMM panel.',
  },
  {
    number: '02',
    title: 'Customize Your Plan',
    description:
      'Single out the features and services that fit your needs or budget.',
  },
  {
    number: '03',
    title: 'Process a Secure Payment',
    description:
      'Make payments safely via trusted methods to protect your information.',
  },
  {
    number: '04',
    title: 'Track Your Growth & Enjoy',
    description:
      'Monitor your progress easily and see how your social media improves.',
  },
];

export const facebookSmmPanelWorkingProcessHeading = {
  badge: 'Working Process',
  title: (
    <>
      Working Process Of{' '}
      <span className="text-gradient">Facebook SMM Panel</span>
    </>
  ),
  subtitle:
    'A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
  titleClassName:
    'max-w-[1200px] whitespace-normal text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]',
  subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
};
