import clsx from 'clsx';

import SignUpButton from 'components/shared/sign-up-button';

const title = 'Welcome to <br/> Hacksquad 2023';

const eventsHeader = ['Date', 'Event', 'Company', 'RSVP'];
const events = [
  {
    date: 'Oct 12, 2023 <br/> 9:00 AM',
    title: 'Get started with open-source contributions with ToolJet',
    company: 'Teja <a href="https://link.com" target="_blank">@ToolJet</a>',
    rsvp: '',
  },
  {
    date: 'Oct 15, 2023 <br/> 5:00 PM',
    title: 'Building a Discord bot in Rust, Javascript and Python',
    company: 'Community Event',
    rsvp: '',
  },
  {
    date: 'Oct 19, 2023 <br/> 3:00 PM',
    title: 'Extending and embedding open-source projects',
    company: 'Raz <a href="https://link.com" target="_blank">@Permit.io</a>',
    rsvp: '',
  },
  {
    date: 'Oct 19, 2023 <br/> 9:00 PM',
    title: 'Contributing to a GitHub repository',
    company: 'Michael <a href="https://link.com" target="_blank">@Amplication</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 12:00 PM',
    title: 'How to add a real-time notification center to your React app with Novu and Next.js',
    company: 'Dima <a href="https://link.com" target="_blank">@Novu</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 3:00 PM',
    title: 'Building a Notion like system with Nest.js, React and Novu',
    company: 'Nevo <a href="https://link.com" target="_blank">@Novu</a>',
    rsvp: '',
  },
  {
    date: 'Oct 26, 2023 <br/> 9:00 PM',
    title: 'How to build on Ethereum using Scaffold-ETH',
    company: 'Kevin <a href="https://link.com" target="_blank">@Scaffold-ETH</a>',
    rsvp: '',
  },
];

const tableGridClass =
  'grid gap-x-5 grid-cols-[230px_575px_200px_1fr] lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr]';

const Events = () => (
  <section className="safe-paddings relative py-14 md:py-20 sm:py-16 xs:py-12" id="events">
    <div className="container">
      <h2
        className="max-w-3xl bg-white bg-gradient-title bg-clip-text pb-5 font-titles text-60 font-semibold leading-1.125 text-transparent lg:text-42 md:text-36 xs:max-w-[246px]"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="flex items-end justify-between lg:gap-x-20 sm:flex-col sm:items-start sm:gap-y-10">
        <p className="max-w-3xl text-20 leading-normal text-grey-1 md:text-18">
          With the fantastic atmosphere of Hacktoberfest, we have decided to create Hacksquad.
          Hacksquad is here to enhance your Swag, meet with more community members and participate
          in workshops from our great sponsors.
        </p>
        <SignUpButton className="mb-2 shrink-0" size="md" />
      </div>
    </div>

    <div className="container mt-[70px] md:mt-16 md:px-0 sm:mt-10">
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
            {events.map((event, index) => (
              <li
                className={clsx('border-b border-white border-opacity-20 py-4', tableGridClass)}
                key={index}
              >
                <span className="text-grey-1" dangerouslySetInnerHTML={{ __html: event.date }} />
                <p className="max-w-md font-medium">{event.title}</p>
                <p className="text-with-link" dangerouslySetInnerHTML={{ __html: event.company }} />
                <span>
                  <button className="" data-event={event.rsvp}>
                    Add to calendar
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
