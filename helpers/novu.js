import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';
import { useSession } from 'next-auth/react';
import { useCallback, useRef } from 'react';

const Novu = () => {
  const { status, data } = useSession();
  const ref = useRef(null);
  const onClick = useCallback((notification) => {
    window.location.href = notification.cta.data.url;
  }, []);
  if (status !== 'authenticated') {
    return <></>;
  }

  return (
    <NovuProvider subscriberId={data.user.email} applicationIdentifier={process.env.NOVU_APP_ID}>
      <PopoverNotificationCenter ref={ref} onNotificationClick={onClick}>
        {({ unseenCount }) => <NotificationBell colorScheme="dark" unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default Novu;
