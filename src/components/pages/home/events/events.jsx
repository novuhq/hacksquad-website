/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import moment from 'moment';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import SignUpButton from 'components/shared/sign-up-button';

const DateComponent = dynamic(() => import('./date.component'), { ssr: false });

const title = 'Welcome to Hacksquad';
const eventsHeader = ['Date', 'Event', 'Company', 'RSVP'];
const events = [
  {
    date: '2023-10-03T13:00:00',
    title: 'How to Hacktoberfest: Navigating Open Source Contributions for Beginners and Veterans',
    company: 'Teja @ <a href="https://www.tooljet.com" target="_blank">ToolJet</a>',
    rsvp: 'https://discord.gg/th5SqQE4?event=1157928067692498964',
  },
  {
    date: '2023-10-05T13:00:00',
    title: 'Hacktoberfest 2023: Paving the Way with ToolJet',
    company: 'Teja @ <a href="https://www.tooljet.com" target="_blank">ToolJet</a>',
    rsvp: 'https://discord.gg/th5SqQE4?event=1157928342788522004',
  },
  {
    date: '2023-10-09T15:00:00',
    title: 'The Future of Web Authentication – Passkeys and Their Benefits When Building Apps',
    company: 'Felix @ <a href="https://www.hanko.io/" target="_blank">Hanko</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157928619721637990',
  },
  {
    date: '2023-10-10T10:00:00',
    title: 'Building a Nuxt app (+NuxtUI) with passkey authentication',
    company: 'Daniel Roe @ <a href="https://nuxt.com" target="_blank">Nuxt</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157928782674546730',
  },
  {
    date: '2023-10-17T13:00:00',
    title: 'How to build an authentication system with NextJS',
    company: 'Prosper @ <a href="https://www.novu.co/" target="_blank">Novu</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157929070219239434',
  },
  {
    date: '2023-10-18T13:00:00',
    title: 'How to monetize your open-source contributions',
    company: 'Rodrigo @ <a href="https://www.novu.co/" target="_blank">Quine</a>',
    rsvp: 'https://discord.gg/XeSYxdGYa3?event=1161626304920174694',
  },
  {
    date: '2023-10-19T13:00:00',
    title: 'How to build a Chat app with Websockets',
    company: 'Nevo @ <a href="https://www.novu.co/" target="_blank">Novu</a>',
    rsvp: 'https://discord.gg/th5SqQE4?event=1157930048616153119',
  },
  {
    date: '2023-10-19T15:00:00',
    title: 'Gamifying OSS contributions',
    company: 'Johannes @ <a href="https://www.novu.co/" target="_blank">Formbricks</a>',
    rsvp: 'https://discord.gg/AmhdJ89bqy?event=1161625921250394112',
  },
  {
    date: '2023-10-23T13:00:00',
    title: 'Outsmarting AI: The hack for generating working full-stack apps',
    company: 'Wasp @ <a href="https://wasp-lang.dev/" target="_blank">Wasp</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157930699928633426',
  },
  {
    date: '2023-10-26T13:00:00',
    title: "Mastering OpenAI's API: Building a Meme Generator",
    company: 'Wasp @ <a href="https://wasp-lang.dev/" target="_blank">Wasp</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157930924705583144',
  },
  {
    date: '2023-10-30T13:00:00',
    title: 'How to build a community for your open source project',
    company: 'Jonathan @ <a href="https://www.crowd.dev/" target="_blank">Crowd</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157930272998830170',
  },
  {
    date: '2023-10-31T13:00:00',
    title: 'How to land a job in tech by contributing to open-source',
    company: 'Jonathan @ <a href="https://www.crowd.dev/" target="_blank">Crowd</a>',
    rsvp: 'https://discord.gg/96Ud4bSKA8?event=1157930468017197115',
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
      {/* <div className="md:scrollbar-hidden mx-auto max-w-[1220px] md:max-w-none md:overflow-x-auto"> */}
      {/*   <div className="container"> */}
      {/*     <div className="grid grid-cols-[230px_575px_200px_1fr] gap-x-5 border-b border-white border-opacity-20 pb-4 lg:grid-cols-[130px_390px_200px_1fr] md:grid-cols-[1fr_1fr_1fr_1fr]"> */}
      {/*       {eventsHeader.map((event, index) => ( */}
      {/*         <span className="font-medium uppercase" key={index}> */}
      {/*           {event} */}
      {/*         </span> */}
      {/*       ))} */}
      {/*     </div> */}

      {/*     <span className="coming-soon-animation block border-b border-white border-opacity-20 py-4 text-center"> */}
      {/*       Coming soon <span>.</span> */}
      {/*       <span>.</span> */}
      {/*       <span>.</span> */}
      {/*     </span> */}
      {/*   </div> */}
      {/* </div> */}

      {/* TODO: Display this block after events are published */}
      <div className="md:scrollbar-hidden mx-auto max-w-[1220px] md:max-w-none md:overflow-x-auto">
        <div className="md:min-w-[1080px] sm:px-4">
          <div className={clsx('border-b border-white border-opacity-20 pb-4', tableGridClass)}>
            {eventsHeader.map((event, index) => (
              <span className="font-medium uppercase" key={index}>
                {event}
              </span>
            ))}
          </div>

          <ul>
            {events.map(({ date, title, company, startDate, endDate, rsvp }, index) => (
              <li
                className={clsx(
                  'border-b border-white border-opacity-20 py-4',
                  tableGridClass,
                  moment().isAfter(moment.utc(date)) && 'pointer-events-none opacity-40'
                )}
                key={index}
              >
                <DateComponent date={date} />
                <p className="max-w-md font-medium">
                  <span className="mr-2">{title}</span>
                  <a className="hover:before-opacity-70 relative inline-flex max-w-full items-center justify-center gap-4 rounded-sm bg-yellow p-1 text-xs leading-none text-black transition-colors duration-200 before:absolute before:top-1/2 before:-z-10 before:w-full before:-translate-y-1/2 before:rounded before:bg-cta-hover-blur before:opacity-0 before:blur-xl before:transition-opacity before:duration-200 hover:bg-[#FFF263] hover:before:opacity-70">
                    3 Swag Giveaways
                  </a>
                </p>
                <p className="text-with-link" dangerouslySetInnerHTML={{ __html: company }} />
                <span>
                  <a
                    href={rsvp}
                    target="_blank"
                    className="hover:before-opacity-70 relative inline-flex h-11 max-w-full items-center justify-center gap-4 rounded-sm bg-yellow px-5 text-sm font-bold leading-none text-black transition-colors duration-200 before:absolute before:top-1/2 before:-z-10 before:h-[48px] before:w-full before:-translate-y-1/2 before:rounded before:bg-cta-hover-blur before:opacity-0 before:blur-xl before:transition-opacity before:duration-200 hover:bg-[#FFF263] hover:before:opacity-70 md:px-6 md:text-16 sm:text-14 xs:h-9 xs:px-3"
                    rel="noreferrer"
                  >
                    DISCORD RSVP!
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="container text-center">
      <SignUpButton
        className="mt-16"
        size="md"
        theme="fill-yellow"
        to={isAuthorized ? '/myteam' : null}
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
