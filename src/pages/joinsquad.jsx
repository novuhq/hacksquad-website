import JoinSquad from 'components/pages/joinsquad/hero';
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
    <JoinSquad />
    <JoinUs />
    <Topfab />
  </LayoutMain>
);

export default ThankYou;
