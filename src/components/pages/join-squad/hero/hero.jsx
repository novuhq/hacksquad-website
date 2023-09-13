import React from 'react';

import Button from 'components/shared/button';

const TITLE = 'Join an existing squad';
const DESCRIPTION = (
  <>
    If you know which squad you want to join to,
    <br />
    please ask one of the squad members to send you an invite link
    <br />
    If you want the system to auto-assign you to a team,
    <br />
    Go back and click "Auto assign me"
  </>
);

const Hero = () => (
  <section className="safe-paddings relative h-screen min-h-[600px]">
    <div className="container relative z-10 flex h-full flex-col items-center justify-center">
      <h1 className="font-mono leading-tight text-60 font-bold uppercase lg:text-[50px] md:text-[40px] xs:text-[32px]">
        {TITLE}
      </h1>
      <p className="text-lg sm:text-base mt-10 text-center sm:mt-6">{DESCRIPTION}</p>

      <Button className="mt-10" theme="fill-white" size="md" to="/my-team">
        Go back
      </Button>
    </div>
  </section>
);

export default Hero;
