import type { ServiceWorkingProcessStep } from '@/components/sections/service-working-process-section';

export const facebookPageFollowersWorkingProcessSteps: ServiceWorkingProcessStep[] =
  [
    {
      number: '01',
      title: 'Simple Registration',
      description:
        'You’ll need to sign up quickly with just a few steps to start using our SMM panel.',
    },
    {
      number: '02',
      title: 'Add Funds to Your Balance',
      description:
        'Single out the features and services that fit your needs or budget.',
    },
    {
      number: '03',
      title: 'Find the Facebook Followers Service',
      description:
        'Make payments safely via trusted methods to protect your information.',
    },
    {
      number: '04',
      title: (
        <>
          Enter Your Facebook Page URL &amp; Place the Order
        </>
      ),
      description:
        'Monitor your progress easily and see how your social media improves.',
    },
  ];

export const facebookPageFollowersWorkingProcessHeading = {
  badge: 'WORKING PROCESS',
  underlineSrc: '/images/working-process/underline.svg',
  underlineWidth: 216,
  title: (
    <>
      How to Buy Facebook Followers
      <span className="text-gradient"> on TrendEvo</span>
    </>
  ),
  subtitle:
    'A Facebook SMM panel helps businesses grow followers, likes, and engagement quickly and efficiently, saving time and boosting online presence.',
  titleClassName:
    'max-w-[1064px] whitespace-normal text-2xl tracking-[0.36px] sm:text-[32px] md:text-[36px]',
  subtitleClassName: 'max-w-[1064px] text-base sm:text-lg',
};
