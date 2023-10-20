'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Burger from 'components/shared/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import Novu from 'components/shared/novu';
import MENUS from 'constants/menus';
import useModerator from 'hooks/use-moderator';
import logo from 'svgs/logo.svg';

import SignUpButton from '../sign-up-button';

const Header = ({ isAuthorized = false, subscriberId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const { moderator, cleaner } = useModerator();

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
                  <Link className="py-5 transition-colors duration-200 hover:text-purple" to={href}>
                    {text}
                  </Link>
                </li>
              ))}
              {(moderator || cleaner) && (
                <li>
                  <Link
                    className="py-5 transition-colors duration-200 hover:text-purple"
                    to="/repositories"
                  >
                    Repository List
                  </Link>
                </li>
              )}
            </ul>
            {isAuthorized && <Novu subscriberId={subscriberId} />}
            <SignUpButton
              size="sm"
              theme="outline"
              to={isAuthorized ? '/myteam' : null}
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
      <MobileMenu
        isAuthorized={isAuthorized}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />
    </>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool,
  subscriberId: PropTypes.string,
};

export default Header;
