'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import SignUpButton from 'components/shared/sign-up-button';

import heroImage from './images/home-hero.jpg';
import Sponsors from './sponsors';

const Hero = ({ isAuthorized = false }) => (
  <section className="safe-paddings overflow-hidden">
    <div className="container relative z-20 mt-[310px] sm:text-center">
      <h1 className="max-w-2xl bg-white bg-home-hero-title bg-clip-text pb-6 font-titles text-114 font-semibold leading-none text-transparent lg:text-92 md:text-60 xxs:max-w-[246px] xxs:text-42">
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
        to={isAuthorized ? '/my-team' : null}
        isSignInButton={!isAuthorized}
      >
        {!isAuthorized ? 'Sign up with GitHub' : 'Go to my Squad'}
      </SignUpButton>
      <Sponsors />
    </div>
    <Image
      className="absolute top-0 z-10 h-[760px] w-screen object-cover md:h-[660px] sm:h-[450px]"
      src={heroImage}
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
