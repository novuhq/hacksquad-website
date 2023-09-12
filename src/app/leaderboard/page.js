import Hero from 'components/pages/leaderboard/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';
// import getTeams from 'utils/get-teams';

const testTeams = [
  {
    name: 'Test',
    score: '0',
  },
  {
    name: 'sebastiandres',
    score: '0',
  },
  {
    name: 'Bir Gorkhali',
    score: '0',
  },
  {
    name: 'The Harem',
    score: '0',
  },
];

const LeaderboardPage = async () => (
  // const teamsList = await getTeams();

  <>
    <Hero teams={testTeams} />
    <JoinUs />
  </>
);
export async function generateMetadata() {
  return getMetadata(SEO_DATA.LEADERBOARD);
}

export default LeaderboardPage;
