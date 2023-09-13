'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

import SignUpButton from '../sign-up-button';

const Footer = ({ isAuthorized = false }) => (
  <footer className="safe-paddings border-t border-[rgba(255,255,255,0.20)]">
    <div className="container flex items-center justify-between py-3.5 md:py-3">
      <Link to="/">
        <Image src={logo} width={36} height={36} alt="Hacksquad" />
      </Link>
      <nav className="flex items-center gap-10">
        <ul className="flex items-center gap-10 md:hidden">
          {MENUS.header.map(({ href, text }, index) => (
            <li key={index}>
              <Link className="hover:text-primary-2 py-5 transition-colors duration-200" to={href}>
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
    </div>
  </footer>
);

Footer.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Footer;
