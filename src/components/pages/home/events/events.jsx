/* eslint-disable no-unused-vars */
import moment from 'moment';
import Image from 'next/future/image';
import React, { useState, useMemo } from 'react';

import SectionHeading from 'components/shared/section-heading';
import SignUpButton from 'components/shared/sign-up-button';

import ArrowIcon from './images/arrow.inline.svg';
import bgLeftBottomLine from './images/bg-left-bottom-line.jpg';
import bgLeftSquare from './images/bg-left-square.png';
import bgLeft from './images/bg-left.jpg';
import bgRight from './images/bg-right.jpg';

const title = 'Welcome to Hacksquad 2022!';

const eventsHeader = ['Date', 'Event', 'Company', 'Rsvp'];
const events = [
  {
    date: moment.utc('2022-10-12T07:00:00'),
    title: 'Get started with open-source contributions with ToolJet',
    company: 'Teja @ ToolJet',
    link: 'https://zoom.us/webinar/register/WN_FC0U3ggyQBel-EvWBtEtgQ',
  },
  {
    date: moment.utc('2022-10-19T07:00:00'),
    title: 'GitHub like a boss',
    company: 'Michelle @ GitHub',
    link: 'https://zoom.us/webinar/register/WN_ICktK3LHTB6HDwJD9OWQPA',
  },
  {
    date: moment.utc('2022-10-19T19:00:00'),
    title: 'Contributing to a GitHub repository',
    company: 'Michael @ Amplication',
    link: 'https://zoom.us/webinar/register/WN_Va4469XbSKut4zt48f6uMA',
  },
  {
    date: moment.utc('2022-10-26T19:00:00'),
    title: 'How to build on Ethereum using Scaffold-ETH',
    company: 'Kevin @ Scaffold-ETH',
    link: 'https://zoom.us/webinar/register/WN_o2SLdW2uQl29qRMwmTYBqg',
  },
];

const Events = () => {
  const [isShownMore, setIsShownMore] = useState(false);
  const items = useMemo(() => (isShownMore ? events : events.slice(0, 7)), [isShownMore]);

  return (
    <section className="safe-paddings relative py-26 md:py-20 sm:py-16 xs:py-12" id="events">
      <div className="container relative z-10">
        <SectionHeading className="text-center">{title}</SectionHeading>
        <p className="mx-auto mt-10 max-w-[968px] text-center text-lg md:mt-8 md:text-[18px] sm:mt-6 sm:text-base">
          <span className="relative before:absolute before:-right-1.5 before:-z-10 before:h-[30px] before:w-[454px] before:bg-primary-1">
            With the fantastic atmosphere
          </span>{' '}
          of Hacktoberfest, we have decided to create Hacksquad. Hacksquad is here to enhance your
          Swag, meet with more community members and participate in workshops from our great
          sponsors.
        </p>
      </div>

      <div className="container relative z-10 mt-20 md:mt-16 md:px-0 sm:mt-10">
        <div className="md:scrollbar-hidden mx-auto max-w-[1220px] md:max-w-none md:overflow-x-auto">
          <div className="md:min-w-[1080px] md:px-7 sm:px-4">
            <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr]">
              {eventsHeader.map((event, index) => (
                <span className="font-medium uppercase" key={index}>
                  {event}
                </span>
              ))}
            </div>

            <ul>
              {items.map((event, index) => (
                <li
                  className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr]"
                  key={index}
                >
                  <span>{event.date.local().format('lll')}</span>
                  <p className="font-medium">{event.title}</p>
                  <span>{event.company}</span>
                  <span>
                    <a
                      href={event.link}
                      className="font-bold underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CLICK HERE
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TODO: Remove this block completely after the publication of events  */}
        {/* <div className="mx-auto max-w-[1220px]"> */}
        {/*   <div className="container"> */}
        {/*     <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-4"> */}
        {/*       {eventsHeader.map((event, index) => ( */}
        {/*         <span className="font-medium uppercase sm:text-xs" key={index}> */}
        {/*           {event} */}
        {/*         </span> */}
        {/*       ))} */}
        {/*     </div> */}

        {/*     <span className="coming-soon-animation block border-b border-gray-2 py-4 text-center"> */}
        {/*       Coming soon<span>.</span> */}
        {/*       <span>.</span> */}
        {/*       <span>.</span> */}
        {/*     </span> */}
        {/*   </div> */}
        {/* </div> */}

        {/* TODO: Display this block after events are published */}
        {/* {!isShownMore && (
          <button
            className="group mx-auto mt-10 flex flex-col items-center font-medium uppercase outline-none"
            type="button"
            onClick={() => setIsShownMore(true)}
          >
            Show more
            <ArrowIcon
              className="h-2 transition-[transform] duration-200 group-hover:translate-y-1.5"
              aria-hidden
            />
          </button>
        )} */}

        <div className="sm:px-4">
          <SignUpButton className="mx-auto mt-20 md:mt-16 sm:mt-10" />
        </div>

        <Image
          className="absolute left-[-259px] top-[-162px] md:hidden"
          src={bgLeftSquare}
          width={289}
          height={288}
          alt=""
          aria-hidden
        />
      </div>

      <Image
        className="absolute left-0 top-2 xl:left-[-20%] sm:-top-14 sm:left-[-80%]"
        src={bgLeft}
        width={434}
        height={636}
        alt=""
        aria-hidden
      />

      <Image
        className="absolute left-0 bottom-0 xl:left-[-20%] sm:left-[-60%]"
        src={bgLeftBottomLine}
        width={534}
        height={20}
        alt=""
        aria-hidden
      />

      <Image
        className="absolute right-0 bottom-28 xl:right-[-7%] md:right-[-18%] sm:hidden"
        src={bgRight}
        width={175}
        height={1082}
        alt=""
        aria-hidden
      />

      <div
        className="container absolute left-1/2 top-0 h-full w-full -translate-x-1/2 xl:hidden"
        aria-hidden
      >
        <span className="absolute top-[510px] left-[-116px] h-full w-[1.5px] bg-[url('/vertical-line.png')]" />
        <span className="absolute top-[calc(100%+510px)] left-[-116px] h-[1.5px] w-[86px] bg-[url('/horizontal-line.png')]" />
      </div>
    </section>
  );
};

export default Events;
