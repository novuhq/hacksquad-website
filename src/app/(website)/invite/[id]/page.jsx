import { redirect } from 'next/navigation';

import Hero from 'components/pages/invite/hero';
import JoinUs from 'components/shared/join-us';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function Invite({ params }) {
  const session = await auth();

  if (!session?.user) {
    return redirect('/sign-in');
  }

  return (
    <>
      <Hero id={params.id} />
      <JoinUs />
    </>
  );
}

export default Invite;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
