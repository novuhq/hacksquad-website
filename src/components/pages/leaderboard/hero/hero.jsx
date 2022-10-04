import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import DiscordIcon from './images/discord.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const title = '>>Leaderboard';

const Hero = ({ teams }) => (
  <section className="safe-paddings relative min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {title}
      </h1>
      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
        <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
          <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
            <span className="font-medium uppercase">Place</span>
            <span className="font-medium uppercase">Name</span>
            <span className="font-medium uppercase">Score</span>
          </div>
          <ul>
            {teams.map((team, index) => (
              <li
                key={team.slug}
                className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]"
              >
                <span>{index + 1}</span>
                <p className="truncate font-medium">
                  <Link href={`/team/${team.slug}`}>{team.name}</Link>
                </p>
                <span>{team.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
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

      <div className="mt-20 flex flex-col items-center md:bottom-12">
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
  </section>
);

Hero.propTypes = {
  teams: PropTypes.array,
};

export default Hero;
