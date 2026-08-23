'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useTheme } from '@/components/theme-provider';

import { cn } from '@/lib/utils';

const TRACK_LEFT = 8.22;
const TRACK_TOP = 3.5;
const TRACK_WIDTH = 55;
const TRACK_HEIGHT = 23;
const KNOB_SIZE = 29;
const TOGGLE_WIDTH = TRACK_LEFT + TRACK_WIDTH;
const TOGGLE_HEIGHT = KNOB_SIZE;

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isLight = !mounted || resolvedTheme === 'light';
  const label = isLight ? 'Light' : 'Dark';
  const knobLeft = isLight ? 0 : TOGGLE_WIDTH - KNOB_SIZE;
  const trackLeft = isLight ? TRACK_LEFT : 0;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className={cn(
        'relative shrink-0 cursor-pointer overflow-visible',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d57ff9]/50 focus-visible:ring-offset-2',
        className,
      )}
      style={{
        width: TOGGLE_WIDTH,
        height: TOGGLE_HEIGHT,
      }}
    >
      <span
        aria-hidden
        className={cn(
          'absolute z-0 rounded-[11.5px] border-[0.3px] transition-[left] duration-300 ease-out',
          isLight
            ? 'border-[#d57ff9]/30 bg-[#ffe9f5]'
            : 'border-[#cb7ef7]/40 bg-white/10',
        )}
        style={{
          left: trackLeft,
          top: TRACK_TOP,
          width: TRACK_WIDTH,
          height: TRACK_HEIGHT,
        }}
      />

      <span
        className={cn(
          'absolute z-10 whitespace-nowrap text-[10px] font-medium leading-none transition-[left] duration-300 ease-out',
          isLight
            ? 'left-[31.11px] top-[9.5px] text-[#424242]'
            : 'left-[10px] top-[9.5px] text-white',
        )}
      >
        {label}
      </span>

      <span
        aria-hidden
        className="absolute top-0 z-20 flex items-center justify-center rounded-full bg-brand-gradient shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-[left] duration-300 ease-out"
        style={{
          left: knobLeft,
          width: KNOB_SIZE,
          height: KNOB_SIZE,
        }}
      >
        {isLight ? (
          <Sun className="size-[18px] text-white" aria-hidden />
        ) : (
          <Moon className="size-[18px] text-white" aria-hidden />
        )}
      </span>
    </button>
  );
}
