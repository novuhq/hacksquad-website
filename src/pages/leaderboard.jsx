import PropTypes from 'prop-types';

import Hero from 'components/pages/leaderboard/hero';
import Topfab from 'components/shared/FAB/topfab';
import LayoutMain from 'layouts/layouts/layout-main';

const Leaderboard = ({ teams }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    absolute={false}
    isFooterBordered
  >
    <Hero teams={teams} />
    <Topfab />
  </LayoutMain>
);

Leaderboard.propTypes = {
  teams: PropTypes.array,
};

Leaderboard.defaultProps = {
  teams: [],
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/leaderboard`);
  const { teams } = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      teams,
    },
  };
}

export default Leaderboard;
