import { redirect } from 'next/navigation';

import Hero from 'components/pages/claim/hero';
import JoinUs from 'components/shared/join-us';

const getWinners = async () => {
  const { winners } = await (
    await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/team`)
  ).json();

  return winners;
};

async function Winner() {
  const winners = await getWinners();

  if (winners?.length === 0 || !winners) {
    redirect('/my-team');
  }

  return (
    <>
      <Hero info={winners} />
      <JoinUs />
    </>
  );
}

export default Winner;
