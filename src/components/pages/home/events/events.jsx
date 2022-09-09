import Image from 'next/future/image';
import React, { useState, useMemo } from 'react';

import SectionHeading from 'components/shared/section-heading';
import SignUpButton from 'components/shared/sign-up-button';

import ArrowIcon from './images/arrow.inline.svg';
import bgLeftBottomLine from './images/bg-left-bottom-line.jpg';
import bgLeftLine from './images/bg-left-line.png';
import bgLeft from './images/bg-left.jpg';
import bgRight from './images/bg-right.jpg';

const title = 'Welcome to Hacksquad 2022!';

const eventsHeader = ['Date', 'Event', 'Time Zone', 'Company'];
const events = [
  {
    date: '3 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '4 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '5 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '11 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '12 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '13 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '18 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '3 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '4 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '5 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '11 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '12 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '13 Oct',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeZone: 'UTC +0',
    company: 'Name',
  },
  {
    date: '18 Oct',
    title: 'Lorem ipsum dolor sit amet',
    timeZone: 'UTC +0',
    company: 'Name',
  },
];

const Events = () => {
  const [isShownMore, setIsShownMore] = useState(false);
  const items = useMemo(() => (isShownMore ? events : events.slice(0, 7)), [isShownMore]);

  return (
    <section className="safe-paddings relative py-26" id="events">
      <div className="container relative z-10">
        <SectionHeading className="text-center">{title}</SectionHeading>
        <p className="mx-auto mt-10 max-w-[968px] text-center text-lg">
          <span className="relative before:absolute before:-right-1.5 before:-z-10 before:h-[30px] before:w-[454px] before:bg-primary-1">
            With the fantastic atmosphere
          </span>{' '}
          of Hacktoberfest, we have decided to create Hacksquad. Hacksquad is here to enhance your
          Swag, meet with more community members and participate in workshops from our great
          sponsors.
        </p>

        <div className="mx-auto mt-20 max-w-[1220px]">
          <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4">
            {eventsHeader.map((event, index) => (
              <span className="font-medium uppercase" key={index}>
                {event}
              </span>
            ))}
          </div>

          <ul>
            {items.map((event, index) => (
              <li
                className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4"
                key={index}
              >
                <span>{event.date}</span>
                <p className="font-medium">{event.title}</p>
                <span>{event.timeZone}</span>
                <span>{event.company}</span>
              </li>
            ))}
          </ul>

          {!isShownMore && (
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
          )}
        </div>

        <SignUpButton className="mx-auto mt-20" />

        <Image
          className="absolute left-[-258px] bottom-[-648px]"
          src={bgLeftLine}
          width={289}
          height={1557}
          alt=""
          aria-hidden
        />
      </div>

      <Image
        className="absolute left-0 top-2 xl:left-[-20%]"
        src={bgLeft}
        width={434}
        height={636}
        alt=""
        aria-hidden
      />

      <Image
        className="absolute left-0 bottom-0 xl:left-[-20%]"
        src={bgLeftBottomLine}
        width={534}
        height={20}
        alt=""
        aria-hidden
      />

      <Image
        className="absolute right-0 bottom-28 xl:right-[-7%] "
        src={bgRight}
        width={175}
        height={1082}
        alt=""
        aria-hidden
      />
    </section>
  );
};

export default Events;
