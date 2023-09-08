import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Link from 'components/shared/link';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

// TODO: Add links
const links = [
  {
    text: '',
    to: '',
  },
];

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      // TODO: Add "top" value equal to the header's height so mobile menu would be positioned right after the header, e.g. "top-20"
      //       Check out this screenshot for better understanding — https://user-images.githubusercontent.com/20713191/144218387-afd19e0c-c33d-4c8f-8cfe-b6e6214d236c.png
      // TODO: Add background color, e.g. "bg-white"
      className="absolute right-8 left-8 z-[-1] hidden rounded-md px-8 pt-4 pb-7 lg:block md:right-4 md:left-4"
      initial="from"
      animate={controls}
      variants={variants}
      // TODO: Replace the color to the one from the color palette
      style={{ boxShadow: '0px 10px 20px rgba(26, 26, 26, 0.4)' }}
    >
      <ul className="flex flex-col text-center">
        {links.map(({ text, to }, index) => (
          <li key={index}>
            {/* TODO: Add needed props so the link would have styles */}
            <Link className="block py-4" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {/* TODO: Add a button if needed */}
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
