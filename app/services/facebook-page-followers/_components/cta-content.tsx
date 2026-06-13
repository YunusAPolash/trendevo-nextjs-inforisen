import PrimaryButton from '@/components/buttons/primary-button';
import SecondaryButton from '@/components/buttons/secondary-button';

export const facebookPageFollowersCta = {
  title: (
    <>
      Ready to{' '}
      <span className="text-gradient">Grow your Social Media</span> in
      Bangladesh
    </>
  ),
  description:
    'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
  buttonsOutlet: (
    <>
      <PrimaryButton className="w-full border-[1.5px] border-[#cc7aff] sm:w-auto sm:min-w-[160px]">
        Register Now
      </PrimaryButton>
      <SecondaryButton type="button" className="w-full sm:w-auto sm:min-w-[180px]">
        See all Services
      </SecondaryButton>
    </>
  ),
};
