import PropTypes from 'prop-types';

import Hero from 'components/pages/team/hero';
import LayoutMain from 'layouts/layouts/layout-main';

const Myteam = ({ info }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <Hero info={info} />
  </LayoutMain>
);

Myteam.propTypes = {
  info: PropTypes.object,
};

export async function getServerSideProps(context) {
  const info = await (
    await fetch(`${process.env.HOST}/api/team`, {
      ...context.req,
    })
  ).json();

  return {
    props: {
      info,
    },
  };
}

export default Myteam;
