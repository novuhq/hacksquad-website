import Link from 'next/link';
import React from 'react';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import MENUS from 'constants/menus';
import Logo from 'images/logo.inline.svg';

const Footer = () => (
  <footer className="safe-paddings">
    <div className="container flex items-center justify-between py-10">
      <Link {...LINKS.home}>
        <Logo className="h-[38px]" />
      </Link>

      <div className="flex items-center space-x-10 sm:hidden">
        <nav>
          <ul className="flex space-x-10">
            {MENUS.header.map(({ href, text, target }, index) => (
              <li key={index}>
                <Link href={href} target={target}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button />
      </div>
    </div>
  </footer>
);

export default Footer;
