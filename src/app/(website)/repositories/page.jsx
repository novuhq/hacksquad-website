import { redirect } from 'next/navigation';

import Hero from 'components/pages/repositories/hero';
import JoinUs from 'components/shared/join-us';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function Repositories() {
  const session = await auth();

  if (!session?.user) {
    redirect('/sign-in');
  }

  return (
    <>
      <Hero />
      <JoinUs />
    </>
  );
}

export default Repositories;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
