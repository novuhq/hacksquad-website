import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import Swag from 'components/pages/home/swag';
import LayoutMain from 'layouts/layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <Hero />
    <Events />
    <Swag />
    <QuestionAndAnswer />
  </LayoutMain>
);

export default Home;
