import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
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
  { label: 'Privacy Policy', href: '/#privacy' },
  { label: 'Refund Policy', href: '/#refund' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Contact Us', href: '/#contact' },
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
  { label: 'Facebook', href: '#', iconSrc: '/images/icons/footer-social-facebook.webp' },
  { label: 'Instagram', href: '#', iconSrc: '/images/icons/footer-social-instagram.webp' },
  { label: 'X', href: '#', iconSrc: '/images/icons/footer-social-x.webp' },
  { label: 'LinkedIn', href: '#', iconSrc: '/images/icons/footer-social-linkedin.webp' },
  { label: 'YouTube', href: '#', iconSrc: '/images/icons/footer-social-youtube.webp' },
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
    <div className={cn('flex flex-col gap-[18px]', className)}>
      <h3 className="text-xl font-semibold tracking-[0.2px] text-[#13203b]">{title}</h3>
      {children}
    </div>
  );
}

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-sm font-medium text-[#222e48] transition-colors hover:text-[#13203b]"
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
      className="relative flex size-10 shrink-0 items-center justify-center"
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
        className="relative z-10 size-7 object-contain"
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
      <div className="text-sm font-medium leading-relaxed text-[#13203b]">{children}</div>
    </div>
  );
}

export default function FooterSection() {
  return (
    <PrimarySection
      bg="section-8"
      className="overflow-hidden rounded-t-3xl py-12 lg:py-[60px] lg:px-4"
    >
      <footer className="container flex flex-col gap-10">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="flex max-w-[339px] flex-col gap-6">
            <div className="flex flex-col gap-[18px]">
              <Link href="/" className="relative inline-block h-12 w-[152px]">
                <Image
                  src="/images/icons/trendevo-logo.png"
                  alt="TrendEvo"
                  fill
                  className="object-contain object-left"
                />
              </Link>
              <p className="text-sm font-medium leading-relaxed text-[#313131]">
                Trend Evo Panel is a trusted{' '}
                <span className="text-gradient">SMM panel in Bangladesh</span>, offering fast,
                secure, and affordable social media growth services for all major platforms. With
                support for bKash and Nagad, plus a fully automated, user-friendly system, we make
                growing your online presence simple and effective.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              <p className="text-xl font-semibold tracking-[0.2px] text-[#13203b]">Follow Us</p>
              <div className="flex flex-wrap gap-1.5">
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

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
            <FooterColumn title="Quick Links">
              <FooterLinkList links={quickLinks} />
            </FooterColumn>

            <FooterColumn title="Smm Panel">
              <FooterLinkList links={smmPanelLinks} />
            </FooterColumn>

            <FooterColumn title="Company">
              <FooterLinkList links={companyLinks} />
            </FooterColumn>

            <FooterColumn title="Our Services">
              <ul className="flex flex-col gap-4">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link
                      href="/#services"
                      className="flex items-center justify-between gap-2 text-sm font-medium text-[#222e48] transition-colors hover:text-[#13203b]"
                    >
                      <span>{label}</span>
                      <ChevronDown className="size-[22px] shrink-0 text-[#8f2acd]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact Information" className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
              <div className="flex flex-col gap-[15px]">
                <ContactRow iconSrc="/images/icons/footer-email-icon.svg" iconAlt="Email">
                  <a href="mailto:info@trendevo.com" className="hover:underline">
                    info@trendevo.com
                  </a>
                </ContactRow>
                <ContactRow iconSrc="/images/icons/footer-phone-icon.svg" iconAlt="Phone">
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

        <div className="relative flex min-h-[83px] items-center justify-center overflow-hidden rounded-[18px] border border-[#d99aff]/50 bg-white px-6 py-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-[url('/images/footer/footer-copyright-pattern.webp')] bg-cover bg-center"
          />
          <p className="relative text-center text-lg font-medium text-[#313131]">
            Copyright 2024-2026 Trend Evo | All Right Reserved
          </p>
        </div>
      </footer>
    </PrimarySection>
  );
}
