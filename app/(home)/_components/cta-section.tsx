import CtaSection from '@/components/sections/cta-section';
import PrimaryButton from '@/components/buttons/primary-button';

export default function HomeCtaSection() {
  return (
    <CtaSection
      title={
        <>
          Ready to{' '}
          <span className="text-gradient">Grow your Social Media</span> in
          Bangladesh
        </>
      }
      description="Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly."
      buttonsOutlet={
        <>
          <PrimaryButton type="button" className="h-10 w-full min-w-0 text-sm sm:h-[50px] sm:w-auto sm:min-w-[160px] sm:text-base">
            Register Now
          </PrimaryButton>
          <button
            type="button"
            className="inline-flex h-10 w-full min-w-0 cursor-pointer items-center justify-center rounded-[10px] border border-[#d181ff] bg-white/25 px-4 text-sm font-semibold text-gradient transition hover:bg-white/40 sm:h-[50px] sm:w-auto sm:min-w-[180px] sm:px-[18px] sm:text-base"
          >
            See all Services
          </button>
        </>
      }
    />
  );
}
