import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const Button = ({ className }) => (
  <button
    className={clsx(
      'button relative inline-flex h-9 items-center justify-center whitespace-nowrap px-4 text-center !leading-none outline-none before:absolute before:inset-0 before:-z-10 before:border-2 after:absolute after:inset-0 after:-z-10',
      className
    )}
    type="button"
    onClick={(e) => {
      e.preventDefault();
      signIn('github');
    }}
  >
    <span>Join now</span>
    <ArrowIcon className="ml-2.5 block h-3" aria-hidden />
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: null,
};

export default Button;
