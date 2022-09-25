import LINKS from 'constants/links.js';

const MENUS = {
  header: [
    {
      text: 'Leaderboard',
      ...LINKS.leaderboard,
    },
    {
      text: 'Sponsors',
      ...LINKS.sponsors,
    },
    {
      text: 'Events',
      ...LINKS.events,
    },
    {
      text: 'Swag',
      ...LINKS.swag,
    },
    {
      text: 'Q&A',
      ...LINKS.qa,
    },
  ],

  mobile: [
    {
      text: 'Sponsors',
      ...LINKS.sponsors,
    },
    {
      text: 'Events',
      ...LINKS.events,
    },
    {
      text: 'Swag',
      ...LINKS.swag,
    },
    {
      text: 'Q&A',
      ...LINKS.qa,
    },
  ],
};

export default MENUS;
