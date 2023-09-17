import { useRouter } from 'next/router';

import Hero from 'components/pages/logs/hero';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const Logs = () => {
  const router = useRouter();
  if (!router.isReady) return <></>;

  return (
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
};

export default Logs;
