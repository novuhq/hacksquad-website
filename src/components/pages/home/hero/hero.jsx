'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import SignUpButton from 'components/shared/sign-up-button';

import heroImage from './images/home-hero.jpg';
import Sponsors from './sponsors';

const Hero = ({ isAuthorized = false }) => (
  <section className="hero safe-paddings relative overflow-hidden pb-5 pt-[373px] lg:pt-[260px] md:pt-[230px] sm:pt-[300px] xs:pt-[230px]">
    <div className="container relative z-20 sm:text-center">
      <h1 className="max-w-2xl bg-white bg-home-hero-title bg-clip-text pb-6 font-titles text-114 font-semibold leading-none text-transparent lg:text-92 md:text-60 xxs:text-42">
        <span className="block text-80 leading-[72px]">2023</span>
        Hacksquad
      </h1>
      <p className="max-w-lg text-20 leading-normal md:text-18 sm:mx-auto">
        Contribute code, meet community members, participate in workshops, and win more SWAG.
      </p>

      <SignUpButton
        className="mt-8"
        size="md"
        theme="fill-yellow"
        to={isAuthorized ? '/myteam' : null}
        isSignInButton={!isAuthorized}
      >
        {!isAuthorized ? 'Sign up with GitHub' : 'Go to my Squad'}
      </SignUpButton>
      <Sponsors />
    </div>

    <Image
      className="absolute left-1/2 top-0 ml-[11.4%] min-w-[2359px] -translate-x-1/2 lg:min-w-[1920px] md:min-w-[1780px] sm:ml-0 sm:min-w-[1410px] xs:min-w-[1090px]"
      src={heroImage}
      height={761}
      width={2359}
      quality={99}
      sizes="100vw"
      alt=""
      priority
    />
  </section>
);

Hero.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Hero;
