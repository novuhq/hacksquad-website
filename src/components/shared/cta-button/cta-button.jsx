import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import GitHubIcon from 'icons/github.inline.svg';

const CtaButton = ({ className }) => (
  <button
    className={clsx(
      'cta-btn relative flex h-[60px] items-center justify-center !leading-none',
      className
    )}
    type="button"
  >
    <svg className="cta-btn-border" width="341" height="59" viewBox="0 0 341 59" fill="none">
      <path d="M1 58V1H324.586L340 16.4142V58H1Z" stroke="white" strokeWidth="2" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
      <GitHubIcon className="h-[25px]" />
      <span className="text-lg">Sign up with GitHub</span>
    </div>
  </button>
);

CtaButton.propTypes = {
  className: PropTypes.string,
};

CtaButton.defaultProps = {
  className: null,
};

export default CtaButton;
