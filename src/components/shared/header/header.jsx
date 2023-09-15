'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Burger from 'components/shared/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

import SignUpButton from '../sign-up-button';

const Header = ({ isAuthorized = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="safe-paddings absolute left-0 right-0 top-0 z-50 w-full">
        <div className="container flex items-center justify-between py-4 md:py-3">
          <Link to="/">
            <img src={logo} width={39} height={38} alt="Hacksquad" />
          </Link>
          <nav className="flex items-center gap-10 md:hidden">
            <ul className="flex items-center gap-10">
              {MENUS.header.map(({ href, text }, index) => (
                <li key={index}>
                  <Link
                    className="hover:text-primary-2 py-5 transition-colors duration-200"
                    to={href}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <SignUpButton
              size="sm"
              theme="outline"
              to={isAuthorized ? '/my-team' : null}
              isSignInButton={!isAuthorized}
            >
              {!isAuthorized ? 'Join now' : 'My Squad'}
            </SignUpButton>
          </nav>

          <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={handleHeaderBurgerClick}
          />
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Header;
