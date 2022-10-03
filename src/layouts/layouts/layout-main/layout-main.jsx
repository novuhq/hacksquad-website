import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import Seo from 'components/shared/seo';

const LayoutMain = ({ seo, children, withoutFooter, absolute, overflow }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <SessionProvider>
      <Seo {...seo} />
      <ToastContainer
        theme="dark"
        position="bottom-right"
        pauseOnHover={false}
        autoClose={3000}
        closeButton={false}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header
          absolute={absolute}
          isMobileMenuOpen={isMobileMenuOpen}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className={`flex-grow overflow-${overflow? 'auto' : 'hidden'}`}>{children}</main>
        {!withoutFooter && <Footer />}
        <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      </div>
    </SessionProvider>
  );
};

export default LayoutMain;

LayoutMain.propTypes = {
  seo: PropTypes.shape({
    isRobotsNoindexPage: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  withoutFooter: PropTypes.bool,
  overflow: PropTypes.bool,
  absolute: PropTypes.bool,
};

LayoutMain.defaultProps = {
  seo: null,
  withoutFooter: false,
  absolute: true,
};
