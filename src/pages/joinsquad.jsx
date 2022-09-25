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
  </LayoutMain>
);

export default ThankYou;
