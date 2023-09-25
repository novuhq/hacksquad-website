import Hero from 'components/pages/claim-success/hero';
import Topfab from 'components/shared/FAB/topfab';
import JoinUs from 'components/shared/join-us';
import LayoutMain from 'layouts/layouts/layout-main';

const ThankYou = () => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <Hero />
    <JoinUs />
    <Topfab />
  </LayoutMain>
);

export default ThankYou;
