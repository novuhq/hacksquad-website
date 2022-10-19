import moment from 'moment';
import React from 'react';

import { events } from '../../pages/home/events/events';

export const toDisplay = () => {
  const live = events.find(
    (e) => moment().isAfter(e.date) && e.date.add(1, 'hour').isAfter(moment())
  );
  if (live) {
    return {
      link: live.link,
      component: (
        <>
          <strong>[LIVE NOW]</strong> <strong>{live.title}</strong> - {live.company}
        </>
      ),
    };
  }

  const before = events.find(
    (e) => e.date.diff(moment(), 'hour') <= 2 && e.date.diff(moment(), 'hour') > 0
  );
  if (before) {
    return {
      link: before.link,
      component: (
        <>
          <strong>[GOING LIVE - RSVP NOW]</strong> - <strong>{before.title}</strong> -{' '}
          {before.company}
        </>
      ),
    };
  }

  return undefined;
};
const Banner = () => {
  const display = toDisplay();
  if (!display) {
    return <></>;
  }
  return (
    <a
      className="bg-gray-3 group relative z-20 block overflow-hidden"
      target="_blank"
      href={display.link}
      rel="noreferrer"
    >
      <div
        className="relative flex cursor-pointer items-center justify-center"
        style={{
          height: 50,
          background:
            'linear-gradient(90deg, hsla(318, 99%, 64%, 1) 0%, hsla(20, 100%, 60%, 1) 100%)',
        }}
      >
        <div className="container drop-shadow-lg">{display.component}</div>
      </div>
    </a>
  );
};

export default Banner;
