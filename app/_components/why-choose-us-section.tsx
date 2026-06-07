import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const features = [
  {
    title: 'Cheapest SMM Panel',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
  {
    title: 'Fast & Reliable Delivery',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
  {
    title: 'Multitude of Services',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
  {
    title: 'Real-time & Data',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
  {
    title: 'Bulk Orders Provide',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
  {
    title: '24/7 Customer Support',
    description:
      'Our system is designed to process orders quickly and efficiently. Once you place an order, our automated platform starts delivering almost instantly, ensuring fast results without compromising service stability.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <PrimarySection bg="section-7">
      <div className="container flex flex-col gap-12">
        <SectionHeading
          badge="Why Choose Us"
          title={
            <>
              The Smart Choice for{' '}
              <span className="text-gradient">Social Media Growth</span>
            </>
          }
          subtitle="Get started in 4 simple steps and watch your social media presence grow with fast, reliable delivery."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <PrimaryCard
              key={feature.title}
              bg={index % 2 === 0 ? 'card-1' : 'card-2'}
              className="border border-[#ff7fc1]/20 bg-white/90 p-6"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#f8f0ff] text-sm font-semibold text-gradient">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[#071431]">
                <span className="size-3 rounded-full bg-gradient-to-r from-[#ad26ff] to-[#ff3f85]" />
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#404a60]">
                {feature.description}
              </p>
            </PrimaryCard>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
