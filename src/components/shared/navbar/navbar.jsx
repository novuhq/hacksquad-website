import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import MENUS from 'constants/menus';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <nav>
      <ul className="flex space-x-10 md:space-x-6" onMouseLeave={() => setHoveredLink(null)}>
        {MENUS.header.map(({ href, text }, index) => (
          <li key={index}>
            <Link href={href} passHref>
              <a
                onMouseEnter={() => setHoveredLink(href)}
                className="relative py-5 transition-colors duration-200 hover:text-primary-2"
                href={href}
              >
                <AnimatePresence>
                  {hoveredLink === href && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key="underline"
                      layoutId="underline"
                      className="absolute bottom-2 h-1 w-full rounded-lg bg-primary-2"
                    />
                  )}
                </AnimatePresence>
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
