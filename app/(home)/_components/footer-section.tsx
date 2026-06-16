import Image from 'next/image';
import Link from 'next/link';
import PrimarySection from '@/components/sections/primary-section';
import { cn } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Services', href: '/services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Read Our Blog', href: '/blog' },
  { label: 'Pricing', href: '/services/pricing' },
];

const smmPanelLinks = [
  { label: 'Facebook SMM Panel', href: '/facebook-smm-panel' },
  { label: 'Instagram SMM Panel', href: '/instagram-smm-panel' },
  { label: 'YouTube SMM Panel', href: '/youtube-smm-panel' },
  { label: 'X-Twitter SMM Panel', href: '/x-twitter-smm-panel' },
  { label: 'Telegram SMM Panel', href: '/telegram-smm-panel' },
  { label: 'TikTok SMM Panel', href: '/tiktok-smm-panel' },
  { label: 'SMM Panel UK', href: '/smm-panel-uk' },
  { label: 'Spotify SMM Panel', href: '/spotify-smm-panel' },
  { label: 'Soundcloud SMM Panel', href: '/soundcloud-smm-panel' },
  { label: 'Twitch SMM Panel', href: '/twitch-smm-panel' },
  { label: 'Snapchat SMM Panel', href: '/snapchat-smm-panel' },
];

const companyLinks = [
  { label: 'Terms Of Services', href: '/terms-of-services' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact Us', href: '/contact-us' },
];

const serviceLinks = [
  { label: 'Facebook Services', href: '/facebook-smm-panel' },
  { label: 'Facebook Page Followers', href: '/facebook-page-followers' },
  { label: 'Youtube Services', href: '/youtube-smm-panel' },
  { label: 'Instagram Services', href: '/instagram-smm-panel' },
  { label: 'X-Twitter Services', href: '/x-twitter-smm-panel' },
  { label: 'Telegram Services', href: '/telegram-smm-panel' },
  { label: 'TikTok Services', href: '/tiktok-smm-panel' },
  { label: 'Spotify Services', href: '/spotify-smm-panel' },
  { label: 'Soundcloud Services', href: '/soundcloud-smm-panel' },
  { label: 'Twitch Services', href: '/twitch-smm-panel' },
  { label: 'Snapchat Services', href: '/snapchat-smm-panel' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    iconSrc: '/images/icons/footer-facebook-icon.webp',
  },
  {
    label: 'Instagram',
    href: '#',
    iconSrc: '/images/icons/footer-instagram-icon.webp',
  },
  { label: 'X', href: '#', iconSrc: '/images/icons/footer-x-icon.webp' },
  {
    label: 'LinkedIn',
    href: '#',
    iconSrc: '/images/icons/footer-linkedin-icon.webp',
  },
  {
    label: 'YouTube',
    href: '#',
    iconSrc: '/images/icons/footer-youtube-icon.webp',
  },
] as const;

const contactIconLightGradient =
  'bg-[linear-gradient(48.65deg,rgb(206,206,206)_10.387%,rgb(255,255,255)_58.1%,rgb(253,161,255)_126.5%)]';

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
    <div className={cn('flex min-w-0 w-full flex-col gap-3 sm:gap-[18px]', className)}>
      <h3 className="text-base font-semibold tracking-[0.2px] text-[#13203b] sm:text-lg xl:text-xl dark:text-white">
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
            className="text-[13px] font-medium leading-snug text-[#222e48] transition-colors hover:text-[#13203b] sm:text-sm sm:leading-normal dark:text-[#ebecef] dark:hover:text-white"
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
        src="/images/icons/footer-social-hex-bg-decoration.svg"
        alt=""
        fill
        className="object-contain dark:hidden"
        aria-hidden
      />
      <Image
        src="/images/icons/footer-hex-decoration.png"
        alt=""
        fill
        className="hidden object-contain dark:block"
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
    <div className="flex min-w-0 items-start gap-2.5">
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/75',
          contactIconLightGradient,
          'dark:border-white/20 dark:bg-[rgba(255,255,255,0.09)] dark:bg-none',
        )}
      >
        <Image src={iconSrc} alt={iconAlt} width={16} height={16} />
      </div>
      <div className="min-w-0 flex-1 text-[13px] font-medium leading-relaxed break-words text-[#13203b] sm:text-sm dark:text-[#ebecef]">
        {children}
      </div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <PrimarySection
      lightBackgroundImage="url('/images/footer/footer-light-bg-icon.webp')"
      darkBg="section-footer-dark"
      backgroundSize="full"
      className="mx-3 my-5 overflow-hidden rounded-2xl px-3 py-8 sm:mx-6 sm:my-8 sm:rounded-3xl sm:px-4 sm:py-12 lg:mx-12 lg:my-10 lg:py-[60px]"
    >
      <footer className="mx-auto flex max-w-[1440px] flex-col gap-6 px-0 sm:gap-10">
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 2xl:grid-cols-6 2xl:gap-x-6">
          <div className="flex w-full flex-col gap-4 border-b border-[#d99aff]/25 pb-6 sm:gap-6 sm:border-0 sm:pb-0 2xl:max-w-[339px] dark:border-white/20">
            <div className="flex flex-col gap-3 sm:gap-[18px]">
              <Link href="/" className="relative inline-block h-10 w-[130px] sm:h-12 sm:w-[152px]">
                <Image
                  src="/images/icons/site-logo.png"
                  alt="TrendEvo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-[13px] font-medium leading-relaxed text-[#313131] sm:text-sm dark:text-[#ebecef]">
                Trend Evo Panel is a trusted{' '}
                <span className="text-gradient">SMM panel in Bangladesh</span>,
                offering fast, secure, and affordable social media growth
                services for all major platforms. With support for bKash and
                Nagad, plus a fully automated, user-friendly system, we make
                growing your online presence simple and effective.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-3.5">
              <p className="text-base font-semibold tracking-[0.2px] text-[#13203b] sm:text-lg xl:text-xl dark:text-white">
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

          <FooterColumn title="Quick Links">
            <FooterLinkList links={quickLinks} />
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLinkList links={companyLinks} />
          </FooterColumn>

          <FooterColumn title="Smm Panel">
            <FooterLinkList links={smmPanelLinks} />
          </FooterColumn>

          <FooterColumn title="Our Services">
            <ul className="flex flex-col gap-2.5 sm:gap-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between gap-2 text-[13px] font-medium leading-snug text-[#222e48] transition-colors hover:text-[#13203b] sm:text-sm sm:leading-normal dark:text-[#ebecef] dark:hover:text-white"
                  >
                    <span>{link.label}</span>
                    <Image
                      src="/images/icons/footer-service-chevron-icon.svg"
                      alt=""
                      width={22}
                      height={22}
                      className="size-[18px] shrink-0 rotate-180 sm:size-[22px] dark:invert"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn
            title="Contact Information"
            className="border-t border-[#d99aff]/25 pt-6 sm:col-span-2 sm:border-0 sm:pt-0 lg:col-span-1 dark:border-white/20"
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
                <a
                  href="tel:+880188888877777"
                  className="break-all hover:underline"
                >
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

        <div className="relative flex min-h-[44px] items-center justify-center overflow-hidden rounded-lg border border-[#d99aff]/50 bg-white px-2 py-2 sm:min-h-[64px] sm:rounded-xl sm:px-4 sm:py-4 md:min-h-[83px] md:rounded-[18px] md:px-6 md:py-6 dark:border-white/20 dark:bg-[rgba(255,255,255,0.06)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/images/footer/footer-copyright-pattern-decoration.webp')] bg-cover bg-center dark:hidden"
          />
          <p className="relative text-center text-[10px] font-medium leading-tight text-[#313131] sm:text-xs sm:leading-snug md:text-sm lg:text-lg dark:text-[#eac8ff]">
            Copyright 2024-2026 Trend Evo | All Right Reserved
          </p>
        </div>
      </footer>
    </PrimarySection>
  );
}
