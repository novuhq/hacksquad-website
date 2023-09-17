import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Socials from 'components/shared/socials';

import bg from './images/bg.jpg';

const title = '>>Join an existing squad';
const description = (
  <>
    If you know which squad you want to join to,
    <br />
    please ask one of the squad members to send you an invite link
    <br />
    If you want the system to auto-assign you to a team,
    <br />
    Go back and click "Auto assign me"
  </>
);

const JoinSquad = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="leading-tight font-mono text-xl font-bold uppercase lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <p className="mt-10 text-center text-lg sm:mt-6 sm:text-base">{description}</p>
      <Link href="/myteam" passHref legacyBehavior>
        <a
          className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
          href="/myteam"
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
            <span className="text-lg sm:text-[18px]">Go back</span>
          </div>
        </a>
      </Link>

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

export default JoinSquad;
