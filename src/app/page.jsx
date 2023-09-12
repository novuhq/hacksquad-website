import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const Home = () => <div />;

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
