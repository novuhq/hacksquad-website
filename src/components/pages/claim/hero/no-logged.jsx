import Image from 'next/image';
import React from 'react';

import SignUpButton from 'components/shared/sign-up-button';
import Socials from 'components/shared/socials';

import bg from './images/bg.jpg';

const title = '>>Sign in!';
const description = <>Oh no, you have probably signed out of the system</>;

const NoLogged = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="leading-tight font-mono text-xl font-bold uppercase lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <p className="mt-10 text-center text-lg sm:mt-6 sm:text-base">{description}</p>
      <SignUpButton alternativeText="Sign In" className="relative z-10 mx-auto mt-10" />
      <Socials className="absolute bottom-20 md:bottom-12" />
    </div>

    <Image
      className="absolute left-1/2 top-0 min-h-screen w-full min-w-[1920px] -translate-x-1/2 md:min-w-[1230px]"
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

export default NoLogged;
