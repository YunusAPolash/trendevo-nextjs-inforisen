import CtaSection from '@/components/sections/cta-section';
import { Button } from '@/components/ui/button';

export default function HomeCtaSection() {
  return (
    <CtaSection
      title={
        <>
          Ready to Grow your Social Media in{' '}
          <span className="text-gradient">Bangladesh</span>
        </>
      }
      description="Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly."
      buttonsOutlet={
        <>
          <Button className="bg-brand-gradient h-[50px] rounded-[10px] border-0 px-6 font-semibold text-white hover:opacity-90">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="h-[50px] rounded-[10px] border-[#cb7ef7] bg-white/25 px-6 font-semibold text-gradient hover:bg-white/40"
          >
            See all Services
          </Button>
        </>
      }
    />
  );
}
