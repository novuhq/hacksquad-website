import Image from 'next/future/image';
import React from 'react';

import GitHubIcon from 'icons/github.inline.svg';

import bg from './images/bg.jpg';
import leftGlitch from './images/left-glitch.png';
import rightGlitch from './images/right-glitch.png';
import Sponsors from './sponsors';

const title = 'Hacksquad';
const description =
  'Complimentary event to win more swag, contribute code, meet community members, and participate in workshops.';

const Hero = () => (
  <section className="hero safe-paddings relative overflow-hidden pt-60 pb-[100px]">
    <div className="container relative z-10 flex flex-col items-center">
      <div className="relative">
        <h1
          className="font-['Bugfast'] text-[138px] leading-none md:text-[105px] sm:text-[14vw]"
          style={{
            textShadow: '-2px -2px 0px #00FFFF, 2px 2px 0px #AA00FF',
          }}
        >
          {title}
        </h1>
        <span
          className="text-highlighting-colorful-gradient absolute right-0 flex text-right font-['Flood_Std'] text-[46px] leading-none"
          aria-hidden
        >
          2022
        </span>
      </div>
      <p className="mt-[58px] max-w-[716px] text-center text-lg">{description}</p>
      <button className="relative mt-10 flex h-[60px] items-center justify-center" type="button">
        <svg width="341" height="59" viewBox="0 0 341 59" fill="none">
          <path d="M1 58V1H324.586L340 16.4142V58H1Z" stroke="white" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
          <GitHubIcon className="h-[25px]" />
          <span className="text-lg">Sign up with GitHub</span>
        </div>
      </button>

      <Sponsors />
    </div>

    <Image
      className="absolute top-0 left-1/2 min-w-[1920px] -translate-x-1/2"
      src={bg}
      width={1920}
      height={972}
      loading="eager"
      alt=""
      priority
    />

    <Image
      className="absolute left-0 top-[23%]"
      src={leftGlitch}
      width={779}
      height={343}
      loading="eager"
      alt=""
      priority
    />

    <Image
      className="absolute right-0 top-[32%]"
      src={rightGlitch}
      width={892}
      height={364}
      loading="eager"
      alt=""
      priority
    />
  </section>
);

export default Hero;
