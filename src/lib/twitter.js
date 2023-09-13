import { stringify } from 'querystring';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../prisma/client';

export default async function twitter(query) {
  console.log(!query.code);
  const { user, twitter, devto } = await findUserAndTeam();

  if (!user?.id || !query.code) {
    return { props: { twitter, devto } };
  }

  const data = await (
    await fetch(`https://api.twitter.com/2/oauth2/token`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(process.env.TWITTER_AUTH).toString('base64')}`,
      },
      method: 'POST',
      body: stringify({
        code: query.code,
        client_id: process.env.NEXT_PUBLIC_TWITTER_CLIENT,
        redirect_uri: `${process.env.HOST}/bonuses`,
        grant_type: 'authorization_code',
        code_verifier: 'challenge',
      }),
    })
  ).json();

  const {
    data: { id },
  } = await (
    await fetch(`https://api.twitter.com/2/users/me`, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
      method: 'GET',
    })
  ).json();

  await (
    await fetch(`https://api.twitter.com/2/users/${id}/following`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.access_token}`,
      },
      method: 'POST',
      body: JSON.stringify({
        target_user_id: '1566378141223817217',
      }),
    })
  ).json();

  await prisma.social.create({
    data: {
      userId: user.id,
      type: 'TWITTER',
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
    },
  });

  return {
    redirect: {
      permanent: false,
      destination: '/bonuses',
    },
  };
}
