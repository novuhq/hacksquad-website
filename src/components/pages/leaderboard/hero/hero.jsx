import Image from 'next/future/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Socials from 'components/shared/socials';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgTitleGlitch from './images/bg-title-glitch.png';

const title = '>_Leaderboard';
const leadersHeader = ['Place', 'Name', 'Score'];

const Hero = ({ teams }) => {
  const score = useMemo(() => (teams?.slice(0, 60).pop()?.score || 0), [teams]);

  return (
    <section className="safe-paddings relative min-h-[600px]">
      <div className="container relative flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] sm:px-4 xs:text-[32px]">
          {title}
        </h1>
        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-full md:overflow-x-auto">
          <div className="min-w-[716px] md:min-w-[600px] md:px-7 sm:min-w-[300px] sm:px-4">
            <div className="grid grid-cols-[120px_1fr_90px] gap-x-5 border-b border-gray-2 pb-4 sm:grid-cols-[50px_160px_40px]">
              {leadersHeader.map((header, index) => (
                <span className="font-medium uppercase" key={index}>{header}</span>
              ))}
            </div>
            <ul>
              {teams.map((team, index) => (
                <li className="grid grid-cols-[120px_1fr_90px] gap-x-5 border-b border-gray-2 py-4 sm:grid-cols-[50px_160px_40px]" key={team.slug}>
                  <span>{index + 1}</span>
                  <p className="truncate font-medium">
                    <Link href={`/team/${team.slug}`}>{`${team.name} ${score <= team.score ? '👑' : ''}`}</Link>
                  </p>
                  <span>{team.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/" passHref>
          <a className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none" href="/">
            <svg className="cta-btn-animation-border xs:w-full" width="268" height="59" viewBox="0 0 268 59" fill="none">
              <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
              <span className="text-lg sm:text-[18px]">Back to Homepage</span>
            </div>
          </a>
        </Link>
        <Socials className="mt-10" />
      </div>
      {[
        { src: bgLeftGlitch, width: 464, height: 78, top: '70px', left: '0', zIndex: '-20', maxW: '360px' },
        { src: bgTitleGlitch, width: 1920, height: 219, top: '0', left: '0', right: '0', zIndex: '-10' },
        { src: bgRightGlitch, width: 474, height: 105, top: '9', right: '0', zIndex: '-20', maxW: '360px' },
      ].map(({ src, width, height, top, left, right, zIndex, maxW }, index) => (
        <Image
          key={index}
          className={`absolute top-${top} left-${left} right-${right} -z-${zIndex} sm:max-w-[${maxW}] xs:max-w-[240px]`}
          src={src}
          width={width}
          height={height}
          loading="eager"
          alt={`${src} image`}
          priority
          aria-hidden
        />
      ))}
    </section>
  );
};

Hero.propTypes = {
  teams: PropTypes.array,
};

Hero.defaultProps = {
  teams: [],
};

export default Hero;
