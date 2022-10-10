import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

import JoinSquad from '../components/pages/joinsquad/hero';

const ThankYou = () => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <JoinSquad />
    <Topfab />
  </LayoutMain>
);

export default ThankYou;
