import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import { data } from '@/app/contact-us/page-data';
import ContactDetailCard from './contact-detail-card';

const { contactDetails } = data;

const CONTACT_DETAILS_LIGHT_BG =
  'linear-gradient(79deg, #F1DBFF -3.62%, #FFF 30.12%, rgba(252, 226, 255, 0.24) 55.57%, #FFF 76.43%, #FDF6FF 103.11%)';

export default function ContactDetailsSection() {
  return (
    <PrimarySection
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
      lightBackgroundImage={CONTACT_DETAILS_LIGHT_BG}
      darkBackgroundColor="#13051B"
    >
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-[-63px] hidden size-[253px] dark:block"
        >
          <div className="relative size-full">
            <div className="absolute inset-[-138%]">
              <Image
                alt="Decorative contact section glow accent"
                fill
                src="/images/contact-us/contact-us-contact-details-glow-top-left-dark-decoration.svg"
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-[-40px] hidden blur-[2px] lg:block dark:hidden">
          <Image
            src="/images/contact-us/contact-us-phone-icon.png"
            alt="Decorative phone illustration"
            width={137}
            height={137}
            aria-hidden
            className="h-[139px] w-[137px]"
          />
        </div>

        <div className="pointer-events-none absolute top-[73px] right-[-40px] hidden blur-[2px] lg:block dark:hidden">
          <Image
            src="/images/contact-us/contact-us-phone-icon.png"
            alt="Decorative phone illustration"
            width={137}
            height={137}
            aria-hidden
            className="h-[139px] w-[137px]"
          />
        </div>

        <div className="container relative">
          <div className="grid w-full max-w-[1440px] grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 [&>*:last-child]:lg:col-span-2 [&>*:last-child]:lg:mx-auto [&>*:last-child]:lg:max-w-[463px] [&>*:last-child]:xl:col-span-1 [&>*:last-child]:xl:mx-0 [&>*:last-child]:xl:max-w-none">
            {contactDetails.cards.map((card) => (
              <ContactDetailCard
                key={card.title}
                borderColor={card.borderColor}
                darkOverlaySrc={card.darkOverlaySrc}
                iconSrc={card.iconSrc}
                iconAlt={card.iconAlt}
                title={card.title}
                description={card.description}
                detail={
                  card.detailValue ? (
                    <p>
                      {card.detailLabel ? (
                        <>
                          <span className="font-semibold text-[#313131] dark:text-[#ebecef]">
                            {card.detailLabel}
                          </span>{' '}
                        </>
                      ) : null}
                      <span className={card.detailValueClassName}>
                        {card.detailValue}
                      </span>
                    </p>
                  ) : null
                }
                buttonLabel={card.buttonLabel}
                buttonClassName={card.buttonClassName}
              />
            ))}
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
