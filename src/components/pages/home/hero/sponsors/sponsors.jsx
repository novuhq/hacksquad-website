import React from 'react';

import amplicationLogo from './images/amplication.url.svg';
import dailyDevLogo from './images/daily-dev.url.svg';
import medusaLogo from './images/medusa.url.svg';
import vercelLogo from './images/vercel.url.svg';

const title = 'Sponsored by';

const Sponsors = () => (
  <div className="mt-20 w-full pt-20 md:mt-16 md:pt-16" id="sponsors">
    <h2 className="text-center font-mono uppercase">{title}</h2>

    <div className="mx-auto mt-10 flex max-w-[1220px] items-center justify-between md:flex-wrap md:justify-center md:gap-8">
      <img
        className="md:max-h-[30px] md:w-auto"
        src={dailyDevLogo}
        height={42}
        width={240}
        loading="eager"
        alt="Daily.dev logo"
      />
      <img
        className="md:max-h-[30px] md:w-auto"
        src={vercelLogo}
        height={40}
        width={179}
        loading="eager"
        alt="Vercel logo"
      />
      <img
        className="md:max-h-[30px] md:w-auto"
        src={amplicationLogo}
        height={44}
        width={211}
        loading="eager"
        alt="Amplication logo"
      />
      <img
        className="md:max-h-[30px] md:w-auto"
        src={medusaLogo}
        height={44}
        width={186}
        loading="eager"
        alt="Medusa logo"
      />
    </div>
  </div>
);

export default Sponsors;
