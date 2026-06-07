import PrimaryCard from '@/components/cards/primary-card';
import OurService from '@/components/features/home/OurService';
import PrimarySection from '@/components/sections/primary-section';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <PrimarySection
      bg="section-2"
      className="flex items-center justify-center h-screen"
    >
      <PrimaryCard bg="card-2">This is a card</PrimaryCard>
    </PrimarySection>
    <OurService />
    </>
  );
}
