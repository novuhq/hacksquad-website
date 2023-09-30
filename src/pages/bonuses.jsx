import PropTypes from 'prop-types';

import Hero from 'components/pages/bonuses/hero';
import JoinUs from 'components/shared/join-us';
import LayoutMain from 'layouts/layouts/layout-main';

import twitter from '~/helpers/twitter';

const Home = ({ twitter, devto, findStars }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    absolute={false}
    withoutFooter
  >
    <Hero twitter={twitter} devto={devto} findStars={findStars} />
    <JoinUs />
  </LayoutMain>
);

Home.propTypes = {
  twitter: PropTypes.bool,
  devto: PropTypes.bool,
  findStars: PropTypes.array,
};

export async function getServerSideProps(context) {
  return twitter(context.req, context.res, context.query);
}

export default Home;
