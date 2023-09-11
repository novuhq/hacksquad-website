'use client';

import Image from 'next/image';
import { useState } from 'react';

import Burger from 'components/shared/burger';
import Button from 'components/shared/button';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import MENUS from 'constants/menus';
import ArrowUp from 'svgs/arrow-up.inline.svg';
import logo from 'svgs/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="safe-paddings relative z-50">
        <div className="container flex items-center justify-between py-4 md:py-3">
          <Link to="/">
            <Image src={logo} width={36} height={36} alt="Hacksquad" />
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
            <Button className="" to="#" theme="fill">
              Join now
              <ArrowUp width={12} height={12} aria-hidden />
            </Button>
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

export default Header;
