import { redirect } from 'next/navigation';

import Hero from 'components/pages/join-squad/hero';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function JoinSquad() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return <Hero />;
}

export default JoinSquad;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
