import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import TwitterTimeline from 'components/pages/home/twitter-timeline';
import { auth } from 'lib/auth';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function Home() {
  const session = await auth();

  return (
    <>
      <Hero isAuthorized={!!session} />
      <Events isAuthorized={!!session} />
      <TwitterTimeline />
      <QuestionAndAnswer />
    </>
  );
}

export default Home;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
