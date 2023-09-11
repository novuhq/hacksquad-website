import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

const Home = () => (
  <>
    <Hero />
    <Events />
    <QuestionAndAnswer />
  </>
);

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
