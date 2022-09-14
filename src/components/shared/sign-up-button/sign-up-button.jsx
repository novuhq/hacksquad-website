import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import GitHubIcon from 'icons/github.inline.svg';

const SignUpButton = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn('github', { callbackUrl: '/thank-you/' });
  };

  return (
    <button
      className={clsx(
        'cta-btn-animation relative flex h-[60px] max-w-full items-center justify-center !leading-none',
        className,
        isLoading && 'pointer-events-none'
      )}
      type="button"
      onClick={handleSignIn}
    >
      <svg
        className="cta-btn-animation-border xs:w-full"
        width="341"
        height="59"
        viewBox="0 0 341 59"
        fill="none"
      >
        <path d="M1 58V1H324.586L340 16.4142V58H1Z" stroke="white" strokeWidth="2" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
        {isLoading ? (
          <div className="h-7 w-7 animate-spin rounded-full border border-b border-transparent border-b-white" />
        ) : (
          <>
            <GitHubIcon className="h-[25px]" />
            <span className="text-lg sm:text-[18px]">Sign up with GitHub</span>
          </>
        )}
      </div>
    </button>
  );
};

SignUpButton.propTypes = {
  className: PropTypes.string,
};

SignUpButton.defaultProps = {
  className: null,
};

export default SignUpButton;
