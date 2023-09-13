import { redirect } from 'next/navigation';

import Hero from 'components/pages/bonuses/hero';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';
import twitter from 'lib/twitter';

async function getData(searchParams) {
  return twitter(searchParams);
}

async function Bonuses({ searchParams }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const { twitter, devto } = await getData(searchParams);

  return <Hero twitter={twitter} devto={devto} />;
}

export default Bonuses;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
