import Hero from 'components/pages/repositories/hero';
import Topfab from 'components/shared/FAB/topfab';
import JoinUs from 'components/shared/join-us';
import LayoutMain from 'layouts/layouts/layout-main';

const Repositories = () => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    absolute={false}
    isFooterBordered
  >
    <Hero />
    <JoinUs />
    <Topfab />
  </LayoutMain>
);

export default Repositories;
