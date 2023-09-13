import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const { user } = await findUserAndTeam();
  const body = await request.json();

  if (!body?.id) {
    return NextResponse.json({
      finish: false,
    });
  }

  const social = await prisma.social.findMany({
    where: {
      userId: user.id,
      type: 'DEVTO',
    },
  });

  const article = await prisma.articles.findUnique({
    where: {
      id: body?.id,
    },
  });

  if (!social.length) {
    return NextResponse.json({
      finish: false,
    });
  }

  try {
    const data = await (
      await fetch(`https://dev.to/api/readinglist`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': social[0].accessToken,
        },
        method: 'GET',
      })
    ).json();

    const findReading = data.find((f) => f?.article?.id === article?.articleId);
    if (findReading.id) {
      await prisma.articlesVotes.create({
        data: {
          userId: user.id,
          articleId: body?.id,
        },
      });
    }
  } catch (err) {
    return NextResponse.json({
      finish: false,
    });
  }

  return NextResponse.json({
    finish: true,
  });
}
