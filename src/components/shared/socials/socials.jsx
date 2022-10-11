import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import DiscordIcon from 'images/social/discord.inline.svg';
import TwitterIcon from 'images/social/twitter.inline.svg';

const Socials = ({ className: additionalClassName }) => (
  <section className={clsx('flex flex-col items-center', additionalClassName)}>
    <h2 className="font-mono font-medium uppercase">Let’s connect</h2>
    <div className="flex items-center space-x-8">
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
  </section>
);

Socials.propTypes = {
  className: PropTypes.string,
};

Socials.defaultProps = {
  className: null,
};

export default Socials;
