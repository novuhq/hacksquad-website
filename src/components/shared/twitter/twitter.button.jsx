import { stringify } from 'querystring';

import React from 'react';

const query = `https://twitter.com/i/oauth2/authorize?${stringify({
  response_type: 'code',
  client_id: process.env.NEXT_PUBLIC_TWITTER_CLIENT,
  redirect_uri: `${process.env.HOST}/bonuses`,
  scope: 'tweet.read tweet.write users.read follows.write like.write offline.access',
  state: 'twitter',
  code_challenge: 'challenge',
  code_challenge_method: 'plain',
})}`;

const TwitterButton = () => (
  <a
    href={query}
    className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none"
    rel="noreferrer"
  >
    <svg
        className="cta-btn-animation-border xs:w-full"
        width="200"
        height="59"
        viewBox="0 0 268 59"
        fill="none"
      >
        <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
        <span className="text-lg sm:text-[18px]">Connect</span>
      </div>
  </a>
);

export default TwitterButton;
