import Image from 'next/image';
import Link from 'next/link';
import PrimarySection from '@/components/sections/primary-section';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Instagram', href: '#services' },
    { label: 'Facebook', href: '#services' },
    { label: 'YouTube', href: '#services' },
    { label: 'TikTok', href: '#services' },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
};

export default function FooterSection() {
  return (
    <PrimarySection bg="section-3" className="border-t border-[#ff7fc1]/20">
      <footer className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="relative mb-6 inline-block h-[42px] w-[132px]">
              <Image
                src="/images/icons/trendevo-logo.png"
                alt="TrendEvo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#404a60]">
              TrendEvo is a next-generation SMM panel delivering fast, secure, and
              scalable social media growth for creators, brands, and agencies.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold text-[#071431]">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#404a60] transition-colors hover:text-[#071431]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#ff7fc1]/10 pt-8 text-sm text-[#404a60] md:flex-row">
          <p>© {new Date().getFullYear()} TrendEvo. All rights reserved.</p>
          <p>Trusted by 50,000+ users in Bangladesh</p>
        </div>
      </footer>
    </PrimarySection>
  );
}
