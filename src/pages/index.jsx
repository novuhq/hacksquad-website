import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import Swag from 'components/pages/home/swag';
import LayoutMain from 'layouts/layouts/layout-main';
import Connect from 'components/shared/connect';

const Home = () => (
  <LayoutMain>
    <Hero />
    <Events />
    <Swag />
    <QuestionAndAnswer />
    <Connect />
  </LayoutMain>
);

export default Home;
