import Image from 'next/image';
import PrimaryCard from '@/components/cards/primary-card';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const advantages = [
  {
    title: 'Lowest-Cost SMM and Social Media Marketing Services',
    description:
      'Affordable SMM services let businesses, freelancers, and creators grow online fast. Gain likes, followers, and engagement across Instagram, Facebook, and Twitter.',
  },
  {
    title: 'Reliable SMM Reseller Support for Growing Your Business',
    description:
      'SMM reseller support lets entrepreneurs, agencies, and freelancers grow fast without building from scratch. Deliver ready-made services under your brand.',
  },
  {
    title: 'Multiple Safe Payment Options for SMM Orders',
    description:
      'Enjoy multiple safe payment options, including cards, PayPal, and cryptocurrencies. All transactions are secure, encrypted, and fraud-protected.',
  },
  {
    title: '24/7 Live Support for All SMM Services What You Needs',
    description:
      'Get 24/7 live support for all your SMM and Instagram panel needs. Instant help ensures smooth campaigns and quick issue resolution.',
  },
];

export default function AdvantagesSection() {
  return (
    <PrimarySection bg="section-5">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeading
          badge="ADVANTAGES"
          title="Advantages of using our panel services"
          subtitle="Get started in 4 simple steps and watch your social media presence grow with fast, reliable delivery."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid gap-6 lg:col-span-1">
            {advantages.slice(0, 2).map((item, index) => (
              <PrimaryCard
                key={item.title}
                bg={index === 0 ? 'card-1' : 'card-2'}
                className="border border-[#ff7fc1]/20 bg-white/90 p-6"
              >
                <div className="mb-3 h-1 w-1.5 rounded-full bg-gradient-to-b from-[#ad26ff] to-[#ff3f85]" />
                <h3 className="text-lg font-semibold text-[#071431]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#404a60]">
                  {item.description}
                </p>
              </PrimaryCard>
            ))}
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8c8ff] to-[#ffd4ec] lg:col-span-1">
            <Image
              src="/images/about/about-character.png"
              alt="SMM panel advantages"
              fill
              className="object-contain object-bottom p-4"
            />
          </div>

          <div className="grid gap-6 lg:col-span-1">
            {advantages.slice(2).map((item, index) => (
              <PrimaryCard
                key={item.title}
                bg={index === 0 ? 'card-2' : 'card-1'}
                className="border border-[#ff7fc1]/20 bg-white/90 p-6"
              >
                <div className="mb-3 h-1 w-1.5 rounded-full bg-gradient-to-b from-[#ad26ff] to-[#ff3f85]" />
                <h3 className="text-lg font-semibold text-[#071431]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#404a60]">
                  {item.description}
                </p>
              </PrimaryCard>
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
