/* eslint-disable no-unused-vars */
import Hero from 'components/pages/leaderboard/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const getTeams = async () =>
  fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/leaderboard`, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

const LeaderboardPage = async () => {
  const teamsList = await getTeams();

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
