import Hero from 'components/pages/claim-success/hero';
import JoinUs from 'components/shared/join-us';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function ClaimSuccess() {
  return (
    <>
      <Hero />
      <JoinUs />
    </>
  );
}

export default ClaimSuccess;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
