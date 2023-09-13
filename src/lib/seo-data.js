export const SEO_DATA = {
  INDEX: {
    title: 'HackSquad 2023 🚀',
    description: 'Contribute code, meet community members, participate in workshops, and win SWAG!',
    pathname: '',
  },
  LEADERBOARD: {
    title: 'HackSquad 2023 Leaderboard',
    description: 'Contribute code, meet community members, participate in workshops, and win SWAG!',
    pathname: '',
  },
  TICKET({ name, login: githubHandle }) {
    const userName = name || githubHandle;

    return {
      title: `${userName}'s ticket for HackSquad 2023 🚀`,
      description: `Join ${userName} virtually at HackSquad 2023`,
    };
  },
};
