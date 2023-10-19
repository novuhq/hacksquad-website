import Link from 'next/link';
import React from 'react';

const Banner = () => (
  <Link
    className="bg-gray-3 group relative z-20 block overflow-hidden"
    target="_blank"
    href="/bonuses"
    rel="noreferrer"
  >
    <div
      className="relative flex cursor-pointer items-center justify-center"
      style={{
        height: 50,
        background:
          'linear-gradient(90deg, hsla(318, 99%, 64%, 1) 0%, hsla(20, 100%, 60%, 1) 100%)',
      }}
    >
      <div className="container text-center font-bold drop-shadow-lg">
        ⭐️ Novu is live on Product Hunt 🎉 Check our bonuses page ⭐️
      </div>
    </div>
  </Link>
);

export default Banner;
