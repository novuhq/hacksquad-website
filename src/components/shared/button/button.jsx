import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const Button = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn('github', { callbackUrl: '/thank-you/' });
  };

  return (
    <button
      className={clsx(
        'base-btn-animation relative inline-flex h-9 items-center justify-center whitespace-nowrap px-4 text-center !leading-none outline-none before:absolute before:inset-0 before:-z-10 before:border-2 after:absolute after:inset-0 after:-z-10',
        className,
        isLoading && 'pointer-events-none min-w-[135px]'
      )}
      type="button"
      onClick={handleSignIn}
    >
      {isLoading ? (
        <div className="h-3.5 w-3.5 animate-spin rounded-full border border-b border-transparent border-b-white" />
      ) : (
        <>
          <span>Join now</span>
          <ArrowIcon className="ml-2.5 block h-3" aria-hidden />
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
};

export default Button;
