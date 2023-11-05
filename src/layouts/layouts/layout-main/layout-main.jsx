import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ReactTooltip from 'react-tooltip';

import MobileMenu from 'components/shared/mobile-menu';
import Footer from 'components/shared/old-footer';
import Header from 'components/shared/old-header';
import Seo from 'components/shared/seo';

const LayoutMain = ({
  seo,
  children,
  withoutFooter,
  additionalClass,
  isFooterBordered,
  absolute,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <SessionProvider>
      <Seo {...seo} />
      {/* <ReactTooltip padding={20} /> */}
      <ToastContainer
        theme="dark"
        position="bottom-right"
        pauseOnHover={false}
        autoClose={3000}
        closeButton={false}
      />
      <div className="relative flex min-h-screen flex-col">
        {/* <Banner /> */}
        <Header
          absolute={absolute}
          isMobileMenuOpen={isMobileMenuOpen}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className={`flex-grow overflow-hidden pt-20 ${additionalClass || ''}`}>
          {children}
        </main>
        {!withoutFooter && <Footer withBorder={isFooterBordered} />}
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
  additionalClass: PropTypes.string,
  withoutFooter: PropTypes.bool,
  isFooterBordered: PropTypes.bool,
  absolute: PropTypes.bool,
};

LayoutMain.defaultProps = {
  seo: null,
  additionalClass: '',
  withoutFooter: false,
  isFooterBordered: false,
  absolute: true,
};
