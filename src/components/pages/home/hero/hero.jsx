import Image from 'next/image';

import SignUpButton from 'components/shared/sign-up-button';

import heroImage from './images/home-hero.jpg';
import Sponsors from './sponsors';

const Hero = () => (
  <section className="safe-paddings overflow-hidden">
    {/*  pb-28 pt-72 sm:py-20  */}
    <div className="container relative z-20 mt-[310px] sm:text-center">
      <h1 className="max-w-2xl bg-white bg-home-hero-title bg-clip-text pb-6 font-titles text-114 font-semibold leading-none text-transparent lg:text-92 md:text-60 xxs:max-w-[246px] xxs:text-42">
        <span className="block text-80 leading-[60px]">2023</span>
        Hacksquad
      </h1>
      <p className="max-w-lg text-20 leading-normal md:text-18 sm:mx-auto">
        Contribute code, meet community members, participate in workshops, and win more SWAG.
      </p>
      <SignUpButton className="mt-8" size="md">
        Sign up with GitHub
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

export default Hero;
