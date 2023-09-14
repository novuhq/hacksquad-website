'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import SignUpButton from 'components/shared/sign-up-button';

import heroImage from './images/home-hero.png';
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
        to={isAuthorized ? '/my-team' : null}
        isSignInButton={!isAuthorized}
      >
        {!isAuthorized ? 'Sign up with GitHub' : 'Go to my Squad'}
      </SignUpButton>
      <Sponsors />
    </div>

    <div className="absolute left-0 top-0 h-full max-h-[761px] w-full overflow-hidden lg:max-h-[650px] md:max-h-[560px] sm:max-h-[480px] xs:max-h-[310px]">
      <div
        className="absolute left-1/2 right-0 top-0 ml-[9.2%] h-full w-full min-w-[1920px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(67.28% 67.28% at 64.06% 32.72%, rgba(0, 0, 0, 0.00) 45.68%, #000 100%), radial-gradient(65.76% 65.76% at 65.76% 50%, #3A1F47 0%, #0F1624 77.01%)',
        }}
      />
      <Image
        className="absolute bottom-0 left-1/2 ml-[9.2%] max-w-[1568px] -translate-x-1/2 object-cover lg:max-w-[1288px] md:max-w-[1130px] sm:ml-0 sm:max-w-[990px] xs:-ml-2.5 xs:max-w-[570px]"
        src={heroImage}
        sizes="100vw"
        alt=""
        priority
      />

      <div
        className="absolute right-0 top-0 h-full w-full"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 82.18%, rgba(0, 0, 0, 0.41) 92.88%, #000 100%);',
        }}
      />
    </div>
  </section>
);

Hero.propTypes = {
  isAuthorized: PropTypes.bool,
};

export default Hero;
