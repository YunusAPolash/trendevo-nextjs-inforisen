import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description:
      'Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.',
  },
  {
    number: '02',
    title: 'Add Funds',
    description:
      'Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.',
  },
  {
    number: '03',
    title: 'Select Service',
    description:
      'Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.',
  },
  {
    number: '04',
    title: 'Place your order',
    description:
      'Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.',
  },
];

export default function WorkingProcessSection() {
  return (
    <PrimarySection id="how-it-works" bg="section-6">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          badge="WORKING PROCESS"
          title="Grow Your Socials in 4 Simple Steps"
          subtitle="Get started in 4 simple steps and watch your social media presence grow with fast, reliable delivery."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <PrimaryCard
              key={step.number}
              bg="card-2"
              className="border border-[#ff7fc1]/20 bg-white/90 p-8"
            >
              <p className="text-gradient text-5xl font-semibold leading-none">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#071431]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#404a60]">
                {step.description}
              </p>
            </PrimaryCard>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
