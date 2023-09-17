import PropTypes from 'prop-types';

import Hero from 'components/pages/teams/hero';
import LayoutMain from 'layouts/layouts/layout-main';

const Team = ({ team }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    absolute={false}
    overflow
    withoutFooter
  >
    <Hero team={team} />
  </LayoutMain>
);

export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.HOST}/api/team?id=${context.params.id}`);
  const { team } = await res.json();

  if (!team?.id) {
    return {
      redirect: {
        permanent: false,
        destination: '/leaderboard',
      },
    };
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      team,
    },
  };
}

Team.propTypes = {
  team: PropTypes.object,
};

export default Team;
