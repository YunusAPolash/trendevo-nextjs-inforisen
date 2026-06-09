import { Button } from '@/components/ui/button';

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
      <Button className="bg-brand-gradient h-[50px] w-full rounded-[10px] border-[1.5px] border-[#cc7aff] px-[18px] font-semibold text-white hover:opacity-90 sm:w-auto sm:min-w-[160px]">
        Register Now
      </Button>
      <Button
        variant="outline"
        className="h-[50px] w-full rounded-[10px] border-[#d181ff] bg-white/25 px-[18px] font-semibold text-gradient hover:bg-white/40 sm:w-auto sm:min-w-[180px]"
      >
        See all Services
      </Button>
    </>
  ),
};
