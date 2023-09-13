import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Button from 'components/shared/button';
import MENUS from 'constants/menus';
import ArrowUp from 'svgs/arrow-up.inline.svg';

const ANIMATION_DURATION = 0.2;

const variants = {
  hidden: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
  visible: {
    zIndex: 40,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen = false, setIsOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    window.location.href = e.target.href;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="safe-paddings fixed inset-0 flex h-full w-full flex-col bg-black pt-16 sm:pt-[60px]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          <nav className="flex h-full w-full overflow-x-hidden overflow-y-scroll">
            <ul className="my-auto flex w-full flex-col">
              {MENUS.mobile.map(({ href, text }, index) => (
                <li key={index}>
                  <Link
                    className="text-2xl inline-block w-full py-6 text-center"
                    href={href}
                    passHref
                    onClick={handleLinkClick}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sticky bottom-0 bg-black py-7">
            <div className="container">
              <Button className="w-full" to="#" theme="fill">
                Join now
                <ArrowUp width={12} height={12} aria-hidden />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileMenu;
