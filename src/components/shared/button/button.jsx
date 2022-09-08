import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';

const Button = () => (
  <button
    className="button relative inline-flex h-9 items-center justify-center whitespace-nowrap px-4 text-center !leading-none outline-none before:absolute before:inset-0 before:-z-10 before:border-2 after:absolute after:inset-0 after:-z-10"
    type="button"
  >
    <span>Join now</span>
    <ArrowIcon className="ml-2.5 block h-3" aria-hidden />
  </button>
);

export default Button;
