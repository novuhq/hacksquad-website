/* eslint-disable no-unused-vars */
import React from 'react';

import amplicationLogo from './images/amplication.url.svg';
import appwriteLogo from './images/appwrite.url.svg';
import dailyDevLogo from './images/daily-dev.url.svg';
import fonosterLogo from './images/fonoster.url.svg';
import mattermostLogo from './images/mattermost.url.svg';
import medusaLogo from './images/medusa.url.svg';
import tooljetLogo from './images/tooljet.url.svg';
import vercelLogo from './images/vercel.url.svg';

const title = 'Sponsored by';
const logos = [
  {
    src: dailyDevLogo,
    height: 42,
    width: 240,
    alt: 'Daily.dev logo',
  },
  // {
  //   src: vercelLogo,
  //   height: 40,
  //   width: 179,
  //   alt: 'Vercel logo',
  // },
  {
    src: amplicationLogo,
    height: 44,
    width: 211,
    alt: 'Amplication logo',
  },
  // {
  //   src: medusaLogo,
  //   height: 44,
  //   width: 186,
  //   alt: 'Medusa logo',
  // },
  // {
  //   src: mattermostLogo,
  //   height: 44,
  //   width: 256,
  //   alt: 'Mattermost logo',
  // },
  {
    src: tooljetLogo,
    height: 30,
    width: 149,
    alt: 'ToolJet logo',
  },
  {
    src: appwriteLogo,
    height: 44,
    width: 244,
    alt: 'Appwrite logo',
  },
  // {
  //   src: fonosterLogo,
  //   height: 47,
  //   width: 190,
  //   alt: 'Fonoster logo',
  // },
];

const Sponsors = () => (
  <div
    className="mt-20 w-full pt-20 md:mt-16 md:pt-16 sm:mt-10 sm:pt-10 xs:mt-6 xs:pt-6"
    id="sponsors"
  >
    <h2 className="text-center font-mono uppercase">{title}</h2>

    {/* 
      TODO: replace the current classes with these if more than 4 logos are used in this section:
      mx-auto mt-10 flex max-w-[1250px] flex-wrap items-center justify-center gap-x-[134px] gap-y-10 md:gap-8 xs:mt-6
     */}
    <div className="mx-auto mt-10 flex max-w-[1220px] items-center justify-between md:flex-wrap md:justify-center md:gap-8 xs:mt-6">
      {logos.map(({ src, height, width, alt }, index) => (
        <img
          className="md:max-h-[30px] md:w-auto sm:max-h-[20px]"
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
