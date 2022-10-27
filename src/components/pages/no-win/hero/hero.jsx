import Image from 'next/future/image';
import React from 'react';

import Socials from 'components/shared/socials';

import bg from './images/bg.jpg';

const title = '>>Oh no!';
const description = (
  <p className="text-left">
    You can't claim the Novu Swag, there might be a few problems:
    <br />
    <ul className="text-left">
      <li>- You have already claimed your swag</li>
      <li>- You have just joined the HackSquad system - you will have to wait 1 hour</li>
      <li>
        - You haven't contributed <strong>3 MERGED PRs</strong> to Novu
      </li>
    </ul>
    <br />
    If you think there is a problem here, please contact nevo@novu.co
  </p>
);

const Hero = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <p className="mt-10 text-center text-lg sm:mt-6 sm:text-base">{description}</p>

      <Socials className="absolute bottom-20 md:bottom-12" />
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
