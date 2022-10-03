import React from 'react';

const Banner = () => (
  <a
    className="bg-gray-3 group relative z-20 block overflow-hidden"
    target="_blank"
    href="https://www.producthunt.com/posts/hacksquad-2" rel="noreferrer"
  >
    <div
      className="relative flex cursor-pointer items-center justify-center"
      style={{
        height: 50,
        background:
          'linear-gradient(90deg, hsla(318, 99%, 64%, 1) 0%, hsla(20, 100%, 60%, 1) 100%)',
      }}
    >
      <div className="container drop-shadow-lg">
        We are live on <strong>Product Hunt 🎉</strong> help us out with an upvote
      </div>
    </div>
  </a>
);

export default Banner;
