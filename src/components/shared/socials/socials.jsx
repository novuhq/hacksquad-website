import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import DiscordIcon from 'images/social/discord.inline.svg';
import GithubIcon from 'images/social/github.inline.svg';
import TwitterIcon from 'images/social/twitter.inline.svg';

const Socials = ({ className: additionalClassName }) => (
  <section className={clsx('flex items-center', additionalClassName)}>
    <div className="pr-8 text-center">
      <h2 className="font-mono font-medium uppercase">Let’s connect</h2>
      <div className="flex items-center justify-center space-x-8">
        <a
          className="group mt-5"
          href="https://twitter.com/HackSquadDev"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to our Twitter"
        >
          <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
        </a>
        <a
          className="group mt-5"
          href="https://discord.gg/vcqkXgT3Xr"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to our Discord"
        >
          <DiscordIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
        </a>
      </div>
    </div>

    <div className="border-l-2 pl-8">
      <h2 className="font-mono font-medium uppercase">Contribute</h2>
      <div className="flex items-center justify-center space-x-8">
        <a
          className="group mt-5"
          href="https://github.com/novuhq/hacksquad-website"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to our GitHub"
        >
          <GithubIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
        </a>
      </div>
    </div>
  </section>
);

Socials.propTypes = {
  className: PropTypes.string,
};

Socials.defaultProps = {
  className: null,
};

export default Socials;
