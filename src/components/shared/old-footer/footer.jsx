import clsx from 'clsx';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import SignUpButton from 'components/shared/sign-up-button';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

const Footer = ({ withBorder }) => {
  const { status } = useSession();
  const isAuthorized = status === 'authenticated';

  return (
    <footer
      className={clsx('safe-paddings', withBorder && 'border-t border-[rgba(255,255,255,0.20)]')}
    >
      <div className="container flex items-center justify-between py-3.5 md:py-3">
        <Link href="/">
          <img src={logo} width={36} height={36} loading="lazy" alt="Hacksquad" />
        </Link>
        <nav className="flex items-center gap-10">
          <ul className="flex space-x-10 md:hidden">
            {MENUS.header.slice(1).map(({ href, text }, index) => (
              <li key={index}>
                <Link href={href} passHref legacyBehavior>
                  <a
                    className="py-5 transition-colors duration-200 hover:text-primary-2"
                    href={href}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <SignUpButton
            className="min-w-[135px]"
            size="sm"
            theme="outline"
            to={isAuthorized ? '/myteam' : null}
            isSignInButton={!isAuthorized}
          >
            {status === 'loading' ? (
              <span className="h-3 w-3 animate-spin rounded-full border border-b border-transparent border-b-white" />
            ) : !isAuthorized ? (
              'Join now'
            ) : (
              'My Squad'
            )}
          </SignUpButton>
        </nav>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  withBorder: PropTypes.bool,
};

Footer.defaultProps = {
  withBorder: false,
};

export default Footer;
