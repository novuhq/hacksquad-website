import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import DevToAccount from 'components/shared/devto/dev.to';
import DevToAccountList from 'components/shared/devto/dev.to.list';
import DevToToolTip from 'components/shared/devto/tooltip';
import InviteButton from 'components/shared/invite/invite.button';

import DiscordIcon from './images/discord.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const TITLE = 'Bonuses';

const Hero = ({ devto }) => (
  <section className="safe-paddings relative min-h-[600px] pt-40">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="leading-tight font-titles text-60 font-bold lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {TITLE}
      </h1>
      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
        <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-1">
          <div className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
            <span className="font-medium uppercase sm:hidden">#</span>
            <span className="font-medium uppercase">Type</span>
            <span className="font-medium uppercase">Points</span>
            <span className="font-medium uppercase">Claim</span>
          </div>
          <ul>
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">2</span>
              <span>Friend invite</span>
              <span>1 per friend [Max:5]</span>
              <span>
                <InviteButton />
              </span>
            </li>
            <li className="grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
              <span className="sm:hidden">3</span>
              <span>
                <DevToToolTip />
              </span>
              <span>1 point</span>
              <span>{devto ? 'Connected' : <DevToAccount />}</span>
            </li>
            {!!devto && <DevToAccountList />}
          </ul>
        </div>
      </div>
      <Button className="mt-10" size="md" to="/my-team" theme="fill-white">
        Back to my squad
      </Button>

      <div className="mt-20 flex flex-col items-center md:bottom-12">
        <span className="font-titles uppercase">Let’s connect</span>
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
  twitter: PropTypes.bool,
  devto: PropTypes.bool,
};

export default Hero;
