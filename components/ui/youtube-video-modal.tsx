'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type YoutubeVideoModalProps = {
  videoId: string | null;
  onClose: () => void;
};

export default function YoutubeVideoModal({ videoId, onClose }: YoutubeVideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!videoId) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [videoId, onClose]);

  if (!videoId || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 pt-24 pb-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative h-[min(85dvh,calc((100vw-2rem)*16/9))] w-[min(100%,calc(min(85dvh,calc((100vw-2rem)*16/9))*9/16),420px)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Video review player"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-3 -right-3 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-[#071431] shadow-lg transition hover:bg-white/90"
        >
          <X className="size-5" />
        </button>

        <div className="size-full overflow-hidden rounded-2xl bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="YouTube reel review"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="size-full border-0"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
