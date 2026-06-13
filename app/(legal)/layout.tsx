import { legalPageClassName } from '@/app/(legal)/_components/primitives';
import { cn } from '@/lib/utils';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('relative isolate min-h-full', legalPageClassName)}>
      {children}
    </div>
  );
}
