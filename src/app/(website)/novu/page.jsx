import { redirect } from 'next/navigation';

import Hero from 'components/pages/claim/hero';
import JoinUs from 'components/shared/join-us';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const getWinners = async () => {
  const { winners } = await (
    await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/team`)
  ).json();

  return winners;
};

async function Novu() {
  const session = await auth();

  if (!session?.user) {
    redirect('/sign-in');
  }

  const winners = await getWinners();

  return (
    <>
      <Hero info={winners} />
      <JoinUs />
    </>
  );
}

export default Novu;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
