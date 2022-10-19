import React from 'react';

import { toDisplay } from '~/helpers/events';

const Banner = () => {
  const display = toDisplay();
  if (!display?.component) {
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
