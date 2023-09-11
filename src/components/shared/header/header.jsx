import Image from 'next/image';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import ArrowUp from 'svgs/arrow-up.inline.svg';
import logo from 'svgs/logo.svg';

const Header = () => (
  <header className="safe-paddings">
    <div className="container flex items-center justify-between py-4 sm:py-3">
      <Link to="/">
        <Image src={logo} width={36} height={36} alt="Hacksquad" />
      </Link>
      <nav className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {MENUS.header.map(({ href, text }, index) => (
            <li key={index}>
              <Link className="hover:text-primary-2 py-5 transition-colors duration-200" to={href}>
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
    </div>
  </header>
);

// Header.propTypes = {
//   isMobileMenuOpen: PropTypes.bool,
//   onBurgerClick: PropTypes.func.isRequired,
// };
//
// Header.defaultProps = {
//   isMobileMenuOpen: false,
// };

export default Header;
