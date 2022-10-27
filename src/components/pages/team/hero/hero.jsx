import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React from 'react';

import Socials from 'components/shared/socials';

import NoLogged from './no-logged';
import NoTeam from './no.team';
import Team from './team';

const title = '>>My Squad';

const Hero = ({ info }) => {
  const { status } = useSession();
  if (status === 'loading') {
    return <></>;
  }
  if (status !== 'authenticated') {
    return <NoLogged />;
  }

  return (
    <section className="safe-paddings relative min-h-[600px]">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
          {title}
        </h1>
        {!info.team ? <NoTeam /> : <Team info={info} />}
        <Socials className="mt-20 mb-10" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  info: PropTypes.object,
};

export default Hero;
