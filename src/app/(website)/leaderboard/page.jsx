import Hero from 'components/pages/leaderboard/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function getTeams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/leaderboard`);
  const data = await response.json();
  return data;
}

async function LeaderboardPage() {
  const teamsList = await getTeams();

  return (
    <>
      <Hero teams={teamsList} />
      <JoinUs />
    </>
  );
}

export async function generateMetadata() {
  return getMetadata(SEO_DATA.LEADERBOARD);
}

export default LeaderboardPage;

export const revalidate = 60;
