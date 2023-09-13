import { redirect } from 'next/navigation';

import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function MyTeam() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return <>My team</>;
}

export default MyTeam;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
