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
          <PrimaryButton type="button" className="min-w-[160px]">
            Register Now
          </PrimaryButton>
          <button
            type="button"
            className="inline-flex h-[50px] min-w-[180px] cursor-pointer items-center justify-center rounded-[10px] border border-[#d181ff] bg-white/25 px-[18px] text-base font-semibold text-gradient transition hover:bg-white/40"
          >
            See all Services
          </button>
        </>
      }
    />
  );
}
