import Image from 'next/image';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const PAYMENT_METHODS_IMAGE = {
  src: '/images/payment-methods/payment-methods.png',
  width: 1920,
  height: 470,
} as const;

export default function PaymentMethodsSection() {
  return (
    <PrimarySection bg="section-6" className="overflow-x-hidden py-[84px]">
      <div className="pointer-events-none absolute top-[-90px] xl:top-0 left-[-52px] z-0 hidden opacity-[0.7] lg:block">
        <Image
          src="/images/payment-methods/threed-icon.png"
          alt=""
          aria-hidden
          width={287}
          height={300}
          quality={100}
          sizes="287px"
          className="h-[250px] w-[250px] animate-slow-spin object-contain"
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-16">
        <SectionHeading
          badge="Payment Methods"
          title={
            <>
              <span className="text-[#13203b]">10+ Payment Methods </span>
              <span className="text-gradient">Available For Users</span>
            </>
          }
          subtitle="Choose from 10+ secure and convenient payment methods to pay your way. Enjoy fast, hassle-free transactions and get instant access to all our services."
          underlineSrc="/images/payment-methods/underline.svg"
          underlineWidth={193}
          titleClassName="text-[32px] sm:text-[40px] lg:text-[48px] tracking-[0.48px] max-w-[1000px]"
          subtitleClassName="max-w-[924px] font-medium text-[#4f586d]"
        />

        <Image
          src={PAYMENT_METHODS_IMAGE.src}
          alt="Supported payment methods including Visa, bKash, Nagad, Bitcoin, Mastercard, and more"
          width={PAYMENT_METHODS_IMAGE.width}
          height={PAYMENT_METHODS_IMAGE.height}
          quality={100}
          sizes="(max-width: 1240px) 100vw, 1240px"
          className="h-auto w-full max-w-[1240px] object-contain"
          priority
        />
      </div>
    </PrimarySection>
  );
}
