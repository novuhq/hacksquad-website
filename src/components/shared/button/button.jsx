import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

export const BUTTON_STATES = {
  DEFAULT: 'default',
  LOADING: 'loading',
  DISABLED: 'disabled',
};

const styles = {
  size: {
    xs: 'px-4 h-9 text-16 font-medium md:text-14 md:px-4.5',
    sm: 'px-5 h-11 text-18 font-bold md:text-14 md:px-5',
    md: 'px-5 h-12 text-18 font-bold md:text-16 md:px-6 sm:text-14',
  },
  base: 'inline-flex leading-normal rounded-sm items-center justify-center transition-colors duration-200',
  theme: {
    'fill-white': 'bg-white text-black hover:bg-[rgba(255,255,255,0.90)]',
    'fill-yellow': 'bg-yellow text-black hover:bg-[#FFF263]',
    outline:
      'text-white border border-white hover:bg-[rgba(255,255,255,0.10)] hover:border-[#6D7277]',
  },
};

const Button = ({
  className = null,
  to = null,
  size = 'sm',
  theme = 'fill-white',
  state = BUTTON_STATES.DEFAULT,
  children,
  ...otherProps
}) => {
  const Tag = to ? Link : 'button';

  let content = null;

  switch (state) {
    case BUTTON_STATES.LOADING:
      content = (
        <span className="relative flex items-center justify-center">
          <span className="flex opacity-0">{children}</span>
          <span
            className={clsx(
              'absolute h-5 w-5 flex-shrink-0 animate-spin rounded-full border border-b border-transparent',
              {
                'border-b-black': theme === 'fill-yellow',
                'border-b-white': theme === 'outline',
              }
            )}
          />
        </span>
      );
      break;
    case BUTTON_STATES.DEFAULT:
    default:
      content = children;
  }

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className, {
        'pointer-events-none': state === BUTTON_STATES.LOADING || state === BUTTON_STATES.DISABLED,
      })}
      to={to}
      {...otherProps}
    >
      {content}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  state: PropTypes.oneOf(Object.keys(BUTTON_STATES)),
  children: PropTypes.node.isRequired,
};

export default Button;
