import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function GET() {
  const { user } = await findUserAndTeam();

  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

  const userArticles = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      votes: true,
    },
  });

  const list = articles.map((article) => ({
    ...article,
    voted: !!userArticles?.votes?.find((v) => v.articleId === article.id),
  }));

  return NextResponse.json({
    list,
  });
}
