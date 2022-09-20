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
    url: 'https://daily.dev/',
    width: 183,
    alt: 'Daily.dev logo',
  },
  // {
  //   src: vercelLogo,
  //   url: 'https://vercel.com/',
  //   width: 130,
  //   alt: 'Vercel logo',
  // },
  {
    src: amplicationLogo,
    url: 'https://amplication.com/',
    width: 154,
    alt: 'Amplication logo',
  },
  // {
  //   src: medusaLogo,
  //   url: 'https://medusajs.com/',
  //   width: 149,
  //   alt: 'Medusa logo',
  // },
  // {
  //   src: mattermostLogo,
  //   url: 'https://mattermost.com/',
  //   width: 184,
  //   alt: 'Mattermost logo',
  // },
  {
    src: novuLogo,
    url: 'https://novu.co/',
    width: 106,
    alt: 'Novu logo',
  },
  {
    src: tooljetLogo,
    url: 'https://tooljet.io/',
    width: 105,
    alt: 'ToolJet logo',
  },
  {
    src: appwriteLogo,
    url: 'https://appwrite.io/',
    width: 172,
    alt: 'Appwrite logo',
  },
  // {
  //   src: fonosterLogo,
  //   url: 'https://fonoster.com/',
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

    <div className="mx-auto mt-10 flex max-w-[1364px] flex-wrap items-center justify-center gap-x-[134px] gap-y-10 xl:gap-x-28 lg:gap-x-14 sm:mt-6 sm:gap-x-10 sm:gap-y-8">
      {logos.map(({ src, url, height, width, alt }, index) => (
        <a href={url} target="_blank" rel="noreferrer" key={index}>
          <img
            className="w-auto md:h-[35px] sm:max-h-[30px]"
            src={src}
            height={40}
            width={width}
            loading="eager"
            alt={alt}
          />
        </a>
      ))}
    </div>
  </div>
);

export default Sponsors;
