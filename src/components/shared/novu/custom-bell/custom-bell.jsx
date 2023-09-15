import PropTypes from 'prop-types';
import React from 'react';

import BellIcon from 'svgs/bell.inline.svg';

const CustomBell = ({ unseenCount = 0 }) => (
  <div className="group relative cursor-pointer">
    <BellIcon className="h-[29px] transition-opacity duration-200 group-hover:opacity-80" />
    {unseenCount > 0 && (
      <span
        className="absolute -right-px -top-px z-10 block h-3 w-3 rounded-full border border-white bg-purple"
        aria-label="Icon number of unread notifications"
      />
    )}
  </div>
);

CustomBell.propTypes = {
  unseenCount: PropTypes.number,
};

export default CustomBell;
