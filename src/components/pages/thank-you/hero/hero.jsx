import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import bg from './images/bg.jpg';
import TwitterIcon from './images/twitter.inline.svg';

const title = '>>Thank you!';
const description = (
  <>
    You have successfully registered to HackSquad 🚀!
    <br />
    We will send you more updates over the next two weeks.
  </>
);

const Hero = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <p className="mt-10 text-center text-lg sm:mt-6 sm:text-base">{description}</p>
      <Link href="/" passHref>
        <a
          className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
          href="/"
        >
          <svg
            className="cta-btn-animation-border xs:w-full"
            width="268"
            height="59"
            viewBox="0 0 268 59"
            fill="none"
          >
            <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
            <span className="text-lg sm:text-[18px]">Back to Homepage</span>
          </div>
        </a>
      </Link>

      <div className="absolute bottom-20 flex flex-col items-center md:bottom-12">
        <span className="font-mono uppercase">Follow us</span>
        <Link href="https://twitter.com/HackSquadDev" passHref>
          <a className="group mt-5" href="https://twitter.com/HackSquadDev">
            <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </a>
        </Link>
      </div>
    </div>

    <Image
      className="absolute top-0 left-1/2 min-h-screen w-full min-w-[1920px] -translate-x-1/2 md:min-w-[1230px]"
      src={bg}
      width={1920}
      height={1080}
      loading="eager"
      alt=""
      priority
      aria-hidden
    />
  </section>
);

export default Hero;
