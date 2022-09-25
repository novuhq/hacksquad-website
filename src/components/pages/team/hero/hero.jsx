import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import DiscordIcon from './images/discord.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import NoLogged from './no-logged';
import NoTeam from './no.team';
import Team from './team';

const title = '>>My Squad';

const Hero = ({ info }) => {
  const { status } = useSession();
  if (status !== 'authenticated') {
    return <NoLogged />;
  }
  return (
    <section className="safe-paddings relative h-screen min-h-[600px]">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
          {title}
        </h1>
        {!info.team ? <NoTeam /> : <Team info={info} />}
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
};

Hero.propTypes = {
  info: PropTypes.object,
};

export default Hero;
