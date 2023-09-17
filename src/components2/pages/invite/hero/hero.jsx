'use client';

import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from 'components/shared/button';
import BUTTON_STATES from 'constants/button-states';

const Hero = ({ id }) => {
  const [buttonState, setButtonState] = useState(BUTTON_STATES.DEFAULT);
  const router = useRouter();

  const handleAccept = async () => {
    setButtonState(BUTTON_STATES.LOADING);

    await fetch(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/api/invite`, {
      method: 'POST',
      body: JSON.stringify({ id }),
    });

    router.push('/my-team');
  };

  return (
    <section className="safe-paddings pt-40">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="leading-tight text-center font-titles text-60 font-bold lg:text-[50px] md:text-[40px] xs:text-[32px]">
          Become a Part of Hacksquad 2023! 🚀
        </h1>
        <p className="sm:text-base mt-5 max-w-[800px] text-center text-20">
          You've been invited to join an exhilarating journey of code contribution, community
          collaboration, and skill enhancement. Dive into workshops, connect with fellow community
          members, and stand a chance to win exclusive SWAG!
        </p>
        <Button
          className="mt-10"
          size="md"
          theme="fill-yellow"
          state={buttonState}
          onClick={handleAccept}
        >
          Accept Invitation
        </Button>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Hero;
