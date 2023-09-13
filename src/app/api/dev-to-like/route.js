import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const { user } = await findUserAndTeam();
  const body = await request.json();

  if (!body?.token) {
    return NextResponse.json({
      finish: false,
    });
  }

  try {
    const data = await (
      await fetch('https://dev.to/api/users/me', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': body?.token,
        },
        method: 'GET',
      })
    ).json();

    if (data?.error) {
      return NextResponse.json({
        finish: false,
      });
    }

    await prisma.social.create({
      data: {
        type: 'DEVTO',
        userId: user.id,
        accessToken: body?.token,
        refreshToken: '',
      },
    });
  } catch (err) {
    return NextResponse.json({
      finish: false,
    });
  }

  return NextResponse.json({
    finish: true,
  });
}
