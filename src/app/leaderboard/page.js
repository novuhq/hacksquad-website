/* eslint-disable no-unused-vars */
import Hero from 'components/pages/leaderboard/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';
import getTeams from 'utils/get-teams';

const LeaderboardPage = async () => {
  const teamsList = []; // await getTeams();

  return (
    <>
      <Hero teams={teamsList} />
      <JoinUs />
    </>
  );
};

export async function generateMetadata() {
  return getMetadata(SEO_DATA.LEADERBOARD);
}

export default LeaderboardPage;
