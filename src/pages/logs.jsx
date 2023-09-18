import Hero from 'components/pages/logs/hero';
import Topfab from 'components/shared/FAB/topfab';
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
      <Topfab />
    </LayoutMain>
  );

export default Logs;
