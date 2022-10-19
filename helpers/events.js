import moment from 'moment';

export const eventsList = () => [
  {
    date: moment.utc('2022-10-12T07:00:00'),
    title: 'Get started with open-source contributions with ToolJet',
    company: 'Teja @ ToolJet',
    link: 'https://zoom.us/webinar/register/WN_FC0U3ggyQBel-EvWBtEtgQ',
  },
  {
    date: moment.utc('2022-10-15T15:00:00'),
    title: 'Building a Discord bot in Rust, Javascript and Python',
    company: 'Community Event',
    link: 'https://zoom.us/webinar/register/WN_ny1Ifn0PQW-E5oClswIEJw',
  },
  {
    date: moment.utc('2022-10-19T13:00:00'),
    title: 'Extending and embedding open-source projects',
    company: 'Raz @ Permit.io',
    link: 'https://zoom.us/webinar/register/WN_UKnmeOqUTVSY4zQlTJlLFQ',
  },
  {
    date: moment.utc('2022-10-19T19:00:00'),
    title: 'Contributing to a GitHub repository',
    company: 'Michael @ Amplication',
    link: 'https://zoom.us/webinar/register/WN_Va4469XbSKut4zt48f6uMA',
    iframe: 'https://player.restream.io/?token=f58612ea832948d496a517a9518a336d',
  },
  {
    date: moment.utc('2022-10-26T13:00:00'),
    title: 'Building a Notion like system with Nest.js, React and Novu',
    company: 'Nevo @ Novu',
    link: 'https://zoom.us/webinar/register/WN_-1XAeCeARqesnoaYFuRvGA',
    iframe: 'https://player.restream.io/?token=dfb841d991014913b58e462003306793',
  },
  {
    date: moment.utc('2022-10-26T19:00:00'),
    title: 'How to build on Ethereum using Scaffold-ETH',
    iframe: 'https://player.restream.io/?token=dfb841d991014913b58e462003306793',
    company: 'Kevin @ Scaffold-ETH',
    link: 'https://zoom.us/webinar/register/WN_o2SLdW2uQl29qRMwmTYBqg',
  },
];

export const findClosestLive = () => {
  const events = eventsList();
  return events.find((e) => moment().isAfter(e.date) && e.date.add(1, 'hour').isAfter(moment()));
};

export const toDisplay = () => {
  const events = eventsList();
  const live = findClosestLive();
  if (live) {
    return {
      link: '/live',
      iframe: live.iframe,
      component: (
        <>
          <strong>[LIVE NOW]</strong> <strong>{live.title}</strong> - {live.company}
        </>
      ),
    };
  }

  const before = events.find(
    (e) => e.date.diff(moment(), 'hour') <= 2 && e.date.diff(moment(), 'minutes') > 1
  );
  if (before) {
    return {
      link: before.link,
      component: (
        <>
          <strong>[GOING LIVE - RSVP NOW]</strong> - <strong>{before.title}</strong> -{' '}
          {before.company}
        </>
      ),
    };
  }

  return undefined;
};
