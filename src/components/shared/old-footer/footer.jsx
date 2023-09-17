import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

const Footer = ({ withBorder }) => (
  <footer className={clsx('safe-paddings', withBorder && 'border-t border-gray-2')}>
    <div className="container flex items-center justify-between py-5 sm:flex-col sm:items-start">
      <div className="sm:flex sm:w-full sm:justify-between">
        <Link href="/" passHref>
          <a href="/">
            <Logo className="h-[38px]" />
            <span className="sr-only">Hacksquad</span>
          </a>
        </Link>
        <Button className="hidden flex-shrink-0 sm:flex" />
      </div>
      <div className="flex items-center space-x-10 sm:mt-6 sm:w-full">
        <nav className="sm:w-full">
          <ul className="flex space-x-10 md:space-x-6 sm:justify-between">
            {MENUS.header.slice(1).map(({ href, text }, index) => (
              <li key={index}>
                <Link href={href} passHref>
                  <a
                    className="hover:text-primary-2 py-5 transition-colors duration-200"
                    href={href}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button className="sm:hidden" />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  withBorder: PropTypes.bool,
};

Footer.defaultProps = {
  withBorder: false,
};

export default Footer;
