/* eslint-disable no-unused-vars */
import React from 'react';

import amplicationLogo from './images/amplication.url.svg';
import appwriteLogo from './images/appwrite.url.svg';
import dailyDevLogo from './images/daily-dev.url.svg';
import fonosterLogo from './images/fonoster.url.svg';
import mattermostLogo from './images/mattermost.url.svg';
import medusaLogo from './images/medusa.url.svg';
import novuLogo from './images/novu.url.svg';
import tooljetLogo from './images/tooljet.url.svg';
import vercelLogo from './images/vercel.url.svg';

const title = 'Sponsored by';
const logos = [
  {
    src: dailyDevLogo,
    height: 32,
    width: 183,
    alt: 'Daily.dev logo',
  },
  // {
  //   src: vercelLogo,
  //   height: 29,
  //   width: 130,
  //   alt: 'Vercel logo',
  // },
  {
    src: amplicationLogo,
    height: 32,
    width: 154,
    alt: 'Amplication logo',
  },
  // {
  //   src: medusaLogo,
  //   height: 38,
  //   width: 153,
  //   alt: 'Medusa logo',
  // },
  // {
  //   src: mattermostLogo,
  //   height: 32,
  //   width: 186,
  //   alt: 'Mattermost logo',
  // },
  {
    src: tooljetLogo,
    height: 21,
    width: 105,
    alt: 'ToolJet logo',
  },
  {
    src: novuLogo,
    height: 33,
    width: 106,
    alt: 'Novu logo',
  },
  {
    src: appwriteLogo,
    height: 31,
    width: 172,
    alt: 'Appwrite logo',
  },
  // {
  //   src: fonosterLogo,
  //   height: 34,
  //   width: 138,
  //   alt: 'Fonoster logo',
  // },
];

const Sponsors = () => (
  <div
    className="mt-20 w-full pt-20 md:mt-16 md:pt-16 sm:mt-10 sm:pt-10 xs:mt-6 xs:pt-6"
    id="sponsors"
  >
    <h2 className="text-center font-mono uppercase">{title}</h2>

    <div className="mx-auto mt-10 flex max-w-[1364px] flex-wrap items-center justify-center gap-x-[134px] gap-y-10 xl:gap-x-28 lg:gap-x-14 md:gap-8 sm:mt-6 sm:gap-y-5">
      {logos.map(({ src, height, width, alt }, index) => (
        <img
          className="md:max-h-[30px] md:w-auto sm:max-h-5 xs:max-h-4"
          src={src}
          height={height}
          width={width}
          loading="eager"
          alt={alt}
          key={index}
        />
      ))}
    </div>
  </div>
);

export default Sponsors;
