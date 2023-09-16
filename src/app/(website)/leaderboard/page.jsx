/* eslint-disable no-unused-vars */
import Hero from 'components/pages/leaderboard/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const LeaderboardPage = () => (
  <>
    <Hero />
    <JoinUs />
  </>
);

export async function generateMetadata() {
  return getMetadata(SEO_DATA.LEADERBOARD);
}

export default LeaderboardPage;

export const revalidate = 60;
