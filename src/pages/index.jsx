import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import QuestionAndAnswer from 'components/pages/home/question-and-answer';
import Swag from 'components/pages/home/swag';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <Hero />
    <Events />
    <Swag />
    <QuestionAndAnswer />
    <Topfab />
  </LayoutMain>
);

export default Home;
