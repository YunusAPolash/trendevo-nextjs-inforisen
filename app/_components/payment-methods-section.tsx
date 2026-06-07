import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const paymentMethods = [
  'Visa',
  'Mastercard',
  'PayPal',
  'bKash',
  'Nagad',
  'Rocket',
  'Crypto',
  'Bank Transfer',
];

export default function PaymentMethodsSection() {
  return (
    <PrimarySection bg="section-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <SectionHeading
          badge="Payment Methods"
          title="10+ Payment Methods Available For Users"
          subtitle="Flexible and secure payment options so you can fund your account and start growing instantly."
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className="flex size-20 items-center justify-center rounded-2xl border border-[#ff7fc1]/30 bg-white/80 text-sm font-semibold text-[#343e56] shadow-sm md:size-24"
            >
              {method}
            </div>
          ))}
        </div>
      </div>
    </PrimarySection>
  );
}
