import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

import { toDisplay } from '~/helpers/events';
import Novu from '~/helpers/novu';
import useModerator from '~/helpers/use.moderator';

const Header = ({ isMobileMenuOpen, onBurgerClick, absolute }) => {
  const display = toDisplay();
  const { moderator, cleaner } = useModerator();

  return (
    <header
      className={`safe-paddings ${
        absolute ? `absolute ${!!display && 'top-12'} left-0 right-0` : ''
      } z-40 w-full`}
    >
      <div className="container flex items-center justify-between py-5 md:py-4 sm:py-3.5">
        <Link href="/" passHref legacyBehavior>
          <a href="/">
            <Logo className="h-[38px]" />
            <span className="sr-only">HackSquad</span>
          </a>
        </Link>

        <div className="flex items-center space-x-10 sm:hidden">
          <nav>
            <ul className="flex space-x-10 md:space-x-6">
              {MENUS.header.map(({ href, text }, index) => (
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
              {(moderator || cleaner) && (
                <li>
                  <Link href="/repositories" passHref legacyBehavior>
                    <a
                      className="py-5 transition-colors duration-200 hover:text-primary-2"
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
          <Button />
        </div>
        <Burger className="hidden sm:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
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
