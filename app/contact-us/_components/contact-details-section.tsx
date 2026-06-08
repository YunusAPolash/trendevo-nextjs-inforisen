import Image from 'next/image';
import PrimarySection from '@/components/sections/primary-section';
import ContactDetailCard from './contact-detail-card';

export default function ContactDetailsSection() {
  return (
    <PrimarySection bg="section-3" className="overflow-hidden py-16 lg:py-20">
      <div className="container relative">
        <div className="pointer-events-none absolute -top-24 right-0 hidden size-40 opacity-60 blur-[2px] lg:block">
          <Image
            src="/images/contact-us/contact-us-decorative-phone.webp"
            alt=""
            fill
            aria-hidden
            className="object-contain"
          />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 hidden size-36 opacity-60 blur-[2px] lg:block">
          <Image
            src="/images/contact-us/contact-us-decorative-phone.webp"
            alt=""
            fill
            aria-hidden
            className="object-contain"
          />
        </div>

        <div className="relative flex flex-col items-center gap-16">
          <div className="max-w-[1083px] space-y-5 text-center">
            <h2 className="text-4xl font-semibold leading-[1.35] tracking-wide text-[#13203b] lg:text-[48px]">
              Contact Details
            </h2>
            <p className="text-lg font-medium leading-relaxed text-[#404a60]">
              Get in touch with us. We’re here to answer your questions and provide
              guidance whenever you need it. Fast, friendly, and reliable support is
              always just a message away, ensuring you get the help you need without
              delay.
            </p>
          </div>

          <div className="grid w-full gap-6 xl:grid-cols-3">
            <ContactDetailCard
              borderColor="border-[#1fd863]"
              iconSrc="/images/contact-us/contact-us-whatsapp-icon.webp"
              iconAlt="WhatsApp"
              title="What’s App"
              description="Chat with our support team on What’sApp for quick answers and real-time assistance whenever you need help."
              detail={
                <p className="font-semibold text-[#313131]">
                  Number:{' '}
                  <span className="text-[#25d365]">+880***********</span>
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
                <p className="font-semibold text-[#313131]">
                  E-mail:
                  <span className="text-[#8f2acd]"> info@*************</span>
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
    </PrimarySection>
  );
}
