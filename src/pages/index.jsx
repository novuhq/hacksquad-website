import Events from 'components/pages/home/events';
import Hero from 'components/pages/home/hero';
import Swag from 'components/pages/home/swag';
import LayoutMain from 'layouts/layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <Hero />
    <Events />
    <Swag />
  </LayoutMain>
);

export default Home;
