'use client';

import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { usePlausible } from 'next-plausible';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Link from 'components/shared/link';
import ArrowRight from 'svgs/arrow-right.inline.svg';
import ArrowUp from 'svgs/arrow-up.inline.svg';

const styles = {
  base: 'relative inline-flex max-w-full items-center justify-center leading-none rounded-sm items-center transition-colors duration-200',
  size: {
    sm: 'gap-3 px-4 h-9 text-16 font-medium md:text-14 md:px-4.5',
    md: 'gap-4 px-5 h-11 text-18 font-bold md:text-16 md:px-6 sm:text-14 xs:px-3 xs:h-9',
  },
  theme: {
    'fill-yellow':
      'bg-yellow text-black before:opacity-0 hover:before:opacity-70 before:transition-opacity before:duration-200 hover:bg-[#FFF263] hover:before-opacity-70 before:absolute before:top-1/2 before:-z-10 before:h-[48px] before:w-full before:-translate-y-1/2 before:rounded before:bg-cta-hover-blur before:blur-xl',
    outline:
      'text-white border border-white hover:bg-[rgba(255,255,255,0.10)] hover:border-[#6D7277]',
  },
};

const SignUpButton = ({ className = null, to = null, size = 'sm', theme, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const plausible = usePlausible();

  const Tag = to ? Link : 'button';

  const handleSignIn = (e) => {
    e.preventDefault();

    setIsLoading(true);
    plausible('registration');
    signIn('github', {
      callbackUrl: '/ticket',
    });
  };
  return (
    <Tag
      className={clsx(
        styles.base,
        styles.size[size],
        styles.theme[theme],
        className,
        isLoading && 'pointer-events-none'
      )}
      to={to}
      type={!to && 'button'}
      onClick={!to && handleSignIn}
    >
      {children}
      {isLoading ? (
        <span
          className={clsx('h-3 w-3 animate-spin rounded-full border border-b border-transparent', {
            'border-b-black': theme === 'fill-yellow',
            'border-b-white': theme === 'outline',
          })}
        />
      ) : (
        <>
          {size === 'sm' ? (
            <ArrowUp className="w-3" aria-hidden />
          ) : (
            <ArrowRight className="w-3" aria-hidden />
          )}
        </>
      )}
    </Tag>
  );
};

SignUpButton.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

export default SignUpButton;
