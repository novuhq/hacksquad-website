'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

import SignUpButton from '../sign-up-button';

const Footer = ({ isAuthorized = false }) => {
  const pathname = usePathname();
  const isTicketPage = pathname.includes('ticket');

  return (
    <footer className="safe-paddings border-t border-[rgba(255,255,255,0.20)]">
      {isTicketPage ? (
        <div className="container flex items-center justify-between gap-2 py-5 md:py-3 sm:flex-col">
          <p className="text-16 leading-normal md:text-14">Novu 2023 Ⓒ All rights reserved</p>
          <p className="text-16 leading-normal text-gray-1 md:text-14 sm:text-center">
            By entering your email, you agree to our{' '}
            <a
              className="font-medium text-white transition duration-200 hover:text-purple"
              href="https://novu.co/terms/"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              className="font-medium text-white transition duration-200 hover:text-purple"
              href="https://novu.co/privacy/"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      ) : (
        <div className="container flex items-center justify-between py-3.5 md:py-3">
          <Link to="/">
            <Image src={logo} width={36} height={36} alt="Hacksquad" />
          </Link>
          <nav className="flex items-center gap-10">
            <ul className="flex items-center gap-10 md:hidden">
              {MENUS.header.map(({ href, text }, index) => (
                <li key={index}>
                  <Link className="py-5 transition-colors duration-200 hover:text-purple" to={href}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <SignUpButton
              size="sm"
              theme="outline"
              to={isAuthorized ? '/myteam' : null}
              isSignInButton={!isAuthorized}
            >
              {!isAuthorized ? 'Join now' : 'My Squad'}
            </SignUpButton>
          </nav>
        </div>
      )}
    </footer>
  );
};

Footer.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Footer;
