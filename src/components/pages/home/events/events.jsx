/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import PropTypes from 'prop-types';

import SignUpButton from 'components/shared/sign-up-button';
import CalendarIcon from 'svgs/calendar.inline.svg';

const title = 'Welcome to Hacksquad';
const eventsHeader = ['Date', 'Event', 'Company', 'RSVP'];
const events = [
  {
    date: 'Oct 12, 2023 <br/> 9:00 AM',
    startDate: '20231012T090000',
    endDate: '20231012T120000',
    title: 'Get started with open-source contributions with ToolJet',
    company: 'Teja <a href="https://link.com" target="_blank">@ToolJet</a>',
    rsvp: '',
  },
  {
    date: 'Oct 15, 2023 <br/> 5:00 PM',
    startDate: '20231015T090000',
    endDate: '20231015T120000',
    title: 'Building a Discord bot in Rust, Javascript and Python',
    company: 'Community Event',
    rsvp: '',
  },
  {
    date: 'Oct 19, 2023 <br/> 3:00 PM',
    startDate: '20231019T090000',
    endDate: '20231019T120000',
    title: 'Extending and embedding open-source projects',
    company: 'Raz <a href="https://link.com" target="_blank">@Permit.io</a>',
    rsvp: '',
  },
  {
    date: 'Oct 19, 2023 <br/> 9:00 PM',
    startDate: '20231019T090000',
    endDate: '20231019T120000',
    title: 'Contributing to a GitHub repository',
    company: 'Michael <a href="https://link.com" target="_blank">@Amplication</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 12:00 PM',
    startDate: '20231026T090000',
    endDate: '20231026T120000',
    title: 'How to add a real-time notification center to your React app with Novu and Next.js',
    company: 'Dima <a href="https://link.com" target="_blank">@Novu</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 3:00 PM',
    startDate: '20231026T090000',
    endDate: '20231026T120000',
    title: 'Building a Notion like system with Nest.js, React and Novu',
    company: 'Nevo <a href="https://link.com" target="_blank">@Novu</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 9:00 PM',
    startDate: '20231026T090000',
    endDate: '20231026T120000',
    title: 'How to build on Ethereum using Scaffold-ETH',
    company: 'Kevin <a href="https://link.com" target="_blank">@Scaffold-ETH</a>',
    rsvp: '',
  },
];

const tableGridClass =
  'grid gap-x-5 grid-cols-[230px_575px_200px_1fr] lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_480px_200px_1fr]';

const Events = ({ isAuthorized = false }) => (
  <section className="safe-paddings relative py-[100px] md:py-20 sm:py-16 xs:py-12" id="events">
    <div className="container text-center">
      <h2
        className="mx-auto max-w-3xl font-titles text-60 font-semibold leading-1.125 lg:text-42 md:text-36 xxs:max-w-[246px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="mx-auto mt-5 max-w-[800px] text-20 leading-normal text-gray-1 md:text-18">
        With the fantastic atmosphere of Hacktoberfest, we have decided to create Hacksquad.
        Hacksquad is here to enhance your Swag, meet with more community members and participate in
        workshops from our great sponsors.
      </p>
    </div>

    <div className="container mt-[73px] md:mt-16 md:px-0 sm:mt-10">
      {/* TODO: Remove this block completely after the publication of events  */}
      <div className="md:scrollbar-hidden mx-auto max-w-[1220px] md:max-w-none md:overflow-x-auto">
        <div className="container">
          <div className="grid grid-cols-[230px_575px_200px_1fr] gap-x-5 border-b border-white border-opacity-20 pb-4 lg:grid-cols-[130px_390px_200px_1fr] md:grid-cols-[1fr_1fr_1fr_1fr]">
            {eventsHeader.map((event, index) => (
              <span className="font-medium uppercase" key={index}>
                {event}
              </span>
            ))}
          </div>

          <span className="coming-soon-animation block border-b border-white border-opacity-20 py-4 text-center">
            Coming soon <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      </div>

      {/* TODO: Display this block after events are published */}
      {/* <div className="md:scrollbar-hidden mx-auto max-w-[1220px] md:max-w-none md:overflow-x-auto">
        <div className="md:min-w-[1080px] sm:px-4">
          <div className={clsx('border-b border-white border-opacity-20 pb-4', tableGridClass)}>
            {eventsHeader.map((event, index) => (
              <span className="font-medium uppercase" key={index}>
                {event}
              </span>
            ))}
          </div>

          <ul>
            {events.map(({ date, title, company, startDate, endDate }, index) => (
              <li
                className={clsx('border-b border-white border-opacity-20 py-4', tableGridClass)}
                key={index}
              >
                <span className="text-gray-1" dangerouslySetInnerHTML={{ __html: date }} />
                <p className="max-w-md font-medium">{title}</p>
                <p className="text-with-link" dangerouslySetInnerHTML={{ __html: company }} />
                <span>
                  <a
                    className="inline-flex items-center gap-x-2.5 rounded-[2px] bg-[rgba(255,255,255,0.10)] px-2.5 py-1 text-14 leading-1.125"
                    target="_blank"
                    href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&location="World Wide Web"&amp;sprop=&amp;sprop=name:`}
                    rel="noreferrer"
                  >
                    <CalendarIcon aria-hidden />
                    Add to calendar
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>

    <div className="container text-center">
      <SignUpButton
        className="mt-16"
        size="md"
        theme="fill-yellow"
        to={isAuthorized ? '/my-team' : null}
        isSignInButton={!isAuthorized}
      >
        {!isAuthorized ? 'Sign up with GitHub' : 'Go to my Squad'}
      </SignUpButton>
    </div>
  </section>
);

Events.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Events;
