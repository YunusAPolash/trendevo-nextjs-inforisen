import type { FaqSectionData } from '@/components/sections/faq-section';
import type { HeroSocialIcon } from '@/components/sections/hero-section';
import { heroSocialIcons } from '@/content/hero-social-icons';

type SEO = {
  title: string;
  description: string;
  canonical?: string;
};

type ContactDetailCardData = {
  borderColor: string;
  darkOverlaySrc: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  detailLabel?: string;
  detailValue?: string;
  detailValueClassName?: string;
  detailSuffix?: string;
  detailSuffixClassName?: string;
  buttonLabel?: string;
  buttonClassName?: string;
};

type ContactUsPageData = {
  seo: SEO;
  hero: {
    bg: 'section-1';
    variant: 'wide-responsive';
    decoration: 'contact';
    leftColumnClassName: string;
    title: string;
    titleClassName: string;
    description: string;
    descriptionClassName: string;
    primaryButtonLabel: string;
    illustration: {
      src: string;
      alt: string;
      width: number;
      height: number;
      maxWidthClassName: string;
    };
    socialIcons: HeroSocialIcon[];
  };
  contactDetails: {
    badge: string;
    title: string;
    subtitle: string;
    titleClassName: string;
    subtitleClassName: string;
    cards: ContactDetailCardData[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    secondaryButtonHref: string;
  };
};

export const data: ContactUsPageData = {
  seo: {
    title: 'Contact Us | TrendEvo',
    description:
      'Connect with TrendEvo for expert SMM panel support. Reach us on WhatsApp, email, or get help anytime with our 24/7 assistance.',
    canonical: '/contact-us',
  },

  hero: {
    bg: 'section-1',
    variant: 'wide-responsive',
    decoration: 'contact',
    leftColumnClassName: 'gap-6 lg:gap-8 lg:self-center',
    title: 'Connect with Trend Evo for Expert gt<SMM Panel Support>',
    titleClassName:
      'text-[28px] font-semibold leading-[1.35] tracking-tight text-[#071431] sm:text-4xl md:text-5xl',
    description:
      'We are committed to delivering top-notch SMM panel services with smooth order processing, real-time support, and proven strategies to help you achieve consistent growth across all social media platforms.',
    descriptionClassName:
      'max-w-2xl text-base leading-relaxed text-[#343e56] sm:text-base md:text-lg',
    primaryButtonLabel: 'Get Started Now',
    illustration: {
      src: '/images/contact-us/contact-us-trendevo-support-specialist-pointing-to-contact-options-illustration.webp',
      alt: 'TrendEvo support specialist pointing to contact options',
      width: 583,
      height: 648,
      maxWidthClassName: 'max-w-[583px]',
    },
    socialIcons: heroSocialIcons,
  },

  contactDetails: {
    badge: 'CONTACT US',
    title: 'Contact Details',
    subtitle:
      "Get in touch with us. We're here to answer your questions and provide guidance whenever you need it. Fast, friendly, and reliable support is always just a message away, ensuring you get the help you need without delay.",
    titleClassName:
      'text-[28px] tracking-tight text-[#13203b] sm:text-4xl lg:text-[48px] lg:tracking-wide',
    subtitleClassName:
      'max-w-[1083px] px-1 text-sm font-medium sm:text-base lg:text-lg',
    cards: [
      {
        borderColor: 'border-[#1fd863]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-whatsapp-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-whatsapp-icon.webp',
        iconAlt: 'WhatsApp',
        title: "What's App",
        description:
          "Chat with our support team on What'sApp for quick answers and real-time assistance whenever you need help.",
        detailLabel: 'Number:',
        detailValue: '+880***********',
        detailValueClassName:
          'font-semibold text-[#25d365] dark:text-[rgba(37,211,101,0.8)]',
        buttonLabel: "Contact us with What's App",
        buttonClassName:
          'bg-[linear-gradient(107.46deg,#20da65_2.7%,#12be51_86.61%)]',
      },
      {
        borderColor: 'border-[#695dd8]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-email-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-email-icon.webp',
        iconAlt: 'Email',
        title: 'Email',
        description:
          "Chat with our support team on What'sApp for quick answers and real-time assistance whenever you need help.",
        detailLabel: 'E-mail:',
        detailValue: 'info@*************',
        detailValueClassName:
          'font-semibold text-[#8f2acd] dark:text-[#ae4de8]',
        buttonLabel: 'Contact us with Email',
        buttonClassName: 'bg-[#675bd7] dark:bg-[rgba(103,91,215,0.85)]',
      },
      {
        borderColor: 'border-[#8f2acd]',
        darkOverlaySrc:
          '/images/contact-us/contact-us-contact-card-overlay-business-hours-dark-decoration.svg',
        iconSrc: '/images/contact-us/contact-us-business-hours-icon.webp',
        iconAlt: 'Business hours',
        title: 'Business Hours',
        description:
          'Have questions or need expert guidance? Our friendly team is ready to assist you with all your social media marketing needs and help you achieve your goals. Get in touch with us through the following channels.',
        detailLabel: 'Assistance hours:',
        detailValue: 'Monday - Sunday 24 Hours',
        detailValueClassName:
          'font-semibold text-[#8f2acd] dark:text-[#ae4de8]',
      },
    ],
  },

  cta: {
    title: 'Ready to gt<Grow your Social Media> in Bangladesh',
    description:
      'Join thousands of users growing faster with TrendEvo Panel on Facebook, Instagram, YouTube, and TikTok. Get started free in under 60 seconds. We ensure 100% customer satisfaction with an all-in-one, fully automated SMM solution that helps your business stand out and grow effortlessly.',
    primaryButtonLabel: 'Register Now',
    secondaryButtonLabel: 'See all Services',
    secondaryButtonHref: '/services',
  },
};
