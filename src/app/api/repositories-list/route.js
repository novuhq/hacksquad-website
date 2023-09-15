import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  const { user } = await findUserAndTeam();

  if (!page || !(user?.moderator || user?.cleaner)) {
    return NextResponse.json({ success: false, message: 'Invalid request' });
  }

  const repositories = await prisma.repositories.findMany({
    skip: (page - 1) * 10,
    take: 10,
    orderBy: {
      status: 'asc',
    },
  });

  return NextResponse.json({ repositories });
}
