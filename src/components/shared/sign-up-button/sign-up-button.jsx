import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import GitHubIcon from 'icons/github.inline.svg';

const SignUpButton = ({ className }) => (
  <button
    className={clsx(
      'sign-up-btn relative flex h-[60px] max-w-full items-center justify-center !leading-none',
      className
    )}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      signIn('github', { callbackUrl: '/thank-you/' });
    }}
  >
    <svg
      className="sign-up-btn-border xs:w-full"
      width="341"
      height="59"
      viewBox="0 0 341 59"
      fill="none"
    >
      <path d="M1 58V1H324.586L340 16.4142V58H1Z" stroke="white" strokeWidth="2" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
      <GitHubIcon className="h-[25px]" />
      <span className="text-lg sm:text-[18px]">Sign up with GitHub</span>
    </div>
  </button>
);

SignUpButton.propTypes = {
  className: PropTypes.string,
};

SignUpButton.defaultProps = {
  className: null,
};

export default SignUpButton;
