import Hero from 'components/pages/claim-success/hero';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const ThankYou = () => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <Hero />
    <Topfab />
  </LayoutMain>
);

export default ThankYou;
