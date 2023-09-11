import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

const styles = {
  size: {},
  base: 'inline-flex gap-3 px-4 py-1.5 text-16 font-medium leading-normal rounded-sm items-center justify-center',
  theme: {
    fill: 'bg-yellow text-black md:text-14 md:px-4.5',
    outline: 'text-white border border-white md:text-14',
  },
};

const Button = ({ className: additionalClassName, to, size, theme, children, ...otherProps }) => {
  const className = clsx(styles.base, styles.size[size], styles.theme[theme], additionalClassName);

  const Tag = to ? Link : 'button';

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
