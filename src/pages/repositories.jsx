import Hero from 'components/pages/repositories/hero';
import Topfab from 'components/shared/FAB/topfab';
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
    <Topfab />
  </LayoutMain>
);

export default Repositories;
