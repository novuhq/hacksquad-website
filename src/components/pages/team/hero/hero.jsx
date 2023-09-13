'use client';

import { useEffect, useState } from 'react';

import Team from './team';
import WithoutTeam from './without-team';

const TITLE = 'My Squad';

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`/api/team`, {
          credentials: 'include',
        })
      ).json();
      setInfo(data);

      setLoading(false);
    })();
  }, []);

  return (
    <section className="safe-paddings relative min-h-[600px] pt-[92px]">
      <div className="container">
        <h1 className="leading-tight text-center font-titles text-60 font-bold lg:text-[50px] md:text-[40px] xs:text-[32px]">
          {TITLE}
        </h1>
        {loading && (
          <span className="coming-soon-animation block py-4 text-center">
            Loading <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        )}

        {!loading && !info?.team && <WithoutTeam />}
        {!loading && info?.team && <Team info={info} />}
      </div>
    </section>
  );
};

export default Hero;
