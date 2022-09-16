import Image from 'next/future/image';
import React from 'react';

import SignUpButton from 'components/shared/sign-up-button';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgLogo from './images/bg-logo.png';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgTitleGlitchLeft from './images/bg-title-glitch-left.png';
import bgTitleGlitchRight from './images/bg-title-glitch-right.png';
import bg from './images/bg.jpg';
import Sponsors from './sponsors';

const title = 'Hacksquad';
const description =
  'Complimentary event to win more swag, contribute code, meet community members, and participate in workshops.';

const Hero = () => (
  <section className="safe-paddings relative pt-[244px] pb-26 sm:pt-32 sm:pb-20">
    <div className="container relative z-10 flex flex-col items-center">
      <div className="relative">
        <div className="relative">
          <Image
            className="absolute left-5 top-1/2 -z-10 mt-[-3px] -translate-y-1/2 -translate-x-full transform md:max-h-[74px] sm:hidden"
            src={bgTitleGlitchLeft}
            width={526}
            height={98}
            loading="eager"
            alt=""
            priority
            aria-hidden
          />

          <h1
            className="font-['Bugfast'] text-[138px] leading-none md:text-[105px] sm:text-[14vw]"
            style={{
              textShadow:
                '-2px -2px 0px #00FFFF, 2px 2px 0px #AA00FF, 6px 6px 0px rgba(255, 0, 149, 0.1), -6px -6px 0px rgba(0, 234, 255, 0.1), -5px -5px 24px rgba(0, 234, 255, 0.6), 5px 5px 24px rgba(170, 0, 255, 0.6)',
            }}
          >
            {title}
          </h1>

          <Image
            className="absolute right-5 top-1/2 -z-10 mt-[-3px] -translate-y-1/2 translate-x-full transform md:right-12 md:max-h-[74px] sm:hidden"
            src={bgTitleGlitchRight}
            width={526}
            height={98}
            loading="eager"
            alt=""
            priority
            aria-hidden
          />
        </div>
        <span
          className="text-highlighting-colorful-gradient absolute right-0 flex text-right font-['Flood_Std'] text-[46px] leading-none sm:text-[7vw]"
          aria-hidden
        >
          2022
        </span>
        <p className="mx-auto mt-[58px] max-w-[716px] text-center text-lg sm:mt-10 sm:text-base">
          {description}
        </p>
        <SignUpButton className="mx-auto mt-10" />

        <Image
          className="absolute left-1/2 top-1/2 -z-10 mt-[-25px] -translate-x-1/2 -translate-y-1/2 transform sm:max-w-[382px]"
          src={bgLogo}
          width={743}
          height={665}
          loading="eager"
          alt=""
          priority
          aria-hidden
        />
      </div>

      <Sponsors />
    </div>

    <Image
      className="absolute top-0 left-1/2 min-w-[1920px] -translate-x-1/2 md:min-w-[1540px]"
      src={bg}
      width={1920}
      height={972}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />

    <Image
      className="absolute left-0 top-[16.4%] xl:left-[-20%] lg:left-[-40%] md:left-[-60%]"
      src={bgLeftGlitch}
      width={779}
      height={343}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />

    <Image
      className="absolute right-0 top-[22.8%] xl:right-[-20%] lg:right-[-40%] md:right-[-60%]"
      src={bgRightGlitch}
      width={892}
      height={364}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />
  </section>
);

export default Hero;
