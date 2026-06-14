import Image from 'next/image';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const PAYMENT_METHODS_IMAGE = {
  src: '/images/payment-methods/payment-methods-supported-payment-methods-including-visa-bkash-nagad-bitcoin-mastercard-and-more-icon.png',
  width: 1920,
  height: 470,
} as const;

function PaymentMethodsRotatingArt() {
  return (
    <>
      <div className="pointer-events-none absolute top-[-90px] left-[-52px] z-0 hidden opacity-70 lg:block xl:top-0 dark:hidden">
        <Image
          src="/images/payment-methods/payment-methods-threed-icon-decoration.png"
          alt=""
          aria-hidden
          width={287}
          height={300}
          quality={100}
          sizes="287px"
          className="h-[250px] w-[250px] animate-slow-spin object-contain"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-[-90px] left-[-52px] z-0 hidden opacity-65 lg:dark:block xl:top-0"
      >
        <Image
          src="/images/payment-methods/dark/payment-methods-rotating-torus-decoration.png"
          alt=""
          width={303}
          height={300}
          quality={100}
          sizes="250px"
          className="h-[250px] w-[250px] animate-slow-spin object-contain"
        />
      </div>
    </>
  );
}

export default function PaymentMethodsSection() {
  return (
    <PrimarySection
      bg="section-6"
      darkBg="section-22-dark"
      className="overflow-x-hidden py-12 sm:py-16 lg:py-[84px]"
    >
      <PaymentMethodsRotatingArt />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge="Payment Methods"
          title={
            <>
              <span className="text-[#13203b] dark:text-white">
                10+ Payment Methods{' '}
              </span>
              <span className="text-gradient">Available For Users</span>
            </>
          }
          subtitle="Choose from 10+ secure and convenient payment methods to pay your way. Enjoy fast, hassle-free transactions and get instant access to all our services."
          underlineSrc="/images/payment-methods/payment-methods-section-underline.svg"
          underlineWidth={193}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName="max-w-[1000px] text-2xl tracking-[0.48px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          subtitleClassName="max-w-[924px] text-sm font-medium text-[#4f586d] dark:text-white sm:text-base md:text-lg"
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
