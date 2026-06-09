'use client';

import {
  BookOpen,
  CircleHelp,
  Home,
  LayoutGrid,
  Mail,
  Users,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';

const navLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}[] = [
  { label: 'Home', href: '/', icon: Home, active: true },
  { label: 'Services', href: '/services', icon: LayoutGrid },
  { label: 'About Us', href: '/about-us', icon: Users },
  { label: 'How it works', href: '#how-it-works', icon: CircleHelp },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact Us', href: '/contact-us', icon: Mail },
];

function MenuIcon({ open, light = false }: { open: boolean; light?: boolean }) {
  const barColor = light ? 'bg-white' : 'bg-[#343e56]';

  return (
    <span
      className="flex size-6 flex-col items-center justify-center gap-[5px]"
      aria-hidden
    >
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open && 'translate-y-[7px] rotate-45',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100',
        )}
      />
      <span
        className={cn(
          'h-0.5 w-6 rounded-full transition-all duration-300',
          barColor,
          open && '-translate-y-[7px] -rotate-45',
        )}
      />
    </span>
  );
}

export default function SiteHeader({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);
  const showHeaderBg = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300',
        showHeaderBg
          ? 'border-b border-white/30 bg-white/50 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent backdrop-blur-none',
        className,
      )}
    >
      <div className="container flex h-[80px] items-center justify-between">
        <Link href="/" className="relative h-[42px] w-[132px] shrink-0">
          <Image
            src="/images/icons/trendevo-logo.png"
            alt="TrendEvo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden min-[1100px]:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-base font-medium transition-colors',
                link.active
                  ? 'text-gradient'
                  : 'text-[#343e56] hover:text-[#071431]',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 min-[1100px]:gap-6">
          <div className="hidden items-center gap-4 min-[1100px]:flex">
            <ThemeToggle />
            <Link
              href="#sign-in"
              className="text-base font-medium text-[#343e56] hover:text-[#071431]"
            >
              Sign In
            </Link>
          </div>

          <Button className="bg-brand-gradient hidden h-10 rounded-[10px] border-0 px-4 text-base font-semibold text-white hover:opacity-90 min-[1100px]:inline-flex">
            Create account
          </Button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
            className={cn(
              'flex size-10 cursor-pointer items-center justify-center rounded-[10px] border transition-all duration-300 min-[1100px]:hidden',
              mobileOpen
                ? 'border-[#d181ff]/50 bg-brand-gradient shadow-[0_4px_16px_rgba(209,129,255,0.35)]'
                : 'border-[#d57ff9]/30 bg-white/60',
            )}
          >
            <MenuIcon open={mobileOpen} light={mobileOpen} />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu"
        tabIndex={mobileOpen ? 0 : -1}
        onClick={closeMobileMenu}
        className={cn(
          'fixed inset-0 top-[80px] z-40 bg-[#071431]/25 backdrop-blur-[2px] transition-opacity duration-300 min-[1100px]:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        id="mobile-nav"
        className={cn(
          'relative z-50 overflow-hidden border-t border-[#f0d8ff]/80 bg-gradient-to-b from-white/95 via-[#fdf6ff]/95 to-[#f8efff]/95 shadow-[0_20px_50px_rgba(143,42,205,0.12)] backdrop-blur-xl transition-[max-height,opacity,transform] duration-300 ease-out min-[1100px]:hidden',
          mobileOpen
            ? 'max-h-[calc(100dvh-80px)] translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 opacity-0',
        )}
      >
        <nav className="container flex max-h-[calc(100dvh-80px)] flex-col overflow-y-auto px-1 py-5 sm:px-0 sm:py-6">
          <div className="mb-4 px-2 sm:mb-5">
            <p className="text-gradient text-xs font-semibold uppercase tracking-[0.2em]">
              Navigation
            </p>
          </div>

          <ul className="overflow-hidden rounded-2xl bg-white/75 ring-1 ring-[#f0d8ff]">
            {navLinks.map((link, index) => {
              const Icon = link.icon;

              return (
                <li
                  key={link.label}
                  className={cn(
                    'border-b border-[#f0d8ff]/70 last:border-b-0 transition-[opacity,transform] duration-300 ease-out',
                    mobileOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-2 opacity-0',
                  )}
                  style={{ transitionDelay: mobileOpen ? `${index * 35}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3.5 transition-colors duration-200 sm:py-4',
                      link.active
                        ? 'bg-[#faf2ff]/80'
                        : 'hover:bg-[#fdf6ff]/90',
                    )}
                  >
                    <Icon
                      className={cn(
                        'size-[18px] shrink-0',
                        link.active ? 'text-[#8f2acd]' : 'text-[#8a94a8]',
                      )}
                      strokeWidth={2}
                    />
                    <span
                      className={cn(
                        'text-[15px] font-medium sm:text-base',
                        link.active ? 'text-gradient font-semibold' : 'text-[#13203b]',
                      )}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              'mt-5 rounded-2xl border border-[#f0d8ff] bg-white/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-[opacity,transform] duration-300 sm:mt-6 sm:p-5',
              mobileOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-3 opacity-0',
            )}
            style={{ transitionDelay: mobileOpen ? '280ms' : '0ms' }}
          >
            <div className="mb-4 flex items-center justify-between rounded-xl border border-[#f0d8ff] bg-[#fdf6ff]/80 px-3.5 py-3">
              <div>
                <p className="text-sm font-semibold text-[#13203b]">Appearance</p>
                <p className="text-xs text-[#6b7289]">Switch light or dark mode</p>
              </div>
              <ThemeToggle />
            </div>

            <div className="flex flex-col gap-2.5">
              <Link
                href="#sign-in"
                onClick={closeMobileMenu}
                className="inline-flex h-11 items-center justify-center rounded-[10px] border border-[#d181ff]/50 bg-white text-sm font-semibold text-[#13203b] transition hover:bg-[#fdf6ff] sm:text-base"
              >
                Sign In
              </Link>

              <Button className="bg-brand-gradient h-11 w-full rounded-[10px] border-0 text-sm font-semibold text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.12)] hover:opacity-90 sm:text-base">
                Create account
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
