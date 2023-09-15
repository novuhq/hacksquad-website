'use client';

import { NovuProvider, PopoverNotificationCenter } from '@novu/notification-center';
import PropTypes from 'prop-types';
import React, { useCallback, useRef } from 'react';

import CustomBell from './custom-bell';

const Novu = ({ userEmail }) => {
  const ref = useRef(null);
  const onClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);

  return (
    <NovuProvider subscriberId={userEmail} applicationIdentifier={process.env.NEXT_NOVU_APP_ID}>
      <PopoverNotificationCenter ref={ref} onNotificationClick={onClick}>
        {({ unseenCount }) => (
          <CustomBell colorScheme="white" unseenCount={unseenCount} aria-label="Notifications" />
        )}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

Novu.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default Novu;
