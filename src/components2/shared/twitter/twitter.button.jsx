import { stringify } from 'querystring';

import React from 'react';

import Button from '../button';

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
  <Button className="w-full" to={query} size="md" theme="fill-white" rel="noreferrer">
    Connect
  </Button>
);

export default TwitterButton;
