import Hero from 'components/pages/logs/hero';
import Topfab from 'components/shared/FAB/topfab';
import JoinUs from 'components/shared/join-us';
import LayoutMain from 'layouts/layouts/layout-main';

const Logs = () => (
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

export default Logs;
