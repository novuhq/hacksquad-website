import Hero from 'components/pages/logs/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function Logs({ searchParams }) {
  return (
    <>
      <Hero searchParams={searchParams} />
      <JoinUs />
    </>
  );
}

export default Logs;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
