import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';

import NoLogged from './no-logged';
import NoTeam from './no.team';
import Team from './team';

const title = 'My Squad';

const Hero = ({ info }) => {
  const { status } = useSession();
  if (status === 'loading') {
    return <></>;
  }
  if (status !== 'authenticated') {
    return <NoLogged />;
  }

  return (
    <section className="safe-paddings relative">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-titles text-60 font-semibold leading-none md:text-42">{title}</h1>
        {!info.team ? <NoTeam /> : <Team info={info} />}
      </div>
    </section>
  );
};

Hero.propTypes = {
  info: PropTypes.object,
};

export default Hero;
