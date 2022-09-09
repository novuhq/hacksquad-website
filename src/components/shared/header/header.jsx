import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header className="safe-paddings absolute top-0 left-0 right-0 z-40 w-full">
    <div className="container flex items-center justify-between py-5 md:py-4 sm:py-3.5">
      <div>
        <Logo className="h-[38px]" />
        <span className="sr-only">Hacksquad</span>
      </div>

      <div className="flex items-center space-x-10 sm:hidden">
        <nav>
          <ul className="flex space-x-10 md:space-x-6">
            {MENUS.header.map(({ href, text }, index) => (
              <li key={index}>
                <Link href={href}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button />
      </div>

      <Burger className="hidden sm:block" isToggled={isMobileMenuOpen} onClick={onBurgerClick} />
    </div>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
