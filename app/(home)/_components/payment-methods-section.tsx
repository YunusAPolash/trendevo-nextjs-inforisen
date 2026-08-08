import Image from 'next/image';

import { data } from '@/app/(home)/page-data';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';

const { paymentMethods } = data;

const PAYMENT_METHOD_ICONS = [
  {
    src: '/images/payment-methods/wise-payment-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-wise-accepted-smm-panel.png',
    alt: 'Wise Accepted SMM panel',
    positionClassName: 'relative top-14',
  },
  {
    src: '/images/payment-methods/nexus-pay-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-nexus-accepted-smm-panel.png',
    alt: 'Nexus Pay Accepted SMM panel',
    positionClassName: 'relative top-2',
  },
  {
    src: '/images/payment-methods/visa-card-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-visa-card-accepted-smm-panel.png',
    alt: 'Visa Card Accepted SMM panel',
    positionClassName: 'relative -top-7',
  },
  {
    src: '/images/payment-methods/bkash-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-bkash-accepted-smm-panel.png',
    alt: 'bKash Accepted SMM panel',
    positionClassName: 'relative -top-10',
  },
  {
    src: '/images/payment-methods/nagad-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-nagad-accepted-smm-panel.png',
    alt: 'Nagad Accepted SMM panel',
    positionClassName: 'relative -top-10',
  },
  {
    src: '/images/payment-methods/bitcoin-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-bitcoin-accepted-smm-panel.png',
    alt: 'BitCoin Accepted SMM panel',
    positionClassName: 'relative -top-7',
  },
  {
    src: '/images/payment-methods/master-card-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-master-card-accepted-smm-panel.png',
    alt: 'Master Card Accepted SMM panel',
    positionClassName: 'relative top-2',
  },
  {
    src: '/images/payment-methods/cryptomous-accepted-smm-panel.png',
    darkSrc: '/images/payment-methods/dark-cryptomous-accepted-smm-panel.png',
    alt: 'cryptomous accepted smm panel',
    positionClassName: 'relative top-18',
  },
] as const;

function PaymentMethodsRotatingArt() {
  return (
    <>
      <div className="pointer-events-none absolute top-[-90px] left-[-52px] z-0 hidden opacity-70 lg:block xl:top-0 dark:hidden">
        <Image
          src="/images/payment-methods/payment-methods-threed-icon-decoration.png"
          alt="Decorative 3D payment methods icon"
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
          alt="Decorative rotating torus payment illustration"
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
      className="overflow-x-hidden overflow-y-hidden py-12 sm:py-16 lg:py-[84px] lg:pb-50"
    >
      <PaymentMethodsRotatingArt />

      <div className="container relative z-10 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <SectionHeading
          badge={heading.badge}
          title={heading.title}
          subtitle={heading.subtitle}
          underlineWidth={heading.underlineWidth}
          badgeClassName="dark:bg-none dark:bg-clip-border dark:text-white"
          titleClassName={heading.titleClassName}
          subtitleClassName={heading.subtitleClassName}
        />

        <div className='flex items-center justify-center relative w-full'>
          <div className='absolute top-0 left-0 w-full h-[190px]'>
            <Image src="/images/payment-methods/payment-methods-bg-image.svg" alt="payment methods background image" className="w-full h-full object-cover bg-center bg-no-repeat relative top-12" width={1200} height={1200} />
          </div>
           <div className='z-10 relative flex min-h-[190px] flex-row items-center justify-between w-full me-26 ms-26'>
              {PAYMENT_METHOD_ICONS.map((icon, index) => (
                <div
                  key={icon.src}
                  className={`payment-method-float shrink-0 ${icon.positionClassName}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Image
                    src={icon.src}
                    width={500}
                    height={500}
                    alt={icon.alt}
                    quality={100}
                    sizes="500px"
                    className="w-20 object-contain dark:hidden"
                  />
                  <Image
                    src={icon.darkSrc}
                    width={500}
                    height={500}
                    alt={icon.alt}
                    quality={100}
                    sizes="500px"
                    className="hidden w-20 object-contain dark:block"
                  />
                </div>
              ))}
           </div>
        </div>
      </div>
    </PrimarySection>
  );
}
