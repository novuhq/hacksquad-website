import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import TwitterTimeline from 'components/pages/home/twitter-timeline';
import DynamicTicket from 'components/pages/ticket/dynamic-ticket';
import { auth } from 'lib/auth';
import findUser from 'lib/find-user';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function HomePage() {
  let userData = {
    ticketId: '0000000001',
    name: 'Your Name',
    handle: 'GitHub',
    colorSchema: '1',
  };
  const session = await auth();

  if (session && session.user) {
    const user = await findUser(session.user.userId);

    userData = {
      ...session.user,
      ticketId: user.ticketId,
      handle: session.user.githubHandle,
    };
  }

  return (
    <>
      <Hero isAuthorized={!!session} />
      <Events isAuthorized={!!session} />
      <TwitterTimeline />
      <DynamicTicket
        isAuthorized={!!session}
        isDefault={!session}
        user={userData}
        isOwnPage
        isHomeSection
      />
      <QuestionAndAnswer isAuthorized={!!session} />
    </>
  );
}

export default HomePage;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}