import { redirect } from 'next/navigation';

import Hero from 'components/pages/teams/hero';

const getTeamData = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/team?id=${id}`);
  const { team } = await res.json();

  return team;
};

async function Team({ params }) {
  const team = await getTeamData(params.id);

  if (!team?.id) {
    return redirect('/leaderboard');
  }

  return <Hero team={team} />;
}

export default Team;
