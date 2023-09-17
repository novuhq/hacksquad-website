import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Thank you!';
const DESCRIPTION = (
  <>
    Awesome! We will send you the swag as soon as possible.
    <br />
    If you have made any mistake, please contact <a href="mailto:nevo@novu.co">nevo@novu.co</a>
  </>
);

const Hero = () => (
  <section className="safe-paddings relative pt-40">
    <div className="container flex h-full flex-col items-center justify-center">
      <h1 className="leading-tight font-titles text-60 font-bold uppercase lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {TITLE}
      </h1>
      <p className="sm:text-base text-with-link mt-5 text-center text-20">{DESCRIPTION}</p>
      <Button className="mt-10" to="/my-team" size="md" theme="fill-white">
        Go to your team
      </Button>
    </div>
  </section>
);

export default Hero;
