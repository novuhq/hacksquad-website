import React from 'react';
import TwitterIcon from './images/twitter.inline.svg';
import DiscordIcon from './images/discord.inline.svg';

const Connect = () => (
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
);
  
export default Connect;