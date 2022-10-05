import PropTypes from 'prop-types';

import LayoutMain from 'layouts/layouts/layout-main';

import Hero from '../components/pages/bonuses/hero';

import twitter from '~/helpers/twitter';

const Home = ({ twitter }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    absolute={false}
    withoutFooter
  >
    <Hero twitter={twitter} />
  </LayoutMain>
);

Home.propTypes = {
  twitter: PropTypes.bool,
};

export async function getServerSideProps(context) {
  return twitter(context.req, context.res, context.query);
}

export default Home;
