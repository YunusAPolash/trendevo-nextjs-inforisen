import Image from 'next/image';
import Link from 'next/link';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Read Our Blog', href: '/#blog' },
  { label: 'Pricing', href: '/#pricing' },
];

const smmPanelLinks = [
  { label: 'Instagram SMM Panel', href: '/#services' },
  { label: 'Facebook SMM Panel', href: '/#services' },
  { label: 'YouTube SMM Panel', href: '/#services' },
  { label: 'X-Twitter SMM Panel', href: '/#services' },
  { label: 'Telegram SMM Panel', href: '/#services' },
  { label: 'TikTok SMM Panel', href: '/#services' },
  { label: 'Spotify SMM Panel', href: '/#services' },
  { label: 'Soundcloud SMM Panel', href: '/#services' },
  { label: 'Twitch SMM Panel', href: '/#services' },
  { label: 'Snapchat SMM Panel', href: '/#services' },
];

const companyLinks = [
  { label: 'Terms Of Services', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact Us', href: '/contact-us' },
];

const serviceLinks = [
  'Facebook Services',
  'Youtube Services',
  'Instagram Services',
  'X-Twitter Services',
  'Telegram Services',
  'TikTok Services',
  'Spotify Services',
  'Soundcloud Services',
  'Twitch Services',
  'Snapchat Services',
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    iconSrc: '/images/icons/footer-social-facebook.webp',
  },
  {
    label: 'Instagram',
    href: '#',
    iconSrc: '/images/icons/footer-social-instagram.webp',
  },
  { label: 'X', href: '#', iconSrc: '/images/icons/footer-social-x.webp' },
  {
    label: 'LinkedIn',
    href: '#',
    iconSrc: '/images/icons/footer-social-linkedin.webp',
  },
  {
    label: 'YouTube',
    href: '#',
    iconSrc: '/images/icons/footer-social-youtube.webp',
  },
] as const;

const contactIconGradient =
  'linear-gradient(48.65deg, rgb(206, 206, 206) 10.387%, rgb(255, 255, 255) 58.1%, rgb(253, 161, 255) 126.5%)';

function FooterColumn({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex w-full shrink-0 flex-col gap-3 sm:gap-[18px] xl:w-auto', className)}>
      <h3 className="text-base font-semibold tracking-[0.2px] text-[#13203b] sm:text-lg md:text-xl">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="flex flex-col gap-2.5 sm:gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-[13px] font-medium leading-snug text-[#222e48] transition-colors hover:text-[#13203b] sm:text-sm sm:leading-normal"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SocialLink({
  href,
  label,
  iconSrc,
}: {
  href: string;
  label: string;
  iconSrc: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex size-9 shrink-0 items-center justify-center sm:size-10"
    >
      <Image
        src="/images/icons/footer-social-hex-bg.svg"
        alt=""
        fill
        className="object-contain"
        aria-hidden
      />
      <Image
        src={iconSrc}
        alt=""
        width={18}
        height={18}
        className="relative z-10 size-5 object-contain sm:size-6"
        aria-hidden
      />
    </Link>
  );
}

function ContactRow({
  iconSrc,
  iconAlt,
  children,
}: {
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/75"
        style={{ backgroundImage: contactIconGradient }}
      >
        <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
      </div>
      <div className="text-[13px] font-medium leading-relaxed text-[#13203b] sm:text-sm">
        {children}
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <PrimarySection
      bg="section-9"
      className="mx-3 my-5 overflow-hidden rounded-2xl px-3 py-8 sm:mx-6 sm:my-8 sm:rounded-3xl sm:px-4 sm:py-12 lg:mx-12 lg:my-10 lg:py-[60px]"
    >
      <footer className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 sm:gap-10">
        <div className="flex flex-col gap-6 sm:gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="flex w-full max-w-[339px] flex-col gap-4 border-b border-[#d99aff]/25 pb-6 sm:gap-6 sm:border-0 sm:pb-0">
            <div className="flex flex-col gap-3 sm:gap-[18px]">
              <Link href="/" className="relative inline-block h-10 w-[130px] sm:h-12 sm:w-[152px]">
                <Image
                  src="/images/icons/trendevo-logo.png"
                  alt="TrendEvo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-[13px] font-medium leading-relaxed text-[#313131] sm:text-sm">
                Trend Evo Panel is a trusted{' '}
                <span className="text-gradient">SMM panel in Bangladesh</span>,
                offering fast, secure, and affordable social media growth
                services for all major platforms. With support for bKash and
                Nagad, plus a fully automated, user-friendly system, we make
                growing your online presence simple and effective.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              <p className="text-base font-semibold tracking-[0.2px] text-[#13203b] sm:text-lg md:text-xl">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    iconSrc={social.iconSrc}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-3 md:gap-y-10 xl:flex xl:flex-nowrap xl:items-start xl:justify-between">
            <FooterColumn title="Quick Links">
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLinkList links={companyLinks} />
            </FooterColumn>

            <FooterColumn title="Smm Panel" className="sm:col-span-2 md:col-span-1">
              <FooterLinkList links={smmPanelLinks} />
            </FooterColumn>

            <FooterColumn title="Our Services" className="sm:col-span-2 md:col-span-1">
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 xl:flex xl:flex-col">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link
                      href="/#services"
                      className="flex items-center justify-between gap-2 text-[13px] font-medium leading-snug text-[#222e48] transition-colors hover:text-[#13203b] sm:text-sm sm:leading-normal"
                    >
                      <span>{label}</span>
                      <Image
                        src="/images/icons/footer-service-chevron.svg"
                        alt=""
                        width={22}
                        height={22}
                        className="size-[18px] shrink-0 rotate-180 sm:size-[22px]"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn
              title="Contact Information"
              className="border-t border-[#d99aff]/25 pt-6 sm:col-span-2 sm:border-0 sm:pt-0 md:col-span-1 xl:col-span-1"
            >
              <div className="flex flex-col gap-3 sm:gap-[15px]">
                <ContactRow
                  iconSrc="/images/icons/footer-email-icon.svg"
                  iconAlt="Email"
                >
                  <a
                    href="mailto:info@trendevo.com"
                    className="hover:underline"
                  >
                    info@trendevo.com
                  </a>
                </ContactRow>
                <ContactRow
                  iconSrc="/images/icons/footer-phone-icon.svg"
                  iconAlt="Phone"
                >
                  <a href="tel:+880188888877777" className="hover:underline">
                    +880188888877777
                  </a>
                </ContactRow>
                <ContactRow
                  iconSrc="/images/icons/footer-location-icon.svg"
                  iconAlt="Location"
                >
                  <p>
                    Dhaka Bangladesh, Dhanmondi..
                    <br />
                    Road 7A
                  </p>
                </ContactRow>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="relative flex min-h-[64px] items-center justify-center overflow-hidden rounded-xl border border-[#d99aff]/50 bg-white px-3 py-4 sm:min-h-[83px] sm:rounded-[18px] sm:px-6 sm:py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/images/footer/footer-copyright-pattern.webp')] bg-cover bg-center"
          />
          <p className="relative text-center text-xs font-medium leading-snug text-[#313131] sm:text-sm md:text-lg">
            Copyright 2024-2026 Trend Evo | All Right Reserved
          </p>
        </div>
      </footer>
    </PrimarySection>
  );
}
