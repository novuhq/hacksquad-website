import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const SectionHeading = ({ className, children }) => (
  <h2
    className={clsx(
      'font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]',
      className
    )}
  >
    {'>_'}
    {children}
  </h2>
);

SectionHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

SectionHeading.defaultProps = {
  className: null,
};

export default SectionHeading;
