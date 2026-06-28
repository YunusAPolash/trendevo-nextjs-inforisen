import Image from 'next/image';

import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import { data } from '@/app/(home)/page-data';

const { paymentMethods } = data;

const PAYMENT_METHODS_IMAGE = paymentMethods.image;

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
  const { heading } = paymentMethods;

  return (
    <PrimarySection
      bg="section-6"
      darkBg="section-22-dark"
      className="overflow-x-hidden py-12 sm:py-16 lg:py-[84px]"
    >
      <PaymentMethodsRotatingArt />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          subtitle={heading.subtitle}
          underlineSrc={heading.underlineSrc}
          underlineWidth={heading.underlineWidth}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={heading.titleClassName}
          subtitleClassName={heading.subtitleClassName}
        />

        <Image
          src={PAYMENT_METHODS_IMAGE.src}
          alt={PAYMENT_METHODS_IMAGE.alt}
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
