import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const body = await request.json();

  const { user } = await findUserAndTeam();

  if (!body?.url || !body?.status || !(user?.moderator || user?.cleaner)) {
    return NextResponse.json({ success: false, message: 'Invalid request' });
  }

  await prisma.repositories.update({
    where: {
      url: body.url,
    },
    data: {
      status: body.status,
    },
  });

  return NextResponse.json({
    status: body.status,
  });
}
