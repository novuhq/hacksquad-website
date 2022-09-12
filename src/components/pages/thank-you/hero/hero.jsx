import Image from 'next/future/image';
import React from 'react';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgRightGlitch from './images/bg-right-glitch.png';
import bg from './images/bg.jpg';

const title = 'Thank you!';
const description = "We'll contact you shortly by email and send detailed instructions";

const Hero = () => (
  <section className="safe-paddings relative py-[244px] sm:py-32">
    <div className="container relative z-10 flex flex-col items-center">
      <h1
        className="font-['Bugfast'] text-[138px] leading-none md:text-[105px] sm:text-[14vw]"
        style={{
          textShadow: '-2px -2px 0px #00FFFF, 2px 2px 0px #AA00FF',
        }}
      >
        {title}
      </h1>
      <p className="mx-auto mt-12 max-w-[716px] text-center text-lg sm:mt-10 sm:text-base">
        {description}
      </p>
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
