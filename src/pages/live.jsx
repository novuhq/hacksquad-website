import LayoutMain from 'layouts/layouts/layout-main';

import { findClosestLive } from '~/helpers/events';

const Live = () => {
  const display = findClosestLive();
  if (!display?.iframe) {
    return <></>;
  }
  return (
    <LayoutMain
      seo={{
        isRobotsNoindexPage: true,
      }}
      additionalClass="flex"
      absolute={false}
      isFooterBordered
    >
      <iframe
        style={{ flex: 1 }}
        src={display.iframe}
        allow="autoplay"
        frameBorder="0"
        allowfullscreen
      />
    </LayoutMain>
  );
};

export default Live;
