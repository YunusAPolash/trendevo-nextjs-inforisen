import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import SectionHeading from '@/components/ui/section-heading';
import ContactDetailCard from './contact-detail-card';

export default function ContactDetailsSection() {
  return (
    <PrimarySection
      className="overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        background:
          'linear-gradient(79deg, #F1DBFF -3.62%, #FFF 30.12%, rgba(252, 226, 255, 0.24) 55.57%, #FFF 76.43%, #FDF6FF 103.11%)',
      }}
    >
      <div className="relative">


        <div className="pointer-events-none absolute bottom-10 left-[-40px] hidden blur-[2px] lg:block">
          <Image
            src="/images/contact-us/contact-us-phone.png"
            alt=""
            width={137}
            height={139}
            aria-hidden
            className="h-[139px] w-[137px]"
          />
        </div>

        <div className="pointer-events-none absolute top-[73px] right-[-40px] hidden blur-[2px] lg:block">
          <Image
            src="/images/contact-us/contact-us-phone.png"
            alt=""
            width={137}
            height={139}
            aria-hidden
            className="h-[139px] w-[137px]"
          />
        </div>

        <div className="container relative">
          <div className="relative flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
            <SectionHeading
              badge="CONTACT US"
              title="Contact Details"
              subtitle="Get in touch with us. We’re here to answer your questions and provide guidance whenever you need it. Fast, friendly, and reliable support is always just a message away, ensuring you get the help you need without delay."
              titleClassName="text-[28px] tracking-tight text-[#13203b] sm:text-4xl lg:text-[48px] lg:tracking-wide"
              subtitleClassName="max-w-[1083px] px-1 text-sm font-medium sm:text-base lg:text-lg"
            />

            <div className="grid w-full max-w-[1440px] grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 [&>*:last-child]:lg:col-span-2 [&>*:last-child]:lg:mx-auto [&>*:last-child]:lg:max-w-[463px] [&>*:last-child]:xl:col-span-1 [&>*:last-child]:xl:mx-0 [&>*:last-child]:xl:max-w-none">
            <ContactDetailCard
              borderColor="border-[#1fd863]"
              iconSrc="/images/contact-us/contact-us-whatsapp-icon.webp"
              iconAlt="WhatsApp"
              title="What’s App"
              description="Chat with our support team on What’sApp for quick answers and real-time assistance whenever you need help."
              detail={
                <p>
                  <span className="font-semibold text-[#313131]">Number:</span>{' '}
                  <span className="font-semibold text-[#25d365]">+880***********</span>
                </p>
              }
              buttonLabel="Contact us with What’s App"
              buttonClassName="bg-[linear-gradient(107.46deg,#20da65_2.7%,#12be51_86.61%)]"
            />

            <ContactDetailCard
              borderColor="border-[#695dd8]"
              iconSrc="/images/contact-us/contact-us-email-icon.webp"
              iconAlt="Email"
              title="Email"
              description="Chat with our support team on What’sApp for quick answers and real-time assistance whenever you need help."
              detail={
                <p>
                  <span className="font-semibold text-[#313131]">E-mail:</span>
                  <span className="font-semibold text-[#8f2acd]"> info@*************</span>
                </p>
              }
              buttonLabel="Contact us with Email"
              buttonClassName="bg-[#675bd7]"
            />

            <ContactDetailCard
              borderColor="border-[#8f2acd]"
              iconSrc="/images/contact-us/contact-us-business-hours-icon.webp"
              iconAlt="Business hours"
              title="Business Hours"
              description="Have questions or need expert guidance? Our friendly team is ready to assist you with all your social media marketing needs and help you achieve your goals. Get in touch with us through the following channels."
              detail={
                <p className="text-[#5a5a5a]">
                  Assistance hours:{' '}
                  <span className="font-semibold text-[#8f2acd]">
                    Monday - Sunday 24 Hours
                  </span>
                </p>
              }
            />
            </div>
          </div>
        </div>
      </div>
    </PrimarySection>
  );
}
