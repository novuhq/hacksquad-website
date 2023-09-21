import Link from 'next/link';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import SignUpButton from 'components/shared/sign-up-button';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

import { toDisplay } from '~/helpers/events';
import Novu from '~/helpers/novu';
import useModerator from '~/helpers/use.moderator';

const Header = ({ isMobileMenuOpen, onBurgerClick, absolute }) => {
  const display = toDisplay();
  const { moderator, cleaner } = useModerator();
  const { status } = useSession();
  const isAuthorized = status === 'authenticated';

  return (
    <header
      className={`safe-paddings ${
        absolute ? `absolute top-0 ${!!display && 'top-12'} left-0 right-0` : ''
      } z-50 w-full`}
    >
      <div className="container flex items-center justify-between py-4 md:py-3">
        <Link href="/">
          <img src={logo} width={39} height={38} alt="Hacksquad" />
        </Link>

        <div className="flex items-center space-x-10 md:hidden">
          <nav>
            <ul className="flex space-x-10 md:space-x-6">
              {MENUS.header.map(({ href, text }, index) => (
                <li key={index}>
                  <Link href={href} passHref legacyBehavior>
                    <a
                      className="py-5 transition-colors duration-200 hover:text-purple"
                      href={href}
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              ))}
              {(moderator || cleaner) && (
                <li>
                  <Link href="/repositories" passHref legacyBehavior>
                    <a
                      className="py-5 transition-colors duration-200 hover:text-purple"
                      href="/repositories"
                    >
                      Repository List
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <Novu />
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
        </div>
        <Burger className="hidden md:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
      </div>
    </header>
  );
};

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  absolute: PropTypes.bool,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
  absolute: true,
};

export default Header;
