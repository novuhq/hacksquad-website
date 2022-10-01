import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

import Novu from '~/helpers/novu';

const Header = ({ isMobileMenuOpen, onBurgerClick, absolute }) => (
  <header
    className={`safe-paddings ${absolute ? 'absolute top-0 left-0 right-0' : ''} z-40 w-full`}
  >
    <div className="container flex items-center justify-between py-5 md:py-4 sm:py-3.5">
      <Link href="/" passHref>
        <a href="/">
          <Logo className="h-[38px]" />
          <span className="sr-only">Hacksquad</span>
        </a>
      </Link>

      <div className="flex items-center space-x-10 sm:hidden">
        <nav>
          <ul className="flex space-x-10 md:space-x-6">
            {MENUS.header.map(({ href, text }, index) => (
              <li key={index}>
                <Link href={href} passHref>
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
        </nav>
        <Novu />
        <Button />
      </div>
      <Burger className="hidden sm:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
    </div>
  </header>
);

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
