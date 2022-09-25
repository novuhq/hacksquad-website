import Image from 'next/future/image';
import React from 'react';

import SignUpButton from '../../../shared/sign-up-button';

import bg from './images/bg.jpg';
import DiscordIcon from './images/discord.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const title = '>>Sign in!';
const description = <>Oh no, you have probably signed out of the system</>;

const NoLogged = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <p className="mt-10 text-center text-lg sm:mt-6 sm:text-base">{description}</p>
      <SignUpButton alternativeText="Sign In" className="relative z-10 mx-auto mt-10" />

      <div className="absolute bottom-20 flex flex-col items-center md:bottom-12">
        <span className="font-mono uppercase">Let’s connect</span>
        <div className="flex items-center space-x-8">
          <a
            className="group mt-5"
            href="https://twitter.com/HackSquadDev"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </a>

          <a
            className="group mt-5"
            href="https://discord.gg/vcqkXgT3Xr"
            target="_blank"
            rel="noreferrer"
          >
            <DiscordIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
          </a>
        </div>
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

export default NoLogged;
