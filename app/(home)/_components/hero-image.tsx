import { data } from '@/app/(home)/page-data';
import Image from 'next/image';
const { hero } = data;
function HeroImage() {
  return (
   <>
      <div className='relative w-full flex justify-center md:pt-15 pt-10'>
        <div className='absolute top-[-10px] flex items-center'>
        <div className='left-[-10px] absolute'>
          <Image
            src="/images/hero/facebook-smm-panel-services.png"
            alt="Facebook SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave relative right-[-10px] mb-[15px] h-15 w-15"
            style={{ animationDelay: '0s' }}
            />
          <Image
            src="/images/hero/youtube-smm-panel-services.png"
            alt="YouTube SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave relative right-[-5px] mb-[15px] h-15 w-15"
            style={{ animationDelay: '0.2s' }}
            />
          <Image
            src="/images/hero/linkedin-smm-panel-services.png"
            alt="LinkedIn SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave relative right-[-10px] mb-[10px] h-18 w-18"
            style={{ animationDelay: '0.4s' }}
            />
        </div>

        <div className='right-[-10px] absolute'>
          <Image
            src="/images/hero/instagram-smm-panel-services.png"
            alt="Facebook SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave-2 relative left-[-10px] mb-[15px] h-15 w-15"
            style={{ animationDelay: '0s' }}
            />
          <Image
            src="/images/hero/tiktok-smm-panel-services.png"
            alt="YouTube SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave-2 relative left-[-5px] mb-[15px] h-15 w-15"
            style={{ animationDelay: '0.2s' }}
            />
          <Image
            src="/images/hero/x-twitter-smm-panel-services.png"
            alt="LinkedIn SMM Panel Services"
            priority
            fetchPriority='high'
            width={500}
            height={500}
            className="hero-icon-wave-2 relative left-[-10px] mb-[10px] h-15 w-15"
            style={{ animationDelay: '0.4s' }}
            />
        </div>

          <Image
            src="/images/hero/rounded-stroke.svg"
            alt=""
            priority
            fetchPriority='high'
            width={250}
            height={250}
            className="w-180 h-180 rounded-full"
            />
        </div>
        
        <div className='hidden md:flex'>
          <Image
            src="/images/hero/best-smm-panel.png"
            alt="Best SMM Panel"
            priority
            fetchPriority='high'
            width={300}
            height={300}
            className="hero-badge-bounce-shake w-65 absolute bottom-[15px] right-[0px]"
            style={{ animationDelay: '1.5s' }}
            />
          <Image
            src="/images/hero/best-smm-panel-services-in-bangladesh.png"
            alt="Best SMM Panel Services in Bangladesh"
            priority
            fetchPriority='high'
            width={300}
            height={300}
            className="w-65 absolute bottom-[15px] left-[0px] animate-[bounce_8s_infinite]"
            />
        </div>
        <Image
            src={hero.illustration.src}
            alt={hero.illustration.alt}
            width={hero.illustration.width}
            height={hero.illustration.height}
            priority
            fetchPriority='high'
            sizes="(max-width: 1024px) 100vw, 669px"
            className="hero-image block w-80 md:w-120 relative bottom-[-30px]"
            />
      </div>
   </>
  )
}

export default HeroImage
