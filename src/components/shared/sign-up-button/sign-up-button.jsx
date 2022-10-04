import clsx from 'clsx';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import GitHubIcon from 'icons/github.inline.svg';

const SignUpButton = ({ className, alternativeText }) => {
  const [isLoadingState, setIsLoadingState] = useState(false);
  const { status } = useSession();
  const router = useRouter();
  const isLoading = useMemo(() => isLoadingState || status === 'loading', [isLoadingState, status]);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (status === 'authenticated') {
      router.push('/myteam');
      return;
    }
    setIsLoadingState(true);
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
        ) : status === 'authenticated' ? (
          <span className="text-lg sm:text-[18px]">Go to my Squad</span>
        ) : (
          <>
            <GitHubIcon className="h-[25px]" />
            <span className="text-lg sm:text-[18px]">
              {!alternativeText ? 'Sign up with GitHub' : alternativeText}
            </span>
          </>
        )}
      </div>
    </button>
  );
};

SignUpButton.propTypes = {
  className: PropTypes.string,
  alternativeText: PropTypes.string,
};

SignUpButton.defaultProps = {
  className: null,
};

export default SignUpButton;
