'use client';

import clsx from 'clsx';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ArrowRight from 'svgs/arrow-right.inline.svg';

const styles = {
  size: {
    sm: 'gap-3 px-4 py-1.5 text-16 font-medium md:text-14 md:px-4.5',
    md: 'gap-4 px-5 py-2 text-18 font-bold md:text-16 md:px-6 sm:text-14',
  },
  base: 'relative cta-btn-animation cta-backdrop inline-flex max-w-full items-center justify-center leading-normal rounded-sm items-center justify-center bg-yellow text-black',
};

const SignUpButton = ({ className: additionalClassName = null, size = 'sm', children }) => {
  const className = clsx(styles.base, styles.size[size], additionalClassName);
  const [isLoading, setIsLoading] = useState(false);
  // const { status } = useSession();
  // const router = useRouter();

  // TODO: uncomment when implementing login logic
  const handleSignIn = (e) => {
    e.preventDefault();
    // if (status === 'authenticated') {
    //   router.push('/myteam');
    //   return;
    // }
    setIsLoading(true);
    // signIn('github', { callbackUrl: '/thank-you/' });
  };

  return (
    <button
      className={clsx(className, isLoading && 'pointer-events-none')}
      type="button"
      onClick={handleSignIn}
    >
      <span>
        {children}
        {/* {status === 'authenticated' ? ( */}
        {/*   <span className="text-lg sm:text-[18px]">Go to my Squad</span> */}
        {/* ) : ( */}
        {/*   <> */}
        {/*     <span className="text-lg sm:text-[18px]"> */}
        {/*       {!alternativeText ? 'Sign up with GitHub' : alternativeText} */}
        {/*     </span> */}
        {/*   </> */}
        {/* )} */}
      </span>
      {isLoading ? (
        <span className="h-3 w-3 animate-spin rounded-full border border-b border-transparent border-b-black" />
      ) : (
        <ArrowRight className="w-3" aria-hidden />
      )}
    </button>
  );
};

SignUpButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  children: PropTypes.node.isRequired,
  // alternativeText: PropTypes.string,
};

export default SignUpButton;
